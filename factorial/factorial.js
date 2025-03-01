function factorial() {
	var number = document.getElementById("num").value;
	var i, ans = 1;
	if (number < 0) {
		document.getElementById("fact").innerHTML = "Value must be greater than 0";
	} else {
		if (number == "") {
			document.getElementById("fact").innerHTML = "Input a number";
		} else if (number < 2) {
			document.getElementById("fact").innerHTML = "Value must be greater than or equal to 2";
		} else if (number > 21) {
			document.getElementById("fact").innerHTML = "Value must be less than or equal to 21";
		} else {
			for (i = 1; i <= number; i++) ans *= i;
			document.getElementById("fact").innerHTML = number + "! = " + ans;
		}

	}
}