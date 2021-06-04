function preload(){
}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw(){
    image(video,220,170,175,175);
    tint(tint_color);
    fill('#faa370');
    stroke('#faa370');
    circle(50,50,70);
    rect(70,40,500,20);
    circle(550,50,70);
    rect(70,400,500,20);
    circle(550,410,70);
    rect(40,50,20,350);
    circle(50,410,70);
    rect(540,50,20,350);
}
function filter(){
    tint_color = document.getElementById("color").value;
}
function take_snapshot(){
    save('img.png');
}