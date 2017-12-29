$(document).ready(function(){

		let correctAnswers = 0;
		let incorrectAnswers = 0;
		let time = 60;
		let intervalId;

	$('#timer').html("Time remaining: " + time + " sec");

	startGame();

	$('#start').on("click", function() {
		$('#timer').show();
		$('.question-container').show();
		$('#start').hide();
		$('#submit').show();
		run();
		decrement();
		checkAnswer1();
		checkAnswer2();
		checkAnswer3();
		checkAnswer4();
		checkAnswer5();
		checkAnswer6();
		checkAnswer7();
		checkAnswer8();
		checkAnswer9();
		checkAnswer10();																																				
	});

	function startGame() {
		$('#timer').hide();
		$('.question-container').hide();
		$('#timeIsUp').hide();
		$('#submit').hide();
	};

	function run() {
    	intervalId = setInterval(decrement, 1000);		
	};

	function decrement() {
		time--;
		$('#timer').html("Time remaining: " + time + " sec");
		if (time === 0) {
			stop()
		};
	};

	$('#submit').on("click", function() {
		stop();
	});

	function stop() {
		clearInterval(intervalId);
		$('.question-container').hide();
		$('#timeIsUp').show();
		$('#timeIsUp').append("<h3>Time's up!</h3>");
		$('#timeIsUp').append("<br>Number correct: " + correctAnswers + "</br>");
		$('#timeIsUp').append("<br>Number incorrect: " + incorrectAnswers + "</br>");
		if (correctAnswers > 5) {
			$('#timeIsUp').append("<br>Wow! You are a great American!</br>")
		}	else if (correctAnswers < 5) {
			$('#timeIsUp').append("<br>Uncle Sam wants YOU...to hit those books more.</br>")
		}
	}

	function checkAnswer1() {
		$('input[name="q1"]').on('click', function(){
			if ($(this).val() == 'ans') {
				correctAnswers++;
			} else {
				incorrectAnswers++;
			}
		});
	}

	function checkAnswer1() {
		$('input[name="q1"]').on('click', function(){
			if ($(this).val() == 'ans') {
				correctAnswers++;
			} else {
				incorrectAnswers++;
			}
		});
	}

	function checkAnswer2() {
		$('input[name="q2"]').on('click', function(){
			if ($(this).val() == 'ans') {
				correctAnswers++;
			} else {
				incorrectAnswers++;
			}
		});
	}

	function checkAnswer3() {
		$('input[name="q3"]').on('click', function(){
			if ($(this).val() == 'ans') {
				correctAnswers++;
			} else {
				incorrectAnswers++;
			}
		});
	}

	function checkAnswer4() {
		$('input[name="q4"]').on('click', function(){
			if ($(this).val() == 'ans') {
				correctAnswers++;
			} else {
				incorrectAnswers++;
			}
		});
	}

	function checkAnswer5() {
		$('input[name="q5"]').on('click', function(){
			if ($(this).val() == 'ans') {
				correctAnswers++;
			} else {
				incorrectAnswers++;
			}
		});
	}

	function checkAnswer6() {
		$('input[name="q6"]').on('click', function(){
			if ($(this).val() == 'ans') {
				correctAnswers++;
			} else {
				incorrectAnswers++;
			}
		});
	}

	function checkAnswer7() {
		$('input[name="q7"]').on('click', function(){
			if ($(this).val() == 'ans') {
				correctAnswers++;
			} else {
				incorrectAnswers++;
			}
		});
	}

	function checkAnswer8() {
		$('input[name="q8"]').on('click', function(){
			if ($(this).val() == 'ans') {
				correctAnswers++;
			} else {
				incorrectAnswers++;
			}
		});
	}

	function checkAnswer9() {
		$('input[name="q9"]').on('click', function(){
			if ($(this).val() == 'ans') {
				correctAnswers++;
			} else {
				incorrectAnswers++;
			}
		});
	}

	function checkAnswer10() {
		$('input[name="q10"]').on('click', function(){
			if ($(this).val() == 'ans') {
				correctAnswers++;
			} else {
				incorrectAnswers++;
			}
		});
	}

});