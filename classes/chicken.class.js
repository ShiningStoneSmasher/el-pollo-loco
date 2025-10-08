class Chicken extends moveableObjects {
  position_x = 200 + Math.random() * 500;
  position_y = 480 - 100;
  height = 100;
  width = 100;
  speed = 0.35 + Math.random() * 0.25;
  IMAGES_WALKING = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];
  deadChicken = ["img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];
  
  chickenIsDead = false;

  constructor(world) {
    super();
    this.world = world;
    this.loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
  }

animate() {
  this.moveLeft();
  this.intervalId = setInterval(() => {
    let index = this.currentImage % this.IMAGES_WALKING.length;
    let path = this.IMAGES_WALKING[index];
    this.img = this.imageCache[path];
    this.currentImage++;
  /*   this.position_x -= this.speed * 0.7; */

    if (this.position_x < -this.width) {
      clearInterval(this.intervalId);
    }
  }, 1000 / 10);
}
}
