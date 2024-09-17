<template>
  <div>
    <div class="grid">
      <GameCell
        v-for="(cell, index) in board"
        :key="index"
        :value="cell"
        @click="makeMove(index)"
      />
    </div>
    <WinnerMessage v-if="winner" :winner="winner" @resetGame="resetGame" />
  </div>
</template>

<script>
import { ref } from 'vue';
import GameCell from './GameCell.vue'; // Modificato qui
import WinnerMessage from './WinnerMessage.vue';

export default {
  components: {
    GameCell, // Modificato qui
    WinnerMessage
  },
  setup() {
    const board = ref(Array(9).fill(null));
    const currentPlayer = ref('X');
    const winner = ref(null);

    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    const makeMove = (index) => {
      if (!board.value[index] && !winner.value) {
        board.value[index] = currentPlayer.value;
        if (checkWinner()) {
          winner.value = currentPlayer.value;
        } else {
          currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X';
        }
      }
    };

    const checkWinner = () => {
      return winningCombinations.some(([a, b, c]) => {
        return (
          board.value[a] &&
          board.value[a] === board.value[b] &&
          board.value[a] === board.value[c]
        );
      });
    };

    const resetGame = () => {
      board.value = Array(9).fill(null);
      currentPlayer.value = 'X';
      winner.value = null;
    };

    return {
      board,
      currentPlayer,
      winner,
      makeMove,
      resetGame
    };
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
  justify-content: center;
}
</style>
