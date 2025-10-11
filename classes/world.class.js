class World {
  ctx;
  canvas;
  keyboard;
  character;
  camera_x = 0;
  objects;

  constructor(canvasRef, keyboard) {
    this.ctx = canvasRef.getContext("2d");
    this.canvas = canvasRef;
    this.keyboard = keyboard;
    this.objects = new Level(level1.enemies, level1.clouds, level1.background);
    this.character = new Character(this);
    this.draw();
    console.log(this);
    
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.getObjects().forEach((object) => {
      if (Array.isArray(object)) {
        object.forEach((object) => this.addObjects(object));
      } else {
        this.addObjects(object);
      }
    });

    this.ctx.translate(-this.camera_x, 0);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
  addObjects(mo) {
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.width, 0);
      this.ctx.scale(-1, 1);
      mo.position_x = mo.position_x * -1;
    }

    this.ctx.drawImage(
      mo.img,
      mo.position_x,
      mo.position_y,
      mo.width,
      mo.height
    );

    if (mo.otherDirection) {
      mo.position_x = mo.position_x * -1;
      this.ctx.restore();
    }
  }
  getObjects() {
    return [
      this.objects.background,
      this.objects.clouds,
      this.character,
      this.objects.enemies];
  }
}
