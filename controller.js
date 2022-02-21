const clickedBall = async () => {
	ballAnimate = true;
	textFadeOut = true;
	textFadeIn = false;
	clickDisable = true;
	showView();
	var ballValue =
		ballTextArray[Math.floor(ballTextArray.length * Math.random())];
	console.log(ballValue);
	ballText = ballValue;
	await delay(2000);
	ballTextFadeIn();
};

const ballTextFadeIn = async () => {
	ballAnimate = false;
	textFadeOut = false;
	textFadeIn = true;
	showView();
	await delay(2000);
	clickDisable = false;
	showView();
};

//math funksjonen er referert fra https://stackoverflow.com/questions/1516695/js-math-random-for-array

//delay er hentet her https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
