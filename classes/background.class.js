class Background extends moveableObjects {
  position_x = 0;
  position_y = 0;
  height = 480;
  width = 720;
  constructor(imgPath) {
    super();
    this.loadImage(imgPath);
  }
}
