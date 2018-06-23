onsubmit = function modalPop(event) {
	console.log("what does onsubmit do", onsubmit)

	setTimeout(function(event){
		event.preventDefault();
// 	// 		var popup = modal.style.display = "block";
// 	// 		if(popup === true) {
// 	// 			return(popup)
// 	// 		}
}, 2000);

	modal.style.display = "block";
	var modal = document.getElementById("myModal");
	console.log("this is the modal var", modal)
	// // Get the button that opens the modal
	// var btn = document.getElementById("submit", "submit2") 

	var myForm = document.getElementById("getForm")
	
	// // Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	// modal.style.display = "block";
	// // When user submits form, open modal if error
	// myForm.onsubmit = function(event) {
	// 	console.log("this is the sumbit event", event);

	// 	// console.log("this is the sumbit event", event);
	// 	// setTimeout(function() {
	// 	// }, 2000);
	// 	// let popModal =  {pop: modal.style.display = "block"};
	// }

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

// module.exports = { modal: "modal"}