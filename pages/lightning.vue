<template>
  <div class="flex flex-col h-screen pt-20 bg-red-100">
    <h1 class="mx-auto text-6xl font-semibold text-red-500 w-max">Songuessr</h1>
    <div class="flex flex-col max-w-md mx-auto mt-20 space-y-5 text-5xl">
      <h3 class="mx-auto text-5xl text-blue-400 w-max">Lightning Mode Rules</h3>
      <!-- TODO: Type out the rules of the game mode -->
      <p class="p-5 text-lg text-black bg-blue-400 rounded-lg">
        This is a very fast speed mode similar to insane mode, but without the
        points system involved. This mode records how quickly you can guess 10
        songs in a given amount of time. Your high score gets recorded as a
        time, where the lower the time the better the rating. If any of your
        guesses are incorrect, your game ends and you cannot record a time.
      </p>
      <br />
      <!-- END: rules -->
      <nuxt-link to="/genre">
        <button
          id="70"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1"
        >
          Choose Genre
        </button>
        <br />
      </nuxt-link>
      <nuxt-link to="/">
        <button
          id="70"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1"
        >
          Go Back
        </button>
        <br />
      </nuxt-link>
    </div>
  </div>
</template>
