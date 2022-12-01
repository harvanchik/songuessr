<script setup lang="ts">
const { difficulty } = useDifficulty();
const { genre } = useGenre();
const { score, time, round, songG, 
        addScore, addRound, 
        resetScore, resetSong, 
        setState, setAnswer, setSong } = useScore();
// get the score or time to show on the page
const showScore = () => {
  if (difficulty.value === "novice" || difficulty.value === "insane") {
    return score.value;
  } 
  else {
    return time.value;
  }
};
// get the round to show on the page
const showRound = () => {
  return round.value;
};
// set tab title and include current difficulty
useHead({
  titleTemplate: () => {
    return genre.value + " Mix | Songuessr";
  },
});
</script>

<template>
<div class="flex flex-col min-h-screen pt-20 pb-20 bg-red-100">
    <h1 class="mx-auto text-6xl font-semibold text-red-500 w-max">Songuessr</h1>
    <div class="flex flex-col max-w-md mx-auto mt-3 space-y-5 text-5xl">
  
    <!-- If the mode is novice, just show the score out of 10 -->
    <h3 v-if="difficulty === 'novice'" class="mx-auto text-5xl text-green-500 w-max">Score: {{ showScore() }} Round: {{ showRound() }}</h3>
    <!-- If the mode is insane, show their current score -->
    <h3 v-if="difficulty === 'insane'" class="mx-auto text-5xl text-purple-500 w-max">Score: {{ showScore() }} Round: {{ showRound() }}</h3>
    <!-- If the mode is lightning, show their current accumulated time -->
    <h3 v-if="difficulty === 'lightning'" class="mx-auto text-5xl text-blue-500 w-max">Time: {{ showScore() }} Round: {{ showRound() }}</h3>
  
    <!-- Cover the text of the iframe with a box of absolute position and the same color as the iframe -->
    <div class="absolute top-[4.3em] w-[325px] h-[72px] bg-[#282828] rounded-md">
      <p class="relative text-center text-white text-[32px] py-3 px-auto">-- Guess the Song --</p>
      <div class="relative w-[90px] h-8 bg-[#282828] rounded-md left-[6.7em] bottom-[1.2em]"></div>
    </div>

    <!-- START: rock Songs -->
    <!-- START: Round 1 -->
    <div v-if="round === 1 && genre === 'rock'">
      <div v-if="songG === 1">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5NfzVueIjM2uwu7UWTvZAU?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 2">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0vFOzaXqZHahrZp6enQwQb?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 3">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6ITuEsxEy2qPhqMowdDAeI?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 4">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0cKk8BKEi7zXbdrYdyqBP5?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div v-if="difficulty === 'novice'">
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(1), setSong()"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >Down by the Seaside</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(2), setSong()"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >Money</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(3), setSong()"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >Train in Vain</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(4), setSong()"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Behind Blue Eyes</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 1 -->
    <!-- START: Round 2 -->
    <div v-if="round === 2 && genre === 'rock'">
      <div v-if="songG === 1">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3dmqIB2Qxe2XZobw9gXxJ6?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 2">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4Jv7xJqocJSTV1kLSALWH6?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 3">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2FZ0yrA5aPClG5ZPBlV7n4?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 4">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3fgch6faHYPKqE6C3hIYfo?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div v-if="difficulty === 'novice'">
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(1), setSong()"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >Mary Jane's Last Dance</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(2), setSong()"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >West LA Fadeaway</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(3), setSong()"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >Sweet Leaf</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(4), setSong()"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >In the City</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 2 -->
    <!-- START: Round 3 -->
    <div v-if="round === 3 && genre === 'rock'">
      <div v-if="songG === 1">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/05f8Hg3RSfiPSCBQOtxl3i?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 2">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5rHGRbh5F1oFQ4CdpzFyhN?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 3">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5dAxeuDkIkpa6wZpMOuG9i?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 4">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1Pq1ySROrhPJ1ljTcZPy83?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div v-if="difficulty === 'novice'">
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(1), setSong()"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >When the Levee Breaks</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(2), setSong()"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >Don't Ask Me No Questions</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(3), setSong()"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >I Fought the Law</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(4), setSong()"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Long Live Rock</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 3 -->
    <!-- START: Round 4 -->
    <div v-if="round === 4 && genre === 'rock'">
      <div v-if="songG === 1">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/13tnv0a8pXDcnvn1W7gCCO?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 2">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4BP3uh0hFLFRb5cjsgLqDh?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 3">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7Ar4G7Ci11gpt6sfH9Cgz5?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 4">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/252pAlbltOjOcUux4dRtjp?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div v-if="difficulty === 'novice'">
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(1), setSong()"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >Showdown</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(2), setSong()"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >Fortunate Son</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(3), setSong()"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >Listen to the Music</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(4), setSong()"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Must of Got Lost</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 4 -->
    <!-- START: Round 5 -->
    <div v-if="round === 5 && genre === 'rock'">
      <!-- Random songs to choose from round 1 -->
      <div v-if="songG === 1">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2eDdFHgqNJltzlvlZFVDWd?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 2">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0wva7TtE4QUkKtnMHP9BpT?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 3">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4A8jvQQ5EnKlTJIirMhgfA?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 4">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1orVKbp6vqtfAPOmvRofVq?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div v-if="difficulty === 'novice'">
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(1), setSong()"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >Over the Hills and Far Away</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(2), setSong()"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >Spill the Wine</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(3), setSong()"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >Lover's Rock</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(4), setSong()"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Rock'n Me</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 5 -->
    <!-- START: Round 6 -->
    <div v-if="round === 6 && genre === 'rock'">
      <div v-if="songG === 1">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6LbbHFEajG9e4m0G3L47c4?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 2">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2fnAWGcjkl6TXbq58WjCJv?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 3">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4RUQVUxaRMwDnsUwW80xz4?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 4">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/28eg5bkYvIHT7HPmzZFwLN?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div v-if="difficulty === 'novice'">
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(1), setSong()"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >Pinball Wizard</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(2), setSong()"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >Cheatin' Woman</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(3), setSong()"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >Brown Eyed Women</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(4), setSong()"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Lonely Is The Night</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 6 -->
    <!-- START: Round 7 -->
    <div v-if="round === 7 && genre === 'rock'">
      <div v-if="songG === 1">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4AiMaeCXwsldpwvA5wu5gM?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 2">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3i25w2HOWoafnTIiWJCL71?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 3">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/14R4uuf0SMjNmfLfHvMLZJ?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 4">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2x6cyOuvP4nhQ5hAUU1LhY?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div v-if="difficulty === 'novice'">
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(1), setSong()"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >Runnin' Down A Dream</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(2), setSong()"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >Fool in the Rain</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(3), setSong()"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >Funk #48</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(4), setSong()"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Paul's Tune</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 7 -->
    <!-- START: Round 8 -->
    <div v-if="round === 8 && genre === 'rock'">
      <div v-if="songG === 1">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5Zyv0v4rPcrXjkaeImuodv?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 2">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2YOwVfcUTRjNpcLny4UC4r?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 3">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1lNRVjK8MukRZpeurYssIx?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 4">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5m6livL7ccIS92wq16n52r?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div v-if="difficulty === 'novice'">
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(1), setSong()"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >One Rainy Wish</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(2), setSong()"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >The Long Run</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(3), setSong()"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >Shakedown Street</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(4), setSong()"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Monkey Man</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 8 -->
    <!-- START: Round 9 -->
    <div v-if="round === 9 && genre === 'rock'">
      <div v-if="songG === 1">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1PehfITh0TTRx3LkDdV4h3?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 2">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4RS9PmtHQe7I0o5fEeweOY?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 3">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4ItljeeAXtHsnsnnQojaO2?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 4">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6UBjSnyP1O5W5ndJoO9vUk?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div v-if="difficulty === 'novice'">
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(1), setSong()"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >Fame</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(2), setSong()"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >Dance the Night Away</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(3), setSong()"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >D'yer Mak'er</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), setAnswer(4), setSong()"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Night Moves</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game-rock">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 9 -->
    <!-- START: Round 10 -->
    <div v-if="round === 10 && genre === 'rock'">
      <div v-if="songG === 1">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3AySFupxPGQWjauQfFXcr0?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 2">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3rj08Z7MlxxLm8r3wW2fID?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 3">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4B3gkbr7aGC2sujjgivK0s?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 4">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1CZR9j4cF4r2uuCpiMdsX5?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div v-if="difficulty === 'novice'">
      <nuxt-link to="/scores">
        <button @click="addRound(1), setAnswer(1), setSong()"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >Red Angel Dragnet</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/scores">
        <button @click="addRound(1), setAnswer(2), setSong()"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >Pali Gap</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/scores">
        <button @click="addRound(1), setAnswer(3), setSong()"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >I can't Explain</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/scores">
        <button @click="addRound(1), setAnswer(4), setSong()"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Fire In The Hole</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/scores">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 10 -->
    <!-- END: rock Songs -->

    <!-- Return to Home Page -->
    <nuxt-link to="/">
      <button @click="resetScore(), setState(false)"
        class="duration-250 mx-auto w-full rounded bg-red-200 py-2 px-5 text-[32px] uppercase text-red-600 transition-[colors,transform] hover:scale-105 hover:bg-red-300 hover:bg-gradient-to-r hover:from-red-200 hover:to-red-400 hover:text-red-700 active:translate-y-1"
      >Exit</button><br />
    </nuxt-link>
    
    </div>
  </div>
</template>

