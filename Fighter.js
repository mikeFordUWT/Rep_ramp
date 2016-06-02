/**
 * Created by Mike on 5/10/16.
 */

var TRUMP = "TRUMP";
var CRUZ = "CRUZ";
var CLINTON = "CLINTON";
var SANDERS = "SANDERS";


//Audio File Variables

//Trump SFX
var trumpJump = new Audio("./audio/jump/Mario_Jumping-Mike_Koenig-989896458.mp3");
var trumpPunch = new Audio("./audio/punch/Punch_HD-Mark_DiAngelo-1718986183.mp3");
var trumpLoKick = new Audio("./audio/loKick/Right Hook-SoundBible.com-1406389182.mp3");
var trumpHiKick = new Audio("./audio/hiKick/Upper Cut-SoundBible.com-1272257235.mp3");
var trumpDucking = new Audio("./audio/duck/Snorting-SoundBible.com-748123769.mp3");
var trumpDeath = new Audio("./audio/death/Evil Yelling-SoundBible.com-1774362373.mp3");
var trumpBlock = new Audio("./audio/blocking/Welcome to the Boardroom.mp3");


//Cruz SFX
var cruzJump = new Audio("./audio/jump/Jump-SoundBible.com-1007297584.mp3");
var cruzPunch = new Audio("./audio/punch/Realistic_Punch-Mark_DiAngelo-1609462330.mp3");
var cruzLoKick = new Audio("./audio/loKick/Right Cross-SoundBible.com-1721311663.mp3");
var cruzHiKick = new Audio("./audio/hiKick/Sweep Kick-SoundBible.com-808409893.mp3");
var cruzDucking = new Audio("./audio/duck/Jolly Laugh-SoundBible.com-874430997.mp3");
var cruzDeath = new Audio("./audio/death/Female_Scream_Horror-NeoPhyTe-138499973.mp3");
var cruzBlock = new Audio("./audio/blocking/Smashing-Yuri_Santana-1233262689.mp3");

//Clinton SFX
var clintonJump = new Audio("./audio/jump/Catapult-SoundBible.com-829548288.mp3");
var clintonPunch = new Audio("./audio/punch/Strong_Punch-Mike_Koenig-574430706.mp3");
var clintonLoKick = new Audio("./audio/loKick/Left Hook-SoundBible.com-516660386.mp3");
var clintonHiKick = new Audio("./audio/hiKick/Spin Kick-SoundBible.com-1263586030.mp3");
var clintonDucking = new Audio("./audio/duck/Maniacal Witches Laugh-SoundBible.com-262127569.mp3");
var clintonDeath = new Audio("./audio/death/Evil Laugh Cackle-SoundBible.com-957382653.mp3");
var clintonBlock = new Audio("./audio/blocking/clinton_exhausted.mp3");

//Sanders SFX
var sandersJump = new Audio("./audio/jump/spin_jump-Brandino480-2020916281.mp3");
var sandersPunch = new Audio("./audio/punch/Woosh-Mark_DiAngelo-4778593.mp3");
var sandersLoKick = new Audio("./audio/loKick/Kick-SoundBible.com-1331196005.mp3");
var sandersHiKick = new Audio("./audio/hiKick/Roundhouse Kick-SoundBible.com-1663225804.mp3");
var sandersDucking = new Audio("./audio/duck/Commedy_Punch-Poorna_RAo-1017287436.mp3");
var sandersDeath = new Audio("./audio/death/Dying Soul-SoundBible.com-1682971511.mp3");
var sandersBlock = new Audio("./audio/blocking/punch_or_whack_-Vladimir-403040765.mp3");


function Fighter(game, fighterName, ASSET_MANAGER, x, y, faceLeft, AI, fighterNum) {
    this.fighter = fighterName;
    this.x = x;
    this.y = y;
    this.jumping = false;
    this.punching = false;
    this.ducking = false;
    this.walkLeft = false;
    this.walkRight = false;
    this.lowKicking = false;
    this.highKicking = false;
    this.blocking = false;
    this.AI = AI;
    this.canHit = true;
    this.fightNum = fighterNum;
    this.facing = faceLeft;
    this.fightRadius = 200;
    this.dead = false;
    this.move = false;
    this.win = false;

    this.fistRightBox = {x:0, y: 0, width: 0, height:0};
    this.fistLeftBox = {x:0, y: 0, width: 0, height:0};

    this.lowFootRightBox = {x:0, y: 0, width: 0, height:0};
    this.lowFootLeftBox ={x:0, y: 0, width: 0, height:0};

    this.highFootRightBox = {x:0, y: 0, width: 0, height:0};
    this.highFootLeftBox = {x:0, y: 0, width: 0, height:0};


    //healthBar variable
    this.healthBar  = 100;

    //speed variable
    this.speed = 2;

    this.radius = 100;
    this.ground = 300;
    this.game  = game;

    if(fighterName === CRUZ){
        //height and widths for bounding boxes
        this.widthOptions = {walkLeft: 150, walkRight: 144, standLeft: 150, standRight: 157, punchLeft: 150,
            punchRight: 140, lowKickLeft: 200, lowKickRight: 200, jumpLeft: 150, jumpRight: 165, highKickLeft: 170,
            highKickRight: 170, duckLeft: 150, duckRight: 150, blockLeft: 382, blockRight: 378, deadLeft: 303, deadRight: 294};

        this.heightOptions = {walkLeft: 300, walkRight: 292, standLeft: 292, standRight: 292, punchLeft: 319,
            punchRight: 310, lowKickLeft: 312, lowKickRight:315, jumpLeft: 300, jumpRight: 310, highKickLeft: 316,
            highKickRight: 300, duckLeft: 230, duckRight: 230, blockLeft: 311, blockRight: 319, deadLeft: 321, deadRight: 309};

        // this.width = this.widthOptions.standingWidth;
        // this.height = this.heightOptions.standingHeight;

        /**
         * Adjusts X
         * @returns {*}
         */

        //for adjusting x's
        this.standRightX = function () {return this.x;};
        this.standLeftX = function () {return this.x;};
        this.jumpRightX = function () {return this.x -10;};
        this.jumpLeftX = function () {return this.x ;};
        this.punchRightX = function () {return this.x;};
        this.punchLeftX = function () {return this.x;};
        this.lowKickRightX = function () {return this.x+100;};
        this.lowKickLeftX = function () {return this.x+ 50;};
        this.duckRightX = function () {return this.x - 10;};
        this.duckLeftX = function () {return this.x - 30;};
        this.highKickRightX = function () {return this.x - 30;};
        this.highKickLeftX = function () {return this.x+ 20;};
        this.blockRightX = function () {return this.x - 135;};
        this.blockLeftX = function () {return this.x - 70;};
        this.walkRightX = function () {return this.x +5;};
        this.walkLeftX = function () {return this.x +17;};

        /** Adjusts Y's */
        this.standRightY = function (){return this.y;};
        this.standLeftY = function () {return this.y;};
        this.jumpRightY = function () {return this.y -8;};
        this.jumpLeftY = function () {return this.y - 15;};
        this.punchRightY = function () {return this.y -10;};
        this.punchLeftY = function () {return this.y - 10;};
        this.lowKickRightY = function () {return this.y -5;};
        this.lowKickLeftY = function () {return this.y - 15;};
        this.highKickLeftY = function () {return this.y -20;};
        this.highKickRightY = function () {return this.y -10;};
        this.duckRightY = function () {return this.y +65;};
        this.duckLeftY = function () {return this.y +65;};
        this.blockRightY = function () {return this.y - 15;};
        this.blockLeftY = function () {return this.y - 5;};
        this.walkLeftY = function () {return this.y + 10;};
        this.walkRightY = function () {return this.y;};

        //Bounding Boxes
        this.standRightBox = {x: this.standRightX() , y: this.standRightY(), width:this.widthOptions.standRight, height: this.heightOptions.standRight};
        this.standLeftBox = {x: this.standLeftX(), y: this.standLeftY(), width:this.widthOptions.standLeft, height:this.heightOptions.standLeft};
        this.jumpRightBox = {x: this.jumpRightX(), y: this.jumpRightY(), width:this.widthOptions.jumpRight, height:this.heightOptions.jumpRight};
        this.jumpLeftBox = {x: this.jumpLeftX(), y: this.jumpLeftY(), width: this.widthOptions.jumpLeft, height: this.heightOptions.jumpLeft};
        this.punchRightBox = {x: this.punchRightX(), y: this.punchRightY(), width: this.widthOptions.punchRight, height: this.heightOptions.punchRight};
        this.punchLeftBox = {x: this.punchLeftX(), y: this.punchLeftY(), width: this.widthOptions.punchLeft, height:this.heightOptions.punchLeft};
        this.lowKickRightBox = {x: this.lowKickRightX(), y: this.lowKickRightY(), width: this.widthOptions.lowKickRight, height: this.heightOptions.lowKickRight};
        this.lowKickLeftBox = {x: this.lowKickLeftX(), y: this.lowKickLeftY(), width: this.widthOptions.lowKickLeft, height:this.heightOptions.lowKickLeft};
        this.duckRightBox = {x: this.duckRightX(), y: this.duckRightY(), width: this.widthOptions.duckRight, height: this.heightOptions.duckRight};
        this.duckLeftBox = {x: this.duckLeftX(), y: this.duckLeftY(), width:this.widthOptions.duckLeft, height: this.heightOptions.duckLeft};
        this.walkRightBox = {x: this.walkRightX(), y: this.walkRightY(), width:this.widthOptions.walkRight, height:this.heightOptions.walkRight};
        this.walkLeftBox = {x: this.walkLeftX(), y: this.walkLeftY(), width:this.widthOptions.walkLeft, height:this.heightOptions.walkLeft};
        this.highKickLeftBox = {x: this.highKickLeftX(), y: this.highKickLeftY(), width: this.widthOptions.highKickLeft, height: this.heightOptions.highKickLeft};
        this.highKickRightBox = {x: this.highKickRightX(), y: this.highKickRightY(), width: this.widthOptions.highKickRight, height:this.heightOptions.highKickRight};
        this.blockRightBox = {x: this.blockRightX(), y: this.blockRightY(), width:this.widthOptions.blockRight, height: this.heightOptions.blockRight};
        this.blockLeftBox = {x: this.blockLeftX(), y: this.blockLeftY(), width: this.widthOptions.blockLeft, height:this.heightOptions.blockLeft};

        //STANDING
        this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzStanding.png"), 0, 0, 157, 292, 0.099, 6, true, false);
        this.animationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzStandingLeft.png"), 0, 0, 147, 293, 0.099, 6, true, false);

        //JUMP
        this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzJump.png"), 0, 0, 234, 311, 0.06, 20, false, false);
        this.jumpAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzJumpLeft.png"), 0, 0, 237, 311, 0.06, 20, false, false);

        //PUNCH
        this.punchingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzPunch.png"), 0, 0, 295, 317, 0.06, 12, false, false);
        this.punchingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzPunchLeft.png"), 0, 0, 386, 319, 0.06, 12, false, false);

        //LOW KICK
        this.lowKickingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzLoKick.png"), 0, 0, 285, 315, 0.06, 12, false, false);
        this.lowKickingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzLoKickLeft.png"), 0, 0, 296, 312, 0.06, 12, false, false);

        //DUCK
        this.duckingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzDuck.png"), 0, 0, 192, 294, 0.06, 12, false, false);
        this.duckingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzDuckLeft.png"), 0, 0, 145, 294, 0.06, 16, false, false);

        //WALKING
        this.walkLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzWalkLeft.png"), 0, 0, 246, 309, 0.06, 20, false, false);
        this.walkRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzWalkRight.png"), 0, 0, 144, 292, 0.06, 20, false, false);

        //HIGH KICK
        this.highKickAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzHiKickLeft.png"), 0, 0, 280, 316, 0.06, 12, false, false);
        this.highKickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzHiKick.png"), 0, 0, 276, 317, 0.06, 12, false, false);

        //BLOCK
        this.blockingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzBlock.png"),0,0, 378, 319, 0.06, 12, false, false);
        this.blockingLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzBlockLeft.png"),0,0, 382, 311, 0.06, 12, false, false);

        //DEAD
        this.deadAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzDead.png"),0,0, 294, 309, 0.09, 28, false, false);
        this.deadLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzDeadLeft.png"),0,0, 303, 321, 0.09, 28, false, false);

        //VICTORY
        this.victoryDance = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzWinDance.png"), 0, 0, 618, 667, 0.07, 11, true, false);

    }else if(fighterName === CLINTON){

        //height and widths for bounding boxes
        this.widthOptions = {standLeft: 160, standRight: 160, highKickLeft: 200, highKickRight: 180, punchLeft: 170,
            punchRight: 160, lowKickLeft: 160, lowKickRight: 170, jumpLeft: 160, jumpRight: 160, duckRight: 162,
            blockRight:436, walkRight: 170, walkLeft: 180, duckLeft: 162, blockLeft: 446, deadRight: 314, deadLeft: 313};

        this.heightOptions = {standRight: 299, punchRight: 297, lowKickLeft: 320, lowKickRight: 299, highKickRight: 322,
            duckLeft: 220, duckRight: 220, jumpLeft: 300, jumpRight: 300, blockRight:321, walkLeft: 305, walkRight: 305,
            standLeft: 299, punchLeft: 297, highKickLeft: 317, blockLeft:320 , deadRight: 328, deadLeft: 327};

        /**
         * Adjusts X
         * @returns {*}
         */

        this.standRightX = function () {return this.x+20;};
        this.standLeftX = function () {return this.x;};
        this.jumpRightX = function () {return this.x + 25;};
        this.jumpLeftX = function () {return this.x ;};
        this.punchRightX = function () {return this.x;};
        this.punchLeftX = function () {return this.x;};
        this.lowKickRightX = function () {return this.x + 200;};
        this.lowKickLeftX = function () {return this.x + 40;};
        this.duckRightX = function () {return this.x;};
        this.duckLeftX = function () {return this.x;};
        this.highKickRightX = function () {return this.x - 20;};
        this.highKickLeftX = function () {return this.x + 30;};
        this.blockRightX = function () {return this.x - 135;};
        this.blockLeftX = function () {return this.x - 135;};
        this.walkRightX = function () {return this.x + 50;};
        this.walkLeftX = function () {return this.x + 50;};

        /**
         * Adjusts Y's
         */
        //for adjusting y's
        this.standRightY = function (){return this.y;};
        this.standLeftY = function () {return this.y;};
        this.jumpRightY = function () {return this.y + 10;};
        this.jumpLeftY = function () {return this.y ;};
        this.punchRightY = function () {return this.y;};
        this.punchLeftY = function () {return this.y;};
        this.lowKickRightY = function () {return this.y+30;};
        this.lowKickLeftY = function () {return this.y;};
        this.highKickLeftY = function () {return this.y -10;};
        this.highKickRightY = function () {return this.y -10;};
        this.duckRightY = function () {return this.y + 85;};
        this.duckLeftY = function () {return this.y + 85;};
        this.blockRightY = function () {return this.y - 15;};
        this.blockLeftY = function () {return this.y - 15;};
        this.walkLeftY = function () {return this.y ;};
        this.walkRightY = function () {return this.y;};

        /**
         * Bounding boxes
         * @type {{x: *, y, width: number, height: number}}
         */
        this.standRightBox = {x: this.standRightX() , y: this.standRightY(), width:this.widthOptions.standRight, height: this.heightOptions.standRight};
        this.standLeftBox = {x: this.standLeftX(), y: this.standLeftY(), width:this.widthOptions.standLeft, height:this.heightOptions.standLeft};
        this.jumpRightBox = {x: this.jumpRightX(), y: this.jumpRightY(), width:this.widthOptions.jumpRight, height:this.heightOptions.jumpRight};
        this.jumpLeftBox = {x: this.jumpLeftX(), y: this.jumpLeftY(), width: this.widthOptions.jumpLeft, height: this.heightOptions.jumpLeft};
        this.punchRightBox = {x: this.punchRightX(), y: this.punchRightY(), width: this.widthOptions.punchRight, height: this.heightOptions.punchRight};
        this.punchLeftBox = {x: this.punchLeftX(), y: this.punchLeftY(), width: this.widthOptions.punchLeft, height:this.heightOptions.punchLeft};
        this.lowKickRightBox = {x: this.lowKickRightX(), y: this.lowKickRightY(), width: this.widthOptions.lowKickRight, height: this.heightOptions.lowKickRight};
        this.lowKickLeftBox = {x: this.lowKickLeftX(), y: this.lowKickLeftY(), width: this.widthOptions.lowKickLeft, height:this.heightOptions.lowKickLeft};
        this.duckRightBox = {x: this.duckRightX(), y: this.duckRightY(), width: this.widthOptions.duckRight, height: this.heightOptions.duckRight};
        this.duckLeftBox = {x: this.duckLeftX(), y: this.duckLeftY(), width:this.widthOptions.duckLeft, height: this.heightOptions.duckLeft};
        this.walkRightBox = {x: this.walkRightX(), y: this.walkRightY(), width:this.widthOptions.walkRight, height:this.heightOptions.walkRight};
        this.walkLeftBox = {x: this.walkLeftX(), y: this.walkLeftY(), width:this.widthOptions.walkLeft, height:this.heightOptions.walkLeft};
        this.highKickLeftBox = {x: this.highKickLeftX(), y: this.highKickLeftY(), width: this.widthOptions.highKickLeft, height: this.heightOptions.highKickLeft};
        this.highKickRightBox = {x: this.highKickRightX(), y: this.highKickRightY(), width: this.widthOptions.highKickRight, height:this.heightOptions.highKickRight};
        this.blockRightBox = {x: this.blockRightX(), y: this.blockRightY(), width:this.widthOptions.blockRight, height: this.heightOptions.blockRight};
        this.blockLeftBox = {x: this.blockLeftX(), y: this.blockLeftY(), width: this.widthOptions.blockLeft, height:this.heightOptions.blockLeft};

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
        this.deadAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonDead.png"),0,0, 322, 328, 0.09, 28, false, false);
        this.deadLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonDeadLeft.png"),0,0, 313, 327, 0.09, 28, false, false);

        //VICTORY
        this.victoryDance = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonWinDance.png"), 0, 0, 300, 405, 0.08, 11, true, false);
    }else if(fighterName === TRUMP){
        //height and widths for bounding boxes
        this.widthOptions = {standLeft: 150, standRight: 160, jumpLeft: 160,
            jumpRight: 160,

            walkLeft: 160,
            walkRight: 160,

            punchLeft: 160,
            punchRight: 160,

            lowKickLeft: 140,
            lowKickRight: 160,


            highKickLeft: 160,
            highKickRight: 160,


            duckLeft: 180,
            duckRight: 160,
            blockRight: 360,

            blockLeft: 372,
            deadRight: 476,
            deadLeft: 478
        };

        this.heightOptions = {
            jumpLeft: 325,
            jumpRight: 325,

            walkRight: 326,
            standRight: 325,

            punchLeft: 325,
            punchRight: 325,
            lowKickRight: 321,

            highKickLeft: 325,
            highKickRight: 325,

            duckLeft: 240,
            duckRight: 240,
            blockRight: 424,
            walkLeft: 326,
            standLeft: 320,

            lowKickLeft: 335,



            blockLeft: 429,
            deadRight: 338,
            deadLeft: 338
        };

        /** X's */
        this.standRightX = function () {return this.x;};

        this.standLeftX = function () {return this.x+ 121;};

        this.jumpRightX = function () {return this.x - 5;};

        this.jumpLeftX = function() {return this.x + 115;};

        this.punchRightX = function() {return this.x;};

        this.punchLeftX = function () {return this.x+ 120;};

        this.lowKickRightX = function () {return this.x - 155;};

        this.lowKickLeftX = function () {return this.x + 155;};

        this.duckRightX = function () {return this.x + 30;};

        this.duckLeftX = function () {return this.x + 135;};

        this.highKickRightX = function () {return this.x -20;};

        this.highKickLeftX = function () {return this.x + 130;};

        this.blockRightX = function () {return this.x - 120;};

        this.blockLeftX = function () {return this.x+35;};

        this.walkRightX = function () {return this.x + 10;};

        this.walkLeftX = function () {return this.x +110;};

        /** Y's */
        this.standRightY = function (){return this.y;};

        this.standLeftY = function () {return this.y;};

        this.jumpRightY = function () {return this.y -10;};

        this.jumpLeftY = function () {return this.y - 0;};

        this.punchRightY = function () {return this.y ;};

        this.punchLeftY = function () {return this.y;};

        this.lowKickRightY = function () {return this.y - 5;};

        this.lowKickLeftY = function () {return this.y -10;};

        this.highKickLeftY = function () {return this.y -5;};

        this.highKickRightY = function () {return this.y;};

        this.duckRightY = function () {return this.y+ 80;};

        this.duckLeftY = function () {return this.y + 80;};

        this.blockRightY = function () {return this.y - 95;};

        this.blockLeftY = function () {return this.y - 105;};

        this.walkLeftY = function () {return this.y;};

        this.walkRightY = function () {return this.y;};

        //Bounding Boxes
        this.standRightBox = {x: this.standRightX() , y: this.standRightY(), width:this.widthOptions.standRight, height: this.heightOptions.standRight};
        this.standLeftBox = {x: this.standLeftX(), y: this.standLeftY(), width:this.widthOptions.standLeft, height:this.heightOptions.standLeft};
        this.jumpRightBox = {x: this.jumpRightX(), y: this.jumpRightY(), width:this.widthOptions.jumpRight, height:this.heightOptions.jumpRight};
        this.jumpLeftBox = {x: this.jumpLeftX(), y: this.jumpLeftY(), width: this.widthOptions.jumpLeft, height: this.heightOptions.jumpLeft};
        this.punchRightBox = {x: this.punchRightX(), y: this.punchRightY(), width: this.widthOptions.punchRight, height: this.heightOptions.punchRight};
        this.punchLeftBox = {x: this.punchLeftX(), y: this.punchLeftY(), width: this.widthOptions.punchLeft, height:this.heightOptions.punchLeft};
        this.lowKickRightBox = {x: this.lowKickRightX(), y: this.lowKickRightY(), width: this.widthOptions.lowKickRight, height: this.heightOptions.lowKickRight};
        this.lowKickLeftBox = {x: this.lowKickLeftX(), y: this.lowKickLeftY(), width: this.widthOptions.lowKickLeft, height:this.heightOptions.lowKickLeft};
        this.duckRightBox = {x: this.duckRightX(), y: this.duckRightY(), width: this.widthOptions.duckRight, height: this.heightOptions.duckRight};
        this.duckLeftBox = {x: this.duckLeftX(), y: this.duckLeftY(), width:this.widthOptions.duckLeft, height: this.heightOptions.duckLeft};
        this.walkRightBox = {x: this.walkRightX(), y: this.walkRightY(), width:this.widthOptions.walkRight, height:this.heightOptions.walkRight};
        this.walkLeftBox = {x: this.walkLeftX(), y: this.walkLeftY(), width:this.widthOptions.walkLeft, height:this.heightOptions.walkLeft};
        this.highKickLeftBox = {x: this.highKickLeftX(), y: this.highKickLeftY(), width: this.widthOptions.highKickLeft, height: this.heightOptions.highKickLeft};
        this.highKickRightBox = {x: this.highKickRightX(), y: this.highKickRightY(), width: this.widthOptions.highKickRight, height:this.heightOptions.highKickRight};
        this.blockRightBox = {x: this.blockRightX(), y: this.blockRightY(), width:this.widthOptions.blockRight, height: this.heightOptions.blockRight};
        this.blockLeftBox = {x: this.blockLeftX(), y: this.blockLeftY(), width: this.widthOptions.blockLeft, height:this.heightOptions.blockLeft};

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
        this.duckingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpDuckLeft.png"), 0, 0, 325, 324, 0.06, 12, false, false);


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
        this.deadAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpDead.png"),0,0, 476, 338, 0.09, 28, false, false);
        this.deadLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpDeadLeft.png"),0,0, 478, 338, 0.09, 28, false, false);

        //Victory
        this.victoryDance = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpWinDance.png"), 0, 0, 440, 382, .07, 9, true, false);
    }else if(fighterName === SANDERS){
        //height and widths for bounding boxes

        this.widthOptions = {
            jumpRight: 135,
            jumpLeft: 135,
            standRight: 135,
            standLeft: 130,

            walkRight: 135,
            walkLeft: 140,


            lowKickRight: 180,

            highKickRight: 195,
            duckRight: 210,


            punchRight: 200,
            punchLeft: 220,
            lowKickLeft: 250,

            highKickLeft: 250,
            duckLeft: 247,
            blockLeft: 300,
            blockRight: 300,
            deadRight: 310,
            deadLeft: 310
        };

        this.heightOptions = {
            walkRight: 313,
            standRight: 305,
            punchRight: 320,
            lowKickRight: 320,
            jumpRight:325 ,
            highKickRight: 310,

            blockRight: 335,
            walkLeft: 316,
            standLeft: 305,
            punchLeft: 335,
            lowKickLeft: 319,
            jumpLeft: 320,
            highKickLeft: 310,
            duckRight: 230,
            duckLeft: 230 ,
            blockLeft: 342,
            deadRight: 334,
            deadLeft: 352
        };

        /** X's*/
        this.standRightX = function () {return this.x+ 20;};

        this.standLeftX = function () {return this.x+22;};

        this.jumpRightX = function () {return this.x + 17;};

        this.jumpLeftX = function () {return this.x +25;};

        this.punchLeftX = function () {return this.x;};

        this.punchRightX = function () {return this.x - 20;};

        this.lowKickRightX = function () {return this.x+20;};

        this.lowKickLeftX = function () {return this.x+ 30;};

        this.duckRightX = function () {return this.x;};

        this.duckLeftX = function () {return this.x+ 20;};

        this.highKickRightX = function () {return this.x - 30;};

        this.highKickLeftX = function () {return this.x+20;};

        this.blockRightX = function () {return this.x;};

        this.blockLeftX = function () {return this.x - 135;};

        this.walkLeftX = function () {return this.x +15;};

        this.walkRightX = function () {return this.x + 25;};


        /**Y's*/
        this.standRightY = function () {return this.y;};

        this.standLeftY = function(){return this.y;};

        this.jumpRightY = function(){return this.y-15;};

        this.jumpLeftY = function () {return this.y - 15;};

        this.punchRightY = function () {return this.y-15;};

        this.punchLeftY = function () {return this.y - 40;};

        this.lowKickRightY = function () {return this.y + 80;};

        this.lowKickLeftY = function () {return this.y;};

        this.duckRightY = function () {return this.y+80;};

        this.duckLeftY = function () {return this.y+80;};

        this.highKickRightY = function () {return this.y - 10;};

        this.highKickLeftY = function () {return this.y -10;};

        this.blockLeftY = function () {return this.y - 15;};

        this.blockRightY = function () {return this.y -15;};

        this.walkRightY = function () {return this.y;};

        this.walkLeftY = function (){return this.y;};

        //Bounding Boxes
        this.standRightBox = {x: this.standRightX() , y: this.standRightY(), width:this.widthOptions.standRight, height: this.heightOptions.standRight};
        this.standLeftBox = {x: this.standLeftX(), y: this.standLeftY(), width:this.widthOptions.standLeft, height:this.heightOptions.standLeft};
        this.jumpRightBox = {x: this.jumpRightX(), y: this.jumpRightY(), width:this.widthOptions.jumpRight, height:this.heightOptions.jumpRight};
        this.jumpLeftBox = {x: this.jumpLeftX(), y: this.jumpLeftY(), width: this.widthOptions.jumpLeft, height: this.heightOptions.jumpLeft};
        this.punchRightBox = {x: this.punchRightX(), y: this.punchRightY(), width: this.widthOptions.punchRight, height: this.heightOptions.punchRight};
        this.punchLeftBox = {x: this.punchLeftX(), y: this.punchLeftY(), width: this.widthOptions.punchLeft, height:this.heightOptions.punchLeft};
        this.lowKickRightBox = {x: this.lowKickRightX(), y: this.lowKickRightY(), width: this.widthOptions.lowKickRight, height: this.heightOptions.lowKickRight};
        this.lowKickLeftBox = {x: this.lowKickLeftX(), y: this.lowKickLeftY(), width: this.widthOptions.lowKickLeft, height:this.heightOptions.lowKickLeft};
        this.duckRightBox = {x: this.duckRightX(), y: this.duckRightY(), width: this.widthOptions.duckRight, height: this.heightOptions.duckRight};
        this.duckLeftBox = {x: this.duckLeftX(), y: this.duckLeftY(), width:this.widthOptions.duckLeft, height: this.heightOptions.duckLeft};
        this.walkRightBox = {x: this.walkRightX(), y: this.walkRightY(), width:this.widthOptions.walkRight, height:this.heightOptions.walkRight};
        this.walkLeftBox = {x: this.walkLeftX(), y: this.walkLeftY(), width:this.widthOptions.walkLeft, height:this.heightOptions.walkLeft};
        this.highKickLeftBox = {x: this.highKickLeftX(), y: this.highKickLeftY(), width: this.widthOptions.highKickLeft, height: this.heightOptions.highKickLeft};
        this.highKickRightBox = {x: this.highKickRightX(), y: this.highKickRightY(), width: this.widthOptions.highKickRight, height:this.heightOptions.highKickRight};
        this.blockRightBox = {x: this.blockRightX(), y: this.blockRightY(), width:this.widthOptions.blockRight, height: this.heightOptions.blockRight};
        this.blockLeftBox = {x: this.blockLeftX(), y: this.blockLeftY(), width: this.widthOptions.blockLeft, height:this.heightOptions.blockLeft};

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
        this.duckingAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersDuckLeft.png"), 0, 0, 250, 317, 0.06, 12, false, false);

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
        this.deadAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersDead.png"),0,0, 325, 352, 0.09, 28, false, false);
        this.deadLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersDeadLeft.png"),0,0, 310, 352, 0.09, 28, false, false);


        //VICTORY
        //spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse
        this.victoryDance = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersWinDance.png"), 0, 0, 746, 630, 0.08, 12, true, false);

    }
    if(faceLeft){this.boundBox = this.standLeftBox;}
    if(!faceLeft){this.boundBox = this.standRightBox;}
    Entity.call(this, game, x, 300-y);
}


Fighter.prototype = new Entity();

Fighter.prototype.constructor = Fighter;


Fighter.prototype.update = function(){
    //jumping logic
    //jumping logic

    if(this.punching){
        var punchEnts = this.game.entities;
        for(var i = 0; i< punchEnts.length; i++){
            var entP = punchEnts[i];
            if(this != entP && entP instanceof Fighter && this.collide(entP)){
                if(this.canHit && entP.healthBar > 0){
                    if(entP.blocking){
                        entP.healthBar -=1;
                        if(entP.fighter==="TRUMP") {
                            trumpBlock.play();
                        } else if(entP.fighter==="CRUZ") {
                            cruzBlock.play();
                        } else if(entP.fighter==="CLINTON") {
                            clintonBlock.play();
                        } else if(entP.fighter==="SANDERS") {
                            sandersBlock.play();
                        }
                    }else{
                        var rand = Math.floor(Math.random() * 4) + 2;
                        entP.healthBar -= rand;
                    }
                    this.canHit = false;
                    if(entP.fighter==="TRUMP") {
                        trumpPunch.play();
                    } else if(entP.fighter==="CRUZ") {
                        cruzPunch.play();
                    } else if(entP.fighter==="CLINTON") {
                        clintonPunch.play();
                    } else if(entP.fighter==="SANDERS") {
                        sandersPunch.play();
                    }
                }
            }
        }
    }
    
    if(this.lowKicking){
        var lowKickEnts = this.game.entities;
        for(var i = 0; i< lowKickEnts.length; i++){
            var entL = lowKickEnts[i];
            if(this != entL && entL instanceof Fighter && this.collide(entL)){
                if(this.canHit && entL.healthBar > 0){
                    if(entL.blocking){
                        entL.healthBar -=3;
                        if(entL.fighter==="TRUMP") {
                            trumpBlock.play();
                        } else if(entL.fighter==="CRUZ") {
                            cruzBlock.play();
                        } else if(entL.fighter==="CLINTON") {
                            clintonBlock.play();
                        } else if(entL.fighter==="SANDERS") {
                            sandersBlock.play();
                        }
                    }else{
                        var rand = Math.floor(Math.random() * 8) + 3;
                        entL.healthBar -= rand;
                    }
                    this.canHit = false;
                    if(this.fighter==="TRUMP") {
                        trumpLoKick.play();
                    } else if(this.fighter==="CRUZ") {
                        cruzLoKick.play();
                    } else if(this.fighter==="CLINTON") {
                        clintonLoKick.play();
                    } else if(this.fighter==="SANDERS") {
                        sandersLoKick.play();
                    }
                }
            }
        }
    }
    
    if(this.highKicking){
        var highKickEnts = this.game.entities;
        for(var i = 0; i< highKickEnts.length; i++){
            var entH = highKickEnts[i];
            if(this != entH && entH instanceof Fighter && this.collide(entH)){
                if(this.canHit && entH.healthBar > 0){
                    if(entH.blocking){
                        entH.healthBar -=2;
                        if(entH.fighter==="TRUMP") {
                            trumpBlock.play();
                        } else if(entH.fighter==="CRUZ") {
                            cruzBlock.play();
                        } else if(entH.fighter==="CLINTON") {
                            clintonBlock.play();
                        } else if(entH.fighter==="SANDERS") {
                            sandersBlock.play();
                        }
                    }else{
                        var rand = Math.floor(Math.random() * 6) + 2;
                        entH.healthBar -= rand;
                    }
                    this.canHit = false;
                    if(this.fighter==="TRUMP") {
                        trumpHiKick.play();
                    } else if(this.fighter==="CRUZ") {
                        cruzHiKick.play();
                    } else if(this.fighter==="CLINTON") {
                        clintonHiKick.play();
                    } else if(this.fighter==="SANDERS") {
                        sandersHiKick.play();
                    }
                }

            }

        }
    }
    var truths = 0;
    var moves = [this.punching, this.highKicking, this.blocking, this.lowKicking, this.walkLeft, this.walkRight, this.ducking];

    if(this.AI && this.move){
        var ents = this.game.entities;
        for(var i =0; i< ents.length; i++){
            var ent = this.game.entities[i];
            if(this != ent && ent.fightNum === 1){
                this.search(ent);
            }
        }

        for(var i = 0; i< ents.length; i++){
            var ent = ents[i];
            if(this!= ent && ent.fightNum ===1){
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
    }else if(this.fightNum ===1){
        if (this.game.w) {

            if(!(this.jumping || this.punching || this.highKicking || this.lowKicking || this.blocking || this.walkLeft||this.walkRight)){
                this.jumping = true;
                if(this.fighter==="TRUMP") {
                    trumpJump.play();
                } else if(this.fighter==="CRUZ") {
                    cruzJump.play();
                    } else if(this.fighter==="CLINTON") {
                    clintonJump.play();
                } else if(this.fighter==="SANDERS") {
                    sandersJump.play();
                }
            }

        }else if(this.game.r){
            if(!(this.jumping || this.punching || this.highKicking || this.lowKicking || this.blocking || this.walkLeft||this.walkRight)){
                this.punching = true;
            }

        } else if(this.game.y) {
            if(!(this.jumping || this.punching || this.highKicking || this.lowKicking || this.blocking || this.walkLeft||this.walkRight)){
                this.lowKicking=true;
            }

        } else if(this.game.t) {
            if(!(this.jumping || this.punching || this.highKicking || this.lowKicking || this.blocking || this.walkLeft||this.walkRight)){
                this.highKicking=true;
            }
        } else if(this.game.s) {
            if(!(this.jumping || this.punching || this.highKicking || this.lowKicking || this.blocking || this.walkLeft||this.walkRight)){
                this.ducking=true;
                if(this.fighter==="TRUMP") {
                    trumpDucking.play();
                } else if(this.fighter==="CRUZ") {
                    cruzDucking.play();
                } else if(this.fighter==="CLINTON") {
                    clintonDucking.play();
                } else if(this.fighter==="SANDERS") {
                    sandersDucking.play();
                }
            }

        } else if (this.game.d) {

            if((this.jumping || this.punching || this.highKicking || this.lowKicking || this.blocking || this.walkLeft)){
                this.walkRight = false;
            }else{
                if(this.x + 100 < 1180) {
                    this.walkRight = true;
                    this.facing = false;
                }
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
            if(this.jumping || this.punching || this.highKicking || this.lowKicking || this.blocking||this.walkRight){
                this.walkLeft = false;
            }else{
                if(this.x - 50 > 0) {
                    this.walkLeft = true;
                    this.facing = true;
                }
            }

        }else if(this.game.leftShift){
            if(!(this.jumping || this.punching || this.highKicking || this.lowKicking || this.blocking || this.walkLeft||this.walkRight)){
                this.blocking = true;
            }

        }
    }else if (this.fightNum === 2) {
        if (this.game.o) {
            if(!(this.jumping || this.punching || this.highKicking || this.lowKicking || this.blocking || this.walkLeft||this.walkRight)){
                this.jumping = true;
                if(this.fighter==="TRUMP") {
                    trumpJump.play();
                } else if(this.fighter==="CRUZ") {
                    cruzJump.play();
                } else if(this.fighter==="CLINTON") {
                    clintonJump.play();
                } else if(this.fighter==="SANDERS") {
                    sandersJump.play();
                }
            }
        }else if(this.game.leftB){
            if(!(this.jumping || this.punching || this.highKicking || this.lowKicking || this.blocking || this.walkLeft||this.walkRight)){
                this.punching = true;
            }
        } else if(this.game.backS) {
            if(!(this.jumping || this.punching || this.highKicking || this.lowKicking || this.blocking || this.walkLeft||this.walkRight)){
                this.lowKicking=true;
            }
        } else if(this.game.rightB) {
            if(!(this.jumping || this.punching || this.highKicking || this.lowKicking || this.blocking || this.walkLeft||this.walkRight)){
                this.highKicking=true;
            }
        } else if(this.game.lKey) {
            if(!(this.jumping || this.punching || this.highKicking || this.lowKicking || this.blocking || this.walkLeft||this.walkRight)){
                this.ducking=true;
                if(this.fighter==="TRUMP") {
                    trumpDucking.play();
                } else if(this.fighter==="CRUZ") {
                    cruzDucking.play();
                } else if(this.fighter==="CLINTON") {
                    clintonDucking.play();
                } else if(this.fighter==="SANDERS") {
                    sandersDucking.play();
                }
            }
        } else if (this.game.pasta) {
            //this.x + sprite width > canvas width

            if((this.jumping || this.punching || this.highKicking || this.lowKicking || this.blocking || this.walkLeft)){
                this.walkRight = false;
            }else{
                if(this.x + 100 < 1180) {
                    this.walkRight = true;
                    this.facing = false;
                }
            }
        }else if(this.game.k){
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
            if(this.jumping || this.punching || this.highKicking || this.lowKicking || this.blocking ||this.walkRight){
                this.walkLeft = false;
            }else{
                if(this.x - 50 > 0) {
                    this.walkLeft = true;
                    this.facing = true;
                }
            }
        }else if(this.game.rightShift){
            if(!(this.jumping || this.punching || this.highKicking || this.lowKicking || this.blocking || this.walkLeft||this.walkRight)){
                this.blocking = true;
            }
        }
    }





    /**
     * Set all x's and y's of boxes
     */
    //standing
    this.standLeftBox.x = this.standLeftX();
    this.standLeftBox.y = this.standLeftY();
    this.standRightBox.x = this.standRightX();
    this.standRightBox.y = this.standRightY();

    //punching
    this.punchLeftBox.x = this.punchLeftX();
    this.punchLeftBox.y = this.punchLeftY();
    this.punchRightBox.x = this.punchRightX();
    this.punchRightBox.y = this.punchRightY();

    //jump
    this.jumpLeftBox.y = this.jumpLeftY();
    this.jumpLeftBox.x = this.jumpLeftX();
    this.jumpRightBox.y = this.jumpRightY();
    this.jumpRightBox.x = this.jumpRightX();

    //low kick
    this.lowKickLeftBox.x = this.lowKickLeftX();
    this.lowKickLeftBox.y = this.lowKickLeftY();
    this.lowKickRightBox.x = this.highKickRightX();
    this.lowKickRightBox.y = this.highKickRightY();

    //High kick
    this.highKickLeftBox.x = this.highKickLeftX();
    this.highKickLeftBox.y = this.highKickLeftY();
    this.highKickRightBox.x = this.highKickRightX();
    this.highKickRightBox.y = this.highKickRightY();


    //ducking
    this.duckLeftBox.x = this.duckLeftX();
    this.duckLeftBox.y = this.duckLeftY();
    this.duckRightBox.x = this.duckRightX();
    this.duckRightBox.y = this.duckRightY();

    //walking
    this.walkLeftBox.x = this.walkLeftX();
    this.walkLeftBox.y = this.walkLeftY();
    this.walkRightBox.x = this.walkRightX();
    this.walkRightBox.y = this.walkRightY();

    //blocking
    this.blockLeftBox.x = this.blockLeftX();
    this.blockLeftBox.y = this.blockLeftY();
    this.blockRightBox.x = this.blockRightX();
    this.blockRightBox.y = this.blockRightY();

    if(this.healthBar<=0){
        if(this.deadAnimation.isDone()){
            // this.deadAnimation.elapsedTime = 0;


        } else if(this.deadLeftAnimation.isDone()){

        }
        // this.width = this.widthOptions.standingWidth;
        // this.height = this.heightOptions.standingHeight;
    }else if (this.jumping) {
        // this.width = this.widthOptions.jumpingWidth;
        // this.height = this.heightOptions.jumpingHeight;
        if (this.jumpAnimation.isDone()) {
            this.jumpAnimation.elapsedTime = 0;
            this.jumping = false;
            if(this.fighter==="TRUMP") {
                trumpJump.pause();
                trumpJump.currentTime = 0;
            } else if(this.fighter==="CRUZ") {
                cruzJump.pause();
                cruzJump.currentTime = 0;
            } else if(this.fighter==="CLINTON") {
                clintonJump.pause();
                clintonJump.currentTime = 0;
            } else if(this.fighter==="SANDERS") {
                sandersJump.pause();
                sandersJump.currentTime = 0;
            }
        }else if(this.jumpAnimationLeft.isDone()){
            this.jumpAnimationLeft.elapsedTime = 0;
            this.jumping = false;
            if(this.fighter==="TRUMP") {
                trumpJump.pause();
                trumpJump.currentTime = 0;
            } else if(this.fighter==="CRUZ") {
                cruzJump.pause();
                cruzJump.currentTime = 0;
            } else if(this.fighter==="CLINTON") {
                clintonJump.pause();
                clintonJump.currentTime = 0;
            } else if(this.fighter==="SANDERS") {
                sandersJump.pause();
                sandersJump.currentTime = 0;
            }
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
            this.canHit = true;
            this.punchingAnimation.elapsedTime = 0;
            this.punching = false;
            if(this.fighter==="TRUMP") {
                trumpPunch.pause();
                trumpPunch.currentTime = 0;
            } else if(this.fighter==="CRUZ") {
                cruzPunch.pause();
                cruzPunch.currentTime = 0;
            } else if(this.fighter==="CLINTON") {
                clintonPunch.pause();
                clintonPunch.currentTime = 0;
            } else if(this.fighter==="SANDERS") {
                sandersPunch.pause();
                sandersPunch.currentTime = 0;
            }

        }
        if(this.punchingAnimationLeft.isDone()){
            this.canHit = true;
            this.punchingAnimationLeft.elapsedTime = 0;
            this.punching = false;
            if(this.fighter==="TRUMP") {
                trumpPunch.pause();
                trumpPunch.currentTime = 0;
            } else if(this.fighter==="CRUZ") {
                cruzPunch.pause();
                cruzPunch.currentTime = 0;
            } else if(this.fighter==="CLINTON") {
                clintonPunch.pause();
                clintonPunch.currentTime = 0;
            } else if(this.fighter==="SANDERS") {
                sandersPunch.pause();
                sandersPunch.currentTime = 0;
            }
        }

    } else if(this.lowKicking){
        //Sets the width for the bounding box
        // this.width = this.widthOptions.lowKickingWidth;
        if(this.lowKickingAnimation.isDone()){
            this.canHit = true;
            this.lowKickingAnimation.elapsedTime = 0;
            this.lowKicking = false;
            if(this.fighter==="TRUMP") {
                trumpLoKick.pause();
                trumpLoKick.currentTime = 0;
            } else if(this.fighter==="CRUZ") {
                cruzLoKick.pause();
                cruzLoKick.currentTime = 0;
            } else if(this.fighter==="CLINTON") {
                clintonLoKick.pause();
                clintonLoKick.currentTime = 0;
            } else if(this.fighter==="SANDERS") {
                sandersLoKick.pause();
                sandersLoKick.currentTime = 0;
            }
        }
        if(this.lowKickingAnimationLeft.isDone()){
            this.canHit = true;
            this.lowKickingAnimationLeft.elapsedTime = 0;
            this.lowKicking = false;
            if(this.fighter==="TRUMP") {
                trumpLoKick.pause();
                trumpLoKick.currentTime = 0;
            } else if(this.fighter==="CRUZ") {
                cruzLoKick.pause();
                cruzLoKick.currentTime = 0;
            } else if(this.fighter==="CLINTON") {
                clintonLoKick.pause();
                clintonLoKick.currentTime = 0;
            } else if(this.fighter==="SANDERS") {
                sandersLoKick.pause();
                sandersLoKick.currentTime = 0;
            }
        }
    }
    else if(this.ducking) {
        // this.width = this.widthOptions.duckingWidth;
        if(this.duckingAnimation.isDone()) {
            this.duckingAnimation.elapsedTime=0;
            this.ducking=false;
            if(this.fighter==="TRUMP") {
                //trumpDucking.pause();
                //trumpDucking.currentTime = 0;
            } else if(this.fighter==="CRUZ") {
                //cruzDucking.pause();
                //cruzDucking.currentTime = 0;
            } else if(this.fighter==="CLINTON") {
                //clintonDucking.pause();
                //clintonDucking.currentTime = 0;
            } else if(this.fighter==="SANDERS") {
                //sandersDucking.pause();
                //sandersDucking.currentTime = 0;
            }
        }

        if(this.duckingAnimationLeft.isDone()){
            this.duckingAnimationLeft.elapsedTime = 0;
            this.ducking = false;
            if(this.fighter==="TRUMP") {
                //trumpDucking.pause();
                //trumpDucking.currentTime = 0;
            } else if(this.fighter==="CRUZ") {
                //cruzDucking.pause();
                //cruzDucking.currentTime = 0;
            } else if(this.fighter==="CLINTON") {
                //clintonDucking.pause();
                //clintonDucking.currentTime = 0;
            } else if(this.fighter==="SANDERS") {
                //sandersDucking.pause();
                //sandersDucking.currentTime = 0;
            }
        }
    }
    else if(this.highKicking) {
        // this.width = this.widthOptions.highKickingWidth;
        if(this.highKickAnimation.isDone()) {
            this.canHit = true;
            // console.log("high kicking is done");
            this.highKickAnimation.elapsedTime=0;
            this.highKicking=false;
            if(this.fighter==="TRUMP") {
                trumpHiKick.pause();
                trumpHiKick.currentTime = 0;
            } else if(this.fighter==="CRUZ") {
                cruzHiKick.pause();
                cruzHiKick.currentTime = 0;
            } else if(this.fighter==="CLINTON") {
                clintonHiKick.pause();
                clintonHiKick.currentTime = 0;
            } else if(this.fighter==="SANDERS") {
                sandersHiKick.pause();
                sandersHiKick.currentTime = 0;
            }
        }
        if(this.highKickAnimationLeft.isDone()){
            this.canHit = true;
            this.highKickAnimationLeft.elapsedTime = 0;
            this.highKicking = false;
            if(this.fighter==="TRUMP") {
                trumpHiKick.pause();
                trumpHiKick.currentTime = 0;
            } else if(this.fighter==="CRUZ") {
                cruzHiKick.pause();
                cruzHiKick.currentTime = 0;
            } else if(this.fighter==="CLINTON") {
                clintonHiKick.pause();
                clintonHiKick.currentTime = 0;
            } else if(this.fighter==="SANDERS") {
                sandersHiKick.pause();
                sandersHiKick.currentTime = 0;
            }
        }
    } else if(this.walkRight){
        // this.width = this.widthOptions.walkRightWidth;

        if(this.walkRightAnimation.isDone() || this.game.d === false || this.game.pasta === false){
            this.walkRightAnimation.elapsedTime = 0;
            this.walkRight = false;
        }
        this.x = this.x + 4;
        this.y = this.ground;

    }else if (this.walkLeft){
        // this.width = this.widthOptions.walkingLeftWidth;

        if(this.walkLeftAnimation.isDone() || this.game.a === false || this.game.k === false){
            this.walkLeftAnimation.elapsedTime = 0;
            this.walkLeft = false;
        }
        this.x = this.x - 4;
        this.y = this.ground;
    }else if (this.blocking){
        if(this.blockingAnimation.isDone()) {
            // console.log("blocking is done");
            this.blockingAnimation.elapsedTime=0;
            this.blocking=false;
            /*
            if(this.fighter==="TRUMP") {
                trumpBlock.pause();
                trumpBlock.currentTime = 0;
            } else if(this.fighter==="CRUZ") {
                cruzBlock.pause();
                cruzBlock.currentTime = 0;
            } else if(this.fighter==="CLINTON") {
                //clintonBlock.pause();
                //clintonBlock.currentTime = 0;
            } else if(this.fighter==="SANDERS") {
                sandersBlock.pause();
                sandersBlock.currentTime = 0;
            }
            */
        }
        if(this.blockingLeftAnimation.isDone()){
            this.blockingLeftAnimation.elapsedTime = 0;
            this.blocking = false;
            /*
            if(this.fighter==="TRUMP") {
                trumpBlock.pause();
                trumpBlock.currentTime = 0;
            } else if(this.fighter==="CRUZ") {
                cruzBlock.pause();
                cruzBlock.currentTime = 0;
            } else if(this.fighter==="CLINTON") {
                //clintonBlock.pause();
                //clintonBlock.currentTime = 0;
            } else if(this.fighter==="SANDERS") {
                sandersBlock.pause();
                sandersBlock.currentTime = 0;
            } */
        }
    }



    Entity.prototype.update.call(this);
};


Fighter.prototype.draw = function (ctx) {
    if(this.healthBar<= 0){
        var ents = this.game.entities;
        for(var i = 0; i< ents.length; i++){
            var ent = ents[i];
            if(this!=ent  && ent instanceof Fighter){
                ent.win = true;
                this.walkLeftAnimation.loop = false;
                this.walkRightAnimation.loop = false;
            }
        }
        if(this.facing){
            if(this.fighter === TRUMP){
                this.deadLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
            }else if(this.fighter === SANDERS){
                this.deadLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
            }else if(this.fighter === CLINTON){
                this.deadLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y+20);
            }else if(this.fighter === CRUZ){
                this.deadLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y+ 20);
            }

        }else{
            if(this.fighter === TRUMP){
                this.deadAnimation.drawFrame(this.game.clockTick, ctx, this.x - 150, this.y);
            }else if(this.fighter === SANDERS){
                this.deadAnimation.drawFrame(this.game.clockTick, ctx, this.x - 150, this.y);
            }else if(this.fighter === CLINTON){
                this.deadAnimation.drawFrame(this.game.clockTick, ctx, this.x - 150, this.y+20);
            }else if(this.fighter === CRUZ){
                this.deadAnimation.drawFrame(this.game.clockTick, ctx, this.x - 150, this.y + 30);
            }

        }
    }else if(this.jumping) {
        // this.jumpAnimation.d

        if(this.facing === true){
            // this.jumpAnimationLeft.drawFrame(this.game.clockTick, ctx, this.xOptions.jumpLeftX, this.yOptions.jumpLeftY);
            if(this.fighter === TRUMP){
                this.jumpAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x+115, this.y-35);
            }else if(this.fighter === SANDERS){
                this.jumpAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x-30, this.y-15);
            }else if(this.fighter === CLINTON){
                // this.jumpAnimationLeft.drawFrame(this.game.clockTick, ctx, this.xOptions.jumpLeftX, this.yOptions.jumpLeftY);
                this.jumpAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x-50, this.y-15);
            } else if (this.fighter === CRUZ) {
                this.jumpAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x-50, this.y-15);
            }
            ctx.beginPath();
            ctx.rect(this.jumpLeftBox.x, this.jumpLeftBox.y, this.jumpLeftBox.width, this.jumpLeftBox.height);
            // ctx.stroke();
            ctx.closePath();
        } else{
            // this.jumpAnimation.drawFrame(this.game.clockTick, ctx, this.xOptions.jumpRightX, this.yOptions.jumpRightY);
            if(this.fighter === TRUMP){
                this.jumpAnimation.drawFrame(this.game.clockTick, ctx, this.x-85, this.y-30);
            }else if(this.fighter === SANDERS){
                this.jumpAnimation.drawFrame(this.game.clockTick, ctx, this.x-70, this.y-15);
            }else if(this.fighter === CLINTON){
                this.jumpAnimation.drawFrame(this.game.clockTick, ctx, this.x-50, this.y-15);
            } else if (this.fighter === CRUZ) {
                this.jumpAnimation.drawFrame(this.game.clockTick, ctx, this.x-50, this.y-15);
            }
            ctx.beginPath();
            ctx.rect(this.jumpRightBox.x, this.jumpRightBox.y, this.jumpRightBox.width, this.jumpRightBox.height);
            // ctx.stroke();
            ctx.closePath();
        }


    } else if (this.punching){
        // console.log("punching");
        this.punchingAnimation.d;

        if(this.facing === true){
            // this.punchingAnimationLeft.drawFrame(this.game.clockTick, ctx, this.xOptions.punchLeftX , this.yOptions.punchLeftY);
            if(this.fighter === TRUMP){
                this.punchingAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x , this.y-25);
                this.fistLeftBox.x = this.boundBox.x - 120;
                this.fistLeftBox.y = this.boundBox.y + (this.boundBox.height/2);
                this.fistLeftBox.width = 120;
                this.fistLeftBox.height = 30;
            }else if(this.fighter === SANDERS){
                this.punchingAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x-110 , this.y-80);
                this.fistLeftBox.x = this.boundBox.x - 90;
                this.fistLeftBox.y = this.boundBox.y + (this.boundBox.height/2);
                this.fistLeftBox.width = 100;
                this.fistLeftBox.height = 30;
            }else if(this.fighter === CLINTON){
                this.fistLeftBox.x = this.boundBox.x -130;
                this.fistLeftBox.y = this.boundBox.y + (this.boundBox.height/2);
                this.fistLeftBox.width = 130;
                this.fistLeftBox.height = 30;
                this.punchingAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x - 130 , this.y);
            } else if (this.fighter === CRUZ) {
                this.fistLeftBox.x = this.boundBox.x - 70;
                this.fistLeftBox.y = this.boundBox.y + (this.boundBox.height/2);
                this.fistLeftBox.width = 100;
                this.fistLeftBox.height = 30;
                this.punchingAnimationLeft.drawFrame(this.game.clockTick, ctx, this.x - 70, this.y-10);
            }


            ctx.beginPath();
            ctx.fillStyle = "Black";
            ctx.rect((this.fistLeftBox.x), this.fistLeftBox.y, 20, this.fistLeftBox.height);
            // ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.rect(this.fistLeftBox.x, this.fistLeftBox.y, this.fistLeftBox.width, this.fistLeftBox.height);
            // ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.rect(this.boundBox.x, this.punchLeftBox.y, this.punchLeftBox.width, this.punchLeftBox.height);
            // ctx.stroke();
            ctx.closePath();
        }else{
            // this.punchingAnimation.drawFrame(this.game.clockTick, ctx, this.xOptions.punchRightX , this.yOptions.blockRightY);
            if(this.fighter === TRUMP){
                this.punchingAnimation.drawFrame(this.game.clockTick, ctx, this.x-150 , this.y-20);
                this.fistRightBox.x = this.boundBox.x + this.boundBox.width;
                this.fistRightBox.y = this.boundBox.y + (this.boundBox.height/2);
                this.fistRightBox.width = 115;
                this.fistRightBox.height = 30;
            }else if(this.fighter === SANDERS){
                this.punchingAnimation.drawFrame(this.game.clockTick, ctx, this.x-110 , this.y-105);
                this.fistRightBox.x = this.boundBox.x + this.boundBox.width;
                this.fistRightBox.y = this.boundBox.y + (this.boundBox.height/2) - 30;
                this.fistRightBox.width = 100;
                this.fistRightBox.height = 30;
            }else if(this.fighter === CLINTON){
                this.punchingAnimation.drawFrame(this.game.clockTick, ctx, this.x , this.y);
                this.fistRightBox.x = this.boundBox.x + this.boundBox.width-20;
                this.fistRightBox.y = this.boundBox.y + (this.boundBox.height/2);
                this.fistRightBox.width = 150;
                this.fistRightBox.height = 30;
            } else if (this.fighter === CRUZ) {
                this.punchingAnimation.drawFrame(this.game.clockTick, ctx, this.x - 75, this.y);
                this.fistRightBox.x = this.boundBox.x + this.boundBox.width -60;
                this.fistRightBox.y = this.boundBox.y + (this.boundBox.height/2) +30;
                this.fistRightBox.width = 100;
                this.fistRightBox.height = 30;
            }


            ctx.beginPath();
            ctx.rect(this.fistRightBox.x + this.fistRightBox.width - 20, this.fistRightBox.y, 20, this.fistRightBox.height);
            ctx.fillStyle = "Red";
            // ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.rect(this.fistRightBox.x, this.fistRightBox.y, this.fistRightBox.width, this.fistRightBox.height);
            // ctx.stroke();
            ctx.closePath();



            ctx.beginPath();
            ctx.rect(this.punchRightBox.x, this.punchRightBox.y, this.punchRightBox.width, this.punchRightBox.height);
            // ctx.stroke();
            ctx.closePath();
        }


    } else if (this.lowKicking) {
        this.lowKickingAnimation.d;
        if(this.facing === true){
            // this.lowKickingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.xOptions.lowKickLeftX,this.yOptions.lowKickLeftY);
            if(this.fighter === TRUMP){
                this.lowFootLeftBox.x = this.boundBox.x - 15;
                this.lowFootLeftBox.y = this.boundBox.y + (this.boundBox.height - 80);
                this.lowFootLeftBox.width = 100;
                this.lowFootLeftBox.height = 30;
                this.lowKickingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x,this.y-10);
            }else if(this.fighter === SANDERS){
                this.lowFootLeftBox.x = this.boundBox.x - 35;
                this.lowFootLeftBox.y = this.boundBox.y + (this.boundBox.height - 60);
                this.lowFootLeftBox.width = 100;
                this.lowFootLeftBox.height = 30;
                this.lowKickingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x - 15,this.y - 13);
            }else if(this.fighter === CLINTON){
                this.lowFootLeftBox.x = this.boundBox.x - 59;
                this.lowFootLeftBox.y = this.boundBox.y + (this.boundBox.height - 50);
                this.lowFootLeftBox.width = 100;
                this.lowFootLeftBox.height = 30;
                this.lowKickingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x -60,this.y);
            } else if (this.fighter === CRUZ) {
                this.lowFootLeftBox.x = this.boundBox.x;
                this.lowFootLeftBox.y = this.boundBox.y + (this.boundBox.height) - 109;
                this.lowFootLeftBox.width = 100;
                this.lowFootLeftBox.height = 30;
                this.lowKickingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x,this.y-15);
            }



            ctx.beginPath();
            ctx.rect(this.lowFootLeftBox.x, this.lowFootLeftBox.y, this.lowFootLeftBox.width, this.lowFootLeftBox.height);
            // ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.rect(this.lowFootLeftBox.x, this.lowFootLeftBox.y, 20, this.lowFootLeftBox.height);
            ctx.fillStyle = "Red";
            // ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.rect(this.lowKickLeftBox.x, this.lowKickLeftBox.y, this.lowKickLeftBox.width, this.lowKickLeftBox.height);
            // ctx.stroke();
            ctx.closePath();
        }else{
            // this.lowKickingAnimation.drawFrame(this.game.clockTick,ctx,this.xOptions.lowKickRightX,this.yOptions.lowKickRightY);
            if(this.fighter === TRUMP){
                this.lowFootRightBox.x = this.boundBox.x + this.boundBox.width - 20;
                this.lowFootRightBox.y = this.boundBox.y + this.boundBox.height - 80;
                this.lowFootRightBox.width = 40;
                this.lowFootRightBox.height = 30;
                this.lowKickingAnimation.drawFrame(this.game.clockTick,ctx,this.x-155,this.y-5);
            }else if(this.fighter === SANDERS){
                this.lowFootRightBox.x = this.boundBox.x + this.boundBox.width - 50;
                this.lowFootRightBox.y = this.boundBox.y + this.boundBox.height - 50;
                this.lowFootRightBox.width = 100;
                this.lowFootRightBox.height = 30;
                this.lowKickingAnimation.drawFrame(this.game.clockTick,ctx,this.x-150,this.y);
            }else if(this.fighter === CLINTON){
                this.lowFootRightBox.x = this.boundBox.x + (this.boundBox.width - 40);
                this.lowFootRightBox.y = this.boundBox.y + (this.boundBox.height - 50);
                this.lowFootRightBox.width = 100;
                this.lowFootRightBox.height = 30;
                this.lowKickingAnimation.drawFrame(this.game.clockTick,ctx,this.x-30,this.y);
            } else if (this.fighter === CRUZ) {
                this.lowFootRightBox.x = this.boundBox.x + this.boundBox.width -30;
                this.lowFootRightBox.y = this.boundBox.y + this.boundBox.height - 60;
                this.lowFootRightBox.width = 100;
                this.lowFootRightBox.height = 30;
                this.lowKickingAnimation.drawFrame(this.game.clockTick,ctx,this.x-54,this.y-15);
            }


            ctx.beginPath();
            ctx.rect(this.lowFootRightBox.x, this.lowFootRightBox.y, this.lowFootRightBox.width, this.lowFootRightBox.height);
            // ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.rect(this.lowFootRightBox.x + this.lowFootRightBox.width - 20, this.lowFootRightBox.y, 20, this.lowFootRightBox.height);
            ctx.fillStyle = "Red";
            // ctx.fill();
            ctx.closePath();



            ctx.beginPath();
            ctx.rect(this.lowKickRightBox.x, this.lowKickRightBox.y, this.lowKickRightBox.width, this. lowKickRightBox.height);
            // ctx.stroke();
            ctx.closePath();
        }



    } else if (this.highKicking) {

        this.highKickAnimation.d;

        if(this.facing ===true){
            this.boundBox = this.highKickLeftBox;
            // this.highKickAnimationLeft.drawFrame(this.game.clockTick,ctx,this.xOptions.highKickLeftX,this.yOptions.highKickLeftY);
            if(this.fighter === TRUMP){
                this.highFootLeftBox.x = this.boundBox.x - 45;
                this.highFootLeftBox.y = this.boundBox.y + (this.boundBox.height/2)+ 30;
                this.highFootLeftBox.width = 100;
                this.highFootLeftBox.height = 30;
                this.highKickAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-60,this.y-5);
            }else if(this.fighter === SANDERS){
                this.highFootLeftBox.x = this.boundBox.x - 70;
                this.highFootLeftBox.y = this.boundBox.y + (this.boundBox.height/2) +35;
                this.highFootLeftBox.width = 100;
                this.highFootLeftBox.height = 30;
                this.highKickAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-40,this.y-13);
            }else if(this.fighter === CLINTON){
                this.highFootLeftBox.x = this.boundBox.x - 55;
                this.highFootLeftBox.y = this.boundBox.y + (this.boundBox.height/2);
                this.highFootLeftBox.width = 55;
                this.highFootLeftBox.height = 30;
                this.highKickAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-25,this.y-20);
            } else if (this.fighter === CRUZ) {
                this.highFootLeftBox.x = this.boundBox.x - 50;
                this.highFootLeftBox.y = this.boundBox.y + (this.boundBox.height/2);
                this.highFootLeftBox.width = 100;
                this.highFootLeftBox.height = 30;
                this.highKickAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-35,this.y-20);
            }


            ctx.beginPath();
            ctx.fillStyle = "Black";
            ctx.rect((this.highFootLeftBox.x), this.highFootLeftBox.y, 20, this.highFootLeftBox.height);
            // ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.rect(this.highFootLeftBox.x, this.highFootLeftBox.y, this.highFootLeftBox.width, this.highFootLeftBox.height);
            // ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.rect(this.boundBox.x, this.boundBox.y, this.boundBox.width, this.boundBox.height);
            // ctx.rect(this.highKickLeftBox.x, this.highKickLeftBox.y, this.highKickLeftBox.width, this.highKickLeftBox.height);
            // ctx.stroke();
            ctx.closePath();
        }else{
            this.boundBox = this.highKickRightBox;
            // this.highKickAnimation.drawFrame(this.game.clockTick,ctx,this.xOptions.highKickRightX,this.yOptions.highKickRightY);
            if(this.fighter === TRUMP){
                this.highFootRightBox.x = this.boundBox.x + this.boundBox.width;
                this.highFootRightBox.y = this.boundBox.y + (this.boundBox.height/2);
                this.highFootRightBox.width = 65;
                this.highFootRightBox.height = 30;
                this.highKickAnimation.drawFrame(this.game.clockTick,ctx,this.x-160,this.y);
            }else if(this.fighter === SANDERS){
                this.highFootRightBox.x = this.boundBox.x + this.boundBox.width;
                this.highFootRightBox.y = this.boundBox.y + (this.boundBox.height/2) + 45;
                this.highFootRightBox.width = 120;
                this.highFootRightBox.height = 30;
                this.highKickAnimation.drawFrame(this.game.clockTick,ctx,this.x-160,this.y-10);
            }else if(this.fighter === CLINTON){
                this.highFootRightBox.x = this.boundBox.x + this.boundBox.width;
                this.highFootRightBox.y = this.boundBox.y + (this.boundBox.height/2) + 30;
                this.highFootRightBox.width = 80;
                this.highFootRightBox.height = 30;
                this.highKickAnimation.drawFrame(this.game.clockTick,ctx,this.x-100,this.y-10);
            } else if (this.fighter === CRUZ) {
                this.highFootRightBox.x = this.boundBox.x + this.boundBox.width;
                this.highFootRightBox.y = this.boundBox.y + (this.boundBox.height/2);
                this.highFootRightBox.width = 50;
                this.highFootRightBox.height = 30;
                this.highKickAnimation.drawFrame(this.game.clockTick,ctx,this.x-80,this.y-20);
            }
            ctx.beginPath();
            ctx.rect(this.highFootRightBox.x, this.highFootRightBox.y, this.highFootRightBox.width, this.highFootRightBox.height);
            // ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = "Black";
            ctx.rect((this.highFootRightBox.x + this.highFootRightBox.width - 20), this.highFootRightBox.y, 20, this.highFootRightBox.height);
            // ctx.fill();
            ctx.closePath();


            ctx.beginPath();
            ctx.rect(this.boundBox.x, this.boundBox.y, this.boundBox.width, this.boundBox.height);
            // ctx.rect(this.highKickRightBox.x, this. highKickRightBox.y, this.highKickRightBox.width, this.highKickRightBox.height);
            // ctx.stroke();
            ctx.closePath();
        }


    } else if (this.ducking) {
        this.duckingAnimation.d;
        if(this.facing === true){
            this.boundBox = this.duckLeftBox;
            // this.duckingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.xOptions.duckLeftX,this.yOptions.duckLeftY);
            if(this.fighter === TRUMP){
                this.duckingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x,this.y);
            }else if(this.fighter === SANDERS){
                this.duckingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x,this.y);
            }else if(this.fighter === CLINTON){
                this.duckingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x,this.y);
            } else if (this.fighter === CRUZ) {
                this.duckingAnimationLeft.drawFrame(this.game.clockTick,ctx,this.x-40,this.y-2);
            }
            ctx.beginPath();
            ctx.rect(this.boundBox.x, this.boundBox.y, this.boundBox.width, this.boundBox.height);
            // ctx.rect(this.duckLeftBox.x, this.duckLeftBox.y, this.duckLeftBox.width, this.duckLeftBox.height);
            // ctx.stroke();
            ctx.closePath();
        }else{
            this.boundBox = this.duckRightBox;
            // this.duckingAnimation.drawFrame(this.game.clockTick,ctx,this.xOptions.duckRightX,this.yOptions.duckRightY);
            if(this.fighter === TRUMP){
                this.duckingAnimation.drawFrame(this.game.clockTick,ctx,this.x,this.y);
            }else if(this.fighter === SANDERS){
                this.duckingAnimation.drawFrame(this.game.clockTick,ctx,this.x,this.y);
            }else if(this.fighter === CLINTON){
                this.duckingAnimation.drawFrame(this.game.clockTick,ctx,this.x,this.y);
            } else if (this.fighter === CRUZ) {
                this.duckingAnimation.drawFrame(this.game.clockTick,ctx,this.x-40,this.y-2);
            }
            ctx.beginPath();
            ctx.rect(this.boundBox.x, this.boundBox.y, this.boundBox.width, this.boundBox.height);
            // ctx.rect(this.duckRightBox.x, this.duckRighBox.y, this.duckRightBox.width, this.duckRightBox.height);
            // ctx.stroke();
            ctx.closePath();
        }

    } else if (this.walkRight){
        this.boundBox = this.walkRightBox;
        this.walkRightAnimation.d;
        // this.walkRightAnimation.drawFrame(this.game.clockTick, ctx, this.xOptions.walkRightX, this.yOptions.walkRightY);
        if(this.fighter === TRUMP){
            this.walkRightAnimation.drawFrame(this.game.clockTick, ctx, this.x + 5, this.y);
        }else if(this.fighter === SANDERS){
            this.walkRightAnimation.drawFrame(this.game.clockTick, ctx, this.x + 5, this.y);
        }else if(this.fighter === CLINTON){
            this.walkRightAnimation.drawFrame(this.game.clockTick, ctx, this.x + 5, this.y-20);
        } else if (this.fighter === CRUZ) {
            this.walkRightAnimation.drawFrame(this.game.clockTick, ctx, this.x +5, this.y);
        }
        ctx.beginPath();
        ctx.rect(this.boundBox.x, this.boundBox.y, this.boundBox.width, this.boundBox.height);
        // ctx.rect(this.walkRightBox.x, this.walkRightBox.y, this.walkRightBox.width, this.walkRightBox.height);
        // ctx.stroke();
        ctx.closePath();

    } else if (this.walkLeft ){
        this.boundBox = this.walkLeftBox;
        this.walkLeftAnimation.d;

        // this.walkLeftAnimation.drawFrame(this.game.clockTick, ctx, this.xOptions.walkLeftX, this.yOptions.walkLeftY);
        if(this.fighter === TRUMP){
            this.walkLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x +80, this.y);
        }else if(this.fighter === SANDERS){
            this.walkLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x - 5, this.y);
        }else if(this.fighter === CLINTON){
            this.walkLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x - 5, this.y-20);
        } else if (this.fighter === CRUZ) {
            this.walkLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x - 5, this.y);
        }
        ctx.beginPath();
        ctx.rect(this.boundBox.x, this.boundBox.y, this.boundBox.width, this.boundBox.height);
        // ctx.rect(this.walkLeftBox.x, this.walkLeftBox.y, this.walkLeftBox.width, this.walkLeftBox.height);
        // ctx.stroke();
        ctx.closePath();

    }else if(this.blocking) {
        this.blockingAnimation.d;
        this.blockingLeftAnimation.d;


        if(this.facing === true){
            this.boundBox = this.blockLeftBox;
            // this.blockingLeftAnimation.drawFrame(this.game.clockTick, ctx, this.xOptions.blockLeftX, this.yOptions.blockLeftY);
            if(this.fighter === TRUMP){
                this.blockingLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x + 30, this.y-105);
            }else if(this.fighter === SANDERS){
                this.blockingLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x-135, this.y-15);
            }else if(this.fighter === CLINTON){
                this.blockingLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x-135, this.y-15);
            } else if (this.fighter === CRUZ) {
                this.blockingLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x-70, this.y-5);
            }
            ctx.beginPath();
            ctx.rect(this.boundBox.x, this.boundBox.y, this.boundBox.width, this.boundBox.height);
            // ctx.rect(this.walkLeftBox.x, this.walkLeftBox.y, this.walkLeftBox.width, this.walkLeftBox.height);
            // ctx.stroke();
            ctx.closePath();
        }else{
            this.boundBox = this.blockRightBox;
            // this.blockingAnimation.drawFrame(this.game.clockTick, ctx, this.xOptions.blockRightX, this.yOptions.blockRightY);
            if(this.fighter === TRUMP){
                this.blockingAnimation.drawFrame(this.game.clockTick, ctx, this.x-120, this.y-95);
            }else if(this.fighter === SANDERS){
                this.blockingAnimation.drawFrame(this.game.clockTick, ctx, this.x-135, this.y-15);
            }else if(this.fighter === CLINTON){
                this.blockingAnimation.drawFrame(this.game.clockTick, ctx, this.x-135, this.y-15);
            } else if (this.fighter === CRUZ) {
                this.blockingAnimation.drawFrame(this.game.clockTick, ctx, this.x-135, this.y-15);
            }
            ctx.beginPath();
            ctx.rect(this.boundBox.x, this.boundBox.y, this.boundBox.width, this.boundBox.height);
            // ctx.rect(this.walkRightBox.x, this.walkRightBox.y, this.walkRightBox.width, this.walkRightBox.height);
            // ctx.stroke();
            ctx.closePath();
        }


    } else if(this.win){
        this.animation.spriteSheet = this.victoryDance.spriteSheet;
        this.animationLeft.spriteSheet = this.victoryDance.spriteSheet;
        if(this.fighter === TRUMP){
            // if(this.facing){
            this.victoryDance.drawFrame(this.game.clockTick, ctx, this.x-43, this.y-28);
            // }
            // this.victoryDance.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        }else if(this.fighter ===SANDERS){
            this.victoryDance.drawFrame(this.game.clockTick, ctx, this.x-355, this.y-180);
        } else if(this.fighter === CLINTON){
            this.victoryDance.drawFrame(this.game.clockTick, ctx, this.x, this.y-75);
        }else if(this.fighter === CRUZ){
            this.victoryDance.drawFrame(this.game.clockTick, ctx, this.x, this.y - 200);
        }
    } else {
        if (this.facing === true) {
            this.boundBox = this.standLeftBox;
            if (this.fighter === TRUMP) {
                this.animationLeft.drawFrame(this.game.clockTick, ctx, this.x, this.y);
            } else if (this.fighter === SANDERS) {
                this.animationLeft.drawFrame(this.game.clockTick, ctx, this.x, this.y);
            } else if (this.fighter === CLINTON) {
                this.animationLeft.drawFrame(this.game.clockTick, ctx, this.x, this.y);
            } else if (this.fighter === CRUZ) {
                this.animationLeft.drawFrame(this.game.clockTick, ctx, this.x, this.y);
            }
            ctx.beginPath();
            ctx.rect(this.boundBox.x, this.boundBox.y, this.boundBox.width, this.boundBox.height);
            // ctx.rect(this.standLeftBox.x, this.standLeftBox.y, this.standLeftBox.width, this.standLeftBox.height);
            // ctx.stroke();
            ctx.closePath();
            // this.animationLeft.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        } else {
            this.boundBox = this.standRightBox;
            if (this.fighter === TRUMP) {
                this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
            } else if (this.fighter === SANDERS) {
                this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
            } else if (this.fighter === CLINTON) {
                this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
            } else if (this.fighter === CRUZ) {
                this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
            }
            ctx.beginPath();
            ctx.rect(this.boundBox.x, this.boundBox.y, this.boundBox.width, this.boundBox.height);
            // ctx.rect(this.standRightBox.x, this.standRightBox.y, this.standRightBox.width, this.standRightBox.height);
            // ctx.stroke();
            ctx.closePath();
            // this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        }
    }


    Entity.prototype.draw.call(this);
};




Fighter.prototype.highKick = function (other) {
    if(this.highKicking){

    }
};

Fighter.prototype.lowKick = function (other) {
    if(this.lowKicking){

    }
};

Fighter.prototype.collide = function (other) {
    

    var otherBox = {x: other.boundBox.x, y: other.boundBox.y, width: other.boundBox.width, height: other.boundBox.height};
    if(this.fightNum === 1){
        console.log("Fighter 2 Health: " + other.healthBar);
        // console.log(this.highKickAnimationLeft);
    } else{
        console.log("Fighter 1 Health: " + other.healthBar);
    }


    if(this.punching){
        if(this.facing){
            var punchBox = {x: this.fistLeftBox.x, y: this.fistLeftBox.y, width: 20, height: this.fistLeftBox.height}
            return (punchBox.x <= otherBox.x+otherBox.width && punchBox.x+ punchBox.width>= otherBox.x);
            
        }else{
            var punchBox = {x: this.fistRightBox.x + this.fistRightBox.width -20, y: this.fistRightBox.y, width: 20, height: this.fistRightBox.height};
            return (punchBox.x+punchBox.width >= otherBox.x && punchBox.x <= otherBox.x+ otherBox.width);
        }
    }

    if(this.lowKicking){

        if(this.facing){
            var kickBox = {x: this.lowKickLeftBox.x, y: this.lowFootLeftBox.y, width: 20, height: this.lowFootLeftBox.height};
            return (kickBox.x <= otherBox.x+otherBox.width && kickBox.x+ kickBox.width >= otherBox.x);
        }else{
            var kickBox = {x: this.lowFootRightBox.x + this.lowFootRightBox.width -20, y: this.lowFootRightBox.y, width: 20, height: this.lowFootRightBox.height};
            return (kickBox.x + kickBox.width >= otherBox.x && kickBox.x <= otherBox.x+ otherBox.width);
        }

    }

    if(this.highKicking){
        this.ducking = false;
        if(this.facing){
            var kickBox = {x: this.highFootLeftBox.x, y: this.highFootLeftBox.y, width: 20, height: this.highFootLeftBox.height};
            return (kickBox.x <= otherBox.x+otherBox.width && kickBox.x+ kickBox.width >= otherBox.x);

        } else{
            var kickBox = {x: this.highFootRightBox.x + this.highFootRightBox.width -20, y: this.highFootRightBox.y,
                width: 20, height: this.highFootRightBox.height};
            return (kickBox.x + kickBox.width >= otherBox.x && kickBox.x <= otherBox.x+ otherBox.width);

        }
    }
};

Fighter.prototype.search = function(other){

    if(this.healthBar > 25) {//if not deded yet

        var moves = [this.punching, this.highKicking, this.blocking, this.lowKicking];
        if (this.boundBox.x > other.boundBox.x) {// if you are right of other
            this.facing = true;
            //if other is in your fightrange
            if (other.boundBox.x  > this.boundBox.x - this.fightRadius) {
                var truths = 0;
                var rand = Math.floor(Math.random() * (5));

                for (var i = 0; i < moves.length; i++) {
                    if (moves[i] == true) {
                        truths++;
                    }
                }

                if(!this.win){
                    if (truths == 0) {
                        if (rand == 2) {
                            this.highKicking = true;
                        } else if (rand == 1) {
                            this.punching = true;
                        } else if (rand == 3) {
                            this.blocking = true;
                        } else if (rand == 4) {
                            this.lowKicking = true;
                        }
                    }
                }

                // if they're running away left, follow
            } else {
                if (!(this.highKicking || this.punching || this.blocking || this.lowKicking)) {
                    if(this.boundBox.x > 150) {//don't run off screen, pleb.
                        this.facing = true;
                        this.walkLeft = true;
                        this.x = this.x - this.speed;
                    }
                }
            }
        } else { //if you're left of the other
            this.facing = false;
            //if other is in your fight zone
            if (other.boundBox.x < this.boundBox.x + this.fightRadius) {
                var truths = 0;
                var rand = Math.floor(Math.random() * (5));

                for (var i = 0; i < moves.length; i++) {
                    if (moves[i] == true) {
                        truths++;
                    }
                }
                if(!this.win){
                    if (truths == 0) {
                        if (rand == 2) {
                            this.highKicking = true;
                        } else if (rand == 1) {
                            this.punching = true;
                        } else if (rand == 3) {
                            this.blocking = true;
                        } else if (rand == 4) {
                            this.lowKicking = true;
                        }
                    }
                }

                //if they're running away right, follow
            } else {
                if (!(this.highKicking || this.punching || this.blocking || this.highKicking)) {
                    if(this.boundBox.x + this.boundBox.width < 11500) {//don't run off screen
                        this.facing = false;
                        this.walkRight = true;
                        this.x = this.x + this.speed;
                    }
                }
            }

        }
    } else {//youve been deded
        var moves = [this.punching, this.highKicking, this.blocking, this.lowKicking];
        if (this.boundBox.x > other.boundBox.x) {// if you are right of other
            this.facing = true;
            //if other is in your fightrange
            if (other.boundBox.x  > this.boundBox.x - this.fightRadius) {
                var truths = 0;
                var rand = Math.floor(Math.random() * (5));

                for (var i = 0; i < moves.length; i++) {
                    if (moves[i] == true) {
                        truths++;
                    }
                }
                if(!this.win){
                    if (truths == 0) {
                        if (rand == 2) {
                            this.highKicking = true;
                        } else if (rand == 1) {
                            this.punching = true;
                        } else if (rand == 3) {
                            this.blocking = true;
                        } else if (rand == 4) {
                            this.lowKicking = true;
                        }
                    }
                }

                //if they're out of your fightrange, run
            } else {
                if (!(this.highKicking || this.punching || this.blocking || this.highKicking || this.lowKicking)) {
                    if(this.boundBox.x + this.boundBox.width < 1150) {//don't run off screen
                        this.facing = false;
                        this.walkRight = true;
                        this.x = this.x + this.speed;
                    }
                }
            }
        } else {//if you're left of other
            this.facing = false;
            //if other is in your fightrange
            if (other.boundBox.x< this.boundBox.x + this.fightRadius) {
                var truths = 0;
                var rand = Math.floor(Math.random() * (5));

                for (var i = 0; i < moves.length; i++) {
                    if (moves[i] === true) {
                        truths++;
                    }
                }

                if(!this.win){
                    if (truths == 0) {
                        if (rand == 2) {
                            this.highKicking = true;
                        } else if (rand == 1) {
                            this.punching = true;
                        } else if (rand == 3) {
                            this.blocking = true;
                        } else if (rand == 4) {
                            this.loKicking = true;
                        }
                    }
                }

                //if they're not in your fightrange, run
            } else {
                if (!(this.highKicking || this.punching || this.blocking || this.lowKicking)) {
                    if(this.boundBox.x > 150) {//don't run off screen
                        this.facing = true;
                        this.walkLeft = true;
                        this.x = this.x - this.speed;
                    }
                }
            }
        }
    }

};

Fighter.prototype.fight = function(other){

};
