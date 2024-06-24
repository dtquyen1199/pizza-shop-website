function regFormValidate() {
	var email = document.getElementById("email").value;
	var pwd1 = document.getElementById("pwd1").value;
	var pwd2 = document.getElementById("pwd2").value;
	var name = document.getElementById("name").value;
	var genm = document.getElementById("genm").checked;
	var genf = document.getElementById("genf").checked;
	var geno = document.getElementById("geno").checked;
	var pizza1 = document.getElementById("pizza1").checked;
	var pizza2 = document.getElementById("pizza2").checked;
	var pizza3 = document.getElementById("pizza3").checked;
	var pizza4 = document.getElementById("pizza4").checked;
	var pizza5 = document.getElementById("pizza5").checked;
	var pizza6 = document.getElementById("pizza6").checked;
	var pizza0 = document.getElementById("pizza0").checked;
	var errMsg = "";							
	var result = true;					
	var pattern = /^[a-zA-Z ]+$/;		

	/* Check if all required inputs have value */
	if (email == ""){
		errMsg += "Email cannot be left blank.\n";
	}
	if (pwd1 == ""){
		errMsg += "Password cannot be left blank.\n";
	}
	if (pwd2 == ""){
		errMsg += "Retype password cannot be left blank.\n";
	}
	if (name == ""){
		errMsg += "Name cannot be blank.\n";
	}
	if ((genm == "")&&(genf == "")&&(geno == "")) {
		errMsg += "A gender must be selected.\n";
	}
	if ((pizza1 == false)&&(pizza2 == false)&&(pizza3 == false)&&(pizza4 == false)&&(pizza5 == false)&&(pizza6 == false)&&(pizza0 == false)){
		errMsg += "Please choose your favorite pizza.\n";
	}
	
	/*Check if inputs are in valid format*/
	if (email.indexOf('@') == 0 ) {
		errMsg += "Email cannot start with an '@'.\n";
	}
	if (email.indexOf('@') < 0 ) {
		errMsg += "Email must contain an '@'.\n";
	}
	if ((name != "") &&(! name.match (pattern))) {
		errMsg += "User name contains symbols.\n";
	}
	
	/*check password match*/
	if (pwd1 != pwd2) {
		errMsg += "Passwords do not match.\n";
	}
	if (pwd1.length <= "8"){
		errMsg += "Password must be at least 8 characters.\n";
	}
	
	/*Print Error Message*/
	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
	return result;
}

function init () {
  var regForm = document.getElementById("regform");
  regForm.onsubmit = regFormValidate;
}

window.onload = init;
