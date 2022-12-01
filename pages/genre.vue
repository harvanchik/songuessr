<script setup lang="ts">
const { setGenre } = useGenre();
const { score, time, resetScore, setState, setSong } = useScore();
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

      <!-- Rock and Roll Option -->
      <iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/playlist/37i9dQZF1EIcVkEtbzdTRx" 
        width="100%" 
        height="80" 
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      ></iframe>
      <nuxt-link to="/game-rock">
      <button
        id="rock"
        @click="setGenre('rock'), resetScore(), setState(true), setSong()"
        class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:tranpurple-y-1"
      >
        Classic Rock
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
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <nuxt-link to="/game-80s">
      <button
        id="80"
        @click="setGenre('80'), resetScore(), setState(true), setSong()"
        class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:tranpurple-y-1"
      >
        80's Hits
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
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <nuxt-link to="/game-hip-hop">
      <button
        id="hiphop"
        @click="setGenre('hiphop'), resetScore(), setState(true), setSong()"
        class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:tranpurple-y-1"
      >
        Hip Hop
      </button>
      <br />
      </nuxt-link>

      <!-- Reggae Option -->
      <iframe 
        style="border-radius:12px" 
        src="https://open.spotify.com/embed/playlist/37i9dQZF1EQpjs4F0vUZ1x?utm_source=generator" 
        width="100%" 
        height="80" 
        frameBorder="0" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      ></iframe>
      <nuxt-link to="/game-reggae">
      <button
        id="alt"
        @click="setGenre('reggae'), resetScore(), setState(true), setSong()"
        class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:tranpurple-y-1"
      >
        Reggae
      </button>
      </nuxt-link>

      <!-- Indie Option -->
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX2Nc3B70tvx0"
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <nuxt-link to="/game-indie">
      <button
        id="alt"
        @click="setGenre('indie'), resetScore(), setState(true), setSong()"
        class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:tranpurple-y-1"
      >
        Indie
      </button>
      </nuxt-link>
      
      <!-- Return to the info page -->
      <nuxt-link to="/info">
        <button
          class="duration-250 mx-auto w-full rounded bg-red-200 py-2 px-5 my-10 uppercase text-red-600 transition-[colors,transform] hover:scale-105 hover:bg-red-300 hover:bg-gradient-to-r hover:from-red-200 hover:to-red-400 hover:text-red-700 active:tranpurple-y-1"
        >
          Back
        </button>
      </nuxt-link>
      <br />
      
    </div>
  </div>
</template>

