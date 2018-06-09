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
			return "AM"
		} 
		return "PM";
	}

	document.getElementById('clock').innerHTML =
	fixTime() + ":" + m + ":" + s + " " + showAmPm();
	let t = setTimeout(amPm, 500);
}

checkTime = (i) => {
	if(i < 10) {
		i = "0" + i
	};
	return i;
};


