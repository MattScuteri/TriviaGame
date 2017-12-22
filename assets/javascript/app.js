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

	function checkAnswer() {
		$('input[name="multiple"]').on('click', function() {
			let el = $(this);
			if (el.val() == 'ans') {
				correctAnswers++;
			} else {
				incorrectAnswers++;
			};
		});
	};

// check console.log() to see if correctAnswers & incorrectAnswers updates

});