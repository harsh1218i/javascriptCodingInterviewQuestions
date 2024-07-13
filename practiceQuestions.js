//practiceQuestions
let arr = [4, 5, 101, 105, 51, 52, -1, 0]
function findMaxNumber(arr) {
    return arr.sort((a,b) => a-b)[0];
    // return Math.min(...arr);
}

console.log(findMaxNumber(arr));