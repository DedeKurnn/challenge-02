const changeWord = (selectedText, changedText, text) => {
    const changedWord = text.replace(selectedText, changedText);
    return changedWord;
};

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung Bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("Bromo", "Semeru", kalimat2));
