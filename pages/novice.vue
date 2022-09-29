<template>
  <div class="flex flex-col min-h-screen pt-20 pb-20 bg-red-100">
    <h1 class="mx-auto text-6xl font-semibold text-red-500 w-max">Songuessr</h1>
    <div class="flex flex-col max-w-md mx-auto mt-20 space-y-5 text-5xl">
      <h3 class="mx-auto text-5xl text-green-600 w-max">Novice Mode Rules</h3>
      <!-- TODO: Type out the rules of the game mode -->
      <p class="p-5 text-lg text-black bg-green-600 rounded-lg">
        Casual players trying to pass time throughout the day or enhance their
        music knowledge can play this mode to figure out their knowledge of a
        certain genre of music. This mode gives multiple choice options, so the
        user has a range of options to guess or choose from before answering.
        They are given their scores out of 10, since they are given 10 song
        choices to choose from.
      </p>
      <br />
      <!-- END: rules -->
      <nuxt-link to="/genre">
        <button
          id="70"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1"
        >
          Choose Genre
        </button>
        <br />
      </nuxt-link>
      <nuxt-link to="/">
        <button
          id="70"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1"
        >
          Go Back
        </button>
        <br />
      </nuxt-link>
    </div>
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
