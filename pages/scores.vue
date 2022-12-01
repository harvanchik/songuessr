<script setup lang="ts">
const { difficulty } = useDifficulty();
const { genre } = useGenre();
const { score, time, resetScore, setState } = useScore();
// get the score or time to show on the page
const showScore = () => {
  if (difficulty.value === "novice" || difficulty.value === "insane") {
    return score.value;
  } 
  else {
    return time.value;
  }
};
// set tab title and include current difficulty
useHead({
  titleTemplate: () => {
    return genre.value + " High Score | Songuessr";
  },
});
</script>

<template>
    <div class="flex flex-col min-h-screen pt-20 pb-20 bg-red-100">
        <h1 class="mx-auto text-6xl font-semibold text-red-500 w-max">Songuessr</h1>
        <div class="flex flex-col max-w-md mx-auto mt-3 space-y-5 text-5xl">
      
        <!-- If the mode is novice, just show the score out of 10 -->
        <h3 v-if="difficulty === 'novice'" class="mx-auto text-5xl text-green-500 w-max">Score: {{ showScore() }} / 10</h3>
        <!-- If the mode is insane, show their current score -->
        <h3 v-if="difficulty === 'insane'" class="mx-auto text-5xl text-purple-500 w-max">Score: {{ showScore() }} points</h3>
        <!-- If the mode is lightning, show their current accumulated time -->
        <h3 v-if="difficulty === 'lightning'" class="mx-auto text-5xl text-blue-500 w-max">Time: {{ showScore() }} secs</h3>
      
        <!-- TODO: Show the high scores -->
        <div class="p-5 mx-auto bg-black rounded-md">
            <p class="text-red-400">Game Results</p>
        </div>
        <!-- END: TODO -->

        <!-- Return to Home Page -->
        <nuxt-link to="/">
            <button @click="resetScore(), setState(false)"
                class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1"
            >New Game</button><br />
        </nuxt-link>

        </div>
    </div>
</template>

