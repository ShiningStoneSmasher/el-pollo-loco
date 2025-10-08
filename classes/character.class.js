class Character extends moveableObjects {
  position_x = 100;
  position_y = 480 - 150;
  height = 150;
  width = 100;
  speed = 6;
  world;
  IMAGES_WALKING = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];
  currentImage = 0;

  constructor(world) {
    super();
    this.world = world;
    this.loadImage("img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_WALKING);
    this.animate(this.world.keyboard);
  }
  animate(keyboard) {
    setInterval(() => {
      if (keyboard.RIGHT) {
        this.moveRight();
      }
      if (keyboard.LEFT) {
        this.moveLeft();
      }
      if (keyboard.UP) {
        this.jump();
      }
    }, 1000 / 60);

    setInterval(() => {
      if (keyboard.RIGHT) {
        let i = this.currentImage % this.IMAGES_WALKING.length; // 0...5
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 1000 / 10);
  }
}
