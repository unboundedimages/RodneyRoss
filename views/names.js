function alphaOnly(event) {
	// alert(event + "somethingelse")
  var key = event.keyCode;
  var formula = (key >= 65 && key <= 90) || key == 8 || key == 189 || key == '' || key == 9 || (key >= 37 && key <= 40) || key == 18 || key == 16  || key == 20 || key == 13; 
  
 if (!formula) {
	alert("you have entered an invalid character.  Please check the field and try again.")
}
return (formula);
};