$(document).ready(function(){
	var form = $("#contactForm");
	var name = $("#name");
	var Email = $("#email");
	var phone = $("#phone");
	var message = $("#message");
	var nameError = $(".errorname");
	var EmailError = $(".errorEmail");
	var phoneError = $(".errorphone");
	var messageError = $(".errormessage");
	var success = $(".sent");
	
	form.submit(function(e) {
    e.preventDefault();
	});
	form.submit (function(){
		if(validateName() & validateEmail() & validatePhone() & validateMessage()){
			success.text("Your message has been sent");
			return true;
		}
		else{
			return false;
			}
	});
	function validateName(){
		if(name.val().length > 0){
			nameError.css("visibility","hidden");
			return true;
		}
		else{
	
			nameError.text("Please enter a name");
			return false;
			}		
	}
	
		function validateEmail(){
			var a = Email.val();
			var regexp = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_­-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9­]+.[a-z]{2,4}$/;
		
		if(regexp.test(a)){
			EmailError.text("");
			return true;
		}
		else{
			EmailError.text("Enter a valid Email");
			
			return false;
			}		
		}
		
		function validatePhone(){
			if (phone.val().length !== 10){
				phoneError.text("Needs to be 10 digits");
				return false;
				}
			
			else{
				phoneError.css("visibility","hidden");
				return true;
			}
			}
		phone.keypress(function(e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        	phoneError.text("Digits Only").show().fadeOut("slow");
               return false;
    	}
        });
		function validateMessage(){
			if(message.val().length > 0){
				messageError.css("visibility", "hidden");
				return true;
			}
			else{
			
				messageError.text("Please enter a message");
				return false;
			}
		}
});