class startCharacter {
    constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.diameter = 30;
    }
    
    update() {
      if (keyIsDown(LEFT_ARROW)) {
        // Check if moving to the left will exceed the limit of 0
        if (this.x - this.speed >= 0) {
          this.x -= this.speed; // Update X position based on the speed within the limit
        } else {
          this.x = 0; // Set X position to 0 to prevent going beyond the limit
        }
      }
      if (keyIsDown(RIGHT_ARROW)) {
        // Check if moving to the right will exceed the limit of 1100
        if (this.x + this.speed <= 1100) {
          this.x = min(this.x + this.speed, 1100); // Update X position based on the speed within the limit
        }
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
    
