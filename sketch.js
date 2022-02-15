var pelotasc;


function setup(){
    var canvas = createCanvas(700,700);
pelotasc =new pelotas();
pelotasc.x=100;
pelotas2=new pelotas();
   
   



}

function draw(){
    background("red")
    fill("blue")
pelotasc.display();
fill("black")
pelotas2.display();   
}