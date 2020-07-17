/*
Vertex and fragment shaders
*/

// Vertex shader
var vertexShaderText = `
attribute vec2 position;
varying vec4 _pos;

void main() {
  vec4 p = vec4(position, 0.0, 1.0);
  gl_Position = p;
  _pos = p;
}
`;


// Fractal Fragment shader
var fractalFragmentShaderText = `
precision highp float;
uniform float time;
uniform bool is_mandelbrot;

uniform vec4 color;
uniform float color_frequency;

uniform float iters;
uniform float scale;
uniform vec2 offset;
uniform float limit;
uniform float c_real;
uniform float c_imag;

varying vec4 _pos;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float get_mandelbrot_set(float real, float img, float c_real, float c_imag, float iters) {
  float cr = real;
  float ci = img;

  real = c_real;
  img = c_imag;
  
  float fractalColor = 0.0;
  for(float i=0.0; i<5000.0; i++) {
    if(i >= iters) break;
    
    float real_prev = real;
    real = real_prev * real_prev - img * img + cr;
    img = 2.0 * real_prev * img + ci;

    if(real*real + img*img > limit*limit) {
        fractalColor = i / iters;
    }
  }

  return fractalColor;
}

float get_julia_set(float real, float img, float c_real, float c_imag, float iters) {
  float fractalColor = 0.0;
  for(float i=0.0; i<5000.0; i++) {
    if(i >= iters) break;

    float real_prev = real;
    real = real_prev * real_prev - img * img + c_real;
    img = 2.0 * real_prev * img + c_imag;

    if(real * real + img * img > limit) {
        fractalColor = i / iters;
    }
  }

  return fractalColor;
}

void main() {
  float scale = 1.0 / scale;

  float real = (_pos[0]) * scale  + offset.x;
  float img = (_pos[1]) * scale + offset.y;

  float fractalColor = 0.0;
  if (is_mandelbrot) fractalColor = get_mandelbrot_set(real, img, c_real, c_imag, iters);
  else fractalColor = get_julia_set(real, img, c_real, c_imag, iters);

  float r = map(fractalColor * fractalColor, 0.0, 0.3 * 0.3, 0.0, 1.0);
  float g = map(fractalColor, 0.3, 0.6, 0.0, 1.0);
  float b = map(sqrt(fractalColor), sqrt(0.6), 1.0, 0.0, 1.0);

  vec3 mandelbrot_color = vec3(r, g, b);
  vec4 final_color = vec4(mandelbrot_color, 1.0) * color;
  final_color.a = final_color.a * (sin(color_frequency*time) / 2.0 + 1.0);
  gl_FragColor = final_color;
}
`;

