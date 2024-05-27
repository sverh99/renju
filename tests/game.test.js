
const Game = require("../game");
const parseTestCases = require("../utils/testCaseParser");

const { numberOfTestCases, testCases } = parseTestCases();

test("Should parse test cases correctly", () => { 
    expect(numberOfTestCases).toBe(3);
    expect(testCases.length).toBe(3);
    expect(testCases[0].length).toBe(19);
})

test("Should find correct result for every testCase", () => { 
    const game1 = new Game(testCases[0]);
    expect(game1.findWinner()).toMatchObject({ winner: 1, leftMostNumber: [3, 2] })

    const game2 = new Game(testCases[1]);
    expect(game2.findWinner()).toMatchObject({ winner: 2, leftMostNumber: [3, 3] })

    const game3 = new Game(testCases[2]);
    expect(game3.findWinner()).toMatchObject({ winner: 2, leftMostNumber: [15, 14] })
})