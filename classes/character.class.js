class Character extends moveableObjects {
    position_x = 110;
    position_y = 280;

        jump() {
        this.y -= 10;
        console.log("character jumps");
    }
}