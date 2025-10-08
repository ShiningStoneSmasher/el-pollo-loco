class moveableObjects {
  position_x;
  position_y;
  height;
  width;
  speed;
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
    this.position_x += 10;
  }

  moveLeft() {
    setInterval(() => {
      this.position_x -= this.speed;
    }, 1000 / 60);
  }
  jump() {
    this.y -= 10;
    console.log("character jumps");
  }
}
