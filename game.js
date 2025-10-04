let canvasRef;
let world;


function init() {
    canvasRef = document.getElementById("canvas");
    world = new World(canvasRef);
    console.log(world.character);
    console.log(world.enemies);
}