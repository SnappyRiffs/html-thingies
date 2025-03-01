function generate() {
	var in1 = document.getElementById("input1").value;
	var in2 = document.getElementById("input2").value;
	var gt = document.getElementById("gateType").value;
	var out;

	switch (gt) {
		case 'and':
			out = in1 & in2;
			break;
		case 'or':
			out = in1 | in2;
			break;
		case 'xor':
			out = in1 ^ in2;
			break;
		case 'nand':
			out = 1 - (in1 & in2);
			break;
		case 'nor':
			out = 1 - (in1 | in2);
			break;
		case 'xnor':
			out = 1 - (in1 ^ in2);
			break;
	}
	document.getElementById("output").value = out;
}