let amPm = () = > {
	let now = new Date();
	let h = now.getHours();
	let m = now.getMinutes();
	let s = now.getSeconds();
	m = checkTime(m);
	s = checkTime(s);


	document.getElementsByTagName('ampm').innerHTML =
	h + ":" + m + ":" + s;
	let t = setTimeout(amPm, 500);
}

checktime(i) = > {
	if(i < 10) {
		i = "0" + i
	};
	return i;
}