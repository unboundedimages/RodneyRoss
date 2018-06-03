
//displays phone number sticky
(call_me = () => {
	let phoneBtn = document.getElementById('phone_btn');
	let  imgs = document.getElementById("call_me", "bak_bak");
	let hideStarburst = document.getElementById("starburst")
	phoneBtn.onclick = () => {
		imgs.style.display = "block";
		hideStarburst.style.display ="none";
	}
})();