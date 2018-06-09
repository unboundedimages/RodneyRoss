onload = amPm =() => {
	let time = new Date();
	let h = time.getHours();
	let m = time.getMinutes();
	let s = time.getSeconds();
	m = checkTime(m);
	s = checkTime(s);


	document.getElementById('clock').innerHTML =
	h + ":" + m + ":" + s + " " + showAmPm();
	let t = setTimeout(amPm, 500);
}

checkTime = (i) => {
	if(i < 10) {
		i = "0" + i
	};
	return i;
};

showAmPm = () => {
	if (amPm < 12) {
		return "AM"
	}
	return "PM";
}