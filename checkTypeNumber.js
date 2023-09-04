const checkTypeNumber = (givenNumber) => {
	if (typeof givenNumber !== "number") {
		return "Invalid: Not a number";
	}

	if (givenNumber % 2 === 0) {
		return "GENAP";
	} else {
		return "GANJIL";
	}
};

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("109"));
console.log(checkTypeNumber(true));
console.log(checkTypeNumber([]));
