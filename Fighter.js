/**
 * Created by Mike on 5/10/16.
 */



function Fighter(game, fighterName, ASSET_MANAGER) {
    if(fighterName === "tedCruz"){
        this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzStanding.png"), 0, 0, 157, 292, 0.099, 6, true, false);
        this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzJump.png"), 0, 0, 234, 311, 0.06, 20, false, false);
        this.punchingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzPunch.png"), 0, 0, 295, 317, 0.06, 12, false, false);
        this.lowKickingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzLoKick.png"), 0, 0, 285, 315, 0.06, 12, false, false);
        this.duckingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzDuck.png"), 0, 0, 192, 294, 0.06, 12, false, false);
        this.walkRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzWalkRight.png"), 0, 0, 144, 292, 0.06, 20, false, false);
        this.walkLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzWalkLeft.png"), 0, 0, 144.15, 292, 0.06, 20, false, false);
        this.highKickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzHiKick.png"), 0, 0, 276, 317, 0.06, 12, false, false);

    }else if(fighterName ==="hillaryClinton"){
        this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonStanding.png"), 0, 0, 157, 292, 0.099, 6, true, false);
        this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonJump.png"), 0, 0, 234, 311, 0.06, 20, false, false);
        this.punchingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonPunch.png"), 0, 0, 295, 317, 0.06, 12, false, false);
        this.lowKickingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonLoKick.png"), 0, 0, 285, 315, 0.06, 12, false, false);
        this.duckingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzDuck.png"), 0, 0, 192, 294, 0.06, 12, false, false);
        this.walkRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonWalkRight.png"), 0, 0, 144, 292, 0.06, 20, false, false);
        // this.walkLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonWalkLeft.png"), 0, 0, 144.15, 292, 0.06, 20, false, false);
        this.highKickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonHiKick.png"), 0, 0, 276, 317, 0.06, 12, false, false);
    }else if(fighterName === "donaldTrump"){
        this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpStanding.png"), 0, 0, 157, 292, 0.099, 6, true, false);
        this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpJump.png"), 0, 0, 234, 311, 0.06, 20, false, false);
        this.punchingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpPunch.png"), 0, 0, 295, 317, 0.06, 12, false, false);
        this.lowKickingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpLoKick.png"), 0, 0, 285, 315, 0.06, 12, false, false);
        this.duckingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpDuck.png"), 0, 0, 192, 294, 0.06, 12, false, false);
        this.walkRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpWalkRight.png"), 0, 0, 144, 292, 0.06, 20, false, false);
        // this.walkLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonWalkLeft.png"), 0, 0, 144.15, 292, 0.06, 20, false, false);
        this.highKickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpHiKick.png"), 0, 0, 276, 317, 0.06, 12, false, false);
    }else if(fighterName === "bernieSanders"){
        this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersStanding.png"), 0, 0, 157, 292, 0.099, 6, true, false);
        this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersJump.png"), 0, 0, 234, 311, 0.06, 20, false, false);
        this.punchingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersPunch.png"), 0, 0, 295, 317, 0.06, 12, false, false);
        this.lowKickingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersLoKick.png"), 0, 0, 285, 315, 0.06, 12, false, false);
        this.duckingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersDuck.png"), 0, 0, 192, 294, 0.06, 12, false, false);
        this.walkRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersWalkRight.png"), 0, 0, 144, 292, 0.06, 20, false, false);
        // this.walkLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonWalkLeft.png"), 0, 0, 144.15, 292, 0.06, 20, false, false);
        this.highKickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersHiKick.png"), 0, 0, 276, 317, 0.06, 12, false, false);
    }

    this.jumping = false;
    this.punching = false;
    this.ducking = false;
    this.walkLeft = false;
    this.walkRight = false;
    this.lowKicking = false;
    this.highKicking = false;
    this.block = false;

    //health variable
    this.health  = 100;

    //speed variable
    this.speed = 0;

    this.radius = 100;
    this.ground = 300;
    Entity.call(this, game, 0, 300);
}


Fighter.prototype = new Entity();

Fighter.prototype.constructor = Fighter;

Fighter.prototype.update = function(){
    //jumping logic
    //jumping logic
    if (this.game.w) {
        this.jumping = true;
    }else if(this.game.p){
        console.log("p pressed")
        this.punching = true;
    } else if(this.game.i) {
        this.lowKicking=true;
    } else if(this.game.o) {
        this.highKicking=true;
    } else if(this.game.s) {
        this.ducking=true;
    } else if (this.game.d) {
        this.walkRight = true;
    }else if(this.game.a){
        this.walkLeft = true;
    }

    if (this.jumping) {
        if (this.jumpAnimation.isDone()) {
            this.jumpAnimation.elapsedTime = 0;
            this.jumping = false;
        }
        var jumpDistance = this.jumpAnimation.elapsedTime / this.jumpAnimation.totalTime;
        var totalHeight = 200;

        if (jumpDistance > 0.5)
            jumpDistance = 1 - jumpDistance;

        //var height = jumpDistance * 2 * totalHeight;
        var height = totalHeight*(-4 * (jumpDistance * jumpDistance - jumpDistance));
        this.y = this.ground - height;
    } else if(this.punching){
        if(this.punchingAnimation.isDone()){
            console.log("low punch done");
            this.punchingAnimation.elapsedTime = 0;
            this.punching = false;
        }
    } else if(this.lowKicking){
        if(this.lowKickingAnimation.isDone()){
            console.log("low kick done");
            this.lowKickingAnimation.elapsedTime = 0;
            this.lowKicking = false;
        }
    } else if(this.ducking) {
        if(this.duckingAnimation.isDone()) {
            console.log("ducking is done");
            this.duckingAnimation.elapsedTime=0;
            this.ducking=false;
        }
    } else if(this.highKicking) {
        if(this.highKickAnimation.isDone()) {
            console.log("high kicking is done");
            this.highKickAnimation.elapsedTime=0;
            this.highKicking=false;
        }
    } else if(this.walkRight){
        console.log("Walking");
        if(this.walkRightAnimation.isDone()){
            this.walkRightAnimation.elapsedTime = 0;
            this.walkRight = false;
        }
        this.x = this.x + 1;
        this.y = this.ground;

    }else if (this.walkLeft){
        console.log("Walking left!");
        if(this.walkLeftAnimation.isDone()){
            this.walkLeftAnimation.elapsedTime = 0;
            this.walkLeft = false;
        }
        this.x = this.x - 1;
        this.y = this.ground;
    }
    
    Entity.prototype.update.call(this);
}

Fighter.prototype.draw = function (ctx) {
    if (this.jumping) {
        // this.jumpAnimation.d
        this.jumpAnimation.drawFrame(this.game.clockTick, ctx, this.x + 17, this.y - 34);
    } else if (this.punching){
        console.log("punching");
        this.punchingAnimation.d;
        this.punchingAnimation.drawFrame(this.game.clockTick, ctx, this.x , this.y);
    } else if (this.lowKicking) {
        console.log("low kicking");
        this.lowKickingAnimation.d;
        this.lowKickingAnimation.drawFrame(this.game.clockTick,ctx,this.x,this.y);
    } else if (this.highKicking) {
        console.log("high kicking");
        this.highKickAnimation.d;
        this.highKickAnimation.drawFrame(this.game.clockTick,ctx,this.x,this.y);
    } else if (this.ducking) {
        console.log("ducking");
        this.duckingAnimation.d;
        this.duckingAnimation.drawFrame(this.game.clockTick,ctx,this.x,this.y);
    }else if (this.walkRight){
        this.walkRightAnimation.d;
        this.walkRightAnimation.drawFrame(this.game.clockTick, ctx, this.x +5, this.y);
    } else if (this.walkLeft){
        this.walkLeftAnimation.d;
        this.walkLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x -5, this.y);
    } else {
        console.log("standing still");
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
    Entity.prototype.draw.call(this);
}