<template>
  <div class="dynamic">
    <h1>Dynamic</h1>
    <div class="id">this.$rooute.params.ID: {{ID}}</div>
    <div class="id">this.$rooute.params.ID + this.$route.params.pathMatch: {{$route.params.ID}}_{{$route.params.pathMatch}}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      ID: ''
    }
  },
  created() {
    console.log(this.$route.params)
    this.ID = this.$route.params.pathMatch
  }
})
</script>

<style scoped>
  
</style>