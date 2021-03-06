/**
 * Created by Mike on 5/10/16.
 */

var TRUMP = "donaldTrump";
var CRUZ = "tedCruz";
var CLINTON = "hillaryClinton";
var SANDERS = "bernieSanders";

function AIFighter(game, fighterName, ASSET_MANAGER, x, y, aiStatus) {
    this.fighter = fighterName;

    this.move = false;
    if(fighterName === CRUZ){
        //TODO add blockingWidth
        this.widthOptions = {standingWidth: 157, jumpingWidth:234,punchingWidth: 295, lowKickingWidth: 285, duckingWidth:  192
            , walkRightWidth: 144, walkingLeftWidth: 144.15, highKickingWidth: 276};
        this.width = this.widthOptions.standingWidth;
        //TODO add height array
        this.heightOptions = {standingHeight:292, jumpingHeight: 311, punchingHeight:317, lowKickingHeight:315, duckingHeight:294
            , walkRightHeight: 292, walkLeftHeight:292, highKickingHeight:317};
        this.height = this.heightOptions.standingHeight;

        //STANDING
        this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzStanding.png"), 0, 0, 157, 292, 0.099, 6, true, false);
        this.animationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzStandingLeft.png"), 0, 0, 157, 292, 0.099, 6, true, false);

        //JUMP
        this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzJump.png"), 0, 0, 234, 311, 0.06, 20, false, false);
        this.jumpAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzJumpLeft.png"), 0, 0, 234, 311, 0.06, 20, false, false);

        //PUNCH
        this.punchingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzPunch.png"), 0, 0, 295, 317, 0.06, 12, false, false);
        this.punchingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzPunchLeft.png"), 0, 0, 295, 317, 0.06, 12, false, false);

        //LOW KICK
        this.lowKickingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzLoKick.png"), 0, 0, 285, 315, 0.06, 12, false, false);
        this.lowKickingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzLoKickLeft.png"), 0, 0, 285, 315, 0.06, 12, false, false);

        //DUCK
        this.duckingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzDuck.png"), 0, 0, 192, 294, 0.06, 12, false, false);
        this.duckingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzDuckLeft.png"), 0, 0, 192, 294, 0.06, 12, false, false);

        //WALKING
        this.walkLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzWalkLeft.png"), 0, 0, 144.15, 292, 0.06, 20, false, false);
        this.walkRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzWalkRight.png"), 0, 0, 144, 292, 0.06, 20, false, false);

        //HIGH KICK
        this.highKickAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzHiKickLeft.png"), 0, 0, 276, 317, 0.06, 12, false, false);
        this.highKickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzHiKick.png"), 0, 0, 276, 317, 0.06, 12, false, false);

        //BLOCK
        this.blockingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzBlock.png"),0,0, 378, 319, 0.06, 12, false, false);
        this.blockingLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzBlockLeft.png"),0,0, 378, 319, 0.06, 12, false, false);

        //DEAD
        this.deadAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzDead.png"),0,0, 294, 309, 0.06, 12, false, false);
        this.deadLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzDeadLeft.png"),0,0, 294, 309, 0.06, 12, false, false);

    }else if(fighterName === CLINTON){
        //TODO add blockingWidth
        this.widthOptions = {standingWidth: 185, jumpingWidth:288,punchingWidth: 312, lowKickingWidth: 270, duckingWidth:  192
            , walkRightWidth: 262, walkingLeftWidth: 262, highKickingWidth: 344, blockingWidth: 436};
        this.width = this.widthOptions.standingWidth;
        this.heightOptions = {standingHeight:292, jumpingHeight: 311, punchingHeight:317, lowKickingHeight:315, duckingHeight:294
            , walkRightHeight: 292, walkLeftHeight:292, highKickingHeight:317};
        //TODO add height array
        this.height = this.heightOptions.standingHeight;

        //STANDING
        this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonStanding.png"), 0, 0, 185, 299, 0.099, 6, true, false);
        this.animationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonStandingLeft.png"), 0, 0, 185, 299, 0.099, 6, true, false);

        //JUMP
        this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonJump.png"), 0, 0, 288, 337, 0.06, 20, false, false);
        this.jumpAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonJumpLeft.png"),0, 0, 288, 337, 0.06, 20, false, false);
        //PUNCH
        this.punchingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonPunch.png"), 0, 0, 312, 297, 0.06, 12, false, false);
        this.punchingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonPunchLeft.png"), 0, 0, 299, 297, 0.06, 12, false, false);

        //LOW KICK
        this.lowKickingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonLoKick.png"), 0, 0, 270, 299, 0.06, 12, false, false);
        this.lowKickingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonLoKickLeft.png"), 0, 0, 270, 299, 0.06, 12, false, false);

        //DUCK
        this.duckingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonDuck.png"), 0, 0, 162, 303, 0.06, 12, false, false);//FIXXXX LATTE
        this.duckingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonDuckLeft.png"), 0, 0, 162.5, 303, 0.06, 12, false, false);

        //WALKING
        this.walkRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonWalkRight.png"), 0, 0, 262, 326, 0.06, 20, false, false);
        this.walkLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonWalkLeft.png"), 0, 0, 266, 326, 0.06, 20, false, false);

        //HIGH KICK
        this.highKickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonHiKick.png"), 0, 0, 344, 322, 0.06, 12, false, false);
        this.highKickAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonHiKickLeft.png"), 0, 0, 344, 322, 0.06, 12, false, false);

        //BLOCK
        this.blockingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonBlock.png"), 0,0, 436, 321, 0.06,12,false, false);
        this.blockingLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonBlockLeft.png"), 0,0, 436, 321, 0.06,12,false, false);

        //DEATH
        this.deadAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonDead.png"),0,0, 314, 328, 0.06, 12, false, false);
        this.deadLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonDeadLeft.png"),0,0, 314, 328, 0.06, 12, false, false);

    }else if(fighterName === TRUMP){
        //TODO add blockingWidth
        this.widthOptions = {standingWidth: 270, jumpingWidth:242,punchingWidth: 434, lowKickingWidth: 429, duckingWidth:  192
            , walkRightWidth: 192, walkingLeftWidth: 192, highKickingWidth: 488};
        // this.width = this.widthOptions.standingWidth;
        //TODO add height array

        //STAND
        this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpStanding.png"), 0, 0, 270, 325, 0.099, 6, true, false);
        this.animationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpStandingLeft.png"), 0, 0, 280, 320, 0.099, 5, true, false);

        //JUMP
        this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpJump.png"), 0, 0, 242, 353, 0.06, 20, false, false);
        this.jumpAnimationLeft =new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpJumpLeft.png"), 0, 0, 242, 353, 0.06, 20, false, false);

        //PUNCH
        this.punchingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpPunch.png"), 0, 0, 434, 345, 0.06, 12, false, false);
        this.punchingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpPunchLeft.png"), 0, 0, 434, 359, 0.06, 12, false, false);

        //LOW KICK
        this.lowKickingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpLoKick.png"), 0, 0, 429, 341, 0.06, 12, false, false);
        this.lowKickingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpLoKickLeft.png"), 0, 0, 429, 341, 0.06, 12, false, false);
        //DUCK
        this.duckingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpDuck.png"), 0, 0, 320, 324, 0.06, 12, false, false);//FIIIIXXXX LATTE
        this.duckingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpDuckLeft.png"), 0, 0, 320, 324, 0.06, 12, false, false);

        //WALK
        this.walkRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpWalkRight.png"), 0, 0, 192, 326, 0.06, 20, false, false);
        this.walkLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpWalkLeft.png"), 0, 0, 230, 326, 0.06, 20, false, false);//might need fixed. looks okay tho.

        //HIGH KICK
        this.highKickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpHiKick.png"), 0, 0, 488, 350, 0.06, 12, false, false);
        this.highKickAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpHiKickLeft.png"), 0, 0, 488, 350, 0.06, 12, false, false);


        //BLOCK
        this.blockingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpBlock.png"), 0, 0, 388, 424, 0.06, 12, false, false);
        this.blockingLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpBlockLeft.png"), 0, 0, 360, 435, 0.06, 12, false, false);

        //DEATH
        this.deadAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpDead.png"),0,0, 476, 338, 0.06, 12, false, false);
        this.deadLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpDeadLeft.png"),0,0, 476, 338, 0.06, 12, false, false);

    }else if(fighterName === SANDERS){
        //TODO add blockingWidth
        this.widthOptions = {standingWidth: 177, jumpingWidth:285,punchingWidth: 369, lowKickingWidth: 358, duckingWidth:  192
            , walkRightWidth: 182, walkingLeftWidth: 182, highKickingWidth: 440, blockingWidth: 470};
        // this.width = this.widthOptions.standingWidth;
        //TODO add height array
        //STAND
        this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersStanding.png"), 0, 0, 177, 305, 0.099, 6, true, false);
        this.animationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersStandingLeft.png"), 0, 0, 177, 305, 0.099, 6, true, false);

        //JUMP
        this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersJump.png"), 0, 0, 285, 325, 0.06, 20, false, false);
        this.jumpAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersJumpLeft.png"), 0, 0, 285, 325, 0.06, 20, false, false);


        //PUNCH
        this.punchingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersPunch.png"), 0, 0, 369, 426, 0.06, 12, false, false);
        this.punchingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersPunchLeft.png"), 0, 0, 369, 426, 0.06, 12, false, false);

        //LOW KICK
        this.lowKickingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersLoKick.png"), 0, 0, 358, 316, 0.06, 12, false, false);
        this.lowKickingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersLoKickLeft.png"), 0, 0, 358, 316, 0.06, 12, false, false);

        //DUCK
        this.duckingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersDuck.png"), 0, 0, 247, 315, 0.06, 12, false, false);
        this.duckingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersDuckLeft.png"), 0, 0, 247, 315, 0.06, 12, false, false);

        //WALK
        this.walkRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersWalkRight.png"), 0, 0, 182, 313, 0.06, 20, false, false);
        this.walkLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersWalkLeft.png"), 7, 0, 179.5, 313, 0.06, 20, false, false); //needs a little fix.
        //maybe redo walk left spritesheet. seems a little off, but might be able to fix with width input.

        //HIGH KICK
        this.highKickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersHiKick.png"), 0, 0, 440, 343, 0.06, 12, false, false);
        this.highKickAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersHiKickLeft.png"), 0, 0, 440, 343, 0.06, 12, false, false);

        //BLOCK
        this.blockingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersBlock.png"), 0, 0, 470, 335, 0.06, 12, false, false);
        this.blockingLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersBlockLeft.png"), 0, 0, 470, 335, 0.06, 12, false, false);
        //DEATH
        this.deadAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersDead.png"),0,0, 335, 334, 0.06, 12, false, false);
        this.deadLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersDeadLeft.png"),0,0, 335, 334, 0.06, 12, false, false);
    }

    this.jumping = false;
    this.punching = false;
    this.ducking = false;
    this.walkLeft = false;
    this.walkRight = false;
    this.lowKicking = false;
    this.highKicking = false;
    this.blocking = false;
    this.x = x;
    this.y = y;
    this.facing = aiStatus;
    this.fightRadius = 200;
    //healthBar variable
    this.healthBar  = 100;

    //speed variable
    this.speed = 0;

    this.radius = 100;
    this.ground = 300;
    this.game  = game;
    Entity.call(this, game, x, 300-y);
}


AIFighter.prototype = new Entity();

AIFighter.prototype.constructor = AIFighter;

AIFighter.prototype.search = function(other){
    if(this.move){


        var moves = [this.punching, this.highKicking, this.blocking];
        if(this.x > other.x){
            if(other.x === this.x - this.fightRadius ){
                var truths = 0;
                var rand = Math.floor(Math.random() * (4));
                
                for(var i = 0; i< moves.length; i++){
                    if(moves[i] == true){
                        truths++;
                    }
                }
                
                if(truths ==0){
                    if(rand ==2){
                        this.highKicking = true;
                    } else if(rand == 1){
                        this.punching = true;
                    } else if(rand == 3){
                        this.blocking = true;
                    }
                }




            }else if(this.x >= other.x + this.fightRadius){
                this.x = this.x - 2;
            }

        }

        if(this.x <other.x){
            if(other.x == (this.x+ this.fightRadius)){
                var truths = 0;
                var rand = Math.floor(Math.random() * (4));

                for(var i = 0; i< moves.length; i++){
                    if(moves[i] == true){
                        truths++;
                    }
                }

                if(truths ==0){
                    if(rand ==2){
                        this.highKicking = true;
                    } else if(rand == 1){
                        this.punching = true;
                    } else if(rand == 3){
                        this.blocking = true;
                    }
                }
            }else if(this.x <= other.x - this.fightRadius){
                this.x = this.x +2;
            }
            
        }
    }

    

}

AIFighter.prototype.fight = function(other){

}


AIFighter.prototype.update = function(){


    var ents = this.game.entities;
    for(var i =0; i< ents.length; i++){
        var ent = this.game.entities[i];
        if(this != ent && ent instanceof Fighter){
            this.search(ent);
        }
    }

    for(var i = 0; i< ents.length; i++){
        var ent = ents[i];
        if(this!= ent && ent instanceof Fighter){
            var truths = 0;
            var moves = [this.punching, this.highKicking, this.blocking];
            for(var i = 0; i< moves.length; i++){
                if(moves[i] == true){
                    truths++;
                }
            }
            if(truths ===0){
                this.fight(ent);
            }

        }
    }

    if (this.jumping) {
        // this.width = this.widthOptions.jumpingWidth;
        // this.height = this.heightOptions.jumpingHeight;
        if (this.jumpAnimation.isDone()) {
            this.jumpAnimation.elapsedTime = 0;
            this.jumping = false;
        }else if(this.jumpAnimationLeft.isDone()){
            this.jumpAnimationLeft.elapsedTime = 0;
            this.jumping = false;
        }

        if(this.facing ===true){
            var jumpDistance = this.jumpAnimationLeft.elapsedTime / this.jumpAnimationLeft.totalTime;

            var totalHeight = 175;

            if (jumpDistance < 0.5)
                jumpDistance = 1 - jumpDistance;
        }else{
            var jumpDistance = this.jumpAnimation.elapsedTime / this.jumpAnimation.totalTime;

            var totalHeight = 175;

            if (jumpDistance < 0.5)
                jumpDistance = 1 - jumpDistance;
        }


        //var height = jumpDistance * 2 * totalHeight;
        var height = totalHeight*(-4 * (jumpDistance * jumpDistance - jumpDistance));
        this.y = this.ground - height;
    } else if(this.punching){
        // this.width = this.widthOptions.punchingWidth;
        this.punchingAnimation.d;
        this.punchingAnimationLeft.d;
        if(this.punchingAnimation.isDone()){
            console.log("low punch done");
            this.punchingAnimation.elapsedTime = 0;
            this.punching = false;

        }
        if(this.punchingAnimationLeft.isDone()){
            this.punchingAnimationLeft.elapsedTime = 0;
            this.punching = false;
        }

    } else if(this.lowKicking){
        //Sets the width for the bounding box
        // this.width = this.widthOptions.lowKickingWidth;
        if(this.lowKickingAnimation.isDone()){
            console.log("low kick done");
            this.lowKickingAnimation.elapsedTime = 0;
            this.lowKicking = false;
        }
        if(this.lowKickingAnimationLeft.isDone()){
            this.lowKickingAnimationLeft.elapsedTime = 0;
            this.lowKicking = false;
        }
    }
    else if(this.ducking) {
        // this.width = this.widthOptions.duckingWidth;
        if(this.duckingAnimation.isDone()) {
            console.log("ducking is done");
            this.duckingAnimation.elapsedTime=0;
            this.ducking=false;
        }

        if(this.duckingAnimationLeft.isDone()){
            this.duckingAnimationLeft.elapsedTime = 0;
            this.ducking = false;
        }
    }
    else if(this.highKicking) {
        // this.width = this.widthOptions.highKickingWidth;
        if(this.highKickAnimation.isDone()) {
            console.log("high kicking is done");
            this.highKickAnimation.elapsedTime=0;
            this.highKicking=false;
        }
        if(this.highKickAnimationLeft.isDone()){
            this.highKickAnimationLeft.elapsedTime = 0;
            this.highKicking = false;
        }
    } else if(this.walkRight){
        // this.width = this.widthOptions.walkRightWidth;

        if(this.walkRightAnimation.isDone() || this.game.d === false){
            this.walkRightAnimation.elapsedTime = 0;
            this.walkRight = false;
        }
        this.x = this.x + 1;
        this.y = this.ground;

    }else if (this.walkLeft){
        // this.width = this.widthOptions.walkingLeftWidth;

        if(this.walkLeftAnimation.isDone() || this.game.a === false){
            this.walkLeftAnimation.elapsedTime = 0;
            this.walkLeft = false;
        }
        this.x = this.x - 1;
        this.y = this.ground;
    }else if (this.blocking){
        if(this.blockingAnimation.isDone()) {
            console.log("blocking is done");
            this.blockingAnimation.elapsedTime=0;
            this.blocking=false;
        }
        if(this.blockingLeftAnimation.isDone()){
            this.blockingLeftAnimation.elapsedTime = 0;
            this.blocking = false;
        }
    } else{
        // this.width = this.widthOptions.standingWidth;
        // this.height = this.heightOptions.standingHeight;
    }

    Entity.prototype.update.call(this);
};

AIFighter.prototype.draw = function (ctx) {
    if (this.jumping) {
        // this.jumpAnimation.d

        if(this.facing === true){
            if(this.fighter === TRUMP){
                this.jumpAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x-85, this.y-30);
            }else if(this.fighter === SANDERS){
                this.jumpAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x-70, this.y-15);
            }else if(this.fighter === CLINTON){
                this.jumpAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x-50, this.y-15);
            } else if (this.fighter === CRUZ) {
                this.jumpAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x-50, this.y-15);
            }
        } else{
            if(this.fighter === TRUMP){
                this.jumpAnimation.drawFrame(this.game.clockTick, ctx, this.x-85, this.y-30);
            }else if(this.fighter === SANDERS){
                this.jumpAnimation.drawFrame(this.game.clockTick, ctx, this.x-70, this.y-15);
            }else if(this.fighter === CLINTON){
                this.jumpAnimation.drawFrame(this.game.clockTick, ctx, this.x-50, this.y-15);
            } else if (this.fighter === CRUZ) {
                this.jumpAnimation.drawFrame(this.game.clockTick, ctx, this.x-50, this.y-15);
            }
        }


    } else if (this.punching){
        console.log("punching");
        this.punchingAnimation.d;

        if(this.facing === true){
            if(this.fighter === TRUMP){
                this.punchingAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x-150 , this.y-20);
            }else if(this.fighter === SANDERS){
                this.punchingAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x-110 , this.y-105);
            }else if(this.fighter === CLINTON){
                this.punchingAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x , this.y);
            } else if (this.fighter === CRUZ) {
                this.punchingAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x - 85, this.y-10);
            }
        }else{
            if(this.fighter === TRUMP){
                this.punchingAnimation.drawFrame(this.game.clockTick, ctx, this.x-150 , this.y-20);
            }else if(this.fighter === SANDERS){
                this.punchingAnimation.drawFrame(this.game.clockTick, ctx, this.x-110 , this.y-105);
            }else if(this.fighter === CLINTON){
                this.punchingAnimation.drawFrame(this.game.clockTick, ctx, this.x , this.y);
            } else if (this.fighter === CRUZ) {
                this.punchingAnimation.drawFrame(this.game.clockTick, ctx, this.x - 85, this.y-10);
            }
        }


    } else if (this.lowKicking) {
        console.log("low kicking");
        this.lowKickingAnimation.d;
        if(this.facing === true){
            if(this.fighter === TRUMP){
                this.lowKickingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-155,this.y-5);
            }else if(this.fighter === SANDERS){
                this.lowKickingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-150,this.y);
            }else if(this.fighter === CLINTON){
                this.lowKickingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-30,this.y);
            } else if (this.fighter === CRUZ) {
                this.lowKickingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-54,this.y-15);
            }
        }else{
            if(this.fighter === TRUMP){
                this.lowKickingAnimation.drawFrame(this.game.clockTick,ctx,this.x-155,this.y-5);
            }else if(this.fighter === SANDERS){
                this.lowKickingAnimation.drawFrame(this.game.clockTick,ctx,this.x-150,this.y);
            }else if(this.fighter === CLINTON){
                this.lowKickingAnimation.drawFrame(this.game.clockTick,ctx,this.x-30,this.y);
            } else if (this.fighter === CRUZ) {
                this.lowKickingAnimation.drawFrame(this.game.clockTick,ctx,this.x-54,this.y-15);
            }
        }



    } else if (this.highKicking) {
        console.log("high kicking");

        this.highKickAnimation.d;

        if(this.facing ===true){
            if(this.fighter === TRUMP){
                this.highKickAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-160,this.y);
            }else if(this.fighter === SANDERS){
                this.highKickAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-160,this.y-10);
            }else if(this.fighter === CLINTON){
                this.highKickAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-100,this.y-10);
            } else if (this.fighter === CRUZ) {
                this.highKickAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-80,this.y-20);
            }
        }else{
            if(this.fighter === TRUMP){
                this.highKickAnimation.drawFrame(this.game.clockTick,ctx,this.x-160,this.y);
            }else if(this.fighter === SANDERS){
                this.highKickAnimation.drawFrame(this.game.clockTick,ctx,this.x-160,this.y-10);
            }else if(this.fighter === CLINTON){
                this.highKickAnimation.drawFrame(this.game.clockTick,ctx,this.x-100,this.y-10);
            } else if (this.fighter === CRUZ) {
                this.highKickAnimation.drawFrame(this.game.clockTick,ctx,this.x-80,this.y-20);
            }
        }


    } else if (this.ducking) {
        console.log("ducking");
        this.duckingAnimation.d;
        if(this.facing === true){
            if(this.fighter === TRUMP){
                this.duckingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x,this.y);
            }else if(this.fighter === SANDERS){
                this.duckingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x,this.y);
            }else if(this.fighter === CLINTON){
                this.duckingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x,this.y);
            } else if (this.fighter === CRUZ) {
                this.duckingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-40,this.y-2);
            }
        }else{
            if(this.fighter === TRUMP){
                this.duckingAnimation.drawFrame(this.game.clockTick,ctx,this.x,this.y);
            }else if(this.fighter === SANDERS){
                this.duckingAnimation.drawFrame(this.game.clockTick,ctx,this.x,this.y);
            }else if(this.fighter === CLINTON){
                this.duckingAnimation.drawFrame(this.game.clockTick,ctx,this.x,this.y);
            } else if (this.fighter === CRUZ) {
                this.duckingAnimation.drawFrame(this.game.clockTick,ctx,this.x-40,this.y-2);
            }
        }

    } else if (this.walkRight){
        console.log("walking right");
        this.walkRightAnimation.d;
        if(this.fighter === TRUMP){
            this.walkRightAnimation.drawFrame(this.game.clockTick, ctx, this.x + 5, this.y);
        }else if(this.fighter === SANDERS){
            this.walkRightAnimation.drawFrame(this.game.clockTick, ctx, this.x + 5, this.y);
        }else if(this.fighter === CLINTON){
            this.walkRightAnimation.drawFrame(this.game.clockTick, ctx, this.x + 5, this.y-20);
        } else if (this.fighter === CRUZ) {
            this.walkRightAnimation.drawFrame(this.game.clockTick, ctx, this.x +5, this.y);
        }

    } else if (this.walkLeft ){
        console.log("Walking Left");
        this.walkLeftAnimation.d;
        if(this.fighter === TRUMP){
            this.walkLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x - 5, this.y);
        }else if(this.fighter === SANDERS){
            this.walkLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x - 5, this.y);
        }else if(this.fighter === CLINTON){
            this.walkLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x - 5, this.y-20);
        } else if (this.fighter === CRUZ) {
            this.walkLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x - 5, this.y);
        }

    }else if(this.blocking) {
        console.log("Blocking");
        this.blockingAnimation.d;
        this.blockingLeftAnimation.d;

        if(this.facing === true){
            if(this.fighter === TRUMP){
                this.blockingLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x-120, this.y-95);
            }else if(this.fighter === SANDERS){
                this.blockingLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x-135, this.y-15);
            }else if(this.fighter === CLINTON){
                this.blockingLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x-135, this.y-15);
            } else if (this.fighter === CRUZ) {
                this.blockingLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x-135, this.y-15);
            }
        }else{
            if(this.fighter === TRUMP){
                this.blockingAnimation.drawFrame(this.game.clockTick, ctx, this.x-120, this.y-95);
            }else if(this.fighter === SANDERS){
                this.blockingAnimation.drawFrame(this.game.clockTick, ctx, this.x-135, this.y-15);
            }else if(this.fighter === CLINTON){
                this.blockingAnimation.drawFrame(this.game.clockTick, ctx, this.x-135, this.y-15);
            } else if (this.fighter === CRUZ) {
                this.blockingAnimation.drawFrame(this.game.clockTick, ctx, this.x-135, this.y-15);
            }
        }


    }else {
        console.log("standing still");
        if (this.facing === true) {
            if(this.fighter === TRUMP){

            }else if(this.fighter === SANDERS){

            }else if(this.fighter === CLINTON){

            } else if (this.fighter === CRUZ) {

            }
            this.animationLeft.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        } else {
            if(this.fighter === TRUMP){

            }else if(this.fighter === SANDERS){

            }else if(this.fighter === CLINTON){

            } else if (this.fighter === CRUZ) {

            }
            this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        }
    }
    Entity.prototype.draw.call(this);
};

//TODO build bounding boxes after adding height arrays
// checks to see if a punch has collided
AIFighter.prototype.punch = function (other) {
    var thisBox = {x:this.x, y:this.y, width: this.width, height:this.height};
    var otherBox = {x: other.x, y: other.y, width:other.width, height:other.height}
};


AIFighter.prototype.highKick = function (other) {
    if(this.highKicking){

    }
};

AIFighter.prototype.lowKick = function (other) {
    if(this.lowKicking){

    }
};