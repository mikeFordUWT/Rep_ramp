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

ASSET_MANAGER.queueDownload("./img/Cruz/CruzWinDance.png");

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

ASSET_MANAGER.queueDownload("./img/Clinton/ClintonWinDance.png");

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

ASSET_MANAGER.queueDownload("./img/Trump/TrumpWinDance.png");

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
ASSET_MANAGER.queueDownload("./img/Sanders/SandersWinDance.png");

//Background
ASSET_MANAGER.queueDownload("./img/whiteHouse.jpg");

//Title Screen
ASSET_MANAGER.queueDownload("./img/titleScreen.png");

ASSET_MANAGER.downloadAll(function () {
    console.log("starting up da sheild");
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');

    var gameEngine = new GameEngine();

    //Candidate array
    var candidates = ["CLINTON", "SANDERS", "CRUZ", "TRUMP"];

    //Pick a random fighter
    var rand1 = Math.floor(Math.random()*4);
    var rand2;
    if(rand1<=1){
        rand2 = Math.floor(Math.random()*2) + 2;
    }else if(rand1>=2){
        rand2 = Math.floor(Math.random() * 2);
    }

    //Select the random candidate from the array
    var fighter1 = candidates[rand1];
    var fighter2 = candidates[rand2];

    var unicorn2 = new Fighter(gameEngine, fighter1, ASSET_MANAGER, 100, 0, false, false, 1);
    var unicorn = new Fighter(gameEngine, fighter2, ASSET_MANAGER, canvas.width-200, 0, false, true, 2);

    //Give them health bars!
    var health = new Health("left", unicorn2);
    var health2 = new Health("right", unicorn);

    gameEngine.addEntity(new Background(gameEngine, ASSET_MANAGER.getAsset("./img/whiteHouse.jpg")));

    var title = new Background(gameEngine, ASSET_MANAGER.getAsset("./img/titleScreen.png"));

    gameEngine.addEntity(unicorn);
    gameEngine.addEntity(unicorn2);
    gameEngine.addEntity(health);
    gameEngine.addEntity(health2);


    gameEngine.addEntity(title);

    gameEngine.init(ctx);
    //background music
    backgroundMusic = new Audio('./audio/songs/hailToTheChief.mp3');
    // backgroundMusic.volume =0;
    backgroundMusic.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    backgroundMusic.play();
    //fight intro
    fightIntroMusic = new Audio('./audio/songs/fightIntro.mp3');
    fightIntroMusic.volume = 0.5;
    // fightIntroMusic.volume = 0;
    fightIntroMusic.addEventListener("ended", playNext);
    function playNext() {
        fightLoopMusic.play();
    };
    //fight loop
    fightLoopMusic = new Audio('./audio/songs/fightLoop.mp3');
    fightLoopMusic.volume = 0.5;
    // fightLoopMusic.volume = 0;
    fightLoopMusic.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);


    var firstClick = true;
    canvas.addEventListener('focus', function (event) {

        if(firstClick){
            var onePlayerBox = {x: 501, y: 448, width: 263, height: 42};
            var twoPlayerBox = {x: 504, y: 512, width: 260, height: 36};

            var onePlayer = true;
            if(gameEngine.click.x > onePlayerBox.x && gameEngine.click.y > onePlayerBox.y
                && gameEngine.click.x < onePlayerBox.x+ onePlayerBox.width && gameEngine.click.y < onePlayerBox.y + onePlayerBox.height){
                console.log("ONE!")
            }else if(gameEngine.click.x > twoPlayerBox.x && gameEngine.clicky > twoPlayerBox.y
                && gameEngine.click.x < twoPlayerBox.x + twoPlayerBox.width && gameEngine.click.y < twoPlayerBox.y + twoPlayerBox.height){
                console.log("TWO!")
            }
        }
        var entities = gameEngine.entities;
        for(var i =0; i<entities.length; i++){
            if(entities[i] === title){
                entities.splice(i,1);
                break;
            }


        }

        for(var i = 0; i< entities.length; i++){
            if(entities[i].AI){
                entities[i].move = true;
                break;
            }
        }
        backgroundMusic.volume =0;
        fightIntroMusic.play();
    });

    // for(var i = 0; i<sound_effects.length; i++){
    //     sound_effects[i].volume =0;
    // }

    mute = 1;
    gameEngine.start();
});

function functionVolume() {
    if(mute === 0){
        fightLoopMusic.volume = 1;
        if(!backgroundMusic.paused){
            backgroundMusic.volume = 1;
        }
        for(i=0; i<sound_effects.length; i++){
            sound_effects[i].volume = 1;
        }
        mute = 1;

    } else {
        backgroundMusic.volume = 0;
        fightIntroMusic.volume = 0;
        fightLoopMusic.volume = 0;
        for(var i=0; i<sound_effects.length; i++){
            sound_effects[i].volume = 0;
        }
        mute = 0;
    }


}