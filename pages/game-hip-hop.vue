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

      <!-- START: Hip Hop songs -->
      <!-- START: Round 1 -->
      <div v-if="round === 1 && genre === 'hiphop'">
        <!-- Random songs to choose from round 1 -->
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/2qOm7ukLyHUXWyR4ZWLwxA?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/4dbZObCjUs95HtmEHfKbnU?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/4G3dZN9o3o2X4VKwt4CLts?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/2vfvGlqCB7oertO5VLE0sz?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              It Was A Good Day</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Feel Me Flow</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Passin' Me By</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              ATLiens</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-hip-hop">
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
      <div v-if="round === 2 && genre === 'hiphop'">
        <!-- Random songs to choose from round 1 -->
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/18Mh3v6rBCCpcNYzyaA2RN?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/0IVAlb0cFCH1cQ974iR1TU?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/4EfBENPBy1GvUWLO9YAp3F?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/3Ti0GdlrotgwsAVBBugv0I?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Sometimes I Rhyme Slow</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Ms. Fat Booty</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Hits from the Bong</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Can I Kick It</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-hip-hop">
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
      <div v-if="round === 3 && genre === 'hiphop'">
        <!-- Random songs to choose from round 1 -->
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/7nYvUtkQMx1v80S2FH2s9J?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/3GKL13lkM5nRc4zC1lIOrR?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/2MAaiV0bbeq4FpSwPe2rR8?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/5PbFD3AIyunz5HxocduA9e?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Regulate</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Still Not A Player</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Find a Way</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Flava in Ya Ear</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-hip-hop">
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
      <div v-if="round === 4 && genre === 'hiphop'">
        <!-- Random songs to choose from round 1 -->
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/0KQd3QY1Y8zC2rfO4ZBQRC?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/4HfxDJ0uLHTLe0fZrx0MbQ?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/2S2x5N5VJNn7vqYukvoFFC?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/5ByAIlEEnxYdvpnezg7HTX?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Mistadobalina</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Check the Rhime</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              How Do U Want It</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Juicy</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-hip-hop">
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
      <div v-if="round === 5 && genre === 'hiphop'">
        <!-- Random songs to choose from round 1 -->
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/5K5dQsYdSdo2LKdepxbYAd?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/4voEoczU7Ijborps9XF1n3?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/1dF5Y2dd7Wm4wZKvVjWBpr?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/4Qxv2L4JICAWLFrBV6QeH8?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Gettin' It</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              I Get Around</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              1st of Tha Month</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Around The Way Girl</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-hip-hop">
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
      <div v-if="round === 6 && genre === 'hiphop'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/53oWwSxPuyH2cjYKXH8fgO?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/0uEp9E98JB5awlA084uaIg?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/1SyQ6t9RdRBK0QUCS6a797?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/7KwZNVEaqikRSBSpyhXK2j?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Get Money</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Doo Wop (That Thing)</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Hip Hop Hooray</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Hypnotize</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-hip-hop">
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
      <div v-if="round === 7 && genre === 'hiphop'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/119c93MHjrDLJTApCVGpvx?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/25pl7kV4OxafIc9wPAggYf?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/3NGT0Td7H4Is1qrlDQJxma?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/5KapB9KJnRsZrprzIAXycW?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              C.R.E.A.M</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              So What'Cha Want</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Check Yo Self</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Uknowhowwedu</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-hip-hop">
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
      <div v-if="round === 8 && genre === 'hiphop'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/4INDiWSKvqSKDEu7mh8HFz?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/4u7hiFNXUeTG3A4dqQrkcd?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/19CybGYwC2L1aDiS2P6wQv?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/7vcepKD1pjulQvPOkiQmUe?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              Mo Money Mo Problems</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Resurrection</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Slow Down</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              DWYCK</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-hip-hop">
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
      <div v-if="round === 9 && genre === 'hiphop'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/3djNBlI7xOggg7pnsOLaNm?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/7jIujRjK5JKNrMCcAvYUTN?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/5KSJ9k1FYjFLnIRlJT2wF8?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/5fpizYGbi5IQoEraj6FP0R?utm_source=generator&theme=0"
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
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(1), setSong()"
              class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 mb-5"
            >
              California Love</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Keep Their Heads Ringin'</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Tha Crossroads</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/game-hip-hop">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              Intergalactic</button
            ><br />
          </nuxt-link>
        </div>
        <!-- Text Box for the Insane and Lightning Modes -->
        <div v-if="difficulty === 'insane' || difficulty === 'lightning'">
          <input
            v-model="userInput"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 text-[32px] uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 border-2 border-blue-600 mb-5"
          />
          <nuxt-link to="/game-hip-hop">
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
      <div v-if="round === 10 && genre === 'hiphop'">
        <div v-if="songG === 1">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/1k28sDTLOz942qa3wEtMQE?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/2KjXJgUL1D9iRffPvwnTN9?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/4zd8HAnbCyRin2aVQulHp4?utm_source=generator&theme=0"
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
            src="https://open.spotify.com/embed/track/3Mq87G4IovZzdVZWWDox9C?utm_source=generator&theme=0"
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
              O.P.P</button
            ><br />
          </nuxt-link>
          <!-- Option 2 -->
          <nuxt-link to="/scores">
            <button
              @click="addRound(1), setAnswer(2), setSong()"
              class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 text-[32px] uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 mb-5"
            >
              Watcha Gon Do?</button
            ><br />
          </nuxt-link>
          <!-- Option 3 -->
          <nuxt-link to="/scores">
            <button
              @click="addRound(1), setAnswer(3), setSong()"
              class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 text-[32px] uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1 mb-5"
            >
              Hand In Hand</button
            ><br />
          </nuxt-link>
          <!-- Option 4 -->
          <nuxt-link to="/scores">
            <button
              @click="addRound(1), setAnswer(4), setSong()"
              class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 text-[32px] uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1 mb-5"
            >
              24 Deep</button
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
      <!-- END: Hip Hop songs -->

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
