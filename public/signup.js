document.getElementById('signUp').addEventListener('submit', postName);
console.log('this is postName '+ postName)

function postName(e){
	e.preventDefault();

	let name = document.getElementsByClassName("names").value;
		// params = "name="+name;
		// console.log("this is params= " + params)
		console.log("this is name: " + name)

		let xhr = new XMLHttpRequest();
		xhr.open("POST","/server", true);
		
		xhr.setRequestHeader('Conenet-type', 'application/x-www-form-urlencoded');

		xhr.onload = function(){
        console.log(this.responseText);
      }

      xhr.send(name);


}

// document.addEventListener("DOMContentLoaded", function(event){
// 	let s_up = document.getElementsByClassName("form.signUp");
// 		f_name = document.getElementById("input#firstName");
// 		l_name = document.getElementById("input#lastName");
// 		e = document.getElementById("input#email");
// 		p = document.getElementById("input#pw");

// 	s_up.onclick("submit", function(event){
// 		event.preventDefault();
// 		let userData = {			
// 			first_name: f_name.val().trim(),
// 			last_name: l_name.val().trim(),
// 			email: e.val().trim(),
// 			password: p.val().trim()
// 		};

// 		if(!userData.first_name || !userData.last_name || !userData.email || !userData.password){
// 			return;
// 		}

// 		signUp(userData.first_name,userData.last_name,userData.email,userData.password);
// 		s_up.val("");
// 		f_name.val("");
// 		l_name.val("");
// 		e.val("");
// 		p.val("")

// 		function postName(e){
//       e.preventDefault();

//       var name = document.getElementById('name2').value;
//       var params = "name="+name;

//       var xhr = new XMLHttpRequest();
//       xhr.open('POST', 'process.php', true);
//       xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

//       xhr.onload = function(){
//         console.log(this.responseText);
//       }

//       xhr.send(params);
//     }
// 	})	

// });