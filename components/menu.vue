<template>
  <!-- START: Background Music Notes -->
  <div id="music-notes">
    <!-- FIX: assets not being deployed for production -->
    <object
      data="~/assets/img/croche-3.svg"
      type="image/svg+xml"
      width="10%"
      class="absolute top-[10%] right-[10%] rotate-12 opacity-50 z-10"
    ></object>
  </div>
  <!-- END: Background Music Notes -->

  <!-- START: Body -->
  <div
    class="flex flex-col h-screen pt-20 bg-gradient-to-br from-purple-100/80 via-red-100/80 to-orange-100/80"
  >
    <!-- START: Title -->
    <h1 class="mx-auto text-blue-500 text-7xl w-max">Songuessr</h1>
    <!-- END: Title -->

    <!-- START: Menu Buttons -->
    <div class="flex flex-col mx-auto mt-20 space-y-5 text-3xl w-max">
      <button
        id="novice"
        class="px-5 py-2 mx-auto text-green-600 uppercase transition-all bg-green-200 rounded active:translate-y-1 hover:text-green-700 duration-250 hover:scale-105 w-max hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400"
      >
        Novice
      </button>
      <button
        id="insane"
        class="text-purple-600 uppercase bg-purple-200 rounded active:translate-y-1 hover:text-purple-700 hover:bg-purple-300 transition-[colors,transform] duration-250 hover:scale-105 mx-auto py-2 px-5 w-max hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400"
      >
        Insane
      </button>
      <button
        id="lightning"
        class="text-blue-600 uppercase bg-blue-200 rounded active:translate-y-1 hover:text-blue-700 hover:bg-blue-300 transition-[colors,transform] duration-250 hover:scale-105 mx-auto py-2 px-5 w-max hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400"
      >
        Lightning
      </button>
    </div>
    <!-- END: Menu Buttons -->
  </div>
  <!-- END: Body -->
</template>
