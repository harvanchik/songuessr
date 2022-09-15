<template>
  <!-- START: Body -->
  <div class="flex flex-col h-screen pt-20">
    <!-- START: Title -->
    <h1 class="mx-auto text-6xl font-semibold text-red-500 w-max">Songuessr</h1>
    <!-- END: Title -->

    <!-- START: Menu Buttons -->
    <div class="flex flex-col mx-auto mt-20 space-y-5 text-5xl w-max">
      <button
        id="novice"
        class="w-full px-5 py-2 mx-auto text-black uppercase thing"
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
