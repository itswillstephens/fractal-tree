let angle = 0.785398;
let slider;

function setup() {
  createCanvas(innerWidth, innerHeight - 50);
  slider = createSlider(PI / 10, PI / 4, PI / 6, 0.1);
}

function draw() {
  background(51);
  angle = slider.value();
  stroke(255);
  translate(innerWidth / 2, height);
  branch(170);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if(len > 6){
    
    push();
    rotate(angle);
    branch(len * 0.8);
    pop();
    push();
    rotate(-angle);
    stroke
    branch(len * 0.5);
    pop();
    push();
    rotate(-angle);
    stroke
    branch(len * 0.2);
    pop();
  }
}