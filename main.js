score_LeftWrist=0;
song1="";
song2="";
song_name="";

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    
    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,600,500);
    song_song1=song1.isPlaying();
    console.log(song_song1);

    song_song2=song2.isPlaying();
    console.log(song_song2);


    fill("#FF0000");
    stroke("#FF0000");

    if(score_LeftWrist > 0.2){
        circle(leftWristX,leftWristY,20);
        song2.stop();
        if(song1 == false){
            song1.play();
        }

        else{
            document.getElementById("song_id").innerHTML = "Song Name: Believer";
        }
    }
}


leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    song1=loadSound("believer.mp3");
    song2=loadSound("khalasi.mp3");
}

function modelLoaded(){
    console.log('poseNet Is Initialized');
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        score_LeftWrist=results[0].pose.keypoints[9].score;
        console.log("score_LeftWrist="+score_LeftWrist);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("LeftWrist X = "+leftWristX + "LeftWrist Y ="+leftWristY);
        
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWrist X = "+rightWristX + "rightWrist Y ="+rightWristY);
    }
}
