let DEBUG = false;

document.getElementById('signUp').addEventListener('submit', postName);
DEBUG && console.log('this is postName '+ postName)

function postName(e){
	e.preventDefault();

	//let name = document.getElementsByClassName("names").value;
	var userObject = {
		firstname: document.getElementById('firstName').value,
		lastname:  document.getElementById('lastName').value,
		email: document.getElementById('email').value,
		password: document.getElementById('password').value
	};
	
	console.log("The user object is");
	console.log(userObject);

	let xhr = new XMLHttpRequest();
	xhr.open("POST","/api/signup", true);
	
	xhr.setRequestHeader('Conenet-type', 'application/x-www-form-urlencoded');

	xhr.onload = function(){
		console.log(this.responseText);
	}
	/*
	1) when you send request to api - you have to use full path to the api, sometimes (if you will you express router) you will even have to extend you path with router path
	3) you need to send a  user object to the server (I mean full set of user data) because you configured you model way which it will not accept not full set of data and will not create a row in DB. 

	So, if you will use jquery for sending data, or will create a proper pure JS script (you already have it, but you have to type in every variable what you want to send to the server)
	you will get it working. At least I think everythink else is fine at the moment. 


	You would not be able to post something to your DB, because your model config - you need to send names, password, and email at the same time. 
	And you are not getting data on the server side because of client-side script needs to be extended also

	 xhr.send({ form: 'data' });  - google "how to send form data with xhr again"
	 */
	 xhr.send(
		//todo EXTEND SCRIPT here
		userObject
		);


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