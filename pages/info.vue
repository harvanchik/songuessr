<script setup lang="ts">
const { difficulty } = useDifficulty();
// method to get description of game mode
const getDescription = () => {
  switch (difficulty.value) {
    case "novice":
      return `Novice Mode is for casual players trying to pass time or enhance
      their musical knowledge. It is also a good starting point to become familiar
      with the game, as it is the easiest mode and the player can learn the song names. 
      See how many answers you can get right within the 10 rounds!`;
    case "insane":
      return `The Insane Mode is for more experienced players. In this mode, 
      the player will be shown a text box instead of set buttons. You will have
      to know the song name and type it in correctly to get the answer right. 
      Make sure to type in the correct spelling and punctuation!`;
    case "lightning":
      return `The Lightning Mode is all about speed. This mode will require some
      practice in the other modes to get the hang of it, unless you are a true
      music genius. The setup is similar to the Insane Mode, but this mode tracks
      the time it takes for you to enter all 10 answers. Can you set a new record?`;
    default:
      return `No description found for this difficulty`;
  }
};
useHead({
  // set tab title and include current difficulty
  titleTemplate: () => {
    return difficulty.value + " Difficulty Info | Songuessr";
  },
});
</script>


<template>
  <div class="flex flex-col min-h-screen pt-20 pb-20 bg-gradient-to-bl from-purple-800 to-blue-300">
    <h1 class="mx-auto text-6xl font-semibold text-red-900 w-max">Songuessr</h1>
    <div class="flex flex-col max-w-sm mx-auto space-y-5 text-4xl">

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
        <h3 class="mx-auto mt-3 mb-10 text-4xl text-purple-400 capitalize w-max">
          {{ difficulty }} Mode Rules
        </h3>
        <p class="p-5 mb-10 text-lg bg-purple-200 rounded-lg">
          {{ getDescription() }}
        </p>
      </div>

      <!-- Blue if Lightning -->
      <div class="lightning-info" v-if="difficulty === 'lightning'">
        <h3 class="mx-auto mt-3 mb-10 text-4xl text-blue-400 capitalize w-max">
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

