// https://kylemcdonald.github.io/cv-examples/

// based on https://github.com/mtschirs/js-objectdetect
// the jsfeat detector is much faster but only does one object at a time:
// https://inspirit.github.io/jsfeat/sample_haar_face.html
// also see:
// https://github.com/mtschirs/js-objectdetect/blob/master/js/objectdetect.frontalcatface.js
// https://ahprojects.com/projects/cv-dazzle/

var w = 640,
    h = 480;
var detector;
var classifier = objectdetect.frontalface;
var img;
var faces;
let capture;

function setup() {
    createCanvas(w, h);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();

    var scaleFactor = 1.2;
    detector = new objectdetect.detector(w, h, scaleFactor, classifier);
}

function draw() {
    image(capture, 0, 0, w, h);

    faces = detector.detect(capture.canvas);
    stroke(255);
    noFill();
    if (faces) {
        faces.forEach(function (face) {
            var count = face[4];
            if (count > 4) { // try different thresholds
                rect(face[0], face[1], face[2], face[3]);
            }
        })
    }
}
