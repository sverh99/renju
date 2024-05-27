const fs = require("fs");

function parseTestCases() {
  const [numberOfTestCases, ...rawTestCases] = fs
    .readFileSync("test_cases.txt", "utf-8")
    .trim()
    .split("\n\n");

  const testCases = rawTestCases.map((testCase) => {
    return testCase.split("\n").map((row) => row.split(" ").map(Number));
  });

  return { numberOfTestCases: Number(numberOfTestCases), testCases };
}

module.exports = parseTestCases;
