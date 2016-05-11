/**
 * Created by Mike on 5/11/16.
 */
var startScreen = (function (input) {
    var hue = 0;

    var direction = 1;
    var transitioning = false;


    var wasButtonDown = false;

    function centerText(ctx, text, y) {
        var measurement = ctx.measureText(text);
        var x = (ctx.canvas.width - measurement.width)/2;
        ctx.fillText(text,x, y);
    }

    function draw(ctx, elapsed){
        var y = ctx.canvas.height /2;

        var color = 'rgb(' + hue + ',0,0)';

        ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);

        ctx.fillStyle = 'white';
        ctx.font = '48px monospace';
        centerText(ctx, 'My Awesome Game', y);

        ctx.fillStyle = color;
        ctx.font = '24px monospace';
        centerText(ctx, 'click to begin', y + 30);
    }

    function update() {
        hue+= 1 * direction;
        if(hue >255){
            direction =-1;
        }
        if(hue <0){
            direction = 1;
        }

        var isButtonDown = input.isButtonDown();

        var mouseJustClicked = (!isButtonDown) && (wasButtonDown);


        if(mouseJustClicked && !transitioning){
            transitioning = true;
        }

        wasButtonDown = isButtonDown;

        return{
            draw: draw,
            update: update
        };
    }
});