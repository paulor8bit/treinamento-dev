let x = 100 
let y = 100

function setup(){
    createCanvas(700,500)
}

function andar() {
    //https://keycode.info/
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) 
    {
        x = x-10
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
        x = x+10
    }
    if(keyIsDown(UP_ARROW) || keyIsDown(87))
    {
        y = y-10
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)){
        y = y+10
    }
}

function draw()
{
    background(0)
    rect(x, y, 25, 25)
    
    andar()
    

}