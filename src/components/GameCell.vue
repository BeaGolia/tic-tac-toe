<template>
  <div class="cell" @click="handleClick">
    {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = () => {
      emit('click');
    };

    return {
      handleClick
    };
  }
};
</script>

<style scoped>
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
</style>
