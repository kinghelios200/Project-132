prediction_1 = ""

function setup(){
    canvas = createCanvas(600, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/a0VksC763/model.json", modelLoaded);
}
function modelLoaded(){
    console.log("Model was successfully imported")
}

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

//create your model and store it in var classifier 

//define function modelLoaded

//define function check() 


//define function gotResult(error, results)

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if (results[0].label == Proper) {
            document.getElementById("status").innerHTML = "You are wearing a mask";
        }
        if (results[0].label == Improper) {
            document.getElementById("status").innerHTML = "You are wearing a mask, but not properly";
        }
        if (results[0].label == No Mask) {
            document.getElementById("status").innerHTML = "You are not wearing a mask";
        }
    }
}   