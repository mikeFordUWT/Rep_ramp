// This game shell was happily copied from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (/* function */ callback, /* DOMElement */ element) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

// function Timer() {
//     this.gameTime = 0;
//     this.maxStep = 0.05;
//     this.wallLastTimestamp = 0;
// }
//
// Timer.prototype.tick = function () {
//     var wallCurrent = Date.now();
//     var wallDelta = (wallCurrent - this.wallLastTimestamp) / 1000;
//     this.wallLastTimestamp = wallCurrent;
//
//     var gameDelta = Math.min(wallDelta, this.maxStep);
//     this.gameTime += gameDelta;
//     return gameDelta;
// }

function GameEngine() {
    this.entities = [];
    this.showOutlines = false;
    this.ctx = null;

    this.agents =[];
    this.removedAgents =[];



    this.click = null;
    this.mouse = null;
    this.wheel = null;
    this.surfaceWidth = null;
    this.surfaceHeight = null;
}

GameEngine.prototype.init = function (ctx) {
    this.ctx = ctx;
    this.surfaceWidth = this.ctx.canvas.width;
    this.surfaceHeight = this.ctx.canvas.height;
    this.startInput();
    this.timer = new Timer();
    console.log('game initialized');
}

GameEngine.prototype.addAgent = function (agent) {
    this.agents.push(agent);
}

GameEngine.prototype.start = function () {
    console.log("starting game");
    var that = this;
    (function gameLoop() {
        that.loop();
        requestAnimFrame(gameLoop, that.ctx.canvas);
    })();
}


GameEngine.prototype.startInput = function () {
    console.log('Starting input');
    var that = this;
    var getXandY = function (e) {
        var x = e.clientX - that.ctx.canvas.getBoundingClientRect().left;
        var y = e.clientY - that.ctx.canvas.getBoundingClientRect().top;

        if (x < 1024) {
            x = Math.floor(x / 32);
            y = Math.floor(y / 32);
        }

        return { x: x, y: y };
    }

    this.ctx.canvas.addEventListener("click", function (e) {
        
        that.click = getXandY(e);
        console.log(e);
        console.log("Left Click Event - X,Y " + e.clientX + ", " + e.clientY);
    }, false);
    this.ctx.canvas.addEventListener("keydown", function (e) {
        var h = that.o;
        var keyStrokes = [that.a, that.s, that.d, that.w, that.i, that.o, that.p,that.m, that.lKey];


        if(String.fromCharCode(e.which).toLowerCase() === 'a'){
            that.a = true;
        }
        if(String.fromCharCode(e.which).toLowerCase() === 's') {
            that.s = true;
        }
        if(String.fromCharCode(e.which).toLowerCase() === 'd') {
            that.d = true;
        }
        if(String.fromCharCode(e.which).toLowerCase() === 'w') {
            that.w = true;
        }
        if(String.fromCharCode(e.which).toLowerCase() === 'i') {//N?A
            that.i = true;
        }
        if(String.fromCharCode(e.which).toLowerCase() === 'o') {
            that.o = true;
        }
        if(String.fromCharCode(e.which).toLowerCase() === 'p') {//N?A
            that.p = true;
        }
        if(String.fromCharCode(e.which).toLowerCase() === 'm') {//N?A
            that.m = true;
        }
        if(String.fromCharCode(e.which).toLowerCase() === 'l'){
            that.lKey = true;
        }
        if(String.fromCharCode(e.which).toLowerCase() === 'q'){
            that.q = true;
        }
        if(String.fromCharCode(e.which).toLowerCase() === 'r'){//New Below the Waist
            that.r = true;
        }
        if(String.fromCharCode(e.which).toLowerCase() === 't'){
            that.t = true;
        }
        if(String.fromCharCode(e.which).toLowerCase() === 'y'){
            that.y = true;
        }
        if(String.fromCharCode(e.which).toLowerCase() === 'k'){
            that.k = true;
        }
        if(e.which === 186|| e.which === 59){
            that.pasta = true;
        }
        if(e.which === 219){
            that.leftB = true;
        }
        if(e.which === 221){
            that.rightB = true;
        }
        if(e.which === 220){
            that.backS = true;
        }
        if(e.which === 16){//SHIFT
            if(e.location === 1) {//LEFT
                that.leftShift = true;
            } else if(e.location === 2) {//RIGHT
                that.rightShift = true;
            }
        }

        //console.log(e);
        //e.preventDefault();
    }, false);

    this.ctx.canvas.addEventListener("keyup",function(f){
        var h = that.o;
        var keyStrokes = [that.a, that.s, that.d, that.w, that.i, that.o, that.p,that.m, that.lKey];

        if(String.fromCharCode(f.which).toLowerCase() === 'a'){
            that.a = false;
        }
        if(String.fromCharCode(f.which).toLowerCase() === 's') {
            that.s = false;
        }
        if(String.fromCharCode(f.which).toLowerCase() === 'd') {
            that.d = false;
        }
        if(String.fromCharCode(f.which).toLowerCase() === 'w') {
            that.w = false;
        }
        if(String.fromCharCode(f.which).toLowerCase() === 'i') {//N?A
            that.i = false;
        }
        if(String.fromCharCode(f.which).toLowerCase() === 'o') {
            that.o = false;
        }
        if(String.fromCharCode(f.which).toLowerCase() === 'p') {//N?A
            that.p = false;
        }
        if(String.fromCharCode(f.which).toLowerCase() === 'm') {//N?A
            that.m = false;
        }
        if(String.fromCharCode(f.which).toLowerCase() === 'l'){
            that.lKey = false;
        }
        if(String.fromCharCode(f.which).toLowerCase() === 'q'){
            that.q = false;
        }
        if(String.fromCharCode(f.which).toLowerCase() === 'r'){// NEW Below the Waist
            that.r = false;
        }
        if(String.fromCharCode(f.which).toLowerCase() === 't'){
            that.t = false;
        }
        if(String.fromCharCode(f.which).toLowerCase() === 'y'){
            that.y = false;
        }
        if(String.fromCharCode(f.which).toLowerCase() === 'k'){
            that.k = false;
        }
        if(f.which === 186 || f.which === 59){// ;
            that.pasta = false;
        }
        if(f.which === 219){//Left Bracket
            that.leftB = false;
        }
        if(f.which === 221){//Right Bracket
            that.rightB = false;
        }
        if(f.which === 220){//Back Slash
            that.backS = false;
        }
        if(f.which === 16) {//Shift
            if(f.location === 1) {//LEFT
                that.leftShift = false;
            } else if(f.location === 2) {//RIGHT
                that.rightShift = false;
            }
        }
        //console.log( "RELEASE");
        //e.preventDefault();
    },false);

    console.log('Input started');
}

GameEngine.prototype.addEntity = function (entity) {
    console.log('added entity');
    this.entities.push(entity);
}

GameEngine.prototype.draw = function () {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.save();
    for (var i = 0; i < this.entities.length; i++) {
        this.entities[i].draw(this.ctx);
    }
    this.ctx.restore();
}

GameEngine.prototype.update = function () {
    var entitiesCount = this.entities.length;

    for (var i = 0; i < entitiesCount; i++) {
        var entity = this.entities[i];

        if (!entity.removeFromWorld) {
            entity.update();
        }
    }

    for (var i = this.entities.length - 1; i >= 0; --i) {
        if (this.entities[i].removeFromWorld) {
            this.entities.splice(i, 1);
        }
    }
}

GameEngine.prototype.loop = function () {
    this.clockTick = this.timer.tick();
    this.update();
    this.draw();

    this.p = null;
    this.a = null;
    this.s = null;
    this.w = null;
    this.d = null;
    this.i = null;
    this.o = null;
    this.q = null;
    this.lKey = null;
    this.t = null;
    this.y = null;
    this.k = null;
    this.pasta = null;
    this.leftB = null;
    this.rightB = null;
    this.backS = null;
    this.rightShift = null;
    this.leftShift = null;
    this.click = null;

}