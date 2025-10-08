let canvasRef;
let world;
let keyboard = new Keyboard();

function init() {
    canvasRef = document.getElementById("canvas");
    world = new World(canvasRef, keyboard);
}

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            keyboard.LEFT = true;            
            break;
        case " ":
            keyboard.UP = true;
            break;
        case "ArrowRight":
            keyboard.RIGHT = true;
            break;
    } });

    window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            keyboard.LEFT = false;            
            break;
        case " ":
            keyboard.UP = false;
            break;
        case "ArrowRight":
            keyboard.RIGHT = false;
            break;
    } });