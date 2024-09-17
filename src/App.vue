<template>
  <div id="app">
    <h1>Tic Tac Toe</h1>
    <TicTacToe />
  </div>
</template>

<script>
import TicTacToe from './components/TicTacToe.vue';

export default {
  components: {
    TicTacToe
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 40px;
}
</style>
