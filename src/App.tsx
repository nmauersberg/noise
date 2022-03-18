import React from 'react';
import { P5Instance, ReactP5Wrapper } from 'react-p5-wrapper';

let noiseVal;
let noiseScale = 0.02;
let offset = 1;

const sketch = (p5: P5Instance) => {
  p5.setup = () => {
    p5.createCanvas(300, 300);
  };

  p5.draw = () => {
    offset--;
    noiseScale = noiseScale + 0.00025;
    p5.background(0);
    for (let y = 0; y < p5.height; y++) {
      for (let x = 0; x < p5.width; x++) {
        // noiseDetail of the pixels octave count and falloff value
        p5.noiseDetail(5, 0.5);
        noiseVal = p5.noise(
          (x + offset) * noiseScale,
          (y + offset) * noiseScale
        );
        p5.stroke(noiseVal * 255);
        p5.point(x, y);
      }
    }
  };
};

export const App = () => {
  return <ReactP5Wrapper sketch={sketch} />;
};
