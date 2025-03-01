


function myRand() {
	var min = parseInt(document.getElementsByClassName('min')[0].value);
	var max = parseInt(document.getElementsByClassName('max')[0].value);
	var check = document.forms["rand"]["min"].value;
	var check_two = document.forms["rand"]["max"].value;
	var result = Math.floor(Math.random() * (max - min + 1)) + min;

	if ((check == null || check == "") || (check_two == null || check_two == "")) {
		confirm("Check your inputs");
	}
	else {

		document.getElementById('result').innerHTML = "Number is " + result;
	}

} 