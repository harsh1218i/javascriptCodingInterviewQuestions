// Find nearest number to the given input
let arr = [19, 21, 15, 9, 43, 1, 89, 34, -1, -9];
let input = 10;

function findNearestNumInArr(arr, input) {
    if (arr?.includes(input)) {
        return [input];
    } else {
        let numRight = arr.sort((a, b) => a - b).find(num => { if (num > input) return num });
        let numLeft = arr.sort((a, b) => b - a).find(num => { if (num < input) return num });
        return !!numRight && !!numLeft ? (input - numLeft === numRight - input ? [numLeft, numRight] : input - numLeft > numRight - input ? [numRight] : [numLeft]) : !!numRight ? [numRight] : [numLeft];
    }
}

console.log(findNearestNumInArr(arr, input));