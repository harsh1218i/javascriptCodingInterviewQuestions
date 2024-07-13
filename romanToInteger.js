let inputRomanNumber = 'MCMXCIV'

function romanToInteger(inputRomanNumber) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let currentIndexValue = inputRomanNumber.split('');
    
    return currentIndexValue;
    // let total = 0;
    // let prevValue = 0;
    // // Iterate through each character in the string
    // for (let i = inputRomanNumber.length - 1; i >= 0; i--) {
    //     let currentValue = romanMap[inputRomanNumber[i]];

    //     // If the current value is less than the previous value, subtract it
    //     if (currentValue < prevValue) {
    //         total -= currentValue;
    //     } else {
    //         // Otherwise, add it to the total
    //         total += currentValue;
    //     }

    //     // Update the previous value for the next iteration
    //     prevValue = currentValue;
    // }
    // return total;
}

console.log(romanToInteger(inputRomanNumber));