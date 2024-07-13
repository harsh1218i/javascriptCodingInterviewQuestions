let arr = [1, 4, 6, 2, 56, 3];

function pairsInArray(arr) {
    let count = 0;
    // let finalArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                count++
                // finalArr.push([arr[i], arr[j]]);
            }
        }
    }
    return count++
    // return finalArr.length;
}

console.log(pairsInArray(arr));