//your JS code here. If required.
let ch = document.querySelector("input")

ch.addEventListener("change", (e) =>{
	let str = e.target.value;
	let upperCaseString = str.toUpperCase();
	e.target.value = upperCaseString;
})