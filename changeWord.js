const changeWord = (selectedText, changedText, text) => {
	const changedWord = text.replace(selectedText, changedText);
	return changedWord;
};

const kalimat1 = "Andini mencintai aku karena aku ganteng";
console.log(changeWord("mencintai", "membenci", kalimat1));
