<script setup lang="ts">
const { difficulty } = useDifficulty();
const { score, time, addScore, resetScore, setState } = useScore();

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
    return "Time: " + time.value + " Score: " + score.value + " | Songuessr";
  },
});

// Code to setup the vue-youtube component
const videoId = ref('lG0Ys-2d4MA');
const youtube = ref(null);
const playVideo = () => {
  player().playVideo()
};
const playing = () => {
  console.log('Video is being played')
};
const player = () => {
  return youtube.player
};
</script>


<template>
  <div class="flex flex-col min-h-screen pt-20 pb-20 bg-red-100">
    <h1 class="mx-auto text-6xl font-semibold text-red-500 w-max">Songuessr</h1>
    <div class="flex flex-col max-w-md mx-auto mt-3 space-y-5 text-5xl">

      <!-- If the mode is novice, just show the score out of 10 -->
      <h3 v-if="difficulty === 'novice'" class="mx-auto text-5xl text-green-500 w-max">Score: {{ showScore() }} / 10</h3>
      <!-- If the mode is insane, show their current score -->
      <h3 v-if="difficulty === 'insane'" class="mx-auto text-5xl text-purple-500 w-max">Score: {{ showScore() }}</h3>
      <!-- If the mode is lightning, show their current accumulated time -->
      <h3 v-if="difficulty === 'lightning'" class="mx-auto text-5xl text-blue-500 w-max">Time: {{ showScore() }} seconds</h3>
      
      <!-- TODO: Implement Spotify playback API to run a song clip here -->
      <p class="p-5 mx-auto text-lg text-black bg-white rounded-lg">-- Song Clip Player --</p>
      <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
      <button @click="playVideo">Play</button>
      <br />
      <!-- END: Spotify API -->

      <!-- TODO: Make each option's name to the name of a song in the playlist -->
      <!--    Also make one of the options the correct option and add to the score if selected -->
      <!-- Buttons for the Novice Difficulty -->
      <div class="novice-buttons" v-if="difficulty === 'novice'">
      <nuxt-link to="/game">
        <button
          id="option1"
          @click="addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >
          Correct
        </button>
        <br />
      </nuxt-link>

      <nuxt-link to="/game">
        <button
          id="option2"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >
          Incorrect
        </button>
        <br />
      </nuxt-link>

      <nuxt-link to="/game">
        <button
          id="option3"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >
          Incorrect
        </button>
        <br />
      </nuxt-link>

      <nuxt-link to="/game">
        <button
          id="option4"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >
          Incorrect
        </button>
        <br />
      </nuxt-link>
      </div>

      <!-- Text Box for the Insane and Lightning Modes -->
      <div class="expert-buttons" v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input
        id="textInput"
        class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
      />
      <nuxt-link to="/game">
        <button
          id="enterText"
          @click="addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >
          Enter
        </button>
        <br />
      </nuxt-link>
      </div>
      <!-- END: options -->

      <!-- Return to Home Page -->
      <nuxt-link to="/">
        <button
          id="exit"
          class="duration-250 mx-auto w-full rounded bg-red-200 py-2 px-5 uppercase text-red-600 transition-[colors,transform] hover:scale-105 hover:bg-red-300 hover:bg-gradient-to-r hover:from-red-200 hover:to-red-400 hover:text-red-700 active:translate-y-1"
          @click="resetScore(), setState(false)"
        >
          Exit
        </button>
        <br />
      </nuxt-link>
    </div>
  </div>
</template>

