// Does this works please say yes 
//other changes
class Controller{
// public player:any;


//     constructor(player:any){
        
//     }



    public controlls(){
        

        function keyboardInput (event : KeyboardEvent){


  
            if (event.keyCode == 37 ){
          
                
                player.left = true;
                
               
              }
          
            
            
            if (event.keyCode == 39 ){
          
                
              player.right = true;
              
             
            }
         
          
          if (event.keyCode == 38 ){
          
                
            player.up = true;
            
           
          }
         
          
          
          if (event.keyCode == 40 ){
          
                
            player.down = true;
            
           
          }
        
          
          }
          
          function keyboardOnKeyUp(event : KeyboardEvent){
            if (event.keyCode == 37 ){
          
                
              player.left = false;
              
             
            
            }
          
          
          
          if (event.keyCode == 39 ){
          
            player.right = false;
            
           
          }
          
          
          if (event.keyCode == 38 ){
          player.up = false;
          }
          
          
          
          if (event.keyCode == 40 ){
          

          player.down = false;

          }
          


          }

        

        if (player.up == true){
            if (player.vely>-player.speed){
                player.vely--;
            }
        }

        if (player.down == true){
            if (player.vely<player.speed){
                player.vely++;
            }
        }

        if (player.right ==true){
            if (player.velx<player.speed){
                player.velx++;
            }
        }

        if (player.left ==true){
            if(player.velx>-player.speed){
                player.velx--;
            }
        }

        player.velx *= player.friction;
        player.y += player.vely;
        player.vely *= player.friction; 
        player.x += player.velx; 


        document.addEventListener('keydown' , keyboardInput);
        document.addEventListener("keyup" , keyboardOnKeyUp);


    

    }

    

};