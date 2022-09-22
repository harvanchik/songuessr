<template>
  <div>
    <Menu></Menu>
  </div>
</template>


<script>
  // TODO: use these functions to log the user's choice of game mode
  export const state = () => ({
    var1: null,
    var2: null
  })

  export const mutations = {
    SET_VAR_1 (state, value) {
      console.log('SET_VAR_1', value)
      state.var1 = value
    },
    SET_VAR_2 (state, value) {
      console.log('SET_VAR_2', value)
      state.var2 = value
    }
  }
  // END: log functions
</script>
