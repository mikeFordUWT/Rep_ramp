/**
 * Created by Mike on 5/10/16.
 */



function Fighter(game, fighterName) {
    if(fighterName === "tedCruz"){

    }else if(fighterName ==="hillaryClinton"){

    }else if(fighterName === "donaldTrump"){
        
    }else if(fighterName === "bernieSanders"){
        
    }
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