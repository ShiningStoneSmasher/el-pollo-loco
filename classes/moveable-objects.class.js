class moveableObjects {
  position_x;
  position_y;
  height;
  width;
  img;
  imageCache = {};
  currentImage = 0;

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
}
