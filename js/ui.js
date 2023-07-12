var iterElem = document.getElementById("iter");
var colorElem = document.getElementById("color");
var scaleElem = document.getElementById("scale");
var limitElem = document.getElementById("limit");
var cRealElem = document.getElementById("c-real");
var cRealDisplay = document.getElementById("c-real-display");
var cImagElem = document.getElementById("c-imag");
var cImagDisplay = document.getElementById("c-imag-display");
var offsetXElem = document.getElementById("offset-x");
var offsetYElem = document.getElementById("offset-y");

function uiResetCommon() {
  scaleElem.value = scale;
  limitElem.value = limit;
  cRealElem.value = cReal;
  cImagElem.value = cImag;

  cRealDisplay.innerHTML = cReal;
  cImagDisplay.innerHTML = cImag;
}

iterElem.value = iterations;
offsetXElem.value = offset[0];
offsetYElem.value = offset[1];

var mpostionInitial = { x: null, y: null };
var mpostionFinal = { x: null, y: null };
canvas.addEventListener("wheel", function (e) {
  e.preventDefault();
  factor = -0.0005 * e.deltaY;
  if (factor + scale > 0.0) {
    scale *= (1 + factor);
    scaleElem.value = Math.sqrt(scale);
  }
});
canvas.addEventListener("mousedown", function (e) {
  e.preventDefault();
  mpostionInitial = { x: e.clientX, y: e.clientY };
});
canvas.addEventListener("mousemove", function (e) {
  e.preventDefault();

  if (mpostionInitial.x !== null) {
    if (mpostionFinal.x !== null) {
      var diff = { x: e.clientX - mpostionFinal.x, y: e.clientY - mpostionFinal.y }
      console.log(diff)
      offset[0] -= 0.05 * diff.x * 1.0 / (10.0 * scale);
      offset[1] += 0.05 * diff.y * 1.0 / (10.0 * scale);
    }
    mpostionFinal = { x: e.clientX, y: e.clientY };
  }
});
canvas.addEventListener("mouseup", function (e) {
  e.preventDefault();
  mpostionInitial = { x: null, y: null };
  mpostionFinal = { x: null, y: null };
});

uiResetCommon();

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
  cRealDisplay.innerHTML = cReal
});

cImagElem.addEventListener("mousemove", function (e) {
  cImag = e.target.value;
  cImagDisplay.innerHTML = cImag
});

limitElem.addEventListener("change", function (e) {
  limit = e.target.value;
});

offsetXElem.addEventListener("mousemove", function (e) {

});

offsetYElem.addEventListener("mousemove", function (e) {

});


var downloadButton = document.getElementById("download");

document.getElementById("toggle-fractal").addEventListener("change", function (e) {
  is_mandelbrot = 1 - e.target.value;
  reset(is_mandelbrot);

  document.getElementById("title").innerHTML = is_mandelbrot ? "Mandelbrot Set" : "Julia Set";

  uiResetCommon();
});

function uiLoop() {
  var factorX = 0.05 * offsetXElem.value * 1.0 / (10.0 * scale);
  offset[0] += factorX;

  var factorY = 0.05 * offsetYElem.value * 1.0 / (10.0 * scale);
  offset[1] += factorY;

  requestAnimationFrame(uiLoop);
};
uiLoop();




