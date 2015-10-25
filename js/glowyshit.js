/*Is this the start of something new? only time will tell :)*/
/*------TOGGLE GLOWY SHIT FUNCTION BY SWAS
NOTICE TO ALL COLLABORATORS : DO NOT TAMPER WITH ANY CODE GIVEN BELOW, NO MATTER HOW WRONG IT MIGHT BE.
IF YOU DO WANT TO IMPROVE SOMETHING, LEAVE A COMMENTS IN THE COMMENTS SECTION GIVEN BELOW.

<3, swas
*/
$(function(){
	$canvas = $("#glowy_canvas");
	var toggleStatus = 0;
	var launchFunction = false;
/*TOGGLE GLOWY CANVAS AND REK COMPUTERS*/
	$("#glowy_toggle").on('click', function(){
		$("#glowy_canvas").fadeToggle();
		if (toggleStatus==0){
			$(this).text("Disintegrate Glowy Canvas?");
			toggleStatus = 1;
			appendPoints($canvas);
			launchFunction = true;
			/*RUN GLOWY FUNCTION IF POINT APPEND FINISH DONE*/
		}
		else if  (toggleStatus==1) {
			$(this).text("Enable Glowy Canvas?");
			toggleStatus = 0;
			$canvas.empty();
			launchFunction = false;
		}

		(function glowyLoop(){
					var rand1 = Math.round(Math.random()*(4000));
					var rand2 = Math.round(Math.random()*(200));
					if (toggleStatus == 1){
					setTimeout(function(){
						glowyLoop();
						glowyPointGlow($canvas,rand1);
					}, rand2);
				}
				}());
	})

/*APPEND GLOWY CANVAS POINTS, AND RETURN A BOOLEAN WHEN FINISHED*/
	
	var pointAppendFinish = 0;

	function appendPoints($object){
	for (var i = 0;i<=4000;i++) {
		$('<point />', {
			'data-number' : i
		}).appendTo($object);
		if (i == 4000) {
			pointAppendFinish = 1;
			return true;
			}
		}
	}
	
	/*GLOWY FUNCTION*/
	function glowyPointGlow(parent,fadeInterval) {
		//double checking if parent has child point
		var childPoints = parent.children("point");
		var selectedChildPoint = parent.children("point[data-number='"+fadeInterval+"']");
		if(childPoints){
			jarjarBinks(selectedChildPoint);
			console.log(selectedChildPoint.attr("data-number"));
		}
	}

	function jarjarBinks($object) {
		var rand2 = (Math.random()/3)+0.05;
		var rand_r = Math.round(Math.random()*115)+140;
		var rand_g = Math.round(Math.random()*115)+140;
		var rand_b = Math.round(Math.random()*115)+140;
		$objectNumber = $object.attr("data-number")
		$object.css({
			"opacity":""+rand2+"",
			"background-color":"rgb("+rand_r+","+rand_g+","+rand_b+")"		
		});
		console.log("glowy added to point #" + $objectNumber + ".");
		setTimeout(function(){
			$object.css({"opacity":"0.05","background-color":"#eee"});
			console.log("glowy removed from point #" + $objectNumber + ".");
		}, 9000);

	}





	}) 


/*COMMENTS SECTION

10/24/2015 Swas : There's a huge performance loss. Any ideas? I was thinking SVG points instead of divs

*/
