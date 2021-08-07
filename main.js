function preload() {
}
function setup() {
  canvas = createCanvas(600, 500);
  canvas.position(650, 370);
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}
function draw() {
  translate(width,0);
  scale(-1, 1);
  image(video, 0, 0, 600, 500);
  classifier.classify(video, getResults);
}
function modelLoaded() {
  console.log("model loaded!");
}
function getResults(error, results) {
  if (error) {
    console.error(error);
  }
  else {
     console.log(results);
     document.getElementById("object_name").innerHTML = results[0].label;
     document.getElementById("accuracy_percentage").innerHTML = results[0].confidence.toFixed(3);
  }
}