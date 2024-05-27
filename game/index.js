class Game {
  #board = [];

  constructor(board) {
    this.#board = board;
  }

  #getInitialIncrementsByType(type) {
    if (type === "vertical") {
      return [1, 0];
    }
    if (type === "horizontal") {
      return [0, 1];
    }
    if (type === "diagonal") {
      return [1, 1];
    }
    if (type === "diagonal_bottom") {
      return [-1, -1];
    }
    throw new Error("Invalid type");
  }

  #checkResult(i, j, type) {
    let count = 1;
    let [iIncrement, jIncrement] = this.#getInitialIncrementsByType(type);

    while (
      count < 5 &&
      this.#board[i][j] === this.#board[i + iIncrement][j + jIncrement]
    ) {
      count++;

      if (type === "horizontal") {
        jIncrement++;
      } else if (type === "vertical") {
        iIncrement++;
      } else if (type === "diagonal") {
        jIncrement++;
        iIncrement++;
      } else {
        throw new Error("Invalid type");
      }
    }

    if (count === 5) {
      return {
        winner: this.#board[i][j],
        leftMostNumber: [i + 1, j + 1],
      };
    }

    return null;
  }

  findWinner() {
    for (let i = 0; i < this.#board.length; i++) {
      for (let j = 0; j < this.#board[i].length; j++) {
        if (this.#board[i][j] === 0) {
          continue;
        }

        const checkResult =
          this.#checkResult(i, j, "horizontal") ||
          this.#checkResult(i, j, "vertical") ||
          this.#checkResult(i, j, "diagonal");

        if (checkResult !== null) {
          return checkResult;
        }
      }
    }

    return 0;
  }
}

module.exports = Game;
