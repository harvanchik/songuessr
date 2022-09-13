<template>
  <!-- START: Background Music Notes -->
  <div hidden id="music-notes">
    <!-- FIX: assets not being deployed for production -->
    <object
      data="~/assets/img/croche-3.svg"
      type="image/svg+xml"
      width="10%"
      class="absolute top-[10%] right-[10%] z-10 rotate-12 opacity-50"
    ></object>
  </div>
  <!-- END: Background Music Notes -->

  <!-- START: Body -->
  <div
    class="flex flex-col h-screen pt-20 bg-gradient-to-br from-purple-100/80 via-red-100/80 to-orange-100/80"
  >
    <!-- START: Title -->
    <h1 class="mx-auto text-6xl font-semibold text-red-500 w-max">Songuessr</h1>
    <!-- END: Title -->

    <!-- START: Menu Buttons -->
    <div class="flex flex-col mx-auto mt-20 space-y-5 text-5xl w-max">
      <button
        id="novice"
        class="w-full px-5 py-2 mx-auto text-green-600 uppercase transition-all bg-green-200 rounded duration-250 hover:scale-105 hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400 hover:text-green-700 active:translate-y-1"
      >
        Novice
      </button>
      <button
        id="insane"
        class="duration-250 mx-auto w-full rounded bg-purple-200 py-2 px-5 uppercase text-purple-600 transition-[colors,transform] hover:scale-105 hover:bg-purple-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-400 hover:text-purple-700 active:translate-y-1"
      >
        Insane
      </button>
      <button
        id="lightning"
        class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 active:translate-y-1"
      >
        Lightning
      </button>
    </div>
    <!-- END: Menu Buttons -->
  </div>
  <!-- END: Body -->
</template>
