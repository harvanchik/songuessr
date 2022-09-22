<template>
  <div class="flex flex-col h-screen pt-20 bg-red-100">
    <h1 class="mx-auto text-6xl font-semibold text-red-500 w-max">Songuessr</h1>
    <div class="flex flex-col max-w-md mx-auto mt-20 space-y-5 text-5xl">
      <h3 class="mx-auto text-5xl text-purple-400 w-max">Insane Mode Rules</h3>
      <!-- TODO: Type out the rules of the game mode -->
      <p class="p-5 text-lg text-black bg-purple-400 rounded-lg">
        Hardcore players that are attempting speedruns and high score
        leaderboards will choose the insane mode. This mode gives score
        multipliers through the duration of the guess, so the faster the guess
        the higher the score. It also has a text box, so the user would have to
        know the name of the song exactly to get it correct. A correct answer is
        100 points, and an almost instant answer can go up to a 5x multiplier.
      </p>
      <br />
      <!-- END: rules -->
      <nuxt-link to="/genre">
        <button
          id="70"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1"
        >
          Choose Genre
        </button>
        <br />
      </nuxt-link>
      <nuxt-link to="/">
        <button
          id="70"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1"
        >
          Go Back
        </button>
        <br />
      </nuxt-link>
    </div>
  </div>
</template>
