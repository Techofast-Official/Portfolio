
// function validate()
// {
	// var pattern= /^[a-zA-Z. ]{3,30}$/;
	// var value1 = document.getElementById('nameforval').value;
	// console.log(value1);
	// console.log(pattern.test(value1));
	// if(!pattern.test(value1)) { 
	// 	console.log('working')
	// 	return true;
	// }
	// else{
	// 	console.log('not working')
	// 	return false;
	// }
	//}
// ====================================second method==============
// function CustomValidation() {
// 	this.invalidities = [];
	
// }

// CustomValidation.prototype = {
// 	addInvalidity: function(message) {
// 		this.invalidities.push(message);
// 	},
// 	getInvalidities: function() {
// 		return this.invalidities.join('. \n');
// 	},
// 	checkValidity: function(input) {
// 		if(input.value.length < 3){
// 			this.addInvalidity(" minimum three character is valid");
// 			var element = document.querySelector('label[for="username"]');
// 			element.classList.add('invalid');
// 			element.classList.remove('valid');
// 		}
// 		else {
// 			var element = document.querySelector('label[for="username"]');
// 			element.classList.remove('invalid');
// 			element.classList.add('valid');
// 		}
// 		if (input.value.match(/[^a-zA-Z0-9]/g) {
// 			this.addInvalidity('only letter is allowed')
// 			var element = document.querySelector('label[for="username"]');
// 			element.classList.add('invalid');
// 			element.classList.remove('valid');
// 		}
// 		else{
// 			var element = document.querySelector('label[for="username"]');
// 			element.classList.remove('invalid');
// 			element.classList.add('valid');
// 		}
// 		}
// 		}
// 	}
// };



// var usernameInput = document.getElementById("name");
// usernameInput.CustomValidation = new CustomValidation();
// usernameInput.addEventListener('keyup',function(){
// 	usernameInput.CustomValidation.checkValidity(this);
// })

// ======================third method================================l

const form = document.querySelector('#form');
let username = form.elements.namedItem("username");
username.addEventListener('input', validate);


form.addEventListener('submit', function (e) {
 e.preventDefault();
 
 alert('SUBMITTED');
 return true;
});


function validate (e) {
if (e.target.name == "username") {
  if (e.target.value.length > 3) {
   e.target.classList.add('valid');
   e.target.classList.remove('invalid');
  } else {
   e.target.classList.add('invalid');
   e.target.classList.remove('valid');
  }
 }
}