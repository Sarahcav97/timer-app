var timerBtn = document.getElementById('timerBtn');
var timerInput = document.getElementById('timer');
var timeAmount = timerInput.value;
var containerDiv = document.getElementById('newDiv');

function displayTime() {
	var div = document.createElement('div');
	document.body.innerHTML = ''; // clear line each time
	document.body.appendChild(div); //putting on the page
	div.innerHTML = timerInput.value; //the text (innerHTML) is showing the time remaining on the screen

	console.log(timerInput.value);
}
function displayPic() {
	surprisePic = document.getElementById('myPic').display('block');
	containerDiv.appendChild(surprisePic);
}
function startCountdown() {
	setInterval(function () {
		timerInput.value--; //subtract 1 each second
		displayTime(); //showing remaining time after subtractions
		if (timerInput.value === 0) {
			displayPic(); // stop counting down (stops at 0)
		}
	}, 1000); // countdown by 1 millisecond intervals
}

timerBtn.addEventListener('click', function (event) {
	startCountdown();
});
