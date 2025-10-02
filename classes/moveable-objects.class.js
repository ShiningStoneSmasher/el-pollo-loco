class moveableObjects {
    position_x;
    position_y;
    speed;
    img;

    moveRight() {
    this.x += 10;
    console.log("character moves right");
    }

    moveLeft() {
        this.x -= 10;
        console.log("character moves left");
    }
}