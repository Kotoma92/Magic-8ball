const clickedBall = async () => {
	ballAnimate = true;
	textFadeOut = true;
	textFadeIn = false;
	showView();
	var ballValue =
		ballTextArray[Math.floor(ballTextArray.length * Math.random())];
	console.log(ballValue);
	ballText = ballValue;
	await delay(2000);
	ballTextFadeIn();
};

function ballTextFadeIn() {
	ballAnimate = false;
	textFadeOut = false;
	textFadeIn = true;
	showView();
}

//math funksjonen er referert fra https://stackoverflow.com/questions/1516695/js-math-random-for-array

//delay er hentet her https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
