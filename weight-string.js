const calculateWeights = (string) => {
  const weights = new Set();
  let streak = 1;

  for (let i = 0; i < string.length; i++) {
    const weight = string[i].charCodeAt(0) - "a".charCodeAt(0) + 1;
    weights.add(weight * streak);

    if (i < string.length - 1 && string[i] === string[i + 1]) {
      streak++;
    } else {
      streak = 1;
    }
  }

  return weights;
};

const checkQueries = (string, queries) => {
  const weights = calculateWeights(string);
  return queries.map((query) => (weights.has(query) ? "Yes" : "No"));
};

// Sample Test Case
const string = "abbcccd";
const queries = [1, 3, 9, 8, 2];
const result = checkQueries(s, queries);

console.log(result); // Output: ["Yes", "Yes", "Yes", "No"]
