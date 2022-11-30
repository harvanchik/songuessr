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
    <h3 v-if="difficulty === 'insane'" class="mx-auto text-5xl text-purple-500 w-max">Score: {{ showScore() }} Round: {{ showRound() }}</h3>
    <!-- If the mode is lightning, show their current accumulated time -->
    <h3 v-if="difficulty === 'lightning'" class="mx-auto text-5xl text-blue-500 w-max">Time: {{ showScore() }} Round: {{ showRound() }}</h3>
  
    <!-- Cover the text of the iframe with a box of absolute position and the same color as the iframe -->
    <div class="absolute mx-1/2 top-[4.3em] w-[325px] h-[72px] bg-[#282828] rounded-md">
        <p class="relative text-center text-white text-[32px] py-3 px-auto">-- Guess the Song --</p>
        <div class="relative w-8 h-8 bg-[#282828] rounded-md left-[6.5em] bottom-[1.2em]"></div>
    </div>

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

    <!-- Return to Home Page -->
    <nuxt-link to="/">
      <button @click="resetScore(), setState(false)"
        class="duration-250 mx-auto w-full rounded bg-red-200 py-2 px-5 text-[32px] uppercase text-red-600 transition-[colors,transform] hover:scale-105 hover:bg-red-300 hover:bg-gradient-to-r hover:from-red-200 hover:to-red-400 hover:text-red-700 active:translate-y-1"
      >Exit</button><br />
    </nuxt-link>
    
    </div>
  </div>
</template>

