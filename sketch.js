console.log('Moving random squares');


function setup() {
  
  
  createCanvas(windowWidth, windowHeight);
  background(150);
  strokeWeight(random(5,20));
  frameRate(10);

}


function draw() {



  let x1 = random(20, 100);
  let y1 = random(20, 100);
  let x2 = random(100, 200);
  let y2 = random(100, 200);


  rect(x1, y1, x2, y2);

  if (frameCount > 100) {
    rect(x1 + 200, y1 + 150, x2, y2);

    if (frameCount > 200) {
      rect(x1 + 250, y1 + 250, x2, y2);

    }

    if (frameCount > 300) {
      rect(x1 + 450, y1 + 200, x2, y2);

    }

    if (frameCount > 400) {
      rect(x1 + 600, y1 + 90, x2, y2);

    }

    if (frameCount > 500) {
      rect(x1 + 800, y1 + 50, x2, y2);

    }

    if (frameCount > 700) {
      rect(x1 + 900, y1 + 250, x2, y2);

    }


  }

  console.log('frameCount:', frameCount);
}