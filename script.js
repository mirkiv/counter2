let button = document.querySelector("#counter");
let counter = 0;
let text = document.querySelector("#text");
button.addEventListener("click", btnFn);
function btnFn() {
	counter++;
	console.log(counter);
	text.textContent = counter;
}
