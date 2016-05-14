
function Entity(game, x, y) {
    this.game = game;
    this.animationList = [];
    this.currentAnimation = 0;
    
    this.x = x;
    this.y = y;
    this.removeFromWorld = false;
    
    this.controllable = false;
    this.temporary =false;
    this.removeUponRequest = false;
    
}

Entity.prototype.update = function () {
}

Entity.prototype.draw = function (ctx) {
    if (this.game.showOutlines && this.radius) {
        this.game.ctx.beginPath();
        this.game.ctx.strokeStyle = "green";
        this.game.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.game.ctx.stroke();
        this.game.ctx.closePath();
    }
}

Entity.prototype.rotateAndCache = function (image, angle) {
    var offscreenCanvas = document.createElement('canvas');
    var size = Math.max(image.width, image.height);
    offscreenCanvas.width = size;
    offscreenCanvas.height = size;
    var offscreenCtx = offscreenCanvas.getContext('2d');
    offscreenCtx.save();
    offscreenCtx.translate(size / 2, size / 2);
    offscreenCtx.rotate(angle);
    offscreenCtx.translate(0, 0);
    offscreenCtx.drawImage(image, -(image.width / 2), -(image.height / 2));
    offscreenCtx.restore();
    //offscreenCtx.strokeStyle = "red";
    //offscreenCtx.strokeRect(0,0,size,size);
    return offscreenCanvas;
}

Entity.prototype.addAnimation = function (newAnimation) {
    this.animationList.push(newAnimation);
}

Entity.prototype.getCenter = function () {
    return {
        x:(this.x + this.y /2),
        y:(this.y + this.y /2)
    }
}