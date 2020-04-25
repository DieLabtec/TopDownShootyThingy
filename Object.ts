class Rectangle  {
    public x:number;
    public y:number;
    public linewidth:number;
    public height:number;
    public width:number;
    public color:string;
    public speed:number;
    public vely:number;
    public velx:number;
    public friction:number;
    public up:boolean;
    public down:boolean;
    public left:boolean;
    public right:boolean;
    public rotate:number;

    
    

    constructor(x:number , y:number,   linedwidth:number = 2 , height:number , width:number , color:string = "blue" , 
    speed = 5 , velx = 0 , vely = 0 ,rotate = 0 ,  friction = 0.8,up:boolean = false,down:boolean =false,left:boolean = false,right:boolean = false){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.linewidth = linedwidth;
        this.color = color;
        this.speed = speed;
        this.velx=velx;
        this.vely=vely;
        this.friction = friction;
        this.up = up;
        this.down = down;
        this.right = right;
        this.left = left;
        this.rotate =rotate;
        

    }
    





    
    
    

    public draw = (): void => {
        this.rotate += 0.02;

        
        
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.linewidth;
        ctx.translate(this.x,this.y);
        ctx.rotate(toAngel);
        ctx.rect(0, 0 , this.width,this.height);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        
        
    }
}

var player = new Rectangle(500 ,500 , 50 , 10 ,10 , "red");