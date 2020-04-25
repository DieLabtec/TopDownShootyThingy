"use strict";
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, linedwidth, height, width, color, speed, velx, vely, rotate, friction, up, down, left, right) {
        var _this = this;
        if (linedwidth === void 0) { linedwidth = 2; }
        if (color === void 0) { color = "blue"; }
        if (speed === void 0) { speed = 5; }
        if (velx === void 0) { velx = 0; }
        if (vely === void 0) { vely = 0; }
        if (rotate === void 0) { rotate = 0; }
        if (friction === void 0) { friction = 0.8; }
        if (up === void 0) { up = false; }
        if (down === void 0) { down = false; }
        if (left === void 0) { left = false; }
        if (right === void 0) { right = false; }
        this.draw = function () {
            _this.rotate += 0.02;
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = _this.color;
            ctx.lineWidth = _this.linewidth;
            ctx.translate(_this.x, _this.y);
            ctx.rotate(toAngel);
            ctx.rect(0, 0, _this.width, _this.height);
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        };
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.linewidth = linedwidth;
        this.color = color;
        this.speed = speed;
        this.velx = velx;
        this.vely = vely;
        this.friction = friction;
        this.up = up;
        this.down = down;
        this.right = right;
        this.left = left;
        this.rotate = rotate;
    }
    return Rectangle;
}());
var player = new Rectangle(500, 500, 50, 10, 10, "red");
