

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(125, 125, 125);
	frameRate(40);
	describe('Hello');
}

function draw() {
	frameRate(random(2, 50)); // the slower the rate-the slower processes

	r = random(255); // r is a random number between 0 - 255
	g = random(255); // g is a random number betwen 0 - 255
	b = random(255); // b is a random number between 0 - 255


	noStroke();
	fill(r, g, b);
	rad = random(50);
	ellipse(mouseX, mouseY, rad, rad);


}