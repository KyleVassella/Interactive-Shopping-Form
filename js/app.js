//IMPROVEMENTS:
//	ADD RED BORDER TO 'PAYMENT METHOD' SELECT menu
// FIX BROKEN EVENT LISTENER ON otherInput


var nameInput = document.getElementById('name');	// gets the 'Name' input
var emailInput = document.getElementById('mail');
var jobSelect = document.getElementById('title');
var otherInput = document.getElementById('other-input');	// gets the 'other' input so that it can be hidden on page load.
var designSelect = document.getElementById('design');

var activitiesLegend = document.getElementById('activitiesLegend');
var activitiesSection = document.querySelector('.activities');
var checkboxes = document.getElementsByClassName('activityCheckbox');	//CHANGE VARIABLE NAME TO STYLESCHECKBOXES TO FUTUREPROOF?

var paymentLabel = document.getElementById('paymentLabel');
var paymentSelect = document.getElementById('payment');		//	get the div containing the 'I'm going to pay with:' select menu
var creditDiv = document.getElementById('credit-card');		// get the div containing the credit card information inputs
var paypalDiv = document.getElementById('paypal');	// get the div containing the instructions for what happens if you select Paypal
var bitcoinDiv = document.getElementById('bitcoin');	// get the div containing the instructions for what happens if you select Bitcoin

var creditInput = document.getElementById('cc-num');
var zipInput = document.getElementById('zip');
var cvvInput = document.getElementById('cvv');

nameInput.focus();	// gives the 'Name' input focus

otherInput.style.display = 'none';	//	hides the 'other input'
otherInput.addEventListener("focus", function() {
	otherInput.style.color = '';
	});
otherInput.addEventListener = ("focus", function() {	// WHY IS THIS EVENT LISTENER BEING TRIGGERED NO MATTER WHAT LISTENER, KEYDOWN IS TRIGGERED EVEN IF KEY IS NEVER PRESSED
	otherInput.setAttribute('value', '');
	});



	//	after form submission, these event listeners clear the red highlights from incorrectly filled fields once the user types into them
nameInput.addEventListener('keyup', function() {
	nameInput.style = '';
});

emailInput.addEventListener('keyup', function() {
	emailInput.style = '';
});



for (var i=0; i<checkboxes.length; i++) {
checkboxes[i].addEventListener("change", function() {activitiesLegend.style = ''});
}

creditInput.addEventListener('keyup', function() {
	creditInput.style = '';
});

zipInput.addEventListener('keyup', function() {
	zipInput.style = '';
});

cvvInput.addEventListener('keyup', function() {
	cvvInput.style = '';
});



jobSelect.onchange = function() {
	if (jobSelect.value === 'other') {
		otherInput.style.display = 'block';
		otherInput.style.color = 'rgba(0, 0, 0, .5)';
	} else {
		otherInput.style.display = 'none';
	}
};


var colorDiv = document.getElementById('colorDiv');
colorDiv.style.display = 'none';	//	hides the color div

designSelect.onchange = function() {
	var colorSelect = document.getElementById('color');
	var punsColors = document.getElementsByClassName('js_puns');	//	gets the colors associateed w/ the 'JS Puns' shirt style
	var heartColors = document.getElementsByClassName('heart_js');	//	gets the colors associated w/ the 'I <3 JS' shirt style
	for (var i=0; i<colorSelect.children.length; i++){		// for loop which resets all shirt color visibility and default selected status, respectively
		colorSelect.children[i].style.display = 'block';
		colorSelect.children[i].removeAttribute('selected');
	}

	if (designSelect.value==='js puns') {		//	function which sets first 'JS Puns' shirt color as default selected option and hides the display of 'I <3 JS' shirt colors, respectively
		colorDiv.style.display = 'inline';	// shows the color div if 'JS - Puns' design is chosen
		colorSelect.children[0].setAttribute('selected', 'selected');
		for(var i=0; i<punsColors.length; i++){
			heartColors[i].style.display='none';} 
	}
	if (designSelect.value==='heart js') {	//	function which sets first 'I <3 JS' shirt color as default selected option and hides the display of 'JS Puns' shirt colors, respectively
		colorDiv.style.display = 'inline';	//	/ shows the color div if 'I <3 JS' design is chosen
		colorSelect.children[3].setAttribute('selected', 'selected');
		for(var i=0; i<heartColors.length; i++) {
		punsColors[i].style.display = 'none';}
	}
	if (designSelect.value==='select theme') {	//	function which sets first listed shirt color as default selected option and shows all shirt color options for all designs, respectively
		colorDiv.style.display = 'none';	//	re-hides the color div if 'Select Theme' is chosen
		colorSelect.children[0].setAttribute('selected', 'selected');
		for (var i=0; i<colorSelect.children.length; i++) {
		colorSelect.children[i].style.display = 'block';
		}
	}

};







function checkFrameworks() {
	if (checkboxes[1].checked) {
		checkboxes[3].disabled = true;
	} else {
		checkboxes[3].disabled = false;
	}
}

function checkExpress() {
	if (checkboxes[3].checked) {
		checkboxes[1].disabled = true;
	} else {
		checkboxes[1].disabled = false;
	}
}

function checkLibraries() {
	if (checkboxes[2].checked) {
		checkboxes[4].disabled = true;
	} else {
		checkboxes[4].disabled = false;
	}
}

function checkNode() {
	if (checkboxes[4].checked) {
		checkboxes[2].disabled = true;
	}	else {
		checkboxes[2].disabled = false;
	}
}



var totalLabel = document.createElement('label'); //create a total label and dynamically append it
var cost;
for (var i=0; i<checkboxes.length; i++) {	//	HOW TO DO THIS DRY?
	checkboxes[i].onchange = function() {
		cost = parseInt('0');	//	reset the total cost after each checkbox has been checked or unchecked to allow for a clean re-count. 
		if (checkboxes[0].checked) {
			cost += parseInt(checkboxes[0].value);
		}
		if (checkboxes[1].checked) {
			cost += parseInt(checkboxes[1].value);
		}
		if (checkboxes[2].checked) {
			cost += parseInt(checkboxes[2].value);
		}
		if (checkboxes[3].checked) {
			cost += parseInt(checkboxes[3].value);
		}
		if (checkboxes[4].checked) {
			cost += parseInt(checkboxes[4].value);
		}
		if (checkboxes[5].checked) {
			cost += parseInt(checkboxes[5].value);
		}
		if (checkboxes[6].checked) {
			cost += parseInt(checkboxes[6].value);
		}
		activitiesSection.appendChild(totalLabel);
		totalLabel.innerHTML = '<label>Total: $' + cost + ' </label>';
	};
}


for (var i=0; i<checkboxes.length; i++) {
checkboxes[i].addEventListener("click", checkFrameworks);
checkboxes[i].addEventListener("click", checkExpress);
checkboxes[i].addEventListener("click", checkLibraries);
checkboxes[i].addEventListener("click", checkNode);
}

paymentSelect.children[1].setAttribute('selected', 'selected');

paymentSelect.onchange = function() {
	if (paymentSelect.value === 'credit card') {
		creditDiv.style.display = 'block';
		paypalDiv.style.display = 'none';
		bitcoinDiv.style.display = 'none';
	}
	if (paymentSelect.value === 'paypal') {
		paypalDiv.style.display = 'block';
		creditDiv.style.display = 'none';
		bitcoinDiv.style.display = 'none';
	}
	if (paymentSelect.value === 'bitcoin') {
		bitcoinDiv.style.display = 'block';
		creditDiv.style.display = 'none';
		paypalDiv.style.display = 'none';
	}
	if (paymentSelect.value === 'select_method') {
		creditDiv.style.display = 'none';  //	SHOULD WE SHOW THIS??
		paypalDiv.style.display = 'block';
		bitcoinDiv.style.display = 'block';
	}
};




var alertArray = [];	// an array to hold all alert messages, each of which specifies a condition which was not met when user filled out the form
var counter = 0;	// a counter to signify if user filled out form properly. If counter > 0, the user failed some condition.
	
function validateForm() {	// this function runs whenever the Submit button is pressed or whenever the user presses the 'enter' key. This function validates the form, ensuring all required fields are properly filled. 
//	name value must be filled out
	if (nameInput.value === null || nameInput.value === '') {
		nameInput.style.backgroundColor = 'red';
		nameInput.style.opacity = '.4';
		alertArray.push('You must enter a name in the "Name" field.');
		counter ++;
	}


//	email address must be formatted correctly
		var email = emailInput.value;
	if (validateEmail(email)) {
	}	else {
		emailInput.style.backgroundColor = 'red';
		emailInput.style.opacity = '.4';
		alertArray.push('You must enter a valid email address.');
		counter++;
	}

	function validateEmail(email) { //USE TREEHOUSE FORMULA INSTEAD???? http://emailregex.com/
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}



//	at least one event checkbox must be checked
    var okay=false;
    for (var i=0; i<checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            okay=true;
            break;
        }
    }
    if (okay) {
	} else {
	activitiesLegend.style.border = '3px solid rgba(255, 0, 0, .5)';
    alertArray.push('Please check a checkbox');
    counter++;
	}


//	a payment method must be selected
	if (paymentSelect.value === 'select_method') {
	paymentLabel.style.border = '3px solid rgba(255, 0, 0, .5)';
	alertArray.push('Please select a payment method.');
	counter++;
	}


	//	credit card validation function borrowed from https://gist.github.com/DiegoSalazar/4075533
	var cardNumber = document.getElementById('cc-num').value;
	function valid_credit_card(cardNumber) {
	  // accept only digits, dashes or spaces, must be at least 15 characters long. Has no max length specification because user might include spaces, dashes, spaces on each side of dashes, etc. 
		if (/[^0-9-\s]+/.test(cardNumber) || cardNumber.length < 15) {
			creditInput.style.backgroundColor = 'red';
	    	creditInput.style.opacity = '.4';
			alertArray.push('Please enter a valid card number.');
			counter++;
	}
		// The Luhn Algorithm
		var nCheck = 0, nDigit = 0, bEven = false;
		cardNumber = cardNumber.replace(/\D/g, "");

		for (var n = cardNumber.length - 1; n >= 0; n--) {
			var cDigit = cardNumber.charAt(n),
				  nDigit = parseInt(cDigit, 10);

			if (bEven) {
				if ((nDigit *= 2) > 9) nDigit -= 9;
			}

			nCheck += nDigit;
			bEven = !bEven;
		}

		return (nCheck % 10) == 0;
	}

	valid_credit_card(cardNumber);


	//	if zip code input has no characters, it fails. Has no minimum or maximum specifications due to my lack of knowledge of international zip code lengths/formats.
	if (document.getElementById('zip').value.length === 0) {
			zipInput.style.backgroundColor = 'red';
	    	zipInput.style.opacity = '.4';
			alertArray.push('Please enter a valid zip code');
			counter++;
		}


	// cvv input must be properly filled in - allows 3 digits for most credit cards and 4 digits for AmEx
	if (document.getElementById('cvv').value.length < 3 || document.getElementById('cvv').value.length > 4) {
			cvvInput.style.backgroundColor = 'red';
	    	cvvInput.style.opacity = '.4';
			alertArray.push('Please enter a valid CVV code');
			counter++;
		}	


//	if any of the form conditions specified in the validateForm() function have not been met, display an alert listing each condition which was not met and do not submit the form 
	if (counter > 0) {
		alert(alertArray.join('\n'));
		alertArray = [];	//	clears the alertArray once more so that the next alert message will have a clean slate
		return false;
	}
}
