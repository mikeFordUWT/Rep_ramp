

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

function StartScreen(game, img) {
    this.toDraw = img;
    var img1 = document.createElement("img");

    // img1.onclick = function () {
    //     document.body.removeChild(img1);
    // }
    this.x = 0;
    this.y = 0;
    Entity.call(this, game, 0,0);
    this.game = game;
    this.ctx = game.ctx;
    // this.image = new Image();
    // this.image.src = img;
    // var title = ctx.drawImage(this.image, 100, 50);
    // title.onclick = function () {
    //     //TODO
    // }

}

StartScreen.prototype = new Entity();
StartScreen.prototype.constructor = StartScreen;
StartScreen.prototype.update = function () {

}

StartScreen.prototype.draw = function (ctx) {
    // var hello = ctx.drawImage(this.toDraw, 100, 200);

}



var ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./img/whiteHouse.jpg");
ASSET_MANAGER.queueDownload("./img/title2.png");

ASSET_MANAGER.downloadAll(function () {
    console.log("Downloading assets");
    var canvas = document.getElementById('testCanvas');
    var ctx = canvas.getContext('2d');

    var gameEngine = new GameEngine();
    // var startScreen = new StartScreen(gameEngine,ASSET_MANAGER.getAsset("./img/title2.png"));
    gameEngine.addEntity(new Background(gameEngine, ASSET_MANAGER.getAsset("./img/whiteHouse.jpg")));
    gameEngine.addEntity(new StartScreen(gameEngine,ASSET_MANAGER.getAsset("./img/title2.png")));
    gameEngine.init(ctx);
    gameEngine.start();

})