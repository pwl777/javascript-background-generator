/* ------ JavaScript - Background Generator ------ */
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";"; // This shows the updated rgb colour values to the user in text form
}
color1.addEventListener("input", setGradient); // Grabbing the colour1 input values
color2.addEventListener("input", setGradient); // Grabbing the colour2 input values

