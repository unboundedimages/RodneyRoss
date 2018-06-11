
//displays phone number sticky
(call_me = () => {
	let phoneBtn = document.getElementById('phone_btn');
	let emailBtn = document.getElementById('email_btn');
	let joke = document.getElementById("joke");
	let  email = document.getElementById("email");
	(phoneBtn.onclick = () => {
		
		if (joke.style.display === "none") {
			email.style.display ="none";
			joke.style.display ="block";
			how2.style.display = "block";
		} else { 

			joke.style.display ="none";
		}
	})();

	(emailBtn.onclick = () => {

		if (joke.style.display === "block") {
			joke.style.display = "none" ,
			email.style.display =="block";
		} 

		if (email.style.display === "none") {
			how2.style.display = "none";
			email.style.display = "inline-block";
		} else {
			email.style.display = "none";
		}
	})();
})();

(resume = () => {
	let resumeBtn = document.getElementById('resume');
	resumeBtn.onclick = () => {
		window.open('/images/Resume.pdf', 'newwindow', 'width=140%', 'height=auto'); return false;
	};
})();

(fotographia = () => {
	let fotoBtn = document.getElementById('foto');
	fotoBtn.onclick = () => {
		window.open('http://www.unboundedimages.com', '_blank'); return false;
	};
})();