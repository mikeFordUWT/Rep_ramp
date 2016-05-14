function TitleScreen(game, ASSEST_MANAGER, x, y){
    
    this.entity = new Entity(x, y,1280, 632);
    this.entity.removeUponRequest = false;
    var titleImage = "./img/titleScreen.png";
    var titleScreen = new Animation(ASSEST_MANAGER.getAsset("./img/titleScreen.png"));
    // titleScreen.addFrame(titleImage,0,0);
    
    this.entity.addAnimation(titleScreen);
}

TitleScreen.prototype = {
    update: function () {
        
    }
}
