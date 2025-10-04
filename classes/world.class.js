class World {
    ctx;
    canvas;
    character = new Character();
    enemies = [new Chicken(), new Chicken(), new Chicken()];

    constructor(canvasRef) {
        this.ctx = canvasRef.getContext("2d");
        this.canvas = canvasRef;
        this.draw();
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.character.img, this.character.position_x, this.character.position_y, this.character.width, this.character.height);
        this.enemies.forEach((enemy, i) => {
            this.ctx.drawImage(enemy.img, enemy.x * i, enemy.y);    
            console.log(i);
        });
        
    }   
}