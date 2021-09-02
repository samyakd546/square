NoseX=0;
NoseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
video=createCapture(VIDEO);
video.size(550, 500);
canvas=createCanvas(550, 550);
canvas.position(560, 150);

posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotposes);
}

function modelLoaded(){
console.log("Model is loaded");
}

function gotposes(result){
    if(result.length>0){
        console.log(result);
        NoseX = result[0].pose.nose.x;
        NoseY = result[0].pose.nose.y;
        console.log("NoseX = " + NoseX +"NoseY = " + NoseY);

        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        difference = floor (leftWristX - rightWristX);

        console.log("leftWristX = "+ leftWristX + "rightWristX ="+ rightWristX +"difference =" + difference);

    }
}

function draw(){
    document.getElementById("square_size").innerHTML="Width and Height of the square is "+difference+" pixels";
    background('#1ec99f');
    fill('#1bcf0e');
    stroke('#1bcf0e');
    square(NoseX,  NoseY, difference)
}

