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

      <!-- START: Reggae Songs -->
      <!-- START: Round 1 -->
      <div v-if="round === 1 && genre === 'reggae'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/6eQmf8ETrSS10DjUDMTLeE?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/4paJ10JPNCyOaLtz2cY928?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/0wqEjeBH97VfKHborK6h0P?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/5jkxC8SIZJ4qqusxRPVS5s?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Down On The Rocks</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Badfish</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Wild Goose Chase</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Wanted Dread and Alive</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-reggae">
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
      <div v-if="round === 2 && genre === 'reggae'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/209SbubR5uKaVzj5SeN42w?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/7nPMsFa65oZMAUHNuTmTVP?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/1WS27lReDP65JMqZ5ygBPF?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/1yxQwMLJIn5oBTOLl38GLL?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              So Much Trouble In The World</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Act Of Affection</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Morning Ride</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Murderer</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-reggae">
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
      <div v-if="round === 3 && genre === 'reggae'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/7IBIZHonObtZG33pkVZZkg?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/1BkY0N8ChFk2mdLbAUu8ZK?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/7578oiL9J6tFHXEjfCXFAS?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/1pWy7HdCGYXjaGYwrPcD7I?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Big Ship</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Pass The Dutchie</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Wa-Do-Dem</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Steppin' Out</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-reggae">
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
      <div v-if="round === 4 && genre === 'reggae'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/6cy9iNLazUgF4WZR42Qtpv?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/66TbFEVUswHulatenFGicw?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/1ZplT1967Ppenci6vF2TlZ?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/3jSlARN861elnfSuveZx8X?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Meridian</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Island Feeling</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Something Wrong</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Siren</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-reggae">
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
      <div v-if="round === 5 && genre === 'reggae'">
        <!-- Random songs to choose from round 1 -->
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/5722IiSQ4ZqzpwhwFeCz2u?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/194CaJc8VDIpcTLX6Jzmg5?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/6nLASCk64Sz9iKDdBHY9Sz?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/5o9EeUKGt3I76bHhvFJwZ2?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Positive Vibration</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              I'm Not Crazy</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Chant a Psalm</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Sensi Party</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-reggae">
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
      <div v-if="round === 6 && genre === 'reggae'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/0AgknzkjpcNPPqXxt3hVxd?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/2cYAd7BJIOj4Y0pU5Pyesc?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/79SsdKQnzDxQqGfUvJFGkw?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/0OBpi0UROMJXLyU0Zky3KS?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              2am</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Who The Cap Fit</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Bodyguard</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Shark Attack</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-reggae">
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
      <div v-if="round === 7 && genre === 'reggae'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/1p4NOXfV2uuIScKhqXv0kn?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/4rjaK8Ifn2imrt6uyidOXS?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/3E3f3Po59cqs9gS3vexHjB?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/7IwU9ndSNPbGGb0NZsJRBQ?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Rule This Land</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Westbound Train</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Outta Control</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Sunshine and Rain</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-reggae">
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
      <div v-if="round === 8 && genre === 'reggae'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/2Ovunu5CefrYY6Ovk2lqUd?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/7nnxlucFOovCdayN8JcrVZ?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/7ixiCZEHWHc8FxaQXQh2P4?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/0GGPUysb8GpCG76dQH63te?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Blues Dance Raid</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Put It On</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Bam Bam</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              The International Herb</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-reggae">
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
      <div v-if="round === 9 && genre === 'reggae'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/4Jr6bqJapv428kf9X8NDjh?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/0eeFlNmdsltwZNeRweZusW?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/3bl8T5xzo3Rq5brncCI0WV?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/6UiM0sSEK9gU7ZjIYRPOCW?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Drift Away</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Careful</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Ballz Deep</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-reggae">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Satisfied</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-reggae">
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
      <div v-if="round === 10 && genre === 'reggae'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/1L1EdM5IDXcrHSE4s7rT6B?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/1ATZfYmZOcm24vl5oQtPdC?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/5iynCtpEY7mx4ou54tHBPH?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/22AbXxQbMdVqEz7xJjhccG?utm_source=generator&theme=0"
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
              Grab Education</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/scores">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Roots, Rock, Reggae</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/scores">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Ganja Smuggling</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/scores">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Welcome To Jamrock</button
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
                checkAnswer(userInput, genre), addRound(1), (userInput = ''), setSong()
              "
              class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-10 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 mb-5"
            >
              Enter</button
            ><br />
          </nuxt-link>
        </div>
      </div>
      <!-- END: Round 10 -->
      <!-- END: Reggae Songs -->

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
