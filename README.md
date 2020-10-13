# mandelbrot-set-generator
Mandelbrot set Image generator using Javascript and WebGL

This javascript app generates Mandelbrot set and Julia set images using webgl and glsl shaders, and the result is displayed in html canvas.

<b>Live Demo:</b> https://shishirbhandari.github.io/mandelbrot-set-generator/

## Application output
![Image of Application Screen](images/app_screenshot.png)

## Controls overview
#### Mandelbrot Set & Julia Set Toggle:
This control lets us choose between Mandelbrot Set and Julia Set. Each set produces different image.
#### Iterations:
Number of iterations to use to produce the image. Higher values produces more detailed thus better images.
#### Scale:
Scale represents zoom-in value. Combine scale and offsetX, offsetY to produce different images.
#### C-Real:
Value of real part of C in the Julia-set equation (f(Z) = Z<sup>2</sup> + C), where C = x + iy thus C-Real = x;
#### C-Imag:
Value of imaginary part of C in the Julia-set equation, C-Imag = y
#### Limit:
Value of limit to use in iteration process. Limit is the value of abs(Z) beyond which the point in consideration is likely to diverge. Default limit value for Mandelbrot is 2.
#### Offset-X:
Offset along x-axis
#### Offset-Y:
Offset along y-axis
#### Color:
Choose the tint colour of the generated images
#### Blink Frequency:
Animate the blinking of the image by changing the frequency of blinking.


## References
<b>Mandelbrot set reference</b>: https://en.wikipedia.org/wiki/Mandelbrot_set

<b>Julia set reference</b>: https://en.wikipedia.org/wiki/Julia_set
