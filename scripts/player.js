class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = "assets/skins/zir.png"; // Default skin for now
  }

  update() {
    // Movement coming soon!
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x - 32, this.y - 64, 64, 64);
  }
}
