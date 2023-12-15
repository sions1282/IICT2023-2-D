class FirstPlayer {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.diameter = 30;
  }

  update() {
    // 사각형 영역 내부의 경계값을 정의
    let leftLimit = 0;
    let rightLimit = leftLimit + 1920;
    // let topLimit = 0;
    // let bottomLimit = 1080;

    // 이동제한성    
    if (height / 4 <= this.y && this.y <= height / 4 + 150 &&
      this.x <= 1150) {
      if (keyIsDown(DOWN_ARROW)) {
        this.y = height / 4 - 30
      } else if (keyIsDown(UP_ARROW)) {
        this.y = height / 4 + 170
      }
    }

    if (height / 4 <= this.y && this.y <= height / 4 + 150 &&
      this.x >= 1500) {
      if (keyIsDown(DOWN_ARROW)) {
        this.y = height / 4 - 30
      } else if (keyIsDown(UP_ARROW)) {
        this.y = height / 4 + 170
      }
    }

    if (keyIsDown(LEFT_ARROW) && this.x - this.diameter / 2 > leftLimit) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x + this.diameter / 2 < rightLimit) {
      this.x += this.speed;
    }
    if (keyIsDown(UP_ARROW) && (this.y + this.diameter / 2 != 720 || this.x <= 300) && this.y >= 10) {
      this.y -= this.speed;
    }
    if (keyIsDown(DOWN_ARROW) && (this.y + 60 != 720 || this.x <= 300) && this.y <= 1020) {
      this.y += this.speed;
    }

  }

  display1() {
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

  display2() {
    ellipse(this.x + 50, this.y, 30); // Head2 
    push();
    translate(this.x + 39, this.y + 22);
    rotate(radians(330));
    ellipse(0, 0, 40, 14); // Left arm2
    pop();

    push();
    translate(this.x + 64, this.y + 22);
    rotate(radians(30));
    ellipse(0, 0, 40, 14); // Right arm2
    pop();

    push();
    translate(this.x + 43, this.y + 41);
    rotate(radians(30));
    ellipse(0, 0, 19, 51); // Left leg2
    pop();

    push();
    translate(this.x + 60, this.y + 41);
    rotate(radians(330));
    ellipse(0, 0, 19, 51); // Right leg2
    pop();

  }
}


class Security {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 30;
    this.height = 30;
    this.securityImage0 = null;
  }

  preload() {
    this.securityImage0 = loadImage('asset/security.png')
  }

  display1() {
    push();
    imageMode(CENTER)
    // 이미지의 중심을 (0, 0)으로 설정
    translate(this.x, this.y);

    noStroke();
    image(this.securityImage0, 0, 0, 50, 150);

    // 이미지의 중심점을 원래 위치로 이동

    pop();
  }

}

class Teacher extends FirstPlayer {
  constructor(x, y, speed) {
    super(x, y, speed);
    this.lightRadius = 100;
    this.lightAngle = 0;
    this.lightConeAngle = PI / 4; // 부채꼴 모양의 각도 (45도)
  }

  preload() {
    this.teacherImage = loadImage('asset/teacher.png')

  }


  // update 메서드 오버라이드: 빛의 회전 구현
  update() {
    fill(255, 0, 0)
    // 빛의 회전
    this.lightAngle += 0.1; // 필요에 따라 회전 속도 조절
  }

  // display 메서드 오버라이드: 부채꼴 모양의 노란 빛 표시
  display() {

    push();
    imageMode(CENTER)
    // 이미지의 중심을 (0, 0)으로 설정
    translate(this.x, this.y);

    noStroke();
    image(this.teacherImage, 0, 0, 120, 120);

    // 이미지의 중심점을 원래 위치로 이동
    pop();


    // 부채꼴 모양의 노란 빛 표시
    fill(255, 255, 0); // 노란색
    noStroke();

    // 부채꼴 그리기
    push();
    translate(this.x, this.y - 30);
    rotate(this.lightAngle);

    beginShape();
    vertex(0, 0); // 부채꼴의 꼭지점
    for (let i = -this.lightConeAngle / 2; i <= this.lightConeAngle / 2; i += 0.1) {
      let x = this.lightRadius * cos(i);
      let y = this.lightRadius * sin(i);
      vertex(x, y);
    }
    endShape(CLOSE);

    pop();
  }
}