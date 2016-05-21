/*
 * Created by Chris
 */
var BAR_WIDTH = 500;
var BUFFER = 10;
var BAR_HEIGHT = 30;

function Health(player, fighter) {
    this.healthPoints = 100;
    this.side = player;
    this.fighter = fighter;
    this.background = 0;
}

Health.prototype = new Entity();

Health.prototype.constructor = Health;

Health.prototype.draw = function (ctx) {
    var canvas = document.getElementById('gameWorld');
    this.ctx = ctx;

    //Initial Background setup
    if(this.background === 0 && this.side === "left"){
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, BAR_HEIGHT * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
        var img = document.getElementById("titleBattle");
        ctx.drawImage(img, canvas.width/2-(img.width/4), BAR_HEIGHT/2, img.width/2, img.height/2);
    }

    //Left Player Logic
    if(this.side === "left"){
        //Bar Framed
        ctx.beginPath();
        ctx.rect(BUFFER*1.5, BAR_HEIGHT*1.5, BAR_WIDTH + BUFFER, BAR_HEIGHT + BUFFER);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();

        //Health
        ctx.beginPath();
        ctx.rect(BUFFER*2, BUFFER*0.5 + BAR_HEIGHT*1.5, BAR_WIDTH, BAR_HEIGHT);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();

        //Covering Dead Health
        if(this.healthPoints >= 0) {
            ctx.beginPath();
            ctx.rect(BAR_WIDTH + BUFFER*2 - (100-this.healthPoints)*5, (BUFFER*0.5)+BAR_HEIGHT*1.5, (100-this.healthPoints)*5 ,BAR_HEIGHT);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.closePath();
        } else {
            ctx.beginPath();
            ctx.rect(BUFFER*2, BUFFER*0.5+BAR_HEIGHT*1.5, BAR_WIDTH, BAR_HEIGHT);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.closePath();
        }
        //Display Names
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(this.fighter.fighter, BUFFER*3, BAR_HEIGHT*1.25);

    } else { //Right Player Logic
        //Outer Frame
        ctx.beginPath();
        ctx.rect(canvas.width-BAR_WIDTH-(BUFFER*2), BAR_HEIGHT*1.5, BAR_WIDTH+BUFFER, BAR_HEIGHT+BUFFER);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();

        //Health
        ctx.beginPath();
        ctx.rect(canvas.width-BAR_WIDTH-BUFFER*1.5, BUFFER*0.5+BAR_HEIGHT*1.5, BAR_WIDTH, BAR_HEIGHT);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();

        //Covering Dead Health
        if(this.healthPoints >= 0) {
            ctx.beginPath();
            ctx.rect(canvas.width-BAR_WIDTH-BUFFER*1.5, BUFFER*0.5+BAR_HEIGHT*1.5, (100-this.healthPoints)*5, BAR_HEIGHT);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.closePath();
        } else {
            ctx.beginPath();
            ctx.rect(canvas.width-BAR_WIDTH-BUFFER*1.5, BUFFER*0.5+BAR_HEIGHT*1.5, BAR_WIDTH, BAR_HEIGHT);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.closePath();
        }

        //Display Name
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(this.fighter.fighter,canvas.width-(this.fighter.fighter.length*30),BAR_HEIGHT*1.25);

    }

    Health.prototype.update = function () {
        this.healthPoints = this.fighter.healthBar;
    }

    Entity.prototype.update.call(this);
}