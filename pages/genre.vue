<script>
    export default {
      async asyncData ({ store }) {
        return {
          var1: store.state.var1,
          var2: store.state.var2
        }
      }
    }
</script>

<template>
  <div class="pt-20 pb-20 bg-red-100">
    <h1 class="mx-auto text-6xl font-semibold text-red-500 w-max">Songuessr</h1>
    <div class="flex flex-col max-w-md mx-auto mt-20 space-y-5 text-5xl">
      <h3 class="mx-auto text-5xl text-black w-max">Genres</h3>
      <br />
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
      <button
        id="70"
        var2="70"
        class="duration-250 mx-auto w-full rounded bg-slate-200 py-2 px-5 uppercase text-slate-600 transition-[colors,transform] hover:scale-105 hover:bg-slate-300 hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-400 hover:text-slate-700 active:translate-y-1"
      >
        70's Pop
      </button>
      <br />
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
      <button
        id="80"
        var2="80"
        class="duration-250 mx-auto w-full rounded bg-slate-200 py-2 px-5 uppercase text-slate-600 transition-[colors,transform] hover:scale-105 hover:bg-slate-300 hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-400 hover:text-slate-700 active:translate-y-1"
      >
        80's Pop
      </button>
      <br />
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
      <button
        id="90"
        var2="90"
        class="duration-250 mx-auto w-full rounded bg-slate-200 py-2 px-5 uppercase text-slate-600 transition-[colors,transform] hover:scale-105 hover:bg-slate-300 hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-400 hover:text-slate-700 active:translate-y-1"
      >
        90's Pop
      </button>
      <br />
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
      <button
        id="00"
        var2="00"
        class="duration-250 mx-auto w-full rounded bg-slate-200 py-2 px-5 uppercase text-slate-600 transition-[colors,transform] hover:scale-105 hover:bg-slate-300 hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-400 hover:text-slate-700 active:translate-y-1"
      >
        00's Pop
      </button>
      <br />
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
      <button
        id="country"
        var2="country"
        class="duration-250 mx-auto w-full rounded bg-slate-200 py-2 px-5 uppercase text-slate-600 transition-[colors,transform] hover:scale-105 hover:bg-slate-300 hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-400 hover:text-slate-700 active:translate-y-1"
      >
        Country
      </button>
      <br />
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
      <button
        id="rnr"
        var2="rnr"
        class="duration-250 mx-auto w-full rounded bg-slate-200 py-2 px-5 uppercase text-slate-600 transition-[colors,transform] hover:scale-105 hover:bg-slate-300 hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-400 hover:text-slate-700 active:translate-y-1"
      >
        Rock and Roll
      </button>
      <br />
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
      <button
        id="hh"
        var2="hh"
        class="duration-250 mx-auto w-full rounded bg-slate-200 py-2 px-5 uppercase text-slate-600 transition-[colors,transform] hover:scale-105 hover:bg-slate-300 hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-400 hover:text-slate-700 active:translate-y-1"
      >
        Hip Hop
      </button>
      <br />
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX2Nc3B70tvx0"
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <button
        id="alt"
        var2="alt"
        class="duration-250 mx-auto w-full rounded bg-slate-200 py-2 px-5 uppercase text-slate-600 transition-[colors,transform] hover:scale-105 hover:bg-slate-300 hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-400 hover:text-slate-700 active:translate-y-1"
      >
        Alternative / Indie
      </button>
      <br /><br />
      <nuxt-link to="/">
        <button
          id="alt"
          class="duration-250 mx-auto w-full rounded bg-slate-200 py-2 px-5 uppercase text-slate-600 transition-[colors,transform] hover:scale-105 hover:bg-slate-300 hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-400 hover:text-slate-700 active:translate-y-1"
        >
          Go Back
        </button>
      </nuxt-link>
      <br />
    </div>
  </div>
</template>
