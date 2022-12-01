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
    <h3 v-if="difficulty === 'insane'" class="mx-auto text-5xl text-purple-500 w-max">Score: {{ showScore() }}  Round: {{ showRound() }}</h3>
    <!-- If the mode is lightning, show their current accumulated time -->
    <h3 v-if="difficulty === 'lightning'" class="mx-auto text-5xl text-blue-500 w-max">Time: {{ showScore() }} Round: {{ showRound() }}</h3>
  
    <!-- Cover the text of the iframe with a box of absolute position and the same color as the iframe -->
    <div class="absolute mx-1/2 top-[4.3em] w-[325px] h-[72px] bg-[#282828] rounded-md">
        <p class="relative text-center text-white text-[32px] py-3 px-auto">-- Guess the Song --</p>
        <div class="relative w-8 h-8 bg-[#282828] rounded-md left-[6.5em] bottom-[1.2em]"></div>
    </div>

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
        class="duration-250 mx-auto w-full rounded bg-red-200 py-2 px-5 text-[32px] uppercase text-red-600 transition-[colors,transform] hover:scale-105 hover:bg-red-300 hover:bg-gradient-to-r hover:from-red-200 hover:to-red-400 hover:text-red-700 active:translate-y-1"
      >Exit</button><br />
    </nuxt-link>
    
    </div>
  </div>
</template>

