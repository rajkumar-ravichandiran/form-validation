const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

//show Error Message
function errorMsg(input, message){
const formControl = input.parentElement;
formControl.classList.add("error");
const small = formControl.querySelector("small");
small.innerText = message;
}

//show Success Message
function successMsg(input){
const formControl = input.parentElement;
formControl.className = "input success";
}

//Get Field name
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//Check Required fields
function checkRequired(inputArr){
	inputArr.forEach(function (input){
		if (input.value.trim() === "") {
			errorMsg(input, `${getFieldName(input)} is required`);
			
		}
		else {
			successMsg(input);
			
		}
	});
}


//Chech Input Length
function checkLength(input, min, max){
	if (input.value.length < min) {
		errorMsg(
			input, `${getFieldName(input)} must be at least ${min} Characters`);
	}
	else if (input.value.length > max) {
	errorMsg(
			input, `${getFieldName(input)} must be less than ${max} Characters`);	
	}
	else {
		successMsg(input);
	}
}


// check E-mail is valid
function checkEmail (input) {
	const re = /^(([^<>()\[\][[.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(re.test(input.value.trim())){
		successMsg(input);
	}
	else {
		errorMsg(input, "E-mail is not valid");
	}
}

//Check password match
function checkPasswordMatch(input1, input2){
	if (input1.value !== input2.value) {
		errorMsg(input2, "passwords do not match");
	}
}

username.addEventListener("keyup", (e) =>{
	checkRequired([username]);
	checkLength(username, 3, 15);

});
email.addEventListener("keyup", (e) =>{
	checkRequired([email]);
	checkEmail(email);
});
password.addEventListener("keyup", (e) =>{
	checkRequired([password]);
	checkLength(password, 8, 25);

});
cpassword.addEventListener("keyup", (e) =>{
	checkRequired([cpassword]);
	checkPasswordMatch(password, cpassword);

});
