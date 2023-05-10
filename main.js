noseX=0;
noseY=0;
function preload(){
clown_nose = loadImage('https://i.postimg.cc/NGxP7C54/clown-nose-removebg-preview.png');
smile = loadImage('https://i.postimg.cc/8c8J7bVf/image-removebg-preview-12.png');
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(640,480);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotpose);
 }

function modelLoaded(){
    console.log("model has loaded");
}

function gotpose(results){
    if(results.length > 0){
        console.log(results);
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }

}

function draw(){
  image(video, 0,0,640,480);
  image(clown_nose, noseX-15, noseY-15, 30, 30);
  image(smile, noseX-55, noseY, 150, 75);
}

