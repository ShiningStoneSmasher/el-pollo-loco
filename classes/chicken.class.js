class Chicken extends moveableObjects {
  position_x = 200 + Math.random() * 500;
  position_y = 480 - 130;
  height = 80;
  width = 80;
  speed = 1 + Math.random();
  IMAGES_WALKING = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];
  deadChicken = ["img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];

  chickenIsDead = false;
  chicken_id;

  constructor(world, id) {
    super();
    this.world = world;
    this.chicken_id = id;
    this.loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);


    this.intervalId = setInterval(() => {

      this.animateObjects(this.IMAGES_WALKING);


      if (this.position_x < -this.width) {
        console.log("chicken is out of the screen");
        clearInterval(this.intervalId);
      }

    }, 1000 / 10);
  }
}
