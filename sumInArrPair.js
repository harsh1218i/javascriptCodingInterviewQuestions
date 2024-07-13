let inputArr = [1, 3, 4, 5, 6, 7, 8, 9];
let inputNum = 10;

function sumInArrPair(inputArr, inputNum) {
    let arr = [];
    for (let i = 0; i < inputArr.length; i++) {
        for (let j = 0; j < inputArr.length; j++) {
            if (inputArr[i] + inputArr[j] === inputNum && inputArr[i] !== inputArr[j]) {
                arr.push([inputArr[i], inputArr[j]]);
            }
        }
    }
    return arr;
}

console.log(sumInArrPair(inputArr, inputNum));