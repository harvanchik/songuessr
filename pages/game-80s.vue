<script setup lang="ts">
const { difficulty } = useDifficulty();
const { genre } = useGenre();
const {
  score,
  time,
  round,
  songG,
  stopTimer,
  addRound,
  resetScore,
  setAnswer,
  setSong,
  checkAnswer,
} = useScore();
// get the score or time to show on the page
const showScore = () => {
  if (difficulty.value === "novice" || difficulty.value === "insane") {
    return score.value;
  } else {
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
// define prop for userInput
let userInput = ref("");
</script>

<template>
  <div class="flex flex-col min-h-screen pt-20 pb-20 bg-red-100">
    <h1 class="mx-auto text-6xl font-semibold text-red-500 w-max">Songuessr</h1>
    <div class="flex flex-col max-w-sm mx-auto mt-3 space-y-5 text-5xl">
      <!-- If the mode is novice, just show the score out of 10 -->
      <h3
        v-if="difficulty === 'novice'"
        class="mx-auto text-5xl text-green-500 w-max"
      >
        Score: {{ showScore() }} Round: {{ showRound() }}
      </h3>
      <!-- If the mode is insane, show their current score -->
      <h3
        v-if="difficulty === 'insane'"
        class="mx-auto text-5xl text-purple-500 w-max"
      >
        Score: {{ showScore() }} Round: {{ showRound() }}
      </h3>
      <!-- If the mode is lightning, show their current accumulated time -->
      <h3
        v-if="difficulty === 'lightning'"
        class="mx-auto text-5xl text-blue-500 w-max"
      >
        Time: {{ showScore() }} Round: {{ showRound() }}
      </h3>

      <!-- Cover the text of the iframe with a box of absolute position and the same color as the iframe -->
      <div
        class="absolute top-[4.3em] w-[325px] h-[72.5px] bg-[#282828] rounded-md"
      >
        <p class="relative text-center text-white text-[32px] py-3 px-auto">
          --- Play Button ---
        </p>
        <div
          class="relative w-[50px] h-8 bg-[#282828] rounded-md left-[6.7em] bottom-[1.17em]"
        ></div>
      </div>

      <!-- START: 80's songs -->
      <!-- START: Round 1 -->
      <div v-if="round === 1 && genre === '80'">
        <!-- Random songs to choose from round 1 -->
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/2Nz6aF1umHh5Et6I5H581L?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 2">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/4y1LsJpmMti1PfRQV9AWWe?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 3">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/0ikz6tENMONtK6qGkOrU3c?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 4">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/5ubvP9oKmxLUVq506fgLhk?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <br />
        <!-- Buttons for the Novice Difficulty -->
        <!-- Option 1 -->
        <div v-if="difficulty === 'novice'">
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Hooked on a Feeling</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Girls Just Want to Have Fun</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Wake Me Up Before You Go-Go</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Stayin Alive</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-80s">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = ''), setSong()
              "
              class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
            >
              Enter</button
            ><br />
          </nuxt-link>
        </div>
      </div>
      <!-- END: Round 1 -->

      <!-- START: Round 2 -->
      <div v-if="round === 2 && genre === '80'">
        <!-- Random songs to choose from round 2 -->
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/0GjEhVFGZW8afUYGChu3Rr?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 2">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/4bHsxqR3GMrXTxEPLuK5ue?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 3">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/22sLuJYcvZOSoLLRYev1s5?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 4">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/2WfaOiMkCvy7F5fcp2zZ8L?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <br />
        <!-- Buttons for the Novice Difficulty -->
        <!-- Option 1 -->
        <div class="novice-buttons" v-if="difficulty === 'novice'">
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Dancing Queen</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Don't Stop Believing</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Material Girl</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Take On Me</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div
          class="expert-buttons"
          v-if="difficulty === 'insane' || difficulty === 'lightning'"
        >
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-80s">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = ''), setSong()
              "
              class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
            >
              Enter</button
            ><br />
          </nuxt-link>
        </div>
      </div>
      <!-- END: Round 2 -->

      <!-- START: Round 3 -->
      <div v-if="round === 3 && genre === '80'">
        <!-- Random songs to choose from round 3 -->
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/4uLU6hMCjMI75M1A2tKUQC?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 2">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/6HvUtPLqkP0t6zd6YNdWby?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 3">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/2374M0fQpWi3dLnB54qaLX?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 4">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/4RvWPyQ5RL0ao9LPZeSouE?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <br />
        <!-- Buttons for the Novice Difficulty -->
        <!-- Option 1 -->
        <div class="novice-buttons" v-if="difficulty === 'novice'">
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Rick Roll</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              The Look Of Love, Pt.1</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Africa</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Everybody Wants to Rule the World</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div
          class="expert-buttons"
          v-if="difficulty === 'insane' || difficulty === 'lightning'"
        >
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-80s">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = ''), setSong()
              "
              class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
            >
              Enter</button
            ><br />
          </nuxt-link>
        </div>
      </div>
      <!-- END: Round 3 -->

      <!-- START: Round 4 -->
      <div v-if="round === 4 && genre === '80'">
        <!-- Random songs to choose from round 4 -->
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/6W2VbtvMrDXm5vYeB7amkO?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 2">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/46RVKt5Edm1zl0rXhPJZxz?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 3">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/0cGG2EouYCEEC3xfa0tDFV?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 4">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/0GONea6G2XdnHWjNZd6zt3?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <br />
        <!-- Buttons for the Novice Difficulty -->
        <!-- Option 1 -->
        <div class="novice-buttons" v-if="difficulty === 'novice'">
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Footloose</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Down Under</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Tainted Love</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Summer of '69</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div
          class="expert-buttons"
          v-if="difficulty === 'insane' || difficulty === 'lightning'"
        >
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-80s">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = ''), setSong()
              "
              class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
            >
              Enter</button
            ><br />
          </nuxt-link>
        </div>
      </div>
      <!-- END: Round 4 -->

      <!-- START: Round 5 -->
      <div v-if="round === 5 && genre === '80'">
        <!-- Random songs to choose from round 5 -->
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/1jDJFeK9x3OZboIAHsY9k2?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 2">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/2tUBqZG2AbRi7Q0BIrVrEj?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 3">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/3fH4KjXFYMmljxrcGrbPj9?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 4">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/11IzgLRXV7Cgek3tEgGgjw?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <br />
        <!-- Buttons for the Novice Difficulty -->
        <!-- Option 1 -->
        <div class="novice-buttons" v-if="difficulty === 'novice'">
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              I'm Still Standing</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              I Wanna Dance with Somebody</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Don't You (Forget About Me)</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Under Pressure</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div
          class="expert-buttons"
          v-if="difficulty === 'insane' || difficulty === 'lightning'"
        >
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-80s">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = ''), setSong()
              "
              class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
            >
              Enter</button
            ><br />
          </nuxt-link>
        </div>
      </div>
      <!-- END: Round 5 -->

      <!-- START: Round 6 -->
      <div v-if="round === 6 && genre === '80'">
        <!-- Random songs to choose from round 6 -->
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/4o6BgsqLIBViaGVbx5rbRk?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 2">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/6OnfBiiSc9RGKiBKKtZXgQ?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 3">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/1OOtq8tRnDM8kG2gqUPjAj?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 4">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/0B5kY9i9bmP7554oU4jRoO?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <br />
        <!-- Buttons for the Novice Difficulty -->
        <!-- Option 1 -->
        <div class="novice-buttons" v-if="difficulty === 'novice'">
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              You Make My Dreams (Come True)</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              We Built This City</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Beat It</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Funkytown</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div
          class="expert-buttons"
          v-if="difficulty === 'insane' || difficulty === 'lightning'"
        >
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-80s">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = ''), setSong()
              "
              class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
            >
              Enter</button
            ><br />
          </nuxt-link>
        </div>
      </div>
      <!-- END: Round 6 -->

      <!-- START: Round 7 -->
      <div v-if="round === 7 && genre === '80'">
        <!-- Random songs to choose from round 7 -->
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/6hHc7Pks7wtBIW8Z6A0iFq?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 2">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/3L7RtEcu1Hw3OXrpnthngx?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 3">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/1mCsF9Tw4AkIZOjvZbZZdT?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 4">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/7N3PAbqfTjSEU1edb2tY8j?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <br />
        <!-- Buttons for the Novice Difficulty -->
        <!-- Option 1 -->
        <div class="novice-buttons" v-if="difficulty === 'novice'">
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Blue Monday</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Don't You Want Me</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Break My Stride</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Jump</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div
          class="expert-buttons"
          v-if="difficulty === 'insane' || difficulty === 'lightning'"
        >
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-80s">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = ''), setSong()
              "
              class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
            >
              Enter</button
            ><br />
          </nuxt-link>
        </div>
      </div>
      <!-- END: Round 7 -->

      <!-- START: Round 8 -->
      <div v-if="round === 8 && genre === '80'">
        <!-- Random songs to choose from round 8 -->
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/4uOKFydzAejjSFqYbv1XPt?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 2">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/3EvpaRZkKWxsgDIO2zMH7g?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 3">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/254bXAqt3zP6P50BdQvEsq?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 4">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/423o3ZHIaBtGXyhF1uH41a?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <br />
        <!-- Buttons for the Novice Difficulty -->
        <!-- Option 1 -->
        <div class="novice-buttons" v-if="difficulty === 'novice'">
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Red Red Wine</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Heaven Is A Place On Earth</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Everywhere</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Walk Of Life</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div
          class="expert-buttons"
          v-if="difficulty === 'insane' || difficulty === 'lightning'"
        >
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-80s">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = ''), setSong()
              "
              class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
            >
              Enter</button
            ><br />
          </nuxt-link>
        </div>
      </div>
      <!-- END: Round 8 -->

      <!-- START: Round 9 -->
      <div v-if="round === 9 && genre === '80'">
        <!-- Random songs to choose from round 9 -->
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/2olVm1lHicpveMAo4AUDRB?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 2">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/6jJCk7oHNwyowOUaF3gXEu?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 3">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/39lSeqnyjZJejRuaREfyLL?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 4">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/5zA8vzDGqPl2AzZkEYQGKh?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <br />
        <!-- Buttons for the Novice Difficulty -->
        <!-- Option 1 -->
        <div class="novice-buttons" v-if="difficulty === 'novice'">
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              The Power Of Love</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Tell It to My Heart</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Hungry Like the Wolf</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-80s">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Uptown Girl</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div
          class="expert-buttons"
          v-if="difficulty === 'insane' || difficulty === 'lightning'"
        >
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-80s">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = ''), setSong()
              "
              class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
            >
              Enter</button
            ><br />
          </nuxt-link>
        </div>
      </div>
      <!-- END: Round 9 -->

      <!-- START: Round 10 -->
      <div v-if="round === 10 && genre === '80'">
        <!-- Random songs to choose from round 10 -->
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/34x6hEJgGAOQvmlMql5Ige?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 2">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/2KH16WveTQWT6KOG9Rg6e2?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 3">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/3MrWxJaD2AT0W9DjWF64Vm?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div v-if="songG === 4">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/0xuXRQJfxmdP6gvfDe2Z4L?utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <br />
        <!-- Buttons for the Novice Difficulty -->
        <!-- Option 1 -->
        <div class="novice-buttons" v-if="difficulty === 'novice'">
          <nuxt-link to="/scores">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Danger Zone</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/scores">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Eye of the Tiger</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/scores">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Come On Eileen</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/scores">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Just Can't Get Enough</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div
          class="expert-buttons"
          v-if="difficulty === 'insane' || difficulty === 'lightning'"
        >
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/scores">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = ''), stopTimer(), setSong()
              "
              class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
            >
              Enter</button
            ><br />
          </nuxt-link>
        </div>
      </div>
      <!-- END: Round 10 -->
      <!-- END: 80's songs -->

      <!-- Return to Home Page -->
      <nuxt-link to="/">
        <button
          @click="resetScore(), stopTimer()"
          class="duration-250 mx-auto w-full rounded bg-red-200 py-2 px-5 text-[32px] uppercase text-red-600 transition-[colors,transform] hover:scale-105 hover:bg-red-300 hover:bg-gradient-to-r hover:from-red-200 hover:to-red-400 hover:text-red-700 active:translate-y-1"
        >
          Exit</button
        ><br />
      </nuxt-link>
    </div>
  </div>
</template>
