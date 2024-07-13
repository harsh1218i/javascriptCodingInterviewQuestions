// Given an array of strings, capitalise only the first letter of each string.
let arr = ["my Name iS HaRsh", "i aM An IndIaN"];

function capitaliseFirstAlpha(arr) {
    for (i in arr) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].toLowerCase().slice(1);
    }
    return arr;
}

console.log(capitaliseFirstAlpha(arr));