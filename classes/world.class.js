class World {
  ctx;
  canvas;
  character = new Character();
  enemies = [];
  clouds = new Clouds();
  background = [
    new Background("img/5_background/layers/air.png"),
    new Background("img/5_background/layers/4_clouds/full.png"),
    new Background("img/5_background/layers/3_third_layer/1.png"),
    new Background("img/5_background/layers/2_second_layer/1.png"),
    new Background("img/5_background/layers/1_first_layer/1.png"),
  ];

  constructor(canvasRef) {
    this.ctx = canvasRef.getContext("2d");
    this.canvas = canvasRef;
    this.enemies = [
      new Chicken(this),
      new Chicken(this),
      new Chicken(this)
    ];
    this.draw();
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.getObjects().forEach((object) => {
      if (Array.isArray(object)) {
        object.forEach((object) => this.addObjects(object));
      } else {
        this.addObjects(object);
      }
    });

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
  addObjects(mo) {
    this.ctx.drawImage(
      mo.img,
      mo.position_x,
      mo.position_y,
      mo.width,
      mo.height
    );
  }
  getObjects() {
    return [this.background, this.clouds, this.character, this.enemies];
  }
}
