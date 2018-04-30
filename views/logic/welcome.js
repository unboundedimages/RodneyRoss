function welcomes() {
	let welcome = ["Welcome !", "! أهلا بك", "歡迎","приветствие", "¡Bienvenido!", "Begrüßung!", "Benvenuto!", "Välkommen!", "Bienvenue!"];

	setInterval(function() {
		let rand = Math.floor(Math.random() * 6);
		document.getElementById("name2").innerHTML = welcome[rand];
		//alternatively set this loop up with .map instead of random

	}, 2000);

}

welcomes()