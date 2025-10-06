class moveableObjects {
    position_x;
    position_y;
    height;
    width;
    speed;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
    this.position_x += 10;
    console.log("character moves right");
    }

    moveLeft() {
        this.position_x -= 10;
        console.log("character moves left");
    }
}