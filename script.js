let button = document.querySelector("#counter");
let counter = 0;
button.addEventListener("click", btnFn);
function btnFn() {
	counter++;
	console.log(counter);
}
