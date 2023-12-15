class Catcher {
  constructor() {
    this.x = 0;
    this.y = height - 150;
  }

  setLocation(x, y) {
    this.x = x;
    this.y = y-70;
  }

  display() {
    image(pen, this.x, this.y, 60, 140)
  }

  intersect(b) {
    let d = dist(this.x, this.y, b.x, b.y);
    if (d < 45) return true;
    else return false;
  }
}