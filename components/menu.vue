<template>
  <!-- START: Body -->
  <div class="flex flex-col h-screen pt-20 bg-red-100">
    <!-- START: Title -->
    <h1 class="mx-auto text-6xl font-semibold text-red-500 w-max">Songuessr</h1>
    <!-- END: Title -->

    <!-- START: Menu Buttons -->
    <div class="flex flex-col mx-auto mt-20 space-y-5 text-5xl w-max">
      <router-link :to="{ path: '/novice' }">
        <button
        @click="logNovice"
          id="novice"
          class="duration-250 mx-auto w-full rounded bg-green-200 py-2 px-5 uppercase text-green-600 transition-[colors,transform] hover:scale-105 hover:bg-green-300 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1 thing"
        >
          Novice
        </button>
      </router-link>
      <router-link :to="{ path: '/insane' }">
        <button
          @click="logInsane"
          id="insane"
          class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1 thing"
        >
          Insane
        </button>
      </router-link>
      <router-link :to="{ path: '/lightning' }">
        <button
          @click="logLightning"
          id="lightning"
          class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1 thing"
        >
          Lightning
        </button>
      </router-link>
      
    </div>
    <!-- END: Menu Buttons -->
  </div>
  <!-- END: Body -->
</template>
