class Flower0 {
  constructor(x, y, angle) {
    this.position = createVector(x, y);
    this.initialPosition = createVector(x, y);
    this.angle = angle;
    this.initialAngle = angle; // 초기 회전 각도 저장
    this.flowerImage0 = null;
    this.isBeingDragged = false;

  }

  preload() {
    // 클래스 내부에서 이미지 로드
    this.flowerImage0 = loadImage('asset/rose0.png');
  }

  draw() {
    push();
    imageMode(CENTER)
    // 이미지의 중심을 (0, 0)으로 설정
    translate(this.position.x, this.position.y);

    // 회전 적용
    rotate(this.angle);
    noStroke();
    image(this.flowerImage0, 0, 0, 100, 350);


    //   ellipseMode(CENTER)
    //   noFill();
    //   stroke(0);
    // ellipse(0, -150, 30)
    // 이미지의 중심점을 원래 위치로 이동

    pop();
  }


  startDragging() {
    let d = dist(mouseX, mouseY, this.position.x, this.position.y);
    if (d <= 30) {
      this.isBeingDragged = true;
    }
  }

  stopDragging() {
    this.isBeingDragged = false;
  }

  drag() {
    if (this.isBeingDragged) {
      this.position.x = mouseX;
      this.position.y = mouseY;
    }
  }

  update() {
    this.position.x = constrain(this.position.x, 20, width - 20);
    this.position.y = constrain(this.position.y, 20, height);
  }

  rotateClockwise() {
    this.angle += QUARTER_PI; // 회전 각도를 증가시킴
    this.angle = this.angle % (TWO_PI); // 각도가 360도를 넘어가면 360도로 나눈 나머지로 설정


  }

  resetPosition() {
    this.position.set(this.initialPosition.x, this.initialPosition.y);
    this.angle = this.initialAngle; // 저장된 초기 회전 각도로 초기화
  }
}


class Flower1 {
  constructor(x, y, angle) {
    this.position = createVector(x, y);
    this.initialPosition = createVector(x, y);
    this.angle = angle;
    this.initialAngle = angle; // 초기 회전 각도 저장
    this.flowerImage1 = null;
    this.isBeingDragged = false;

  }

  preload() {
    // 클래스 내부에서 이미지 로드
    this.flowerImage1 = loadImage('asset/rose1.png');
  }

  draw() {
    push();
    imageMode(CENTER)
    translate(this.position.x, this.position.y);
    rotate(this.angle);

    noStroke();
    image(this.flowerImage1, 0, 0, 350, 100);

    pop();
  }


  startDragging() {
    let d = dist(mouseX, mouseY, this.position.x, this.position.y);
    if (d <= 30) {
      this.isBeingDragged = true;
    }
  }

  stopDragging() {
    this.isBeingDragged = false;
  }

  drag() {
    if (this.isBeingDragged) {
      this.position.x = mouseX;
      this.position.y = mouseY;
    }
  }

  update() {
    this.position.x = constrain(this.position.x, 20, width - 20);
    this.position.y = constrain(this.position.y, 20, height);
  }

  rotateClockwise() {
    this.angle += QUARTER_PI; // 회전 각도를 증가시킴
    this.angle = this.angle % (TWO_PI); // 각도가 360도를 넘어가면 360도로 나눈 나머지로 설정
  }

  resetPosition() {
    this.position.set(this.initialPosition.x, this.initialPosition.y);
    this.angle = this.initialAngle; // 저장된 초기 회전 각도로 초기화
  }
}