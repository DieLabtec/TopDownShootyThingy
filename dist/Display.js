"use strict";
/* Declaring the canvas */
var canvas;
var ctx;
var playerControlls = new Controller();
var updateCounter = 0;
var renderCounter = 0;
var lookDirX;
var lookdirY;
var angelRad;
var toAngel;
function fUpdate() {
    // updateCounter ++;
    // console.log(updateCounter);
}
function fRender() {
    playerControlls.controlls();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1270, 720);
    //ctx.beginPath();
    onmousemove = function (e) {
        //console.log("mouse location:", e.clientX, e.clientY)
        var playerCenter = [player.x - (player.width / 2), player.y - (player.height / 2)];
        toAngel = Math.atan2(e.pageX - playerCenter[0], -(e.pageY - playerCenter[1]));
        //console.log(playerCenter[0],playerCenter[1])
        //console.log(e.pageY);
        //console.log(angel);
    };
    player.draw();
}
//document.addEventListener('keydown' , keyboardInput);
//document.addEventListener("keyup" , keyboardOnKeyUp);
window.onload = function () {
    canvas = document.getElementById('cnvs');
    ctx = canvas.getContext('2d');
    var engine = new Engine(1000 / 60, fRender, fUpdate);
    engine.start();
    engine.pause = true;
};
