class HomePlayer {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.diameter = 30;
  }

  update() {
    // 사각형 영역 내부의 경계값을 정의
    let leftLimit = 415;
    let rightLimit = 1085;
    let topLimit = 200;
    let bottomLimit = 750;

    if (keyIsDown(LEFT_ARROW) && this.x - this.diameter / 2 > leftLimit) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x + this.diameter / 2 < rightLimit) {
      this.x += this.speed;
    }
    if (keyIsDown(UP_ARROW) && this.y - this.diameter / 2 > topLimit) {
      this.y -= this.speed;
    }
    if (keyIsDown(DOWN_ARROW) && this.y + this.diameter / 2 < bottomLimit) {
      this.y += this.speed;
    }
  }

  display() {
    noStroke();
    ellipse(this.x, this.y, 30); // Head
    push();
    translate(this.x - 11, this.y + 22);
    rotate(radians(330));
    ellipse(0, 0, 40, 14); // Left arm
    pop();
    push();
    translate(this.x + 14, this.y + 22);
    rotate(radians(30));
    ellipse(0, 0, 40, 14); // Right arm
    pop();
    push();
    translate(this.x - 7, this.y + 41);
    rotate(radians(30));
    ellipse(0, 0, 19, 51); // Left leg
    pop();
    push();
    translate(this.x + 10, this.y + 41);
    rotate(radians(330));
    ellipse(0, 0, 19, 51); // Right leg
    pop();
  }
}