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
ASSET_MANAGER.queueDownload("./img/Cruz/CruzDeadLeft.png");

//Right
ASSET_MANAGER.queueDownload("./img/Cruz/cruzStanding.png");
ASSET_MANAGER.queueDownload("./img/Cruz/cruzJump.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzPunch.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzLoKick.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzDuck.png");
ASSET_MANAGER.queueDownload("./img/Cruz/cruzWalkRight.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzHiKick.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzBlock.png");
ASSET_MANAGER.queueDownload("./img/Cruz/CruzDead.png");

//Hillary Clinton Left
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonStandingLeft.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonJumpLeft.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonPunchLeft.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonLoKickLeft.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonDuckLeft.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonWalkLeft.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonHiKickLeft.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonBlockLeft.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonDeadLeft.png");

//Right
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonStanding.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonJump.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonPunch.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonLoKick.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonDuck.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonWalkRight.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonHiKick.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonBlock.png");
ASSET_MANAGER.queueDownload("./img/Clinton/ClintonDead.png");

//Donald Trump Left
ASSET_MANAGER.queueDownload("./img/Trump/TrumpStandingLeft.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpJumpLeft.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpPunchLeft.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpLoKickLeft.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpDuckLeft.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpWalkLeft.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpHiKickLeft.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpBlockLeft.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpDeadLeft.png");
//Right
ASSET_MANAGER.queueDownload("./img/Trump/TrumpStanding.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpJump.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpPunch.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpLoKick.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpDuck.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpWalkRight.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpHiKick.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpBlock.png");
ASSET_MANAGER.queueDownload("./img/Trump/TrumpDead.png");

//Bernie Sanders Left
ASSET_MANAGER.queueDownload("./img/Sanders/SandersStandingLeft.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersJumpLeft.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersPunchLeft.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersLoKickLeft.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersDuckLeft.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersWalkLeft.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersHiKickLeft.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersBlockLeft.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersDeadLeft.png");
//Right
ASSET_MANAGER.queueDownload("./img/Sanders/SandersStanding.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersJump.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersPunch.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersLoKick.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersDuck.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersWalkRight.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersHiKick.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersBlock.png");
ASSET_MANAGER.queueDownload("./img/Sanders/SandersDead.png");

//Background
ASSET_MANAGER.queueDownload("./img/whiteHouse.jpg");

//Title Screen
ASSET_MANAGER.queueDownload("./img/titleScreen.png");

ASSET_MANAGER.downloadAll(function () {
    console.log("starting up da sheild");
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');

    var gameEngine = new GameEngine();

    //var unicorn = new TedCruz(gameEngine);

    var trump = "TRUMP"
    var cruz = "CRUZ"
    var clinton = "CLINTON"
    var sanders = "SANDERS"

    var unicorn2 = new Fighter(gameEngine,trump, ASSET_MANAGER, 200, 0, true, false, 1);
    var unicorn = new Fighter(gameEngine, trump, ASSET_MANAGER, 500, 0, false, true, 2);

    unicorn2.healthBar =10;
    var health = new Health("left", unicorn2);
    var health2 = new Health("right", unicorn);

    // var unicorn2 = new AIFighter(gameEngine,"bernieSanders", ASSET_MANAGER, 0, 0, false);
    // var unicorn = new AIFighter(gameEngine, "donaldTrump", ASSET_MANAGER, 1000, 0, false);

    gameEngine.addEntity(new Background(gameEngine, ASSET_MANAGER.getAsset("./img/whiteHouse.jpg")));

    var title = new Background(gameEngine, ASSET_MANAGER.getAsset("./img/titleScreen.png"));

    //gameEngine.addEntity(unicorn);
    gameEngine.addEntity(unicorn);
    gameEngine.addEntity(unicorn2);
    gameEngine.addEntity(health);
    gameEngine.addEntity(health2);


    gameEngine.addEntity(title);

    gameEngine.init(ctx);
    //background music
    var backgroundMusic = new Audio('./audio/songs/hailToTheChief.mp3');
    backgroundMusic.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    backgroundMusic.play();
    //fight intro
    var fightIntroMusic = new Audio('./audio/songs/fightIntro.mp3');
    fightIntroMusic.volume = 0.5;
    fightIntroMusic.addEventListener("ended", playNext);
    function playNext() {
        fightLoopMusic.play();
    };
    //fight loop
    var fightLoopMusic = new Audio('./audio/songs/fightLoop.mp3');
    fightLoopMusic.volume = 0.5;
    fightLoopMusic.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    canvas.addEventListener('focus', function (event) {
        var entities = gameEngine.entities;
        for(var i =0; i<entities.length; i++){
            if(entities[i] === title){
                entities.splice(i,1);

                break;
            }


        }
        backgroundMusic.pause();
        fightIntroMusic.play();
    });

    gameEngine.start();
});