/* JAVASCRIPT FOR INTERACTIVE CANVAS. GG*/

$(function(){

	function writeMessage(canvas,message) {
		var context = canvas.getContext('2d');
		context.clearRect(0,0,canvas.width,canvas.height);
		context.font = '18pt Calibri';
		context.fillStyle = 'black';
		context.fillText(message,10,25);
	}

	//Getting mouse position coords
	function getMouseCoord(canvas,evt) {
		var rect = canvas.getBoundingClientRect();
		return {
			x : evt.clientX - rect.left,
			y : evt.clientY - rect.top,
			x_ : -rect.left+rect.right,
			y_ : rect.top-rect.bottom
		};
	} 

	var canvas = document.getElementById("landing_canvas");
	var context = canvas.getContext('2d');
	var image_x = 20;
	var image_y = 20;


	var imageObj =  new Image();
	imageObj.onload = function() {
	context.drawImage(imageObj,image_x,image_y,220,120);
}
	
	imageObj.src = '/img/landing/panelboxer.jpg';

	//adding event listener when each time mousemoves
	canvas.addEventListener('mousemove', function(evt) {
		var mousePos = getMouseCoord(canvas, evt);
		//generating % values from center of rect
		var mouseX = ((mousePos.x/(mousePos.x_/2))-1);
		var mouseY = ((mousePos.y/(mousePos.y_/2))+1);
		// var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
		console.log('Mouse position: ' + mouseX + ',' + mouseY);
	}, false);

})