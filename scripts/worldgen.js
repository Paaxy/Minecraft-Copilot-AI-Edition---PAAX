function drawTerrain(ctx) {
  const scale = 0.007;
  const heightScale = 120;
  const baseY = canvas.height * 0.65;

  perlin.seed(42); // Use world seed later

  ctx.fillStyle = "#228B22";
  for (let x = 0; x < canvas.width; x++) {
    const noise = perlin.get(x * scale, 0);
    const y = baseY - noise * heightScale;
    ctx.fillRect(x, y, 1, canvas.height);
  }
}
