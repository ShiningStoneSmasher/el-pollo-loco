class Character extends moveableObjects {
  position_x = 100;
  position_y = 480 - 150;
  height = 150;
  width = 100;

  constructor() {
    super();
    this.loadImage("img/2_character_pepe/2_walk/W-21.png");
  }

  jump() {
    this.y -= 10;
    console.log("character jumps");
  }
}
