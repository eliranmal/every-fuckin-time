(function (root, factory) {
    if (typeof define === 'function' && define.amd) { // amd
        define(['exports'], function (exports) {
            root.EveryFuckinTime = factory(exports);
        });
    } else if (typeof exports !== 'undefined') { // node js / common js
        factory(exports);
    } else { // global
        root.EveryFuckinTime = factory({});
    }
}(this, function (EveryFuckinTime, $) {

    // SETTINGS, SHARED MEMBERS

    var version = '0.1.0';

    // PRIVATE FUNCTIONS

    var log = function () {
        printer('log').apply(this, arguments);
    };

    var err = function () {
        printer('error').apply(this, arguments);
    };

    var bla = function () {
        printer('debug').apply(this, arguments);
    };

    var printer = function (level) {
        return function () {
            var args;
            if (console && console[level]) {
                args = [].slice.call(arguments);
                args.unshift('[' + getDateTimeString(new Date()) + ']');
                console[level].apply(console, args);
            }
        };
    };

    var padNumber = function (num, desiredDigitsLength) {
        var magnitude = Math.pow(10, desiredDigitsLength) / 10; // order of magnitude, e.g. 1000, 100
        var actualDigitsLength = (num + '').length;
        var zeroPadLeft = num < magnitude ? ('' + magnitude).substring(
            actualDigitsLength) : '';
        return zeroPadLeft + num;
    };

    var getDateTimeString = function (date) {
        return padNumber(date.getHours(), 2) + ":" +
            padNumber(date.getMinutes(), 2) + ":" +
            padNumber(date.getSeconds(), 2) + "," +
            padNumber(date.getMilliseconds(), 3);
    };

    var uuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };


    // PUBLIC API

    EveryFuckinTime.VERSION = version;

    EveryFuckinTime.log = log;
    EveryFuckinTime.err = err;
    EveryFuckinTime.bla = bla;
    EveryFuckinTime.getDateTimeString = getDateTimeString;
    EveryFuckinTime.uuid = uuid;

    return EveryFuckinTime;
}));
