<template>
  <div>
    <Menu></Menu>
  </div>
</template>

<script setup lang="ts">
const { difficulty } = useDifficulty();
const { genre } = useGenre();
useHead({
  // set tab title and include current difficulty
  titleTemplate: () => {
    return "Difficulty: " + difficulty.value + " Genre: " + genre.value + " | Songuessr";
  },
});
</script>
