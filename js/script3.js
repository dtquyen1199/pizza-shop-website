//This file validates the form in order.html
function orderFormValidate(){
	var pizza7 = document.getElementById("pizza7").value;
	var pizza8 = document.getElementById("pizza8").value;
	var pizza9 = document.getElementById("pizza9").value;
	var pizza10 = document.getElementById("pizza10").value;
	var pizza11 = document.getElementById("pizza11").value;
	var pizza12 = document.getElementById("pizza12").value;
	var deliver = document.getElementById("deliver");
	var payonline = document.getElementById("payonline");
	var streetadd = document.getElementById("streetadd").value;
	var city = document.getElementById("city").value;
	var postcode = document.getElementById("postcode").value;
	var streetadd2 = document.getElementById("streetadd2").value;
	var city2 = document.getElementById("city2").value;
	var postcode2 = document.getElementById("postcode2").value;
	var amex = document.getElementById("amex");
	var visa  = document.getElementById("visa");
	var master = document.getElementById("master");
	var cardnumber = document.getElementById("cardnumber").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var errMsg = "";
	var result = true;					
	
	/*check if all required inputs have value */
	if ((pizza7 + pizza8 + pizza9 + pizza10 + pizza11 + pizza12) == 0){
		errMsg += "Please enter a valid amount of pizza.\n";
	}
	if (deliver.checked == true){
		if (streetadd == ""){
		errMsg += "Street Address cannot be left blank.\n";
		}	
		if (city == ""){
			errMsg += "City cannot be left blank.\n";
		} 
		if (postcode == ""){
			errMsg += "Postcode cannot be left blank.\n";
		}
		if (postcode.length != 4){
		errMsg += "Postcode must be 4 digits.\n";
		}
	}
	
	if (payonline.checked == true){
		if (streetadd2 == ""){
		errMsg += "Billing Street Address cannot be left blank.\n";
		}
		if (city2 == ""){
			errMsg += "Billing City cannot be left blank.\n";
		} 
		if (postcode2 == ""){
			errMsg += "Billing Postcode cannot be left blank.\n";
		}
		if (((visa.checked == false)&&(master.checked == false)&&(amex.checked == false))||(cardnumber == "")){
			errMsg += "Please fill out your card info.\n";
		}
	}
	
	if (phone == ""){
		errMsg += "Phone number cannot be left blank.\n";
	}
	if (email == ""){
		errMsg += "Email cannot be left blank.\n";
	}
	
	/*checking valid length and format*/	
	if (isNaN(postcode)||isNaN(postcode2)){
		errMsg += "Postcode should only contain numbers\n";
	}
	if (isNaN(phone)){
		errMsg += "Phone number should only contain numbers\n";
	}
	if ((cardnumber != "") && (isNaN(cardnumber))){
		errMsg += "Card number should only contain numbers\n";
	}
	if (email.indexOf('@') == 0 ) {
		errMsg += "Email cannot start with an @ symbol.\n";
	}
	if (email.includes("@")==false ) {
		errMsg += "Email must contain an @ symbol.\n";
	}

	/* Display error message if any */
	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 	
	return result;
}
/*Show/hide delivery address section*/
function showAdd(){
	document.getElementById("delivadd").style.display = "block";
}
function hideAdd(){
	document.getElementById("delivadd").style.display = "none";
}
/*Show/hide payment section*/
function showPaymentInfo(){
	document.getElementById("paymentinfo").style.display = "block";
	document.getElementById("billadd").style.display = "block";
}
function hidePaymentInfo(){
	document.getElementById("paymentinfo").style.display = "none";
	document.getElementById("billadd").style.display = "none";
}
/*Autofill delivery address*/
function toggleAutoBillingAdd(){
	var sameadd = document.getElementById("sameadd");
	var postcode = document.getElementById("postcode").value;
	var state = document.getElementById("state").value;
	var streetadd = document.getElementById("streetadd").value;
	var city = document.getElementById("city").value;
	if ((sameadd.checked == true)&&((postcode == "")||(state == "")||(streetadd =="")||(city ==""))){
		sameadd.checked = false;
		alert("Please enter your delivery address first");
	}
	else if ((sameadd.checked == true)&&((postcode != "")&&(state != "")&&(streetadd !="")&&(city !=""))){
		document.getElementById("streetadd2").value = streetadd;
		document.getElementById("city2").value = city;
		document.getElementById("postcode2").value = postcode;
		document.getElementById("state2").value = state;
	}
	else {
		document.getElementById("streetadd2").value = "";
		document.getElementById("city2").value = "";
		document.getElementById("postcode2").value = "";
		document.getElementById("state2").value = "";	
	}
}
//Changing from 16 number card to 15 and vice versa
function americaExpressCardLength(){
	document.getElementById("cardnumber").setAttribute('maxLength', 15);
	document.getElementById("cardnumber").setAttribute('minLength', 15);	
}
function normalCardLength(){
	var cardnumber = document.getElementById("cardnumber");
	cardnumber.maxLength = "16";
	cardnumber.minLength = "16";
}
function init () {
	var orderForm = document.getElementById("orderform");
	orderForm.onsubmit = orderFormValidate;
	var payonline = document.getElementById("payonline");
	var paylater = document.getElementById("paylater");
	var amex = document.getElementById("amex");
	var visa  = document.getElementById("visa");
	var master = document.getElementById("master");
	var deliver = document.getElementById("deliver");
	var pickup = document.getElementById("pickup");
	var sameadd = document.getElementById("sameadd");
	deliver.onclick =  showAdd;
	pickup.onclick =  hideAdd;
	payonline.onclick =   showPaymentInfo;
	paylater.onclick =    hidePaymentInfo;
	sameadd.onclick = toggleAutoBillingAdd;
	amex.onclick = americaExpressCardLength;
	master.onclick = normalCardLength;
	visa.onclick = normalCardLength;
}
window.onload = init;
