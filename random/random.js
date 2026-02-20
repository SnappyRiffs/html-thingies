function myRand() {
	var min = parseInt(document.getElementsByClassName('min')[0].value);
	var max = parseInt(document.getElementsByClassName('max')[0].value);
	var min_check = document.forms["rand"]["min"].value;
	var max_check = document.forms["rand"]["max"].value;
	var result = Math.floor(Math.random() * (max - min + 1)) + min;

	if ((min_check == null || min_check == "") || (max_check == null || max_check == "")) {
		confirm("Check your inputs");
	}
	else {

		document.getElementById('result').innerHTML = "Number is " + result;
	}


} 
