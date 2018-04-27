document.addEventListener("DOMContentLoaded", function(event){
	let s_up = document.getElementsByClassName("form.signUp");
		f_name = document.getElementById("input#firstName");
		l_name = document.getElementById("input#lastName");
		e = document.getElementById("input#email");
		p = document.getElementById("input#pw");

	s_up.on("submit", function(event){
		event.preventDefault();
		let userData = {			
			first_name: f_name.val().trim(),
			last_name: l_name.val().trim(),
			email: e.val().trim(),
			password: p.val().trim()
		};

		if(!userData.first_name || !userData.last_name || !userData.email || !userData.password){
			return;
		}

		signUp(userData.first_name,userData.last_name,userData.email,userData.password);
		s_up.val("");
		f_name.val("");
		l_name.val("");
		e.val("");
		p.val("")

	})	

});