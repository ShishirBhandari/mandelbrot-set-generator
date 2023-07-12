# mandelbrot-set-generator

[![CodeFactor](https://www.codefactor.io/repository/github/shishirbhandari/mandelbrot-set-generator/badge)](https://www.codefactor.io/repository/github/shishirbhandari/mandelbrot-set-generator)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://shishirbhandari.github.io/mandelbrot-set-generator/)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)

Mandelbrot set Image generator using Javascript and WebGL

This javascript app generates Mandelbrot set and Julia set images using webgl and glsl shaders, and the result is displayed in html canvas.

<b>Live Demo:</b> https://shishirbhandari.github.io/mandelbrot-set-generator/

## Application Output
![Image of Application Screen](images/app_screenshot.png)

## Controls Overview

### Mandelbrot Set & Julia Set Toggle:
- This control lets us choose between Mandelbrot Set and Julia Set. Each set produces different image.
### Iterations:
- Number of iterations to use to produce the image. Higher values produces more detailed thus better images.
### Scale:
- Scale represents zoom-in value. Combine scale and offsetX, offsetY to produce different images.
### C-Real:
- Value of real part of C in the Julia-set equation (f(Z) = Z<sup>2</sup> + C), where C = x + iy thus C-Real = x;
### C-Imag:
- Value of imaginary part of C in the Julia-set equation, C-Imag = y
### Limit:
- Value of limit to use in iteration process. Limit is the value of abs(Z) beyond which the point in consideration is likely to diverge. Default limit value for Mandelbrot is 2.
### Offset-X:
- Offset along x-axis
### Offset-Y:
- Offset along y-axis
### Color:
- Choose the tint colour of the generated images

## References
- [Mandelbrot Set Reference](https://en.wikipedia.org/wiki/Mandelbrot_set)
- [Julia Set Reference](https://en.wikipedia.org/wiki/Julia_set)