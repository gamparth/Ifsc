

//window.localstorage.setItem("IFSC" , document.getElementById("IFSC").value);
function passingFunction() {

	location.href='secondpage.html';
	localStorage["ifsc1"] = document.getElementById("inp").value;
	console.log(localStorage["ifsc1"]);
	
}