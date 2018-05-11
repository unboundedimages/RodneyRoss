window.onload = function welcomes() {
	let welcome = ["Welcome !", "! أهلا بك", "歡迎","приветствие", "¡Bienvenido!", "Begrüßung!", "Benvenuto!", "Välkommen!", "Bienvenue!"];
	let i = 0;
	setInterval(function() {
		// let rand = Math.floor(Math.random() * 6);
		// let randd = Math.floor(6);
		// document.getElementById("name2").innerHTML = welcome[rand];
		//alternatively set this loop up with .map instead of random
		document.getElementById("name2").innerHTML = welcome[i ++];	
		if (i == welcome.length) i=	0;
	}, 2000);

let iAm = ["I am", "انا", "我是", "Меня зовут", "Yo soy", "Ich bin", "Sono", "Jag är", "Je suis"]
	let r = 0;
	setInterval(function() {
		document.getElementById("me").innerHTML = iAm[r ++];
		if (r == iAm.length) r=0;

	}, 2000);			
}



welcomes();