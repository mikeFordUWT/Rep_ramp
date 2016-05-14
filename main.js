// function Animation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse) {
//     this.spriteSheet = spriteSheet;
//     this.startX = startX;
//     this.startY = startY;
//     this.frameWidth = frameWidth;
//     this.frameDuration = frameDuration;
//     this.frameHeight = frameHeight;
//     this.frames = frames;
//     this.totalTime = frameDuration * frames;
//     this.elapsedTime = 0;
//     this.loop = loop;
//     this.reverse = reverse;
// }
//
// Animation.prototype.drawFrame = function (tick, ctx, x, y, scaleBy) {
//     var scaleBy = scaleBy || 1;
//     this.elapsedTime += tick;
//     if (this.loop) {
//         if (this.isDone()) {
//             this.elapsedTime = 0;
//         }
//     } else if (this.isDone()) {
//         return;
//     }
//     var index = this.reverse ? this.frames - this.currentFrame() - 1 : this.currentFrame();
//     var vindex = 0;
//     if ((index + 1) * this.frameWidth + this.startX > this.spriteSheet.width) {
//         index -= Math.floor((this.spriteSheet.width - this.startX) / this.frameWidth);
//         vindex++;
//     }
//     while ((index + 1) * this.frameWidth > this.spriteSheet.width) {
//         index -= Math.floor(this.spriteSheet.width / this.frameWidth);
//         vindex++;
//     }
//
//     var locX = x;
//     var locY = y;
//     var offset = vindex === 0 ? this.startX : 0;
//     ctx.drawImage(this.spriteSheet,
//         index * this.frameWidth + offset, vindex * this.frameHeight + this.startY,  // source from sheet
//         this.frameWidth, this.frameHeight,
//         locX, locY,
//         this.frameWidth * scaleBy,
//         this.frameHeight * scaleBy);
// }
//
// Animation.prototype.currentFrame = function () {
//     return Math.floor(this.elapsedTime / this.frameDuration);
// }
//
// Animation.prototype.isDone = function () {
//     return (this.elapsedTime >= this.totalTime);
// }

// An array of _sounds

// var SOUNDS = {
//     titleScreenMusic: new Howl({
//         src:['./audio/songs/hailToTheChief.mp3'],
//         loop:true
//     })
//
//
// };

function Background(game, spriteSheet) {
    this.spriteSheet = spriteSheet;
    this.x = 0;
    this.y = 0;
    Entity.call(this, game, 0, 0);
    this.game = game;
    this.ctx = game.ctx;
}

Background.prototype = new Entity();
Background.prototype.constructor = Background;

Background.prototype.update = function () {
}

Background.prototype.draw = function (ctx) {
    ctx.drawImage(this.spriteSheet, this.x, this.y);
    // Entity.prototype.draw.call(this);
}

function TedCruz(game) {
    this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzStanding.png"), 0, 0, 157, 292, 0.099, 6, true, false);
    this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzJump.png"), 0, 0, 234, 311, 0.06, 20, false, false);
    this.punchingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzPunch.png"), 0, 0, 295, 317, 0.06, 12, false, false);
    this.lowKickingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzLoKick.png"), 0, 0, 285, 315, 0.06, 12, false, false);
    this.duckingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzDuck.png"), 0, 0, 192, 294, 0.06, 12, false, false);
    this.walkRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzWalkRight.png"), 0, 0, 144, 292, 0.06, 20, false, false);
    this.walkLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzWalkLeft.png"), 0, 0, 144.15, 292, 0.06, 20, false, false);
    this.highKickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzHiKick.png"), 0, 0, 276, 317, 0.06, 12, false, false);

    //animation booleans
    this.jumping = false;
    this.punching = false;
    this.ducking = false;
    this.walkLeft = false;
    this.walkRight = false;
    this.lowKicking = false;
    this.highKicking = false;

    //health variable
    this.health  = 100;

    //speed variable
    this.speed = 0;

    this.radius = 100;
    this.ground = 300;
    Entity.call(this, game, 0, 300);
}

TedCruz.prototype = new Entity();
TedCruz.prototype.constructor = TedCruz;

// the "main" code begins here

var ASSET_MANAGER = new AssetManager();


ASSET_MANAGER.queueDownload("./img/Cruz/cruzStanding.png");
ASSET_MANAGER.queueDownload("./img/Cruz/cruzJump.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzPunch.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzLoKick.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzDuck.png");
ASSET_MANAGER.queueDownload("./img/Cruz/cruzWalkRight.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzWalkLeft.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzHiKick.png");
//TODO need cruz block
//ASSET_MANAGER.queueDownload("./img/Cruz/CruzBlock.png");

ASSET_MANAGER.queueDownload("./img/Clinton/ClintonStanding.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonJump.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonPunch.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonLoKick.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonDuck.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonWalkRight.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonWalkLeft.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonHiKick.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonBlock.png");

ASSET_MANAGER.queueDownload("./img/Trump/TrumpStanding.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpJump.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpPunch.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpLoKick.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpDuck.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpWalkRight.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpWalkLeft.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpHiKick.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpBlock.png");

ASSET_MANAGER.queueDownload("./img/Sanders/SandersStanding.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersJump.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersPunch.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersLoKick.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersDuck.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersWalkRight.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersWalkLeft.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersHiKick.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersBlock.png");

ASSET_MANAGER.queueDownload("./img/whiteHouse.jpg");

ASSET_MANAGER.downloadAll(function () {
    console.log("starting up da sheild");
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    //var unicorn = new TedCruz(gameEngine);
    var unicorn2 = new Fighter(gameEngine,"donaldTrump", ASSET_MANAGER, 0, 0, true);
    var unicorn = new Fighter(gameEngine, "bernieSanders", ASSET_MANAGER, 1000, 0, false);

    gameEngine.addEntity(new Background(gameEngine, ASSET_MANAGER.getAsset("./img/whiteHouse.jpg")));

    //gameEngine.addEntity(unicorn);
    gameEngine.addEntity(unicorn);
    gameEngine.addEntity(unicorn2);


    var titleScreen = new TitleScreen(gameEngine, ASSET_MANAGER, 0, 0);

    titleScreen.entity.removeUponRequest = true;
    canvas.addEventListener('focus', function (event) {
        var agents = gameEngine.agents;
        for(var i = 0; i <agents.length; i++){
            if(agents[i] === titleScreen){
                agents.splice(i, 1);
                break;
            }
        }
    }, false);
    gameEngine.start();
    

});