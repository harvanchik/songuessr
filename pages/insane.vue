<template>
    <div class="flex flex-col h-screen pt-20 bg-red-100">
        <h1 class="mx-auto text-6xl font-semibold text-red-500 w-max">Songuessr</h1>
        <div class="flex flex-col mx-auto mt-20 space-y-5 text-5xl bg-red-100 w-max">
            <h3 class="mx-auto text-5xl text-purple-400 w-max">Insane Mode Rules</h3>
            <!-- TODO: Type out the rules of the game mode -->
            <p></p>
            <br>
            <!-- END: rules -->
            <router-link :to="{ path: '/genre' }">
                <button id="70" class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 
                uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 
                hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 
                active:translate-y-1">Choose Genre</button>
                <br>
            </router-link>
            <router-link :to="{ path: '/' }">
                <button id="70" class="duration-250 mx-auto w-full rounded bg-blue-200 py-2 px-5 
                uppercase text-blue-600 transition-[colors,transform] hover:scale-105 hover:bg-blue-300 
                hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-400 hover:text-blue-700 
                active:translate-y-1">Go Back</button>
                <br>
            </router-link>
        </div>
    </div>
</template>