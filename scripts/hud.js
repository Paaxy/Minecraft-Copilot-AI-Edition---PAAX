function updateHUD(fps) {
  document.getElementById("fps").textContent = `FPS: ${fps}`;
  document.getElementById("tps").textContent = `TPS: 20`;
  document.getElementById("ping").textContent = `Ping: ~${Math.floor(Math.random() * 30)}ms`;
}
