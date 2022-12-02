<script setup lang="ts">
const { difficulty } = useDifficulty();
const { genre } = useGenre();
const {
  score,
  time,
  round,
  songG,
  addScore,
  addRound,
  resetScore,
  resetSong,
  setState,
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

      <!-- START: indie Songs -->
      <!-- START: Round 1 -->
      <div v-if="round === 1 && genre === 'indie'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/5g5XvfePSypMK6eiVL6BI7?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/3idyjPuEkDzVSFrA9A8Nh5?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/26hOm7dTtBi0TdpDGl141t?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/5gJw9DpcnYywIIVGYSb4Y5?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Pistol</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              One Night with The Valet</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Die For You</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              God Turn Me Into a Flower</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-indie">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = '')
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
      <div v-if="round === 2 && genre === 'indie'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/6osru1Fx1n50mRD8QWI9m1?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/1fDFHXcykq4iw8Gg7s5hG9?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/64dLd6rVqDLtkXFYrEUHIU?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/3EwTIu5qka2l5ZekB0b6QC?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Today</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              About You</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              New Gold</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Angelica</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-indie">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = '')
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
      <div v-if="round === 3 && genre === 'indie'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/0hFxiaVUZTEpsAdrV595Xn?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/5CM4UuQ9Gnd6K2YyKGPMoK?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/19AXHJvTBkh8n9aRrlRqv6?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/73sJYNNftZeqUxHu5l4w1z?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Panic Attacks</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Bad Habit</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Slow Ready</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Future Lover</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-indie">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = '')
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
      <div v-if="round === 4 && genre === 'indie'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/36huM0UOR9A17TYAape2Xg?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/35PUhhwZL4HhmuqgOeFcfg?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/0O5q2h0kfQD6PixL7rCHuL?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/076Ang4pgcByLvOEzNpW94?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Diarabi</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Shotgun</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              After The Earthquake</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Some Of Us Are Brave</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-indie">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = '')
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
      <div v-if="round === 5 && genre === 'indie'">
        <!-- Random songs to choose from round 1 -->
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/2AD9ksH0C7hJrSXZMllbgh?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/7dW6aiHZG0A8xApW0Xg40G?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/3I43lL4uapeIE9GhppAv5B?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/04Ol1Crx7wXvJUR5d72SlG?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Chameleons</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Lonely One</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              WYD</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Pictures of You</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-indie">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = '')
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
      <div v-if="round === 6 && genre === 'indie'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/6lqdNLE6pMZ3eFX8TlY1XS?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/2JXsy8qz9PzqDwX7ozd4Go?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/2h1s9bSv7BU4vFwhWrdwSN?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/22MPIMPsoi0vd46wsbpzfE?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Chem Bath</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Eggshells</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Rose Pink Cadillac</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Jesus Freak Lighter</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-indie">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = '')
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
      <div v-if="round === 7 && genre === 'indie'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/3nv43IARMsDxgfHHpEfeCQ?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/5LInOGDHqrgetnMlnvaDNq?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/5jqIjKNwbiSPgjyfEzv8bH?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/5jyj2XKWILHQxDoz59ddCT?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Happy Ending</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Everything Eventually Ends</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Freedom</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Billie Toppy</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-indie">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = '')
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
      <div v-if="round === 8 && genre === 'indie'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/05uhED0miR9OJYPalPi7tx?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/1V888fh2JLVzMElr1pEz6Z?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/1iXtTFvDXtL4sr5GOc2tXx?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/7Ep8BuyZZGrbDP3alg2jPX?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Wild</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Motels</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Paradise</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Unfold</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-indie">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = '')
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
      <div v-if="round === 9 && genre === 'indie'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/4Og0uXMYqouN7xOQ7u8jiW?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/6OtoDwuQaH8SfZobDMsWD5?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/5MGuTPMrvu15anEItc8GNg?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/0Bcpp4FkZWscayqYaGVRxW?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Get Inspired</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              TVI</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Smalltown Stardust</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-indie">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Words and Guitar</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-indie">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = '')
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
      <div v-if="round === 10 && genre === 'indie'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/0JX23XA8E7aN1Chj32kgVn?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/5IssEtH38Bs8vpGOoVnLlh?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/1EQFnxBTDsUJhnFzEYOuLc?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/2cS0uhk7nfaMmF5In6wzIV?utm_source=generator&theme=0"
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
          <nuxt-link to="/scores">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Spitting Off the Edge of the World</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/scores">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Self Portrait</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/scores">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Immunity</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/scores">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Hard Drive Gold</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/scores">
            <button
              @click="
                checkAnswer(userInput, genre), addRound(1), (userInput = '')
              "
              class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
            >
              Enter</button
            ><br />
          </nuxt-link>
        </div>
      </div>
      <!-- END: Round 10 -->
      <!-- END: indie Songs -->

      <!-- Return to Home Page -->
      <nuxt-link to="/">
        <button
          @click="resetScore(), setState(false)"
          class="duration-250 mx-auto w-full rounded bg-red-200 py-2 px-5 text-[32px] uppercase text-red-600 transition-[colors,transform] hover:scale-105 hover:bg-red-300 hover:bg-gradient-to-r hover:from-red-200 hover:to-red-400 hover:text-red-700 active:translate-y-1"
        >
          Exit</button
        ><br />
      </nuxt-link>
    </div>
  </div>
</template>
