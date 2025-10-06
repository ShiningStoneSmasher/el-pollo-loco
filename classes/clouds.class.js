class Clouds extends moveableObjects {
  position_x = Math.random() * 500;
  position_y = 0;
  height = 250;
  width = 350

  constructor() {
    super();
    this.loadImage("img/5_background/layers/4_clouds/1.png");
  }
}
