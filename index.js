const Game = require("./game");
const parseTestCases = require("./utils/testCaseParser");

const { numberOfTestCases, testCases } = parseTestCases();

console.info(`Running ${numberOfTestCases} test cases`);
for (const i in testCases) {
  const testCase = testCases[i];
  const game = new Game(testCase);
  const { winner, leftMostNumber } = game.findWinner();
  console.log(`Results for ${Number(i) + 1} test case:`);
  console.log(winner);
  console.log(leftMostNumber);
}
