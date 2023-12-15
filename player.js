class Player {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.diameter = 30;
  }

  update() {
    // 사각형 영역 내부의 경계값을 정의
    let leftLimit = 144;
    let rightLimit = leftLimit + 1631;
    let topLimit = 173;
    let bottomLimit = topLimit + 811;

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

class Bullet {
  constructor(x, y, i) {
    this.x = x;
    this.y = y;
    this.i = i;
    this.speed = 5;
    this.t = 300;
  }

  update() {
    this.y -= this.speed; // 총알 이동
    this.t -= 1.5;
  }

  show() {
    // fill(255, 0, 0);
    // ellipse(this.x, this.y, 10, 10); // 총알 그리기
    //image(bullet,this.x, this.y);
    fill(255, 221, 0, this.t);
    stroke(255, this.t);
    strokeWeight(7);
    textFont(customFont);
    textSize(30);
    text(this.i, this.x, this.y);
    noStroke();
  }

  hits(target) {
    let d = dist(this.x, this.y, target.x, target.y);
    return d < 50; // 총알과 목표물 충돌 판별
  }
}

class Target {
  constructor(x, y, i) {
    this.x = x;
    this.y = y;
    this.i = i;
    this.speed = 0.5;
  }

  move() {
    this.y += this.speed; // 목표물 이동
    if (this.y > height) {
      this.y = 0;
      this.x = random(width); // 화면 아래 도착 시 다시 위로 이동
    }
  }

  show() {
    // fill(0, 0, 255);
    // rectMode(CENTER);
    // rect(this.x, this.y, 20, 20); // 목표물 그리기
    image(monster, this.x, this.y);
    rectMode(CENTER);
    fill(255);
    noStroke();
    rect(this.x + 30, this.y - 30, 90, 40);
    triangle(this.x + 15, this.y - 15, this.x + 45, this.y - 15, this.x + 30, this.y + 1);
    textSize(25);
    textAlign(CENTER);
    fill(0);
    text(this.i, this.x + 29, this.y - 39);
  }

  hits(px, py) {
    let d = dist(px, py, this.x, this.y);
    return d < 50; // 플레이어와 목표물 충돌 판별
  }
}

class Tile {
  constructor(i, img) {
    this.index = i;
    this.img = img;
  }
}