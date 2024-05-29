const isBalanced = (input) => {
  const stack = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of input) {
    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    } else if ([")", "}", "]"].includes(char)) {
      if (stack.pop() !== pairs[char]) {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
};

// Sample Test Case
console.log(isBalanced("{ [ ( ) ] }")); // Output: YES
console.log(isBalanced("{ [ ( ] ) }")); // Output: NO
console.log(isBalanced("{ ( ( [ ] ) [ ] ) [ ] }")); // Output: YES
