/**
 * Created by Mike on 5/10/16.
 */

var TRUMP = "donaldTrump";
var CRUZ = "tedCruz";
var CLINTON = "hillaryClinton";
var SANDERS = "bernieSanders";

function Fighter(game, fighterName, ASSET_MANAGER, x, y, aiStatus) {
    this.fighter = fighterName;

    if(fighterName === CRUZ){
        //height and widths for bounding boxes
        this.widthOptions = {walkRight: 144, standRight: 157, punchRight: 290, loKickRight: 285, jumpRight: 234, hiKickRight: 276, duckRight: 192, blockRight: 378, deadRight: 294,
                             walkLeft: 246, standLeft: 157, punchLeft: 386, loKickLeft: 296 , jumpLeft: 234, hiKickLeft: 280, duckLeft: 192, blockLeft: 382, deadLeft: 303}
        this.heightOptions = {walkRight: 292, standRight: 292, punchRight: 310, loKickRight:315 , jumpRight: 311, hiKickRight: 317, duckRight: 294, blockRight: 319,
            walkLeft: 309, standLeft: 292, punchLeft: 319, loKickLeft: 312, jumpLeft: 311, hiKickLeft: 316, duckLeft: 294, blockLeft: 311, deadRight: 309, deadLeft: 321}
        this.width = this.widthOptions.standingWidth;
        this.height = this.heightOptions.standingHeight;




        //STANDING
        this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzStanding.png"), 0, 0, 157, 292, 0.099, 6, true, false);
        this.standRightBox = {x: this.x , y: this.y, width:this.widthOptions.standRight, height: this.heightOptions.standRight};
        this.animationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzStandingLeft.png"), 0, 0, 147, 293, 0.099, 6, true, false);
        this.standLeftBox = {x:this.x, y:this.y, width:this.widthOptions.standLeft, height:this.heightOptions.standLeft};

        //JUMP
        this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzJump.png"), 0, 0, 234, 311, 0.06, 20, false, false);
        //TODO add jump right box
        this.jumpAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzJumpLeft.png"), 0, 0, 237, 311, 0.06, 20, false, false);
        //TODO add jump left box

        //PUNCH
        this.punchingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzPunch.png"), 0, 0, 295, 317, 0.06, 12, false, false);
        this.punchRightBox = {x: this.x -85, y:this.y -10, width: this.widthOptions.punchRight, height: this.heightOptions.punchRight};
        this.punchingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzPunchLeft.png"), 0, 0, 386, 319, 0.06, 12, false, false);
        this.punchLeftBox = {x: this.x - 70, y:this.y -10, width: this.widthOptions.punchLeft, height:this.heightOptions.punchLeft};


        //width, height
        //LOW KICK
        this.lowKickingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzLoKick.png"), 0, 0, 285, 315, 0.06, 12, false, false);
        this.lowKickRightBox = {x: this.x -54, y:this.y -15, width: this.widthOptions.loKickRight, height: this.heightOptions.loKickRight}
        this.lowKickingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzLoKickLeft.png"), 0, 0, 296, 312, 0.06, 12, false, false);
        this.lowKickLeftBox = {x:this.x, y:this.y-15, width: this.widthOptions.loKickLeft, height:this.heightOptions.loKickLeft};

        //DUCK
        this.duckingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzDuck.png"), 0, 0, 192, 294, 0.06, 12, false, false);
        this.duckingRightBox = {x:this.x -40, y:this.y -2, width: this.widthOptions.duckRight, height: this.heightOptions.duckRight};
        this.duckingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzDuckLeft.png"), 0, 0, 192, 294, 0.06, 12, false, false);
        this.duckingLeftBox = {x: this.x -40, y: this.y -2, width:this.widthOptions.duckLeft, height: this.heightOptions.duckLeft};

        //WALKING
        this.walkLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzWalkLeft.png"), 0, 0, 246, 309, 0.06, 20, false, false);
        this.walkLeftBox = {x:this.x - 5, y:this.y, width:this.widthOptions.walkLeft, height:this.heightOptions.walkLeft};
        this.walkRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzWalkRight.png"), 0, 0, 144, 292, 0.06, 20, false, false);
        this.walkRightBox = {x:this.x +5, y:this.y, width:this.widthOptions.walkRight, height:this.heightOptions.walkRight};

        //HIGH KICK
        this.highKickAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzHiKickLeft.png"), 0, 0, 280, 316, 0.06, 12, false, false);
        this.highKickLeftBox = {x:this.x - 35, y: this.y -20, width: this.widthOptions.hiKickLeft, height: this.heightOptions.hiKickLeft};
        this.highKickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzHiKick.png"), 0, 0, 276, 317, 0.06, 12, false, false);
        this.highKickRightBox = {x: this.x -80, y: this.y -20, width: this.widthOptions.hiKickRight, height:this.heightOptions.hiKickRight};


        //BLOCK
        this.blockingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzBlock.png"),0,0, 378, 319, 0.06, 12, false, false);
        this.blockRightBox = {x:this.x -70, y:this.y -5, width:this.widthOptions.blockRight, height: this.heightOptions.blockRight};
        this.blockingLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzBlockLeft.png"),0,0, 382, 311, 0.06, 12, false, false);
        this.blockLeftBox = {x:this.x -135, y:this.y-15, width: this.widthOptions.blockLeft, height:this.heightOptions.blockLeft};

        //DEAD
        this.deadAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzDead.png"),0,0, 294, 309, 0.06, 12, false, false);
        this.deadLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzDeadLeft.png"),0,0, 303, 321, 0.06, 12, false, false);

    }else if(fighterName === CLINTON){

        //height and widths for bounding boxes
        this.widthOptions = {walkRight: 262, standRight: 185, punchRight: 312, loKickRight: 270, jumpRight: 288, hiKickRight: 344, duckRight: 162, blockRight:436 ,
            walkLeft: 296, standLeft: 184, punchLeft: 312, loKickLeft:  270, jumpLeft: 292, hiKickLeft: 349, duckLeft: 162, blockLeft: 446, deadRight: 314, deadLeft: 313}
        this.heightOptions = {walkRight: 326, standRight: 299, punchRight: 297, loKickRight: 299, jumpRight: 337, hiKickRight: 322, duckRight: 303, blockRight:321 ,
            walkLeft: 334, standLeft: 299, punchLeft: 297, loKickLeft: 299, jumpLeft: 337, hiKickLeft: 317, duckLeft: 303, blockLeft:320 , deadRight: 328, deadLeft: 327}

        this.width = this.widthOptions.standingWidth;
        this.height = this.heightOptions.standingHeight;

        //STANDING
        this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonStanding.png"), 0, 0, 185, 299, 0.099, 6, true, false);
        this.animationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonStandingLeft.png"), 0, 0, 184, 299, 0.099, 6, true, false);

        //JUMP
        this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonJump.png"), 0, 0, 288, 337, 0.06, 20, false, false);
        this.jumpAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonJumpLeft.png"),0, 0, 292, 337, 0.06, 20, false, false);
        //PUNCH
        this.punchingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonPunch.png"), 0, 0, 312, 297, 0.06, 12, false, false);
        this.punchingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonPunchLeft.png"), 0, 0, 312, 297, 0.06, 12, false, false);

        //LOW KICK
        this.lowKickingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonLoKick.png"), 0, 0, 270, 299, 0.06, 12, false, false);
        this.lowKickingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonLoKickLeft.png"), 0, 0, 270, 299, 0.06, 12, false, false);

        //DUCK
        this.duckingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonDuck.png"), 0, 0, 162, 303, 0.06, 12, false, false);//FIXXXX LATTE
        this.duckingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonDuckLeft.png"), 0, 0, 162, 303, 0.06, 12, false, false);

        //WALKING
        this.walkRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonWalkRight.png"), 0, 0, 262, 326, 0.06, 20, false, false);
        this.walkLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonWalkLeft.png"), 0, 0, 296, 334, 0.06, 20, false, false);

        //HIGH KICK
        this.highKickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonHiKick.png"), 0, 0, 344, 322, 0.06, 12, false, false);
        this.highKickAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonHiKickLeft.png"), 0, 0, 349, 317, 0.06, 12, false, false);

        //BLOCK
        this.blockingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonBlock.png"), 0,0, 436, 321, 0.06,12,false, false);
        this.blockingLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonBlockLeft.png"), 0,0, 446, 320, 0.06,12,false, false);

        //DEATH
        this.deadAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonDead.png"),0,0, 314, 328, 0.06, 12, false, false);
        this.deadLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonDeadLeft.png"),0,0, 313, 327, 0.06, 12, false, false);

    }else if(fighterName === TRUMP){
        //height and widths for bounding boxes
        this.widthOptions = {walkRight: 192, standRight: 270, punchRight: 434, loKickRight: 429, jumpRight: 242, hiKickRight: 488, duckRight: 320, blockRight: 388,
            walkLeft: 192, standLeft: 276, punchLeft: 422, loKickLeft: 443, jumpLeft: 233, hiKickLeft: 480, duckLeft: 320, blockLeft: 372, deadRight: 476, deadLeft: 478}
        this.heightOptions = {walkRight: 326, standRight: 325, punchRight: 345, loKickRight: 321, jumpRight: 353, hiKickRight: 350, duckRight: 324, blockRight: 424,
            walkLeft: 326, standLeft: 320, punchLeft: 360, loKickLeft: 335, jumpLeft: 355, hiKickLeft: 377, duckLeft: 324, blockLeft: 429, deadRight: 338, deadLeft: 338}

        //STAND
        this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpStanding.png"), 0, 0, 270, 325, 0.099, 6, true, false);
        this.animationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpStandingLeft.png"), 0, 0, 276, 320, 0.099, 6, true, false);

        //JUMP
        this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpJump.png"), 0, 0, 242, 353, 0.06, 20, false, false);
        this.jumpAnimationLeft =new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpJumpLeft.png"), 0, 0, 233, 355, 0.06, 20, false, false);

        //PUNCH
        this.punchingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpPunch.png"), 0, 0, 434, 345, 0.06, 12, false, false);
        this.punchingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpPunchLeft.png"), 0, 0, 440, 360, 0.06, 12, false, false);

        //LOW KICK
        this.lowKickingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpLoKick.png"), 0, 0, 429, 341, 0.06, 12, false, false);
        this.lowKickingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpLoKickLeft.png"), 0, 0, 443, 335, 0.06, 12, false, false);
        //DUCK
        this.duckingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpDuck.png"), 0, 0, 320, 324, 0.06, 12, false, false);
        this.duckingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpDuckLeft.png"), 0, 0, 320, 324, 0.06, 12, false, false);

        //WALK
        this.walkRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpWalkRight.png"), 0, 0, 192, 326, 0.06, 18, false, false);
        this.walkLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpWalkLeft.png"), 0, 0, 192, 326, 0.06, 18, false, false);//might need fixed. looks okay tho.

        //HIGH KICK
        this.highKickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpHiKick.png"), 0, 0, 488, 350, 0.06, 12, false, false);
        this.highKickAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpHiKickLeft.png"), 0, 0, 480, 377, 0.06, 12, false, false);


        //BLOCK
        this.blockingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpBlock.png"), 0, 0, 388, 424, 0.06, 12, false, false);
        this.blockingLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpBlockLeft.png"), 0, 0, 372, 429, 0.06, 12, false, false);

        //DEATH
        this.deadAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpDead.png"),0,0, 476, 338, 0.06, 12, false, false);
        this.deadLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpDeadLeft.png"),0,0, 478, 338, 0.06, 12, false, false);

    }else if(fighterName === SANDERS){
        //height and widths for bounding boxes
        this.widthOptions = {walkRight: 182, standRight: 177, punchRight: 369, loKickRight: 358, jumpRight: 285, hiKickRight: 440, duckRight: 315, blockRight: 470,
            walkLeft: 195, standLeft: 177, punchLeft: 474, loKickLeft: 347, jumpLeft: 285, hiKickLeft: 406, duckLeft: 247, blockLeft: 482, deadRight: 335, deadLeft: 310}
        this.heightOptions = {walkRight: 313, standRight: 305, punchRight: 426, loKickRight: 316, jumpRight:325 , hiKickRight: 343, duckRight: 315, blockRight: 335,
            walkLeft: 316, standLeft: 305, punchLeft: 443, loKickLeft: 319, jumpLeft: 325, hiKickLeft: 342, duckLeft: 315 , blockLeft: 342, deadRight: 334, deadLeft: 352}
        //STAND
        this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersStanding.png"), 0, 0, 177, 305, 0.099, 6, true, false);
        this.animationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersStandingLeft.png"), 0, 0, 177, 305, 0.099, 6, true, false);

        //JUMP
        this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersJump.png"), 0, 0, 285, 325, 0.06, 20, false, false);
        this.jumpAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersJumpLeft.png"), 0, 0, 285, 325, 0.06, 20, false, false);


        //PUNCH
        this.punchingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersPunch.png"), 0, 0, 369, 426, 0.06, 12, false, false);
        this.punchingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersPunchLeft.png"), 0, 0, 474, 443, 0.06, 12, false, false);

        //LOW KICK
        this.lowKickingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersLoKick.png"), 0, 0, 358, 316, 0.06, 12, false, false);
        this.lowKickingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersLoKickLeft.png"), 0, 0, 347, 319, 0.06, 12, false, false);

        //DUCK
        this.duckingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersDuck.png"), 0, 0, 247, 315, 0.06, 12, false, false);
        this.duckingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersDuckLeft.png"), 0, 0, 247, 315, 0.06, 12, false, false);

        //WALK
        this.walkRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersWalkRight.png"), 0, 0, 182, 313, 0.06, 20, false, false);
        this.walkLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersWalkLeft.png"), 0, 0, 195, 316, 0.06, 20, false, false);

        //HIGH KICK
        this.highKickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersHiKick.png"), 0, 0, 440, 343, 0.06, 12, false, false);
        this.highKickAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersHiKickLeft.png"), 0, 0, 406, 342, 0.06, 12, false, false);

        //BLOCK
        this.blockingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersBlock.png"), 0, 0, 470, 335, 0.06, 12, false, false);
        this.blockingLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersBlockLeft.png"), 0, 0, 482, 342, 0.06, 12, false, false);
        //DEATH
        this.deadAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersDead.png"),0,0, 335, 334, 0.06, 12, false, false);
        this.deadLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersDeadLeft.png"),0,0, 310, 352, 0.06, 12, false, false);
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

    //Bounding boxes
    


    //health variable
    this.health  = 100;

    //speed variable
    this.speed = 0;

    this.radius = 100;
    this.ground = 300;
    this.game  = game;
    Entity.call(this, game, x, 300-y);
}


Fighter.prototype = new Entity();

Fighter.prototype.constructor = Fighter;


Fighter.prototype.update = function(){
    //jumping logic
    //jumping logic
    if (this.game.w) {
        this.jumping = true;
    }else if(this.game.p){
        this.punching = true;
    } else if(this.game.i) {
        this.lowKicking=true;
    } else if(this.game.o) {
        this.highKicking=true;
    } else if(this.game.s) {
        this.ducking=true;
    } else if (this.game.d) {
        //this.x + sprite width > canvas width
        // console.log(this.x);
        if(this.x + 100 < 1180) {
            this.walkRight = true;
            this.facing = false;
        }
    }else if(this.game.a){
        /*
         potentially seperaten for each character for better accuracy.
         if(this.fighter === CLINTON) {
         if(this.x - 50 > 0) {
         this.walkLeft = true;
         this.facing = true;
         }
         }
         */
        //this.x - sprite width > canvas left (0)
        if(this.x - 50 > 0) {
            this.walkLeft = true;
            this.facing = true;
        }
    }else if(this.game.q){
        this.blocking = true;
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

Fighter.prototype.draw = function (ctx) {
    if (this.jumping) {
        // this.jumpAnimation.d

        if(this.facing === true){
            if(this.fighter === TRUMP){
                this.jumpAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x+115, this.y-35);
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
                this.punchingAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x , this.y-25);
            }else if(this.fighter === SANDERS){
                this.punchingAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x-110 , this.y-105);
            }else if(this.fighter === CLINTON){
                this.punchingAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x , this.y);
            } else if (this.fighter === CRUZ) {
                this.punchingAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x - 70, this.y-10);
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
                this.lowKickingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x,this.y-10);
            }else if(this.fighter === SANDERS){
                this.lowKickingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-150,this.y);
            }else if(this.fighter === CLINTON){
                this.lowKickingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-30,this.y);
            } else if (this.fighter === CRUZ) {
                this.lowKickingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x,this.y-15);
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
                this.highKickAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-60,this.y-5);
            }else if(this.fighter === SANDERS){
                this.highKickAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-160,this.y-10);
            }else if(this.fighter === CLINTON){
                this.highKickAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-100,this.y-10);
            } else if (this.fighter === CRUZ) {
                this.highKickAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-35,this.y-20);
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
            this.walkLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x +80, this.y);
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
                this.blockingLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x-70, this.y-5);
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
Fighter.prototype.punch = function (other) {
    var thisBox = {x:this.x, y:this.y, width: this.width, height:this.height};
    var otherBox = {x: other.x, y: other.y, width:other.width, height:other.height}
};


Fighter.prototype.highKick = function (other) {
    if(this.highKicking){

    }
};

Fighter.prototype.lowKick = function (other) {
    if(this.lowKicking){

    }
};