
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

// the "main" code begins here

var ASSET_MANAGER = new AssetManager();

//Ted Cruz Left
ASSET_MANAGER.queueDownload("./img/Cruz/cruzStandingLeft.png");
ASSET_MANAGER.queueDownload("./img/Cruz/cruzJumpLeft.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzPunchLeft.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzLoKickLeft.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzDuckLeft.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzWalkLeft.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzHiKickLeft.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzBlockLeft.png");
//Right
ASSET_MANAGER.queueDownload("./img/Cruz/cruzStanding.png");
ASSET_MANAGER.queueDownload("./img/Cruz/cruzJump.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzPunch.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzLoKick.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzDuck.png");
ASSET_MANAGER.queueDownload("./img/Cruz/cruzWalkRight.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzHiKick.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzBlock.png");

//Hillary Clinton Left
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonStandingLeft.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonJumpLeft.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonPunchLeft.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonLoKickLeft.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonDuckLeft.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonWalkLeft.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonHiKickLeft.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonBlockLeft.png");
//Right
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonStanding.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonJump.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonPunch.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonLoKick.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonDuck.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonWalkRight.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonHiKick.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonBlock.png");

//Donald Trump Left
ASSET_MANAGER.queueDownload("./img/Trump/TrumpStandingLeft.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpJumpLeft.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpPunchLeft.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpLoKickLeft.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpDuckLeft.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpWalkLeft.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpHiKickLeft.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpBlockLeft.png");
//Right
ASSET_MANAGER.queueDownload("./img/Trump/TrumpStanding.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpJump.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpPunch.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpLoKick.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpDuck.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpWalkRight.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpHiKick.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpBlock.png");

//Bernie Sanders Left
ASSET_MANAGER.queueDownload("./img/Sanders/SandersStandingLeft.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersJumpLeft.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersPunchLeft.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersLoKickLeft.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersDuckLeft.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersWalkLeft.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersHiKickLeft.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersBlockLeft.png");
//Right
ASSET_MANAGER.queueDownload("./img/Sanders/SandersStanding.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersJump.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersPunch.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersLoKick.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersDuck.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersWalkRight.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersHiKick.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersBlock.png");

//Background
ASSET_MANAGER.queueDownload("./img/whiteHouse.jpg");
ASSET_MANAGER.queueDownload("./img/titleScreen.png");

ASSET_MANAGER.downloadAll(function () {
    console.log("starting up da sheild");
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');

    var gameEngine = new GameEngine();

    var trump = "donaldTrump"
    var cruz = "tedCruz"
    var clinton = "hillaryClinton"
    var sanders = "bernieSanders"

    gameEngine.init(ctx);
    var fighter = new Fighter(gameEngine,trump, ASSET_MANAGER, 100, 0, true);
    // var fighter2 = new AIFighter(gameEngine, trump, ASSET_MANAGER, 100, 0, true);
    gameEngine.addEntity(new Background(gameEngine, ASSET_MANAGER.getAsset("./img/whiteHouse.jpg")));
    var title = new Background(gameEngine, ASSET_MANAGER.getAsset("./img/titleScreen.png"));
    gameEngine.addEntity(fighter);
    // gameEngine.addEntity(fighter2);
    gameEngine.addEntity(title);





    canvas.addEventListener('focus', function (event) {
        var ents = gameEngine.entities;

        for(var j = 0; j< ents.length; j++){
            if(ents[j] === title){
                ents.splice(j,1);
                break;
            }
        }
        for(var i = 0; i< ents.length; i++){
            if(ents[i]===fighter2){
                fighter2.move = true;
                break;
            }

        }

    });

    gameEngine.start();
});