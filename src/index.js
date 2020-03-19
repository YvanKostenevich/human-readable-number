module.exports = function toReadable(number) {

    if(number === 0){
        return 'zero';
    }

    const vocabulary = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };

    let numberArray = number.toString().split('').map(Number);


    function parseNum(arr) {

        let currentArray = arr;

        if (currentArray.length === 1) {
            return vocabulary[currentArray[0]];

        } else if (currentArray.length === 2 && currentArray[0] === 1) {
            return vocabulary[Number(currentArray.join(''))];

        } else if (currentArray.length === 2 && currentArray[1] === 0) {
            return vocabulary[currentArray[0] * 10];

        } else if (currentArray.length === 2) {
            return vocabulary[currentArray[0] * 10] + ' ' + vocabulary[currentArray[1]];

        } else if (currentArray.length === 3 && currentArray[1] === 0 && currentArray[2] === 0) {
            return vocabulary[currentArray[0]] + ' hundred';

        } else if (currentArray.length === 3 && currentArray[1] === 0) {
            return vocabulary[currentArray[0]] + ' hundred ' + vocabulary[currentArray[2]];

        } else if (currentArray.length === 3) {
            let hundreds = vocabulary[currentArray[0]];
            currentArray.shift();
            return hundreds + ' hundred ' + parseNum(currentArray);
        }

    }

    return parseNum(numberArray);
}
