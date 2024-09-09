<template>
  <div id="app">
    <h1>Tic Tac Toe</h1>
    <div class="grid">
      <div
        v-for="(cell, index) in board"
        :key="index"
        class="cell"
        @click="makeMove(index)"
      >
        {{ cell }}
      </div>
    </div>
    <div v-if="winner">
      <h2>{{ winner }} has won!</h2>
      <button @click="resetGame">Play again</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null
    };
  },
  methods: {
    makeMove(index) {
      if (!this.board[index] && !this.winner) {
        this.board[index] = this.currentPlayer;
        if (this.checkWinner()) {
          this.winner = this.currentPlayer;
        } else {
          this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    },
    checkWinner() {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return (
          this.board[a] &&
          this.board[a] === this.board[b] &&
          this.board[a] === this.board[c]
        );
      });
    },
    resetGame() {
      this.board = Array(9).fill(null);
      this.currentPlayer = 'X';
      this.winner = null;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 40px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
  justify-content: center;
}
.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: #f0f0f0;
  cursor: pointer;
  border: 2px solid #333;
  height: 100px;
  width: 100px;
}
.cell:hover {
  background-color: #e0e0e0;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid black;
}
button:hover{
  opacity: 0.6;
}
button:active{
  opacity: 0.5;
}
</style>
