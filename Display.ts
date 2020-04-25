
/* Declaring the canvas */
var canvas: HTMLCanvasElement ;
var ctx: CanvasRenderingContext2D; 
var playerControlls = new Controller();



var updateCounter:number = 0;
var renderCounter:number = 0;

var lookDirX:number;
var lookdirY:number;
var angelRad:number;

var toAngel:number;


function fUpdate(){
    // updateCounter ++;
    // console.log(updateCounter);
    
    
    
    
}

function fRender(){
     
    
    playerControlls.controlls();

    ctx.fillStyle="black";
    ctx.fillRect(0 , 0 ,1270 ,720 );
    //ctx.beginPath();
    onmousemove = function(e){
        //console.log("mouse location:", e.clientX, e.clientY)
       var playerCenter:Array<number> = [player.x - (player.width/2), player.y - (player.height/2)];
        
     
        

       toAngel = Math.atan2(e.pageX - playerCenter[0] , - (e.pageY - playerCenter[1])) ;
        
       

        //console.log(playerCenter[0],playerCenter[1])
        //console.log(e.pageY);
        //console.log(angel);
       
        
    
    };
    
    
    player.draw();
    
  
    
    

}
    


    
    
        //document.addEventListener('keydown' , keyboardInput);
        //document.addEventListener("keyup" , keyboardOnKeyUp);

    




window.onload = function(){
    canvas = <HTMLCanvasElement>document.getElementById('cnvs');
    ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
    var engine = new Engine(1000/60, fRender , fUpdate);
    engine.start();
    engine.pause = true;
} 
