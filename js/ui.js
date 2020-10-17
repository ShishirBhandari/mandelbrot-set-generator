var iterElem = document.getElementById("iter");
var colorElem = document.getElementById("color");
var scaleElem = document.getElementById("scale");
var limitElem = document.getElementById("limit");
var cRealElem = document.getElementById("c-real");
var cImagElem = document.getElementById("c-imag");
var offsetXElem = document.getElementById("offset-x");
var offsetYElem = document.getElementById("offset-y");
var colorFreqElem = document.getElementById("color-freq");

canvas.addEventListener("wheel", function (e) {
  e.preventDefault();
  factor = -0.0005 * e.deltaY;
  if (factor + scale > 0.0) {
    scale += factor;
    scaleElem.value = scale;
  }
});

iterElem.value = iterations;
scaleElem.value = scale;
limitElem.value = limit;
cRealElem.value = cReal;
cImagElem.value = cImag;
offsetXElem.value = offset[0];
offsetYElem.value = offset[1];
colorFreqElem.value = colorFrequency;

String.prototype.convertToRGBA = function () {
  if (this.length != 6) {
    throw "Only six-digit hex colors are allowed.";
  }

  var aRgbHex = this.match(/.{1,2}/g);
  var aRgba = [
    parseInt(aRgbHex[0], 16) / 255,
    parseInt(aRgbHex[1], 16) / 255,
    parseInt(aRgbHex[2], 16) / 255,
    1.0,
  ];
  return aRgba;
};

iterElem.addEventListener("change", function (e) {
  iterations = e.target.value;
});

scaleElem.addEventListener("mousemove", function (e) {
  val = e.target.value;
  scale = val * val;
});

scaleElem.addEventListener("change", function (e) {
  val = e.target.value;
  scale = val * val;
});

colorElem.addEventListener("change", function (e) {
  val = e.target.value;
  tintColor = val.toString().slice(1).convertToRGBA();
});

cRealElem.addEventListener("mousemove", function (e) {
  cReal = e.target.value;
});

cImagElem.addEventListener("mousemove", function (e) {
  cImag = e.target.value;
});

limitElem.addEventListener("change", function (e) {
  limit = e.target.value;
});

offsetXElem.addEventListener("mousemove", function (e) {

});

offsetYElem.addEventListener("mousemove", function (e) {

});

colorFreqElem.addEventListener("change", function (e) {
  colorFrequency = e.target.value;
});

var downloadButton = document.getElementById("download");

// function downloadCanvasImage() {
//   var image = document.getElementById("canvas").toDataURL("image/png", 1)
//                     .replace("image/png", "image/octet-stream");
//   downloadButton.setAttribute("href", image)
// }

// downloadButton.addEventListener("click", downloadCanvasImage());

document.getElementById("toggle-fractal").addEventListener("change", function(e){
  reset();
  is_mandelbrot = 1 - e.target.value;

  document.getElementById("title").innerHTML = is_mandelbrot ? "Mandelbrot Set" : "Julia Set";
});

function uiLoop() {
  var factorX = 0.05 * offsetXElem.value * 1.0 / (10.0 * scale);
  offset[0] += factorX;
  
  var factorY = 0.05 * offsetYElem.value * 1.0 / (10.0 * scale);
  offset[1] += factorY;
  
  requestAnimationFrame(uiLoop);
};
uiLoop();




