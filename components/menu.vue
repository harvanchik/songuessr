<template>
  <!-- START: Background Music Notes -->
  <div id="music-notes">
    <object
      data="../assets/img/croche-3.svg"
      type="image/svg+xml"
      width="10%"
      class="absolute top-[10%] right-[10%] rotate-12 opacity-50 z-10"
    ></object>
  </div>
  <!-- END: Background Music Notes -->

  <!-- START: Body -->
  <div
    class="flex flex-col pt-20 bg-gradient-to-br h-screen from-purple-100/80 via-red-100/80 to-orange-100/80"
  >
    <!-- START: Title -->
    <h1 class="text-red-500 text-7xl mx-auto w-max">Songuessr</h1>
    <!-- END: Title -->

    <!-- START: Menu Buttons -->
    <div class="flex flex-col space-y-5 mt-20 text-3xl mx-auto w-max">
      <button
        id="novice"
        class="text-green-600 uppercase bg-green-200 rounded active:translate-y-1 hover:text-green-700 hover:bg-green-300 transition-all duration-250 hover:scale-105 mx-auto py-2 px-5 w-max"
      >
        Novice
      </button>
      <button
        id="insane"
        class="text-purple-600 uppercase bg-purple-200 rounded active:translate-y-1 hover:text-purple-700 hover:bg-purple-300 transition-[colors,transform] duration-250 hover:scale-105 mx-auto py-2 px-5 w-max"
      >
        Insane
      </button>
      <button
        id="lightning"
        class="text-blue-600 uppercase bg-blue-200 rounded active:translate-y-1 hover:text-blue-700 hover:bg-blue-300 transition-[colors,transform] duration-250 hover:scale-105 mx-auto py-2 px-5 w-max"
      >
        Lightning
      </button>
    </div>
    <!-- END: Menu Buttons -->
  </div>
  <!-- END: Body -->

  <!-- <div class="text-align-center">
    <h1 class="text-red-400 text-5xl">Songuessr</h1>
    <br /><br />
    <p class="text-xl">The Song Clip Guessing Game</p>
    <br /><br /><br /><br />
    <button id="novice" class="text-green-600">Novice</button>
    <br /><br />
    <button id="insane" class="text-purple-300">Insane</button>
    <br /><br />
    <button id="lightning" class="text-blue-400">Lightning</button>
    <br /><br />
  </div> -->
</template>
