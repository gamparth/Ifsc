

$(document).ready (
	function submitIFSC() {

	var input = localStorage["ifsc1"];
	var bankDetails = new XMLHttpRequest();

	//var input = "";
	var string="https://ifsc.razorpay.com/";
	//var inputIFSC = document.getElementById("inp").value ;
	string +=  input ;
	console.log(string);
	bankDetails.open("GET" , string ,false);
	bankDetails.send(null);

	var r = JSON.parse(bankDetails.response);

	var bank 	=  r.BANK +"<br />";
	var	branch 	=  r.BRANCH  + "<br />";
	var address =  r.ADDRESS + "<br />";
	var contact =  r.CONTACT + "<br />";
	var city 	=  r.CITY + "<br />";
	var rtgs 	=  r.RTGS + "<br />";
	var district=  r.DISTRICT + "<br />";
	var state 	=  r.STATE + "<br />";

	if( r.BANK==undefined && r.BRANCH==undefined && r.ADDRESS==undefined && r.CONTACT ==undefined && r.CITY ==undefined && r.RTGS==undefined && r.DISTRICT==undefined && r.STATE==undefined )
	{
		document.getElementById("container2").innerHTML = "<h1> Record NOT FOUND! </h1>";
	}
	else if( input == undefined )
	{
		document.getElementById("container2").innerHTML = "<h1> Enter Valid IFSC. </h1>";
	}
	else
	{
		document.getElementById("bank").innerHTML = bank;
		document.getElementById("branch").innerHTML=  branch;
		document.getElementById("address").innerHTML=  address;
		document.getElementById("contact").innerHTML=  contact;
		document.getElementById("city").innerHTML=  city;
		document.getElementById("rtgs").innerHTML=  rtgs;
		document.getElementById("district").innerHTML=  district;
		document.getElementById("state").innerHTML=  state;
	}

});


//document.getElementById("submitButton").addEventListener("click", submitIFSC, true);
//document.getElementById("myForm").submit(submitIFSC());
//console.log(string);










/*
  "BANK": "Karnataka Bank",
  "IFSC": "KARB0000001",
  "BRANCH": "RTGS-HO",
  "ADDRESS": "REGD. & HEAD OFFICE, P.B.NO.599, MAHAVEER CIRCLE, KANKANADY, MANGALORE - 575002",
  "CONTACT": "2228222",
  "CITY": "DAKSHINA KANNADA",
  "RTGS": true,
  "DISTRICT": "MANGALORE",
  "STATE":

  */