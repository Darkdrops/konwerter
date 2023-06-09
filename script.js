const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

const swap = () => {
	if (one.textContent === "°C") {
		one.textContent = "°F";
		two.textContent = "°C";
		result.textContent = "";
	} else {
		one.textContent = "°C";
		two.textContent = "°F";
		result.textContent = "";
	}
};

const fahrToCel = () => {
	const farenhite = converter.value * 1.8 + 32;
	result.textContent = `${converter.value} °C to ${farenhite.toFixed(1)} °F`;
	converter.value = "";
};

const CeltoFar = () => {
	const Cel = (converter.value - 32) / 1.8;
	result.textContent = `${converter.value} °F to ${Cel.toFixed(1)} °C`;
	converter.value = "";
};

const conversion = () => {
	if (converter.value !== "") {
		if (one.textContent === "°C") {
			fahrToCel();
		} else {
			CeltoFar();
		}
	} else {
		result.textContent = "Musisz podać jakąś wartość!";
	}
};

const rest = () => {
	converter.textContent = "";
	result.textContent = "";
};

changeBtn.addEventListener("click", swap);
resetBtn.addEventListener("click", rest);
convBtn.addEventListener("click", conversion);
