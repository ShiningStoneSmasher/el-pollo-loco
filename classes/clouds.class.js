class Clouds extends moveableObjects {
  position_x;
  position_y = 0;
  height = 250;
  width = 350
  speed = 0.15;

  constructor(position_x) {
    super();
    this.position_x = position_x + Math.random() * 500;
    this.loadImage("img/5_background/layers/4_clouds/1.png");
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.position_x -= this.speed;
      if (this.position_x < -this.width) {
        this.position_x = 720 * 2;
      }
    }, 1000 / 60);
  }
}
