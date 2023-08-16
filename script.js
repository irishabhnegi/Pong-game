import Ball from "./ball.js";

const ball = new Ball(document.getElementById("ball"));


let lastTime;
function update(time) {

    if (lastTime != null) {
        const delta = time - lastTime;
        // update code
        console.log(delta)

    }

    lastTime = time
    window.requestAnimationFrame(update)
}

// setInterval(update, 10);

window.requestAnimationFrame(update)