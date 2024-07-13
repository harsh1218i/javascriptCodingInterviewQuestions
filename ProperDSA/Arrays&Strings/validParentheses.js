// The "Valid Parentheses" problem is a common problem in data structures and algorithms. It involves determining whether a string containing just the characters '(', ')', '{', '}', '[', and ']' is valid. A string is considered valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

function isValid(s) {
    // solution no 1
    // const stack = [];
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
    //         stack.push(s[i]);
    //         console.log(stack, 'pehla')
    //     } else if (s[i] === ')' && stack[stack.length - 1] === '(') {
    //         stack.pop();
    //         console.log(stack, 'dusra')
    //     } else if (s[i] === '}' && stack[stack.length - 1] === '{') {
    //         stack.pop();
    //         console.log(stack, 'teesra')
    //     } else if (s[i] === ']' && stack[stack.length - 1] === '[') {
    //         stack.pop();
    //         console.log(stack, 'chautha')
    //     } else {
    //         return false;
    //     }
    // }
    // return stack.length === 0;

    // solution no 2
    const stack = [];
    const matchingBracket = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== matchingBracket[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;

    // solution no 3
    // const stack = [];
    // const matchingBracket = {
    //     '(': ')',
    //     '{': '}',
    //     '[': ']'
    // };
    // for (let char of s) {
    //     if (matchingBracket[char]) {
    //         stack.push(char);
    //     } else {
    //         const last = stack.pop();
    //         if (matchingBracket[last] !== char) {
    //             return false;
    //         }
    //     }
    // }
    // return stack.length === 0;
};

// Example usage:
console.log(isValid("()")); // Output: true
// console.log(isValid("()[]({})")); // Output: true
// console.log(isValid("(]")); // Output: false
// console.log(isValid("([)]")); // Output: false
// console.log(isValid("{[]()}")); // Output: true


// Learning:
// for of loop;