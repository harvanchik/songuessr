<script setup lang="ts">
const { setGenre } = useGenre();
const { score, time, resetScore } = useScore();
useHead({
  // set tab title and include current difficulty
  titleTemplate: () => {
    return "Time: " + time.value + " Score: " + score.value + " | Songuessr";
  },
});
</script>


<template>
  <div class="pt-20 pb-20 bg-red-100">
    <h1 class="mx-auto text-6xl font-semibold text-red-500 w-max">Songuessr</h1>
    <div class="flex flex-col max-w-md mx-auto space-y-5 text-5xl">
      <h3 class="mx-auto mt-3 text-5xl text-purple-500 w-max">Genres</h3>
      <br />

      <!-- 70's Option -->
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/playlist/00KjsgI9t715OJFEUFziGJ"
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      >
      </iframe>
      <nuxt-link to="/game">
      <button
        id="70"
        @click="setGenre('70'), resetScore()"
        class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:tranpurple-y-1"
      >
        70's Pop
      </button>
      <br />
      </nuxt-link>

      <!-- 80's Option -->
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXb57FjYWz00c"
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <nuxt-link to="/game">
      <button
        id="80"
        @click="setGenre('80'), resetScore()"
        class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:tranpurple-y-1"
      >
        80's Pop
      </button>
      <br />
      </nuxt-link>

      <!-- 90's Option -->
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1EQn2GRFTFMl2A?utm_source=generator"
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <nuxt-link to="/game">
      <button
        id="90"
        @click="setGenre('90'), resetScore()"
        class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:tranpurple-y-1"
      >
        90's Pop
      </button>
      <br />
      </nuxt-link>

      <!-- 00's Option -->
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4o1oenSJRJd"
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <nuxt-link to="/game">
      <button
        id="00"
        @click="setGenre('00'), resetScore()"
        class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:tranpurple-y-1"
      >
        00's Pop
      </button>
      <br />
      </nuxt-link>

      <!-- Country Option -->
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWYnwbYQ5HnZU"
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <nuxt-link to="/game">
      <button
        id="country"
        @click="setGenre('country'), resetScore()"
        class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:tranpurple-y-1"
      >
        Country
      </button>
      <br />
      </nuxt-link>

      <!-- Rock and Roll Option -->
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcF6B6QPhFDv"
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <nuxt-link to="/game">
      <button
        id="rnr"
        @click="setGenre('rnr'), resetScore()"
        class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:tranpurple-y-1"
      >
        Rock and Roll
      </button>
      <br />
      </nuxt-link>

      <!-- Hip Hop Option -->
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX186v583rmzp"
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <nuxt-link to="/game">
      <button
        id="hh"
        @click="setGenre('hh'), resetScore()"
        class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:tranpurple-y-1"
      >
        Hip Hop
      </button>
      <br />
      </nuxt-link>

      <!-- Alternative Option -->
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX2Nc3B70tvx0"
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <nuxt-link to="/game">
      <button
        id="alt"
        @click="setGenre('alt'), resetScore()"
        class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:tranpurple-y-1"
      >
        Alternative / Indie
      </button>
      <br /><br />
      </nuxt-link>

      <!-- Return to the home page -->
      <nuxt-link to="/info">
        <button
          class="duration-250 mx-auto w-full rounded bg-red-200 py-2 px-5 uppercase text-red-600 transition-[colors,transform] hover:scale-105 hover:bg-red-300 hover:bg-gradient-to-r hover:from-red-200 hover:to-red-400 hover:text-red-700 active:tranpurple-y-1"
        >
          Back
        </button>
      </nuxt-link>
      <br />
      
    </div>
  </div>
</template>

