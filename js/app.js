var nameInput = document.getElementById('name');	// variables to get the 'Name' input, email input, job title input, the hidden 'other' input, the design select menu, respectively
var emailInput = document.getElementById('mail');
var jobSelect = document.getElementById('title');
var otherInput = document.getElementById('other-input');
var designSelect = document.getElementById('design');

var activitiesLegend = document.getElementById('activitiesLegend'); 	// variables to get the activities legend, the activities fieldset, and activites checkboxes, respectively
var activitiesSection = document.querySelector('.activities');
var checkboxes = document.getElementsByClassName('activityCheckbox');

var paymentLabel = document.getElementById('paymentLabel');	//	variables to get the payment label, payment method select menu, credit card section, paypal instructions and bitcoin instructions, respectively
var paymentSelect = document.getElementById('payment');
var creditDiv = document.getElementById('credit-card');
var paypalDiv = document.getElementById('paypal');
var bitcoinDiv = document.getElementById('bitcoin');

var creditInput = document.getElementById('cc-num');	//	variables to get the credit card number input, the zip code input and the cvv code input, respectively
var zipInput = document.getElementById('zip');
var cvvInput = document.getElementById('cvv');

nameInput.focus();	// gives the 'Name' input focus

otherInput.style.display = 'none';	//	hides the 'other input'
otherInput.addEventListener("focus", function() {
	otherInput.style.color = '';
	otherInput.value = '';
	});

jobSelect.onchange = function() {	// function to hide and show the 'other' input if someone selects 'other' as job type or deselects it, respectively
	if (jobSelect.value === 'other') {
		otherInput.style.display = 'block';
		otherInput.style.color = 'rgba(0, 0, 0, .5)';
	} else {
		otherInput.style.display = 'none';
	}
};

paymentSelect.children[1].setAttribute('selected', 'selected');	// sets 'Credit Card' as default payment method



//	after form submission, these event listeners clear the red highlights from incorrectly filled fields once the user types into them
nameInput.addEventListener('keyup', function() {
	nameInput.style = '';
});

emailInput.addEventListener('keyup', function() {
	emailInput.style = '';
});

function activitiesReset() {
	activitiesLegend.style = '';
}	
for (var i=0; i<checkboxes.length; i++) {
checkboxes[i].addEventListener('change', activitiesReset);
}

paymentSelect.addEventListener('change', function() {
		paymentLabel.style = '';
});

creditInput.addEventListener('keyup', function() {
	creditInput.style = '';
});

zipInput.addEventListener('keyup', function() {
	zipInput.style = '';
});

cvvInput.addEventListener('keyup', function() {
	cvvInput.style = '';
});



var colorDiv = document.getElementById('colorDiv');	// gets the color div
colorDiv.style.display = 'none';	//	hides the color div

designSelect.onchange = function() {	//	function to display only shirt colors which are associated with the selected design, and hide the others
	var colorSelect = document.getElementById('color');
	var punsColors = document.getElementsByClassName('js_puns');	//	gets the colors associateed w/ the 'JS Puns' shirt style
	var heartColors = document.getElementsByClassName('heart_js');	//	gets the colors associated w/ the 'I <3 JS' shirt style
	var i;	//	'i' variable to serve as index counters in my for loop. Defined here to avoid repeating 'var i = 0' variable declarations in each for loop
	for (i=0; i<colorSelect.children.length; i++){		// for loop which resets all shirt color visibility and default selected status, respectively
		colorSelect.children[i].style.display = 'block';
		colorSelect.children[i].removeAttribute('selected');
	}

	if (designSelect.value==='js puns') {		//	function which sets the first listed 'JS Puns' shirt color as the default selected option and hides the display of 'I <3 JS' shirt colors, respectively
		colorDiv.style.display = 'inline';	// shows the color div if 'JS - Puns' design is chosen
		colorSelect.children[0].setAttribute('selected', 'selected');
		for(i=0; i<punsColors.length; i++){
			heartColors[i].style.display='none';} 
	}
	if (designSelect.value==='heart js') {	//	function which sets first 'I <3 JS' shirt color as default selected option and hides the display of 'JS Puns' shirt colors, respectively
		colorDiv.style.display = 'inline';	//	/ shows the color div if 'I <3 JS' design is chosen
		colorSelect.children[3].setAttribute('selected', 'selected');
		for(i=0; i<heartColors.length; i++) {
		punsColors[i].style.display = 'none';}
	}
	if (designSelect.value==='select theme') {	//	function which sets first listed shirt color as default selected option and shows all shirt color options for all designs, respectively
		colorDiv.style.display = 'none';	//	re-hides the color div if 'Select Theme' is chosen
		colorSelect.children[0].setAttribute('selected', 'selected');
		for (i=0; i<colorSelect.children.length; i++) {
		colorSelect.children[i].style.display = 'block';
		}
	}

};



//	functions to disable conflicting activity times, and re-enable them if the checkbox is deselected
function checkFrameworks() {
	if (checkboxes[1].checked) {
		checkboxes[3].disabled = true;
		checkboxes[3].parentNode.style.color = 'grey';
		checkboxes[3].parentElement.disabled = true;
	} else {
		checkboxes[3].disabled = false;
		checkboxes[3].parentNode.style = '';
	}
}

function checkExpress() {
	if (checkboxes[3].checked) {
		checkboxes[1].disabled = true;
		checkboxes[1].parentNode.style.color = 'grey';
	} else {
		checkboxes[1].disabled = false;
		checkboxes[1].parentNode.style = '';
	}
}

function checkLibraries() {
	if (checkboxes[2].checked) {
		checkboxes[4].disabled = true;
		checkboxes[4].parentNode.style.color = 'grey';
	} else {
		checkboxes[4].disabled = false;
		checkboxes[4].parentNode.style = '';
	}
}

function checkNode() {
	if (checkboxes[4].checked) {
		checkboxes[2].disabled = true;
		checkboxes[2].parentNode.style.color = 'grey';
	}	else {
		checkboxes[2].disabled = false;
		checkboxes[2].parentNode.style = '';
	}
}

function checkboxConflicts() {
	checkFrameworks();
		checkExpress();
		checkLibraries();
		checkNode();
}

for (var i=0; i<checkboxes.length; i++) {	//	for loop to apply click event to each checkbox and add the four conflicting schedule event handlers to each
checkboxes[i].addEventListener("click", checkboxConflicts);
}



var totalLabel = document.createElement('label'); //create a total label
var cost;	// cost variable to hold the everchanging price of chosen events
function activitiesTotalAdd() {	//	function to add the $ value of each activity as it's checked
	cost = parseInt('0');	//	reset the total cost after each checkbox has been checked or unchecked to allow for a clean re-count
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
	totalLabel.innerHTML = '<label>Total: $' + cost + ' </label>';	//	dynamically appends the total cost label
}
for (var i=0; i<checkboxes.length; i++) {	//	dynamically calculates the total cost as you check and uncheck activities checkboxes
	checkboxes[i].onchange = activitiesTotalAdd;
}



paymentSelect.onchange = function() {	// function to display the information associated with the selected payment method, and hide the others
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
		creditDiv.style.display = 'none';
		paypalDiv.style.display = 'block';
		bitcoinDiv.style.display = 'block';
	}
};



function validateForm() {	// this function runs whenever the Submit button is pressed or whenever the user presses the 'enter' key. This function validates the form, ensuring all required fields are properly filled
	var alertArray = [];	// an array to hold all alert messages, each of which specifies a condition which was not met when the user filled out the form
	var counter = 0;	// a counter to signify if user filled out form properly. If counter > 0, the user failed some condition	
	//	name value must be filled out
	if (nameInput.value === null || nameInput.value === '') {
		nameInput.style.backgroundColor = 'red';
		nameInput.style.opacity = '.4';
		alertArray.push("Please enter a name in the 'Name' field.");
		counter ++;
	}


	var email = emailInput.value;	//	email address must be formatted correctly or field is marked red and an error message is added to alert array
	if (validateEmail(email)) {
	}	else {
		emailInput.style.backgroundColor = 'red';
		emailInput.style.opacity = '.4';
		alertArray.push('Please enter a valid email address.');
		counter++;
	}

	function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}


	//	at least one event checkbox must be checked or field is marked red and an error message is added to alert array
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
    alertArray.push('Please choose at least one activity.');
    counter++;
	}


	//	a payment method must be selected or label is marked red and an error message is added to alert array
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
	valid_credit_card(cardNumber);	//	calls the valid_credit_card function and gives the cardNumber argument


	//	zip code input accepts US zip codes only. 'murica 
	var zipValue = document.getElementById('zip').value;
	var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipValue);
	if (!isValidZip) {
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
		return false;	// form is not submitted if counter > 0
	}
}
