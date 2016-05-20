
function Health(player, fighter) {
    this.healthPoints = 100;
    this.side = player;
    this.fighter = fighter;

}

Health.prototype = new Entity();

Health.prototype.constructor = Health;

Health.attacked = function (pts) {
    this.healthPoints -= pts;
}

Health.prototype.draw = function (ctx) {
    var canvas = document.getElementById('gameWorld');
    this.ctx = ctx;

    if(this.side === "left"){

        ctx.beginPath();
        ctx.rect(15,15+15,510,40);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(20,20+15,500,30);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();

        if(this.healthPoints >= 0) {
            ctx.beginPath();
            ctx.rect(520 - (100-this.healthPoints)*5,20+15, (100-this.healthPoints)*5 ,30);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.closePath();

        } else {
            ctx.beginPath();
            ctx.rect(20,35, 500 ,30);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.closePath();
        }

        //Display Names
        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        /*for(var i=0; i<this.fighter.fighter.length; i++){
            if(this.fighter.fighter[i].match(/[A-Z]/) != null){
                ctx.fillText(this.fighter.fighter.substring(i, this.fighter.fighter.length).toUpperCase(),10+10,30+5);
            }
        }*/
        ctx.fillText(this.fighter.fighter,15,30);

    } else {
        ctx.beginPath();
        ctx.rect(canvas.width-300-20,10,310,40);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(canvas.width-315,15,300,30);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();

        if(this.healthPoints >= 0) {
            ctx.beginPath();
            ctx.rect(canvas.width-300-15,15,(100-this.healthPoints)*3,30);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.closePath();
        } else {
            ctx.beginPath();
            ctx.rect(canvas.width-300-15,15,300,30);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.closePath();
        }

        //Display Name
        ctx.font = "30px Arial";
        /*for(var i=0; i<this.fighter.fighter.length; i++){
            if(this.fighter.fighter[i].match(/[A-Z]/) != null){
                ctx.fillText(this.fighter.fighter.substring(i, this.fighter.fighter.length).toUpperCase(),canvas.width-325,30);
            }
        }*/
        ctx.fillText(this.fighter.fighter,canvas.width-315,30);
        //console.log(this.fighter.fighter);
    }

    Health.prototype.update = function () {
        this.healthPoints = this.fighter.healthBar;
    }

    Entity.prototype.update.call(this);
}
