onload = amPm =() => {
	let time = new Date();
	let h = time.getHours();
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

	showAmPm = () => {
		if (h < 12) {
			return "A"
		} 
		return "P";
	}

	document.getElementById('clock').innerHTML =
	fixTime() + ":" + m + ":" + s + " " + '<b class="ur_Nme">' + showAmPm() + '</b>' + '<b class="i">M</b>';
	let t = setTimeout(amPm, 500);
}
// add zero in front of numbers < 10
checkTime = (i) => { 
	if(i < 10) {
		i = "0" + i
	};
	return i;
};


