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
        if(String.fromCharCode(e.which).toLowerCase() === 'i') {
            that.i = true;
        }
        if(String.fromCharCode(e.which).toLowerCase() === 'o') {
            that.o = true;
        }
        if(String.fromCharCode(e.which).toLowerCase() === 'p') {

            that.p = true;

        }
        if(String.fromCharCode(e.which).toLowerCase() === 'm') {
            that.m = true;
        }
        if(String.fromCharCode(e.which).toLowerCase() === 'l'){
            that.lKey = true;
        }

        if(String.fromCharCode(e.which).toLowerCase() === 'q'){
            that.q = true;
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
        if(String.fromCharCode(f.which).toLowerCase() === 'i') {
            that.i = false;
        }
        if(String.fromCharCode(f.which).toLowerCase() === 'o') {
            that.o = false;
        }
        if(String.fromCharCode(f.which).toLowerCase() === 'p') {
            that.p = false;
        }
        if(String.fromCharCode(f.which).toLowerCase() === 'm') {
            that.m = false;
        }
        if(String.fromCharCode(f.which).toLowerCase() === 'l'){
            that.lKey = false;
        }
        if(String.fromCharCode(f.which).toLowerCase() === 'q'){
            that.q = false;
        }
        console.log( "RELEASE");
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

}

