const Game = require("../game");
const parseTestCases = require("../utils/testCaseParser");

const { numberOfTestCases, testCases } = parseTestCases();

test("Should parse test cases correctly", () => {
  expect(numberOfTestCases).toBe(4);
  expect(testCases.length).toBe(4);
  expect(testCases[0].length).toBe(19);
});

test("Should find correct result for first testCase", () => {
  const game1 = new Game(testCases[0]);
  expect(game1.findWinner()).toMatchObject({
    winner: 1,
    leftMostNumber: [3, 2],
  });
});

test("Should find correct result for second testCase", () => {
  const game2 = new Game(testCases[1]);
  expect(game2.findWinner()).toMatchObject({
    winner: 2,
    leftMostNumber: [3, 3],
  });
});

test("Should find correct result for third testCase", () => {
  const game3 = new Game(testCases[2]);
  expect(game3.findWinner()).toMatchObject({
    winner: 2,
    leftMostNumber: [15, 14],
  });
});

test("Should find correct result for fourth testCase", () => {
  const game4 = new Game(testCases[3]);
  expect(game4.findWinner()).toMatchObject({
    winner: 2,
    leftMostNumber: [15, 14],
  });
});
