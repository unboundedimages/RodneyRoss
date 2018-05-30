function modal(event) {
	console.log("+++++++++++++++++++++++++++++++++++++")
	console.log("+++++++++++++++++++++++++++++++++++++")
	console.log("this is modals event: ", event);
	var modal = document.getElementById("myModal");

	// // Get the button that opens the modal
	var btn = document.getElementsByClassName("myBtn") 

	var myForm = document.getElementById("getForm")
	
	// // Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// // When user submits form, open modal if error
	myForm.onsubmit = function(event) {

		modal.style.display = "block";
	}

	// // When the user clicks on <span> (x), close the modal
	span.onclick = function(event) {

		modal.style.display = "none";
	}

	// // When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

}