
//displays phone number sticky
(call_me = () => {
	let phoneBtn = document.getElementById('phone_btn');
	let joke = document.getElementById("joke");
	(phoneBtn.onclick = () => {
		
		if (joke.style.display === "none") {
			
			joke.style.display ="block";
			
		} else { 

			joke.style.display ="none";
		}
	})();

	let emailBtn = document.getElementById('email_btn');
	// let hideBakBak = document.getElementById('bak_bak');
	emailBtn.onclick = () => {

		if (joke.style.display = "block") {
			joke.style.display = "none";
		}
		imgs.style.display = "none";
		hideStarburst.style.display = "block";
	}
})();