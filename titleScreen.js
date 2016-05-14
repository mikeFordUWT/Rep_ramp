function TitleScreen(game, ASSEST_MANAGER, x, y){
    
    this.entity = new Entity(x, y,1280, 632);
    this.entity.removeUponRequest = false;
    var titleScreen = new Animation(ASSEST_MANAGER.getAsset())
    titleScreen.addFrame(0,0);
    
    this.entity.addAnimation(titleScreen);
}

TitleScreen.prototype = {
    update: function () {
        
    }
}
