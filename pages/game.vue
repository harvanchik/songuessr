<script setup lang="ts">
const { difficulty } = useDifficulty();
const { genre } = useGenre();
const { score, time, round, songG, addScore, addRound, resetScore, setState, setAnswer } = useScore();
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
    return "Time: " + time.value + " Score: " + score.value + " | Songuessr";
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
    <h3 v-if="difficulty === 'insane'" class="mx-auto text-5xl text-purple-500 w-max">Score: {{ showScore() }}  Round: {{ showRound() }}</h3>
    <!-- If the mode is lightning, show their current accumulated time -->
    <h3 v-if="difficulty === 'lightning'" class="mx-auto text-5xl text-blue-500 w-max">Time: {{ showScore() }}</h3>

    <!-- Cover the text of the iframe with a box of absolute position and the same color as the iframe -->
    <div class="absolute mx-1/2 top-[4.3em] w-[325px] h-[72px] bg-[#282828] rounded-md">
      <p class="relative text-center text-white text-[32px] py-3 px-auto">-- Guess the Song --</p>
      <div class="relative w-8 h-8 bg-[#282828] rounded-md left-[6.5em] bottom-[1.2em]"></div>
    </div>
    
    <!-- START: 80's songs -->
    <!-- START: Round 1 -->
    <div v-if="round === 1 && genre === '80'">
      <!-- Random songs to choose from round 1 -->
      <div v-if="songG === 1">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2Nz6aF1umHh5Et6I5H581L?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 2">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4y1LsJpmMti1PfRQV9AWWe?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 3">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0ikz6tENMONtK6qGkOrU3c?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 4">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5ubvP9oKmxLUVq506fgLhk?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div v-if="difficulty === 'novice'">
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(1)"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >Song 1</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(2)"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >Song 2</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(3)"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >Song 3</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(4)"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Song 4</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 1 -->

    <!-- START: Round 2 -->
    <div v-if="round === 2 && genre === '80'">
      <!-- Random songs to choose from round 2 -->
      <div v-if="songG === 1">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0GjEhVFGZW8afUYGChu3Rr?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 2">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4bHsxqR3GMrXTxEPLuK5ue?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 3">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/22sLuJYcvZOSoLLRYev1s5?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 4">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2WfaOiMkCvy7F5fcp2zZ8L?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div class="novice-buttons" v-if="difficulty === 'novice'">
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(1)"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >Song 1</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(2)"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >Song 2</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(3)"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >Song 3</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(4)"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Song 4</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div class="expert-buttons" v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 2 -->

    <!-- START: Round 3 -->
    <div v-if="round === 3 && genre === '80'">
      <!-- Random songs to choose from round 3 -->
      <div v-if="songG === 1">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4uLU6hMCjMI75M1A2tKUQC?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 2">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6HvUtPLqkP0t6zd6YNdWby?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 3">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2374M0fQpWi3dLnB54qaLX?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 4">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4RvWPyQ5RL0ao9LPZeSouE?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div class="novice-buttons" v-if="difficulty === 'novice'">
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(1)"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >Song 1</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(2)"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >Song 2</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(3)"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >Song 3</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(4)"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Song 4</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div class="expert-buttons" v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 3 -->

    <!-- START: Round 4 -->
    <div v-if="round === 4 && genre === '80'">
      <!-- Random songs to choose from round 4 -->
      <div v-if="songG === 1">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6W2VbtvMrDXm5vYeB7amkO?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 2">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/46RVKt5Edm1zl0rXhPJZxz?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 3">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0cGG2EouYCEEC3xfa0tDFV?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div v-if="songG === 4">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0GONea6G2XdnHWjNZd6zt3?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div class="novice-buttons" v-if="difficulty === 'novice'">
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(1)"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >Footloose</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(2)"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >Down Under</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(3)"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >Tainted Love</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(4)"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Summer of '69</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div class="expert-buttons" v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 4 -->

    <!-- START: Round 5 -->
    <div v-if="round === 5 && genre === '80'">
      <!-- Random songs to choose from round 5 -->
      <div v-if="songG === 1">
        
      </div>
      <div v-if="songG === 2">
        
      </div>
      <div v-if="songG === 3">
        
      </div>
      <div v-if="songG === 4">
        
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div class="novice-buttons" v-if="difficulty === 'novice'">
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(1)"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >Song 1</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(2)"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >Song 2</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(3)"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >Song 3</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(4)"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Song 4</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div class="expert-buttons" v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 5 -->

    <!-- START: Round 6 -->
    <div v-if="round === 6 && genre === '80'">
      <!-- Random songs to choose from round 6 -->
      <div v-if="songG === 1">
        
      </div>
      <div v-if="songG === 2">
        
      </div>
      <div v-if="songG === 3">
        
      </div>
      <div v-if="songG === 4">
        
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div class="novice-buttons" v-if="difficulty === 'novice'">
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(1)"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >Song 1</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(2)"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >Song 2</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(3)"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >Song 3</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(4)"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Song 4</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div class="expert-buttons" v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 6 -->

    <!-- START: Round 7 -->
    <div v-if="round === 7 && genre === '80'">
      <!-- Random songs to choose from round 7 -->
      <div v-if="songG === 1">
        
      </div>
      <div v-if="songG === 2">
        
      </div>
      <div v-if="songG === 3">
        
      </div>
      <div v-if="songG === 4">
        
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div class="novice-buttons" v-if="difficulty === 'novice'">
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(1)"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >Song 1</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(2)"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >Song 2</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(3)"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >Song 3</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(4)"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Song 4</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div class="expert-buttons" v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 7 -->

    <!-- START: Round 8 -->
    <div v-if="round === 8 && genre === '80'">
      <!-- Random songs to choose from round 8 -->
      <div v-if="songG === 1">
        
      </div>
      <div v-if="songG === 2">
        
      </div>
      <div v-if="songG === 3">
        
      </div>
      <div v-if="songG === 4">
        
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div class="novice-buttons" v-if="difficulty === 'novice'">
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(1)"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >Song 1</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(2)"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >Song 2</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(3)"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >Song 3</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(4)"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Song 4</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div class="expert-buttons" v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 8 -->

    <!-- START: Round 9 -->
    <div v-if="round === 9 && genre === '80'">
      <!-- Random songs to choose from round 9 -->
      <div v-if="songG === 1">
        
      </div>
      <div v-if="songG === 2">
        
      </div>
      <div v-if="songG === 3">
        
      </div>
      <div v-if="songG === 4">
        
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div class="novice-buttons" v-if="difficulty === 'novice'">
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(1)"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >Song 1</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(2)"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >Song 2</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(3)"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >Song 3</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(4)"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Song 4</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div class="expert-buttons" v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 9 -->

    <!-- START: Round 10 -->
    <div v-if="round === 10 && genre === '80'">
      <!-- Random songs to choose from round 10 -->
      <div v-if="songG === 1">
        
      </div>
      <div v-if="songG === 2">
        
      </div>
      <div v-if="songG === 3">
        
      </div>
      <div v-if="songG === 4">
        
      </div><br>
      <!-- Buttons for the Novice Difficulty -->
      <!-- Option 1 -->
      <div class="novice-buttons" v-if="difficulty === 'novice'">
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(1)"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >Song 1</button><br />
      </nuxt-link>
      <!-- Option 2 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(2)"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >Song 2</button><br />
      </nuxt-link>
      <!-- Option 3 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(3)"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >Song 3</button><br />
      </nuxt-link>
      <!-- Option 4 -->
      <nuxt-link to="/game">
        <button @click="addRound(1), setAnswer(4)"
          class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
        >Song 4</button><br />
      </nuxt-link>
      </div>
      <!-- Text Box for the Insane and Lightning Modes -->
      <div class="expert-buttons" v-if="difficulty === 'insane' || difficulty === 'lightning'">
      <input class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"/>
      <nuxt-link to="/game">
        <button @click="addRound(1), addScore(1)"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
        >Enter</button><br />
      </nuxt-link>
      </div>
    </div> <!-- END: Round 10 -->
    <!-- END: 80's songs -->

    <!-- START: Rock songs -->
    <div v-if="round === 1 && genre === 'rnr'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3aoDEt6zSuYQ47gzarlaVo?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 2 && genre === 'rnr'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0hCB0YR03f6AmQaHbwWDe8?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 3 && genre === 'rnr'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2EqlS6tkEnglzr7tkKAAYD?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 4 && genre === 'rnr'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2zYzyRzz6pRmhPzyfMEC8s?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 5 && genre === 'rnr'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7vidktgNZFQylTgH1GEnMs?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 6 && genre === 'rnr'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7mN0AL5ZsYMxJOftvVclOi?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 7 && genre === 'rnr'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3qiyyUfYe7CRYLucrPmulD?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 8 && genre === 'rnr'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6FEKEO3y7QFcMwoGeR0GtU?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 9 && genre === 'rnr'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1KYzwQbt73OvhLAta0KQ4j?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 10 && genre === 'rnr'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/32kgOw8wejH7zUhtXCM8DH?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <!-- END: Rock songs -->

    <!-- START: Hip Hop songs -->
    <div v-if="round === 1 && genre === 'hh'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2qOm7ukLyHUXWyR4ZWLwxA?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 2 && genre === 'hh'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5ByAIlEEnxYdvpnezg7HTX?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 3 && genre === 'hh'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7nYvUtkQMx1v80S2FH2s9J?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 4 && genre === 'hh'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0KQd3QY1Y8zC2rfO4ZBQRC?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 5 && genre === 'hh'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1dF5Y2dd7Wm4wZKvVjWBpr?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 6 && genre === 'hh'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/53oWwSxPuyH2cjYKXH8fgO?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 7 && genre === 'hh'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/119c93MHjrDLJTApCVGpvx?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 8 && genre === 'hh'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4INDiWSKvqSKDEu7mh8HFz?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 9 && genre === 'hh'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3djNBlI7xOggg7pnsOLaNm?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 10 && genre === 'hh'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1k28sDTLOz942qa3wEtMQE?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <!-- END: Hip Hop songs -->

    <!-- START: Indie songs -->
    <div v-if="round === 1 && genre === 'alt'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/26hOm7dTtBi0TdpDGl141t?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 2 && genre === 'alt'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/64dLd6rVqDLtkXFYrEUHIU?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 3 && genre === 'alt'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4JvFNFTjEtZyEzh8w0YzHF?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 4 && genre === 'alt'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1z5oBUPtPK58v4slX1AlTx?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 5 && genre === 'alt'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7oeLY4eOWi6weLBqTWH0Rc?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 6 && genre === 'alt'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2dHT2samnOh9mGhCBlicpf?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 7 && genre === 'alt'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5hfu9r4JcERCBwimhrPIUN?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 8 && genre === 'alt'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4JFet0crxTPHFV2n1ZqZKV?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 9 && genre === 'alt'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6SYxCsqjVaOhEOIuKTfnJ0?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 10 && genre === 'alt'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7Hv1cgxfZs6pswYKvh0tDJ?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <!-- END: Indie songs -->

    <!-- START: Country songs -->
    <div v-if="round === 1 && genre === 'country'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7uMBc5uxQRZNFowjhxH9WL?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 2 && genre === 'country'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4z4nyCVJYm4qZrnkAYrgNm?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 3 && genre === 'country'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6MmCP3F50aAlcOhjGJk4r0?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 4 && genre === 'country'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0nJzekxLI0x35YtKg0FdZ2?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 5 && genre === 'country'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7l4tELVqU1wWKHDc3JlhwS?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 6 && genre === 'country'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3uR8oTCMvM1OuwAx4JjRis?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 7 && genre === 'country'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0p2xtffpsh4syNCVZQFgAR?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 8 && genre === 'country'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0tfRRlTnRELObqLAqFLz82?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 9 && genre === 'country'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/06JF3LCOBbguprTXrmepjg?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <div v-if="round === 10 && genre === 'country'">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3PutbYf6kjBkMN5KmWqjrc?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <!-- END: Country songs -->

    <!-- Return to Home Page -->
    <nuxt-link to="/">
      <button @click="resetScore(), setState(false)"
        class="duration-250 mx-auto w-full rounded bg-red-200 py-2 px-5 uppercase text-red-600 transition-[colors,transform] hover:scale-105 hover:bg-red-300 hover:bg-gradient-to-r hover:from-red-200 hover:to-red-400 hover:text-red-700 active:translate-y-1"
      >Exit</button><br />
    </nuxt-link>
    
    </div>
  </div>
</template>

