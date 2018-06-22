onload = function modal(event) {
	console.log("what does onload do", onload)


	var modal = document.getElementById("myModal");
	console.log("this is the modal var", modal)
	// // Get the button that opens the modal
	// var btn = document.getElementById("submit", "submit2") 

	var myForm = document.getElementById("getForm")
	
	// // Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// // When user submits form, open modal if error
	myForm.onsubmit = function(event) {
		console.log("this is the sumbit event", event);
		setTimeout(function(){
			var popup = modal.style.display = "block";
			if(popup === true) {
				return(popup)
			}

		}, 1000);
		
		// console.log("this is the sumbit event", event);
		// setTimeout(function() {
		// }, 2000);
		// let popModal =  {pop: modal.style.display = "block"};
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