var b_canvas = document.getElementById("initial_splash");
var ctx = b_canvas.getContext('2d');
var $b_canvas = $("#initial_splash");
var textArray = [
    "two_step_auth_command.py",
    "USERNAME : " + makeid() + "",
    "PASSWORD : *********",
    "AUTH Confirmed",
    "ACCESS TO SYSTEM GRANTED" ];

var textArray2 = [
    "Version 3.20",
    "sudo apt get boxer6.api",
    "fetching boxer6.api from repo...",
    "Download complete.",
    "Launch Boxer6.api [Y/N]"];

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 7; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


// this could actually be a proper plugin now a few more tweaks shall make it perfecto
function printText(c, _a, t1, t2, mx, my, cb){
    var process = false;
    loopdis(0, _a);
    
    function loopdis(i, a) {
        if (i == a.length) { cb(); return; }
        var chars = a[i].split('');
        if(!process){
            drawText(0, chars, [mx, my + (i * 30)], "");
            i=i+1;
        }
        setTimeout(function () {
            loopdis(i, a);
        }, t1);
    }
    
     function drawText(i, a, p, _p) {
        process=true;
        c.font = "16px Share Tech Mono";
        if (i == a.length) {
            process=false;
            return;
        }
        c.fillText(a[i], p[0]+c.measureText(_p).width, p[1]);
        _p=_p+a[i];
        setTimeout(function () {
            drawText(i + 1, a, p, _p);
        }, t2);
     }
}

printText(ctx,textArray,2000,100,100,100, function(){
    ctx.font = "16pt Share Tech Mono";
    var cHeight = textArray.length*30+100;
    ctx.beginPath();
    ctx.moveTo(100,cHeight);
    ctx.lineTo(300,cHeight);
    ctx.stroke();
    printText(ctx,textArray2,2000,100,100,cHeight+30,function(){});
});

