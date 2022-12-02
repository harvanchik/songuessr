<script setup lang="ts">
useHead({
  // set tab title and include current difficulty
  titleTemplate: () => {
    return "Choose Difficulty | Songuessr";
  },
});
</script>


<template>
  <div>
    <Menu></Menu>
  </div>
</template>

