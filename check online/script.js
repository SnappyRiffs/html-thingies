/* JS comes here */
let isOn = document.getElementById("status");

window.addEventListener('load', function (e) {
	if (navigator.onLine) {
		isOn.innerHTML = "Online";
		isOn.classList.add("success");
	} else {
		isOn.innerHTML = "You are offline";
		isOn.classList.remove("success");
		isOn.classList.add("error");
	}
}, false);