class Character extends moveableObjects {
  position_x = 100;
  position_y = 480 - 230 - 200;
  height = 180;
  width = 100;
  speed = 6;
  world;

  
  currentImage = 0;

  constructor(world) {
    super();
    this.world = world;
    this.loadImage("img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(imagesPepe.IMAGES_WALKING);
    this.loadImages(imagesPepe.IMAGES_JUMPING);
    this.loadImages(imagesPepe.IMAGES_IDLE);
    this.loadImages(imagesPepe.IMAGES_IDLE_LONG);
    this.animate(this.world.keyboard);
    this.applyGravity();
    this.world.keyboard.startTimer();
  }
  animate(keyboard) {
    setInterval(() => {
      if (keyboard.RIGHT && this.position_x < 1420 + 720 - this.width) {
        this.otherDirection = false;
        this.moveRight();        
      }
      if (keyboard.LEFT && this.position_x > 0) {        
        this.otherDirection = true;
        this.moveLeft();
      }
      if (keyboard.UP && !this.isAboveGround()) {
        this.jump();
      }
      this.world.camera_x = -this.position_x + this.width;
      if (this.world.camera_x > 0) {
        this.world.camera_x = 0;        
      }
      if (this.position_x >= 1420 + this.width) {
        this.world.camera_x = -1420;
      }
    }, 1000 / 60);


    setInterval(() => {      
      if (this.isAboveGround()) {
        this.animateObjects(imagesPepe.IMAGES_JUMPING);
        return;
      }
      if (keyboard.RIGHT || keyboard.LEFT) {
        this.animateObjects(imagesPepe.IMAGES_WALKING);
        return;
      }
      if (keyboard.timerFinished) {
        this.animateObjects(imagesPepe.IMAGES_IDLE_LONG);
        return;
      }
      this.animateObjects(imagesPepe.IMAGES_IDLE);
    }, 1000 / 10);
  }
}
