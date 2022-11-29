<script setup lang="ts">
const { difficulty } = useDifficulty();
const { genre } = useGenre();
const { score, time, round, addScore, addRound, resetScore, setState } = useScore();

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
      
      <!-- START: 80's songs -->
      <div class="flex flex-row justify-center" v-if="round === 1 && genre === '80'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2Nz6aF1umHh5Et6I5H581L?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 2 && genre === '80'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4y1LsJpmMti1PfRQV9AWWe?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 3 && genre === '80'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0ikz6tENMONtK6qGkOrU3c?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 4 && genre === '80'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5ubvP9oKmxLUVq506fgLhk?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 5 && genre === '80'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0GjEhVFGZW8afUYGChu3Rr?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 6 && genre === '80'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4bHsxqR3GMrXTxEPLuK5ue?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 7 && genre === '80'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/22sLuJYcvZOSoLLRYev1s5?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 8 && genre === '80'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2WfaOiMkCvy7F5fcp2zZ8L?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 9 && genre === '80'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4uLU6hMCjMI75M1A2tKUQC?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 10 && genre === '80'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6HvUtPLqkP0t6zd6YNdWby?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <!-- END: 80's songs -->

      <!-- START: Rock songs -->
      <div class="flex flex-row justify-center" v-if="round === 1 && genre === 'rnr'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3aoDEt6zSuYQ47gzarlaVo?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 2 && genre === 'rnr'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0hCB0YR03f6AmQaHbwWDe8?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 3 && genre === 'rnr'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2EqlS6tkEnglzr7tkKAAYD?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 4 && genre === 'rnr'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2zYzyRzz6pRmhPzyfMEC8s?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 5 && genre === 'rnr'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7vidktgNZFQylTgH1GEnMs?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 6 && genre === 'rnr'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7mN0AL5ZsYMxJOftvVclOi?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 7 && genre === 'rnr'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3qiyyUfYe7CRYLucrPmulD?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 8 && genre === 'rnr'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6FEKEO3y7QFcMwoGeR0GtU?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 9 && genre === 'rnr'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1KYzwQbt73OvhLAta0KQ4j?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 10 && genre === 'rnr'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/32kgOw8wejH7zUhtXCM8DH?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <!-- END: Rock songs -->

      <!-- START: Hip Hop songs -->
      <div class="flex flex-row justify-center" v-if="round === 1 && genre === 'hh'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2qOm7ukLyHUXWyR4ZWLwxA?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 2 && genre === 'hh'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5ByAIlEEnxYdvpnezg7HTX?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 3 && genre === 'hh'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7nYvUtkQMx1v80S2FH2s9J?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 4 && genre === 'hh'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0KQd3QY1Y8zC2rfO4ZBQRC?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 5 && genre === 'hh'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1dF5Y2dd7Wm4wZKvVjWBpr?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 6 && genre === 'hh'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/53oWwSxPuyH2cjYKXH8fgO?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 7 && genre === 'hh'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/119c93MHjrDLJTApCVGpvx?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 8 && genre === 'hh'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4INDiWSKvqSKDEu7mh8HFz?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 9 && genre === 'hh'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3djNBlI7xOggg7pnsOLaNm?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 10 && genre === 'hh'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1k28sDTLOz942qa3wEtMQE?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <!-- END: Hip Hop songs -->

      <!-- START: Indie songs -->
      <div class="flex flex-row justify-center" v-if="round === 1 && genre === 'alt'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/26hOm7dTtBi0TdpDGl141t?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 2 && genre === 'alt'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/64dLd6rVqDLtkXFYrEUHIU?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 3 && genre === 'alt'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4JvFNFTjEtZyEzh8w0YzHF?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 4 && genre === 'alt'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1z5oBUPtPK58v4slX1AlTx?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 5 && genre === 'alt'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7oeLY4eOWi6weLBqTWH0Rc?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 6 && genre === 'alt'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2dHT2samnOh9mGhCBlicpf?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 7 && genre === 'alt'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5hfu9r4JcERCBwimhrPIUN?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 8 && genre === 'alt'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4JFet0crxTPHFV2n1ZqZKV?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 9 && genre === 'alt'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6SYxCsqjVaOhEOIuKTfnJ0?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 10 && genre === 'alt'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7Hv1cgxfZs6pswYKvh0tDJ?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <!-- END: Indie songs -->

      <!-- START: Country songs -->
      <div class="flex flex-row justify-center" v-if="round === 1 && genre === 'country'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7uMBc5uxQRZNFowjhxH9WL?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 2 && genre === 'country'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4z4nyCVJYm4qZrnkAYrgNm?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 3 && genre === 'country'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6MmCP3F50aAlcOhjGJk4r0?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 4 && genre === 'country'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0nJzekxLI0x35YtKg0FdZ2?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 5 && genre === 'country'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7l4tELVqU1wWKHDc3JlhwS?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 6 && genre === 'country'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3uR8oTCMvM1OuwAx4JjRis?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 7 && genre === 'country'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0p2xtffpsh4syNCVZQFgAR?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 8 && genre === 'country'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0tfRRlTnRELObqLAqFLz82?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 9 && genre === 'country'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/06JF3LCOBbguprTXrmepjg?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-row justify-center" v-if="round === 10 && genre === 'country'">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3PutbYf6kjBkMN5KmWqjrc?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <!-- END: Country songs -->

      <!-- TODO: Make each option's name to the name of a song in the playlist -->
      <!--    Also make one of the options the correct option and add to the score if selected -->

      <!-- Buttons for the Novice Difficulty -->
      <div class="novice-buttons" v-if="difficulty === 'novice'">
      <nuxt-link to="/game">
        <button
          id="option1"
          @click="addRound(1)"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
        >
          Incorrect
        </button>
        <br />
      </nuxt-link>

      <nuxt-link to="/game">
        <button
          id="option2"
          @click="addScore(1), addRound(1)"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
        >
          Correct
        </button>
        <br />
      </nuxt-link>

      <nuxt-link to="/game">
        <button
          id="option3"
          @click="addRound(1)"
          class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
        >
          Incorrect
        </button>
        <br />
      </nuxt-link>

      <nuxt-link to="/game">
        <button
          id="option4"
          @click="addRound(1)"
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
          @click="addScore(1), addRound(1)"
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

