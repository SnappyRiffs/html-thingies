function mycoor() {
	var x = parseInt(document.getElementsByClassName('x')[0].value);
	var z = parseInt(document.getElementsByClassName('z')[0].value);
	var check = document.forms["coor"]["x"].value;
	var check_two = document.forms["coor"]["z"].value;
	var result = (x + 700) + " " + (z + 700);

	if ((check == null || check == "") || (check_two == null || check_two == "")) {
		//checks if both or one of the inputs are emtpy
		confirm("Check your inputs");
	}
	else {

		document.getElementById('result').innerHTML = "Coordinates are " + result;
	}

} 