/**
 * Created by Mike on 5/10/16.
 */
function Animation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse) {
    this.spriteSheet = spriteSheet;
    this.startX = startX;
    this.startY = startY;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.reverse = reverse;
}

Animation.prototype.drawFrame = function (tick, ctx, x, y, scaleBy) {
    var scaleBy = scaleBy || 1;
    this.elapsedTime += tick;
    if (this.loop) {
        if (this.isDone()) {
            this.elapsedTime = 0;
        }
    } else if (this.isDone()) {
        return;
    }
    var index = this.reverse ? this.frames - this.currentFrame() - 1 : this.currentFrame();
    var vindex = 0;
    if ((index + 1) * this.frameWidth + this.startX > this.spriteSheet.width) {
        index -= Math.floor((this.spriteSheet.width - this.startX) / this.frameWidth);
        vindex++;
    }
    while ((index + 1) * this.frameWidth > this.spriteSheet.width) {
        index -= Math.floor(this.spriteSheet.width / this.frameWidth);
        vindex++;
    }

    var locX = x;
    var locY = y;
    var offset = vindex === 0 ? this.startX : 0;
    ctx.drawImage(this.spriteSheet,
        index * this.frameWidth + offset, vindex * this.frameHeight + this.startY,  // source from sheet
        this.frameWidth, this.frameHeight,
        locX, locY,
        this.frameWidth * scaleBy,
        this.frameHeight * scaleBy);
}

Animation.prototype.addFrame = function (startX, startY, numFrames, scanForward){
    var currentX = startX;
    var currentY = startY;
    var frames = numFrames || 1;
    
    for (var i = 0; i < frames; i += 1) {
        if (scanForward === false) {
            if (currentX < 0) {
                currentX = this.spriteSheet.width - this.frameWidth;
                currentY -= this.frameHeight;
            }
            this.frames.push(currentX)
            this.frames.push(currentY);
            currentX -= this.frameWidth;
        } else {    // scan forward
            if(currentX + this.frameWidth > this.spriteSheet.width) {
                currentX = 0;
                currentY += this.frameHeight;
            }
            this.frames.push(currentX)
            this.frames.push(currentY);
            currentX += this.frameWidth;
        }
    }
}

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

Animation.prototype.finalFrame= function () {
    return (this.currentFrame() + 1 >= this.frames.length /2);
}