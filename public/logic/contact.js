
//displays phone number sticky
(call_me = () => {
	let phoneBtn = document.getElementById('phone_btn');
	let joke = document.getElementById("joke");
	let imgs = document.getElementById("call_me");
	let imgs2 = document.getElementById("bak_bak");
	let hideStarburst = document.getElementById("starburst");
	let hidehow2 = document.getElementById("how2");
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
		bak_bak.style.display = "none";
		imgs.style.display = "none";
		hideStarburst.style.display = "block";
	}
})();