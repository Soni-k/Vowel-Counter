const texta = document.querySelector("#textarea");
const btnc = document.querySelector("#btn");
const outp = document.querySelector(".output");

btnc.addEventListener('click', () => {
	if (texta.value === '') {
		outp.innerHTML = 'please enter some text';
	} else {
		// aeiou
		const val = texta.value;
		let count = 0;
		for (let i = 0; i < val.length; i++) {
			if (val[i] === "a" || val[i] === "e" || val[i] === "i" || val[i] === "o" || val[i] === "u") {
				count++;
			}
			outp.innerHTML = `The number of value are ${count}`;
		}

	}
});