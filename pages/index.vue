<template>
  <div>
    <Menu></Menu>
  </div>
</template>

<script setup lang="ts">
const { difficulty } = useDifficulty();
useHead({
  // set tab title and include current difficulty
  titleTemplate: () => {
    return "songuessr - " + difficulty.value;
  },
});
</script>
