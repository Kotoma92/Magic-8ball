showView();
function showView() {
	const app = document.getElementById('app');
	app.innerHTML = /*HTML*/ `
    
    <svg id="ball" ${ballAnimate ? 'class="shake"' : ''} ${
		clickDisable ? '' : 'onclick="clickedBall();"'
	} viewbox="0 0 200 200" width="100%" height="100vh">
        <circle cx="50%" cy="50%" r="70" stroke="black" stroke-width="2" fill="#121212" />
        <circle cx="50%" cy="50%" r="40" stroke="black" stroke-width="2" />
        <polygon points="100,65 65,115 135,115" style="fill:green;stroke:black;stroke-width:1;"/>
        <text 
            ${textFadeIn ? 'class="fadeIn"' : ''}
            ${textFadeOut ? 'class="fadeOut"' : ''} 
            x="50%" y="50%" text-anchor="middle" font-size="8" font-family="Sans-Serif">${ballText}
            
        </text>
    </svg>

    `;
}
