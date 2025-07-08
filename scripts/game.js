let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = new Player(canvas.width / 2, canvas.height / 2);
let lastFrame = performance.now();
let fps = 0;

function loop(time) {
  let delta = time - lastFrame;
  lastFrame = time;
  fps = Math.round(1000 / delta);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTerrain(ctx);
  player.update();
  player.draw(ctx);
  updateHUD(fps);

  requestAnimationFrame(loop);
}

loop(performance.now());
