class Snowflake {
  constructor(size) {
    this.size = size;
    this.posX = random(width);
    this.posY = random(-height, 0);
    this.ySpeed = random(1, 5);
  }

  update() {
    this.posY += this.ySpeed;
    // 눈송이가 아래로만 떨어지고 900 이상으로 위치하지 않도록 설정
    if (this.posY > 900) {
      this.posY = random(-height, 0);
    }
  }

  display() {
    fill(255);
    noStroke();
    ellipse(this.posX, this.posY, this.size);
  }
}
