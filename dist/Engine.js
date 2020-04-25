"use strict";
var Engine = /** @class */ (function () {
    function Engine(frame_rate, render, update) {
        var _this = this;
        this.run = function () {
            if (_this.pause == true) {
                _this.now = _this.getTimestamp();
                _this.accumulated_time += (_this.last_time - _this.now_time);
                if (_this.accumulated_time >= _this.frame_rate * 3) {
                    _this.accumulated_time = _this.frame_rate;
                }
                while (_this.accumulated_time >= _this.frame_rate) {
                    _this.accumulated_time -= _this.frame_rate;
                    _this.update();
                    _this.updated = true;
                }
                if (_this.updated) {
                    _this.render();
                    _this.updated = false;
                }
                _this.animator = requestAnimationFrame(_this.run);
                _this.last_time = _this.now;
            }
        };
        this.frame_rate = frame_rate;
        this.render = render;
        this.update = update;
        this.animator = undefined;
        this.now_time = 0;
        this.last_time = 0;
        this.accumulated_time = 0;
        this.updated = false;
        this.now = 0;
        this.pause = false;
    }
    Engine.prototype.getTimestamp = function () {
        if (window.performance && window.performance.now()) {
            return window.performance.now();
        }
        else {
            return new Date().getTime();
        }
    };
    Engine.prototype.start = function () {
        this.last_time = this.getTimestamp();
        this.animator = window.requestAnimationFrame(this.run);
    };
    return Engine;
}());
