$(function(){
		 $('body').mousemove(function(e){
		    var amountMovedX = (e.pageX * -1 / 90);
		    var amountMovedY = (e.pageY * -1 / 90);
		    var hero1 = 0.4;
		    var hero2 = 0.8;
		    var letters = [2.3,1.4,4.1,1.1,0.5]
		     $(".hero1").css({
		     "transform":"translate("+amountMovedX*hero1+"px,"+amountMovedY*hero1+"px)",
		     });
		     $(".hero2").css({
		     "transform":"translate("+amountMovedX*hero2+"px,"+amountMovedY*hero2+"px)",
		     });
		     $(".l1").css({
		     "transform":"translate("+amountMovedX*letters[0]+"px,"+amountMovedY*letters[0]+"px)",
		     });
		     $(".l2").css({
		     "transform":"translate("+amountMovedX*letters[1]+"px,"+amountMovedY*letters[1]+"px)",
		     });
		     $(".l3").css({
		     "transform":"translate("+amountMovedX*letters[2]+"px,"+amountMovedY*letters[2]+"px)",
		     });
		     $(".l4").css({
		     "transform":"translate("+amountMovedX*letters[3]+"px,"+amountMovedY*letters[3]+"px)",
		     });
		     $(".l5").css({
		     "transform":"translate("+amountMovedX*letters[4]+"px,"+amountMovedY*letters[4]+"px)",
		     });
		     $("#glowy_canvas").css({
		     "transform":"translate("+amountMovedX*letters[4]+"px,"+amountMovedY*letters[4]+"px)",
		     });

		});

})