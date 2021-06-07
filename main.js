canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
backgroundimage="momomy.jpeg";
roverimage="car.jpeg";
roverimage2="FIRE.jpeg";

rover2_width=100;
rover2_height=90;
rover2_x=10;
rover2_y=100;


function add() 
{
background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=backgroundimage;


rover_imgTag= new Image();
rover_imgTag.onload=uploadrover;
rover_imgTag.src=roverimage;

rover_imgTag2= new Image();
rover_imgTag2.onload=uploadrover2;
rover_imgTag2.src=roverimage2;
    
}

function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height);

}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x, rover_y,rover_width,rover_height);

}

function uploadrover2(){
    ctx.drawImage(rover_imgTag2,rover2_x, rover2_y,rover2_width,rover2_height);

}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{

    keyPressed=e.keyCode;
    console.log(keyPressed);
    
    if(keyPressed=='38')
    {
        up();
        console.log("up");
    }



    if(keyPressed=='40')
    {
        down();
        console.log("down");
    }
    if(keyPressed=='37')
    {
        left();
        console.log("left");
    }
    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }







    if(keyPressed=='87')
    {
        up2();
        console.log("up2");
    }

    if(keyPressed=='83')
    {
        down2();
        console.log("down2");
    }

    if(keyPressed=='65')
    {
        left2();
        console.log("left2");
    }

    if(keyPressed=='68')
    {
        right2();
        console.log("right2");
    }

}

function up(){

    if(rover_y>=0)
    rover_y=rover_y-10;
    uploadBackground();
    uploadrover();
    uploadrover2();


}

function down(){

    if(rover_y<=500)
    rover_y=rover_y+10;
    uploadBackground();
    uploadrover();
    uploadrover2();
    

}

function left(){

    if(rover_x>=0)
    rover_x=rover_x-10;
    uploadBackground();
    uploadrover();
    uploadrover2();
    

}

function right(){

    if(rover_x<=700)
    rover_x=rover_x+10;
    uploadBackground();
    uploadrover();
    uploadrover2();
    

}


























function up2(){

    if(rover2_y>=0)
    rover2_y=rover2_y-10;
    uploadBackground();
    uploadrover();
    uploadrover2();


}

function down2(){

    if(rover2_y<=500)
    rover2_y=rover2_y+10;
    uploadBackground();
    uploadrover();
    uploadrover2();
    

}

function left2(){

    if(rover2_x>=0)
    rover2_x=rover2_x-10;
    uploadBackground();
    uploadrover();
    uploadrover2();
    

}

function right2(){

    if(rover2_x<=700)
    rover2_x=rover2_x+10;
    uploadBackground();
    uploadrover();
    uploadrover2();
    

}

