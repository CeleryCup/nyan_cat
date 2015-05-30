$("document").ready(function(){
	var shiftPressed = 0; // count times shift is pressed
	var shiftTrigger = 2; // trigger animation when shift hit twice
	var keyCode = 16;  // shift keycode
	var animationDuration = 9000;
	$("body").append('<img src="nyancat.gif" id="image" width="100" style="position:absolute;z-index:99;left:-100px;top:50px;"/>');
	$("body").append('<audio id="sound" preload="auto"><source src="nyancat.ogg" type="audio/ogg"/><source src="/audio/nyancat.mp3" type="audio/mp3" /></audio>');
	var souncd = $('#sound').get(0);
	var img = $('img#image');

	var nyancat_reset = function() {
		sound.pause();
		img.css("left", "-100px");
	}

	function nyancat_start(){
		sound.play();
		img.animate({ left: parseInt($("body").width() + 100)}, animationDuration, nyancat_reset);
	};

	$("body").keydown(function(event){
		if(event.which == keyCode) {
			shiftPressed++;
			event.preventDefault();
		} else {
			shiftPressed = 0;
		}
		if(shiftPressed == shiftTrigger) {
			nyancat_start();
			shiftPressed = 0;
		}
	});




});