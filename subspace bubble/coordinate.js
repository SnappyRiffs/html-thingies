function calculate_distance() {
	var x = parseInt(document.getElementsByClassName('x')[0].value);
	var z = parseInt(document.getElementsByClassName('z')[0].value);
	var x_coord_check = document.forms["coor"]["x"].value;
	var z_coord_check = document.forms["coor"]["z"].value;
	var result = (x + 700) + " " + (z + 700);

	if ((x_coord_check == null || x_coord_check == "") || (z_coord_check == null || z_coord_check == "")) {
		//checks if both or one of the inputs are emtpy
		confirm("Check your inputs");
	}
	else {

		document.getElementById('result').innerHTML = "Coordinates are " + result;
	}


} 
