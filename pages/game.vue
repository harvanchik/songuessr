<template>
    <div class="flex flex-col min-h-screen pt-20 pb-20 bg-red-100">
      <h1 class="mx-auto text-6xl font-semibold text-red-500 w-max">Songuessr</h1>
      <div class="flex flex-col max-w-md mx-auto mt-20 space-y-5 text-5xl">
        
        <!-- TODO: Implement Spotify playback API to run a song clip here -->
        <p class="p-5 text-lg text-black bg-white rounded-lg">Put Spotify API Here</p>
        <br />
        <!-- END: Spotify API -->

        <!-- TODO: Make each option's name to the name of a song in the playlist -->
        <!--    Also make one of the options the correct option and add to the score if selected -->
        <nuxt-link to="/game">
          <button
            id="option1"
            class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1"
          >
            Option 1
          </button>
          <br />
        </nuxt-link>

        <nuxt-link to="/game">
          <button
            id="option2"
            class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1"
          >
            Option 2
          </button>
          <br />
        </nuxt-link>

        <nuxt-link to="/game">
          <button
            id="option3"
            class="duration-250 mx-auto w-full rounded bg-yellow-200 py-2 px-5 uppercase text-yellow-600 transition-[colors,transform] hover:scale-105 hover:bg-yellow-300 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-yellow-700 active:translate-y-1"
          >
            Option 3
          </button>
          <br />
        </nuxt-link>

        <nuxt-link to="/game">
          <button
            id="option4"
            class="duration-250 mx-auto w-full rounded bg-orange-200 py-2 px-5 uppercase text-orange-600 transition-[colors,transform] hover:scale-105 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-400 hover:text-orange-700 active:translate-y-1"
          >
            Option 4
          </button>
          <br />
        </nuxt-link>
        <!-- END: options -->

        <nuxt-link to="/">
          <button
            id="exit"
            class="duration-250 mx-auto w-full rounded bg-red-200 py-2 px-5 uppercase text-red-600 transition-[colors,transform] hover:scale-105 hover:bg-red-300 hover:bg-gradient-to-r hover:from-red-200 hover:to-red-400 hover:text-red-700 active:translate-y-1"
          >
            Exit
          </button>
          <br />
        </nuxt-link>
      </div>
    </div>
  </template>