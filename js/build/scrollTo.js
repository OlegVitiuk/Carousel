"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function scrollTo(params) {
    var element = params.element,
        to = params.to,
        duration = params.duration,
        scrollDirection = params.scrollDirection;


    var start = element[scrollDirection],
        change = to - start,
        increment = 20;

    var animateScroll = function animateScroll(elapsedTime) {
        elapsedTime += increment;
        var position = easeInOut(elapsedTime, start, change, duration);
        element[scrollDirection] = position;
        if (elapsedTime < duration) {
            setTimeout(function () {
                animateScroll(elapsedTime);
            }, increment);
        }
    };

    animateScroll(0);
}

function easeInOut(currentTime, start, change, duration) {
    currentTime /= duration / 2;
    if (currentTime < 1) {
        return change / 2 * currentTime * currentTime + start;
    }
    currentTime -= 1;
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
}

exports.default = scrollTo;