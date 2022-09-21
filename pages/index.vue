<script>
  // TODO: use these functions to log the user's choice of game mode
  export default({
    methods: {
      logNovice () {
        console.log('Clicked Novice')
      },
      logInsane () {
        console.log('Clicked Insane')
      },
      logLightning () {
        console.log('Clicked Lightning')
      }
    },
    mounted () {
      this.$refs.Btn.click()
    }})
  // END: log functions
  </script>
<template>
    <div>
      <Menu></Menu>
    </div>
  </template>
