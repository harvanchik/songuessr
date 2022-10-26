<script setup lang="ts">
const { difficulty } = useDifficulty();
const { genre } = useGenre();
// method to get description of game mode
const getDescription = () => {
  switch (difficulty.value) {
    case "novice":
      return `Casual players trying to pass time throughout the day or enhance their
        music knowledge can play this mode to figure out their knowledge of a
        certain genre of music. This mode gives multiple choice options, so the
        user has a range of options to guess or choose from before answering.
        They are given their scores out of 10, since they are given 10 song
        choices to choose from.`;
    case "insane":
      return `Hardcore players that are attempting speedruns and high score on the
        leaderboard will choose the insane mode. This mode gives score
        multipliers through the duration of the guess, so the faster the guess
        the higher the score. It also has a text box, so the user would have to
        know the name of the song exactly to get it correct. A correct answer is
        100 points, and an almost instant answer can go up to a 5x multiplier.`;
    case "lightning":
      return `This is a very fast speed mode similar to insane mode, but without the
        points system involved. This mode records how quickly you can guess 10
        songs in a given amount of time. Your high score gets recorded as a
        time, where the lower the time the better the rating. If any of your
        guesses are incorrect, your game ends and you cannot record a time.`;
    default:
      return `No description found for this difficulty`;
  }
};
useHead({
  // set tab title and include current difficulty
  titleTemplate: () => {
    return "Difficulty: " + difficulty.value + " Genre: " + genre.value + " | Songuessr";
  },
});
</script>


<template>
  <div class="flex flex-col min-h-screen pt-20 pb-20 bg-red-100">
    <h1 class="mx-auto text-6xl font-semibold text-red-500 w-max">Songuessr</h1>
    <div class="flex flex-col max-w-sm mx-auto space-y-5 text-5xl">

      <!-- Green if Novice -->
      <div class="novice-info" v-if="difficulty === 'novice'">
        <h3 class="mx-auto mt-3 mb-10 text-4xl text-green-500 capitalize w-max">
          {{ difficulty }} Mode Rules
        </h3>
        <p class="p-5 mb-10 text-lg bg-green-300 rounded-lg">
          {{ getDescription() }}
        </p>
      </div>

      <!-- Purple if Insane -->
      <div class="insane-info" v-if="difficulty === 'insane'">
        <h3 class="mx-auto mt-3 mb-10 text-4xl text-purple-500 capitalize w-max">
          {{ difficulty }} Mode Rules
        </h3>
        <p class="p-5 mb-10 text-lg bg-purple-200 rounded-lg">
          {{ getDescription() }}
        </p>
      </div>

      <!-- Blue if Lightning -->
      <div class="lightning-info" v-if="difficulty === 'lightning'">
        <h3 class="mx-auto mt-3 mb-10 text-4xl text-blue-500 capitalize w-max">
          {{ difficulty }} Mode Rules
        </h3>
        <p class="p-5 mb-10 text-lg bg-blue-200 rounded-lg">
          {{ getDescription() }}
        </p>
      </div>
      
      <!-- Move to Genres Screen -->
      <nuxt-link to="/genre">
        <button
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-500 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1"
        >
          Genres
        </button>
        <br />
      </nuxt-link>

      <!-- Exit to Home Page -->
      <nuxt-link to="/">
        <button
          class="duration-250 mx-auto w-full rounded bg-red-200 py-2 px-5 uppercase text-red-500 transition-[colors,transform] hover:scale-105 hover:bg-red-300 hover:bg-gradient-to-r hover:from-red-200 hover:to-red-400 hover:text-red-700 active:translate-y-1"
        >
          Back
        </button>
        <br />
      </nuxt-link>
    </div>
  </div>
</template>

