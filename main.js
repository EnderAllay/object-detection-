img="";
Status="";
objects= [];

function setup() {
    canvas= createCanvas(640,420);
    canvas.center();

    objectDetector= ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects...";


}

function modelLoaded(){
    console.log("Model Loaded!");
    Status="true";
    objectDetector.detect(img,gotResults);
}

function preload(){
    img= loadImage("RENAMED.jpg");
}

function draw(){
    image(img,0,0,640,420);
  
    if(Status != "" ){
for(i=0; i < objects.length; i++){
document.getElementById("status").innerHTML= "Status: Object Detected";

fill("#2a9647");
percent= floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%" , objects[i].x + 15,objects[i].y - 15);
noFill();
stroke("#2a9647");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
    }
}

function gotResults(error,results){
if (error==true) {
    console.log(error);
} else {
    console.log(results);
    objects= results;
}


}