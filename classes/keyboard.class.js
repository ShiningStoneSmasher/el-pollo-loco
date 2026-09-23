class Keyboard  {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    
    timerFinished = false;
    timer = null;

    startTimer() {
        this.timerFinished = false;

        clearTimeout(this.timer);

        this.timer = setTimeout(() => {
            this.timerFinished = true;
        }, 5000);
    }

    constructor() {
        
    }
}

