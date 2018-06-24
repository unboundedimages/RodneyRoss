window.onload = amPm =() => {
	let time = new Date();
	let h = time.getHours() % 12 || 12;
	let m = time.getMinutes();
	let s = time.getSeconds();
	let tz = h - 12;
	m = checkTime(m);
	s = checkTime(s);

	fixTime = () => {
		if (h < 13) {
			return h;
		}
		return tz;
	}

	showAmPm = (date) => {
		let time= new Date();
		let h = time.getHours()
		if (h < 12) {
			return "A"
		} 
		return "P";
	}

	document.getElementById('clock').innerHTML =
	fixTime() + ":" + m + ":" + s + " " + '<b class="ur_Nme">' + showAmPm() + '</b>' + '<b class="i">M</b>';
	let t = setTimeout(amPm, 500);

	document.getElementById('clock2').innerHTML =
	fixTime() + ":" + m + ":" + s + " " + " " + '<b class="ur_Nme">' + '<br>' + '<span class = "P" >' + showAmPm() + '</span>' + '</b>' + '<span class = "M" >' + '<b class="i">M</b>' + '</span>';
	t;
}
// add zero in front of numbers < 10
checkTime = (i) => { 
	if(i < 10) {
		i = "0" + i
	};
	return i;
};


