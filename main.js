function preload(){
}
function setup(){
    canvas=createCanvas(480,400);
    canvas.position(100,250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,94,106,250,350);
    circle(30, 30, 45);
    fill(230, 14, 14);
    stroke(0,0,0);
    circle(400, 400, 45);
}
function snapshot(){
    save('snapshot.png');
}