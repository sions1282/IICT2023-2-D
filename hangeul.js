class Hangeul {
  constructor(i) {
    this.x = random(width);
    this.y = 0;
    this.index = i;
    this.speed = random(2, 5);
  }

  display() {
    textSize(60);
    textFont(customFont);
    textAlign(CENTER,CENTER);
    fill(50, 150, 200);
    text(hangeul[this.index], this.x, this.y);
  }

  fall() {
    this.y += this.speed;
  }

  offScreen() {
    return this.y > height;
  }

  caught() {
    this.speed = 0;
    this.y = -999;
  }

  isThankYou() {
    return [0, 1, 2, 3, 4, 5].includes(this.index);
  }
}