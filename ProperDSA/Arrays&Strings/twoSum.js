// hash map concept:
// syntax
// const numMap = new Map();
// numMap.set(key, value);               numMap.set(2, 0);                Adds a key-value pair (2, 0) to the map
// const value = numMap.get(key);        const index = numMap.get(2);     Retrieves the value associated with key 2, which is 0
// const exists = numMap.has(key);       const exists = numMap.has(2);    Returns true if the key 2 exists in the map


// function twoSum(nums, target) {
//     let output = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 output.push([i,j], [nums[i], nums[j]])
//             }
//         }
//     }
//     return output;
// }

// const twoSum = (nums, target) => {
//     let output = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 output.push([i,j])
//             }
//         }
//     }
//     return output;
// }

// function twoSum(nums, target) {
//     let obj = {}
//     for (let i = 0; i < nums.length; i++) {
//         let number = target - nums[i];
//         console.log(number);
//         if (obj.hasownProperty(nums[i])) {
//             return [number, nums[i]];
//         }
//         obj.push(number);
//         }
//     return [];
// }

function twoSum(nums, target) {
    // Create a hash map to store the complement of each number and its index
    const numMap = new Map();
    let output = [];
    // Iterate over the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        // Check if the complement exists in the hash map
        if (numMap.has(complement)) {
            // If it exists, return the indices of the two numbers
            output.push([nums[i], i])
            return [numMap.get(complement), i];
        }
        // Otherwise, add the number and its index to the hash map
        numMap.set(nums[i], i);
    }
    // If no such pair is found, return an empty array
    return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
// const nums = [7, 1, 8, 9, 7, 10, 3, 7, -4, -2, 0, 0,];
// const target = 11;

console.log(twoSum(nums, target));




// Learning:
// new Map();