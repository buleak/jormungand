<template>
  <div class="dynamic">
    <h1>Second</h1>
    <div>{{new Date().getSeconds()}}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      second: ''
    }
  },
  created() {
  }
})
</script>

<style scoped>
  
</style>