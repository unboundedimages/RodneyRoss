function welcomes() {
	let iAm = ["I am", "انا", "我是", "Меня зовут", "Yo soy", "Ich bin", "Sono", "Jag är", "Je suis"]
	let i = 0;
	setInterval(function() {
		document.getElementById("me").innerHTML = iAm[i ++];
		if (i == iAm.length) i=0;

	}, 2000);			
}

welcomes()