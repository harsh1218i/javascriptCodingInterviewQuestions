function codeEditorErrorDetection(input) {
    // A map to hold the matching pairs of brackets
    const matchingBrackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    // A stack to hold the opening brackets
    const stack = [];
    
    // A map to hold the position of brackets in the stack
    const positionStack = [];
    
    // Iterate through the input string
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        
        // If the character is an opening bracket, push it to the stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
            positionStack.push(i);
        }
        // If the character is a closing bracket
        else if (char === ')' || char === ']' || char === '}') {
            // Check if the stack is empty or the top of the stack doesn't match the current closing bracket
            if (stack.length === 0 || stack[stack.length - 1] !== matchingBrackets[char]) {
                return `Error at position ${i}: unmatched closing bracket '${char}'`;
            }
            // Pop the matching opening bracket from the stack
            stack.pop();
            positionStack.pop();
        }
    }
    
    // If the stack is not empty after processing the entire string, it means there are unmatched opening brackets
    if (stack.length > 0) {
        return `Error at position ${positionStack[positionStack.length - 1]}: unmatched opening bracket '${stack[stack.length - 1]}'`;
    }
    
    // If everything is matched correctly
    return "All brackets are matched correctly";
}

// Example usage
console.log(codeEditorErrorDetection("[{[)({]}[]}]"));  // Output: Error at position 4: unmatched closing bracket ')'
// console.log(codeEditorErrorDetection("{[()]}"));        // Output: All brackets are matched correctly
// console.log(codeEditorErrorDetection("{[()]"));         // Output: Error at position 0: unmatched opening bracket '{'
// console.log(codeEditorErrorDetection("[{]}"));          // Output: Error at position 2: unmatched closing bracket ']'
