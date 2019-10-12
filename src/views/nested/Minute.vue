<template>
  <div class="dynamic">
    <h1>Minute</h1>
    <div>{{new Date().getMinutes()}}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
    }
  },
  created() {
  }
})
</script>

<style scoped>
  
</style>