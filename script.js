var timerBtn = document.getElementById('timerBtn');
var timerInput = document.getElementById('timer');
var timeAmount = timerInput.value;
var timeRemaining = 50;

function displayTime() {
	var div = document.createElement('div');
	document.body.innerHTML = ''; // clear line each time
	document.body.appendChild(div); //putting on the page
	div.innerHTML = timerInput.value; //the text (innerHTML) is showing the time remaining on the screen
	console.log(timerInput);
	console.log(timerInput.value);
}

function startCountdown() {
	setInterval(function () {
		timerInput.value--; //subtract 1 each second
		displayTime(); //showing remaining time after subtractions
		if (timerInput.value === 0) {
			clearInterval(timer); // stop counting down (stops at 0)
		}
	}, 1000); // countdown by 1 millisecond intervals
}

timerBtn.addEventListener('click', function (event) {
	event.preventDefault();
	startCountdown();
});
