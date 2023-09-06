const getAngkaTerbesarKedua = (dataNumbers) => {
    if (!Array.isArray(dataNumbers)) {
        return "Invalid data type";
    }

    const sortedArray = dataNumbers.sort((a, b) => b - a);
    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] < sortedArray[i - 1]) {
            return sortedArray[i];
        }
    }
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
