class Chicken extends moveableObjects {
    position_x = (Math.random() * 500);
    position_y = (480 - 100);
    height = 100;
    width = 100;
  constructor() {
    
    super();
    this.loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
  }
}
