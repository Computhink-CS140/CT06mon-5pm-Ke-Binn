let colourval = 0;




function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  let circleDiameter = 30;
  let numCircles = 5;
  let totalWidth = numCircles * circleDiameter;
  let startX = (width - totalWidth) / 2 + circleDiameter / 2;
  let startY = (height - totalWidth) / 2 + circleDiameter / 2;
  for (let row = 0; row < numCircles; row++) {
    let rowY = startY + (circleDiameter * row)
  }

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}