class moveableObjects {
  position_x;
  position_y;
  height;
  width;
  img;
  imageCache = {};
  currentImage = 0;
  otherDirection = false;

  speedY = 0;
  acceleration = 1;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround()) {
      this.speedY -= this.acceleration;
      this.position_y -= this.speedY;
      if (this.position_y > 250){
        this.position_y = 250;
      }
    }
    console.log(this.position_y);
    
    }, 1000 / 60);
  }
  isAboveGround() {
    return this.position_y < 250;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    this.position_x += this.speed;
  }

  moveLeft() {
    this.position_x -= this.speed;
  }
  jump() {
    this.position_y -= 10;
    console.log("character jumps");
  }
  animateObjects(images) {
    let index = this.currentImage % images.length;
    let path = images[index];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
