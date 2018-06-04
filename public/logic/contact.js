
//displays phone number sticky
(call_me = () => {
	let phoneBtn = document.getElementById('phone_btn');
	let imgs = document.getElementById("call_me");
	let imgs2 = document.getElementById("bak_bak");
	let hideStarburst = document.getElementById("starburst");
	let hidehow2 = document.getElementById("how2");
	phoneBtn.onclick = () => {
		imgs.style.display = "block";
		imgs2.style.display = "block";
		hideStarburst.style.display = "none";
		hidehow2.style.display = "none";
	}
	let emailBtn = document.getElementById('email_btn');
	// let hideBakBak = document.getElementById('bak_bak');
	emailBtn.onclick = () => {
		bak_bak.style.display = "none";
		imgs.style.display = "none";
		hideStarburst.style.display = "block";
	}
})();