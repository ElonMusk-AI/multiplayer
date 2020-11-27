var ball, ballpos;
var dataBase, position;

function setup(){
    dataBase = firebase.database();
    createCanvas(500,500);
    ball = createSprite(255,255,10,10);
    ball.shapeColor = "red";

    ballpos = dataBase.ref("ball_moving/position");
    ballpos.on("value",readPos,showError);
}

function draw(){
    background("white");
    if (position !== undefined)

    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    dataBase.ref("ball_moving/position").set({
        "x": position.x+x,
        "y": position.y+y
    })

}

function readPos(data){
    position =data.val();
    ball.x = position.x;
    ball.y = position.y;
}
function showError(){
    console.log("error");
}
