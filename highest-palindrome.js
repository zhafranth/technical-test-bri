function highestPalindrome(s, k) {
  function makePalindrome(str, l, r, changes) {
    if (l >= r) {
      return { result: str, changes };
    }
    let newStr = str.split("");
    if (newStr[l] !== newStr[r]) {
      if (changes > 0) {
        let maxChar = Math.max(newStr[l], newStr[r]);
        newStr[l] = newStr[r] = maxChar;
        return makePalindrome(newStr.join(""), l + 1, r - 1, changes - 1);
      } else {
        return { result: "-1", changes };
      }
    }
    return makePalindrome(str, l + 1, r - 1, changes);
  }

  function maximizePalindrome(str, l, r, changes) {
    if (l >= r || changes <= 0) {
      return str;
    }
    let newStr = str.split("");
    if (newStr[l] !== "9") {
      if (newStr[l] === newStr[r]) {
        if (changes >= 2) {
          newStr[l] = newStr[r] = "9";
          changes -= 2;
        }
      } else {
        newStr[l] = newStr[r] = "9";
        changes -= 1;
      }
    }
    return maximizePalindrome(newStr.join(""), l + 1, r - 1, changes);
  }

  const initialPalindrome = makePalindrome(s, 0, s.length - 1, k);

  if (initialPalindrome.result === "-1") {
    return "-1";
  }

  return maximizePalindrome(
    initialPalindrome.result,
    0,
    initialPalindrome.result.length - 1,
    initialPalindrome.changes
  );
}

// Sample Test Cases
console.log(highestPalindrome("3943", 1)); // Output: "3993"
console.log(highestPalindrome("932239", 2)); // Output: "992299"
