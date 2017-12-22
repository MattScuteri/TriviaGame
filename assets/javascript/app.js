$(document).ready(function(){

	function startGame() {
		$('#timer').hide();
		$('.question-container').hide();
		let correctAnswers = 0;
		let incorrectAnswers = 0;
	};

	startGame();

	$('#start').on("click", function() {
		$('#timer').show();
		$('.question-container').show();
	});

});