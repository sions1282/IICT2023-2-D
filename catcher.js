class Catcher {
  constructor(speed) {
    this.x = 0;
    this.y = height - 150;
    this.speed = speed;
  }

  setLocation(x, y) {
    this.x = x
    this.y = y - 70;
  }

  display() {
    image(pen, this.x, this.y, 60, 140);
  }

  intersect(b) {
    let d = dist(this.x, this.y, b.x, b.y);
    return d < 45;
  }
  
  moveLeft() {
    this.x -= this.speed; // 왼쪽으로 이동
    // this.x = constrain(this.x, 0, width - 60); // 화면을 벗어나지 않도록 제한
  }

  moveRight() {
    this.x += this.speed; // 오른쪽으로 이동
    // this.x = constrain(this.x, 0, width - 60); // 화면을 벗어나지 않도록 제한
  }
}