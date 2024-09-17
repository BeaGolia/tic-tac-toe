<template>
  <div>
    <h2>{{ winner }} has won!</h2>
    <button @click="handleReset">Play again</button>
  </div>
</template>

<script>
export default {
  props: {
    winner: String
  },
  emits: ['resetGame'],
  setup(props, { emit }) {
    const handleReset = () => {
      emit('resetGame');
    };

    return {
      handleReset
    };
  }
};
</script>

<style scoped>
button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid black;
}
button:hover {
  opacity: 0.6;
}
button:active {
  opacity: 0.5;
}
</style>
