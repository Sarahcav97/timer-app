var timerBtn = document.getElementById('timerBtn');
var timerInput = document.getElementById('timer');
var timeAmount = timerInput.value;
var containerDiv = document.getElementById('newDiv');
var timerDiv = document.getElementById('timerSpace');

function displayTime() {
	var div = document.createElement('div');
	div.setAttribute('id', 'timeDivvy');
	timerDiv.innerHTML = ''; // clear line each time
	timerDiv.appendChild(div); //putting on the page
	div.innerHTML = 'Time Left: ' + timerInput.value + ' Seconds'; //the text (innerHTML) is showing the time remaining on the screen

	//console.log(timerInput.value);
}

function startCountdown() {
	var timer = setInterval(function () {
		console.log(timerInput.value);
		timerInput.value--; //subtract 1 each second
		if (timerInput.value >= 0) {
			displayTime(); //showing remaining time after subtractions
		} else {
			clearInterval(timer);
			document.body.innerHTML = '';
			var done = document.createElement('h1');
			done.innerHTML = 'Time is Up!';
			done.setAttribute('id', 'finishedScreen');
			document.body.appendChild(done);
		} // stop counting down (stops at 0)
	}, 1000); // countdown by 1 millisecond intervals
}

timerBtn.addEventListener('click', function (event) {
	startCountdown();
});
