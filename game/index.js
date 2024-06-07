const WIN_COUNT = 5;

const INITIAL_INCREMENTS_MAP = {
  vertical: [1, 0],
  horizontal: [0, 1],
  diagonal_bottom: [1, 1],
  diagonal_top: [1, -1],
};

const I_INCREMENT_TYPES = ["diagonal_bottom", "diagonal_top", "vertical"];
const J_INCREMENT_TYPES = ["horizontal", "diagonal_bottom"];
const J_DECREMENT_TYPES = ["diagonal_top"];

class Game {
  #board = [];

  constructor(board) {
    this.#board = board;
  }

  #getInitialIncrementsByType(type) {
    const initialIncrements = INITIAL_INCREMENTS_MAP[type];
    if (!initialIncrements) throw new Error("Invalid type");

    return initialIncrements;
  }

  #checkResult(i, j, type) {
    let count = 1;
    let [iIncrement, jIncrement] = this.#getInitialIncrementsByType(type);

    while (
      count < WIN_COUNT &&
      this.#board[i + iIncrement] &&
      this.#board[i][j] === this.#board[i + iIncrement][j + jIncrement]
    ) {
      count++;

      if (J_INCREMENT_TYPES.includes(type)) {
        jIncrement++;
      }

      if (I_INCREMENT_TYPES.includes(type)) {
        iIncrement++;
      }

      if (J_DECREMENT_TYPES.includes(type)) {
        jIncrement--;
      }
    }

    if (count === WIN_COUNT) {
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
          this.#checkResult(i, j, "diagonal_top") ||
          this.#checkResult(i, j, "diagonal_bottom");

        if (checkResult !== null) {
          return checkResult;
        }
      }
    }

    return 0;
  }
}

module.exports = Game;
