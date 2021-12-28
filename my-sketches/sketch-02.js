const canvasSketch = require('canvas-sketch');
const canvasSketchUtil = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080 ,1080 ]
};

const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
};

const randomRange = (min, max) =>{
  return Math.random()*(max - min) + min;
};

const sketch = () => {
  return ({ context, width, height }) => {

    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.fillStyle = 'black';
    //take the center of the circle to the middle of the canvas
    const cx = 0;
    //take the center of the circle to the middle of the canvas
    const cy = 0;

    const w = width * 0.01;
    const h = height *0.1;
    let x,y;

    const num = 40;
    const radius = width * 0.7;

    for(let i = 0; i< num; i++){
      const slice = degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x,y);
      context.rotate(-angle);
      context.scale(randomRange(1, 3), 1);
      context.beginPath();
      context.rect(-w *0.5, random.range(0, -h * 0.5), w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = randomRange(5,20);
      context.beginPath();
      context.arc(0, 0, radius * randomRange(0.7,1.3), slice * randomRange(1, -8), slice* randomRange(1,5));
      context.stroke();
      context.restore();
    }
    

  };
};

canvasSketch(sketch, settings);
