<template>
  <div class="nested">
    <h1>Nested</h1>
    <div class="router-group">
      <router-link to="/nested/hour">Hour</router-link> |
      <router-link to="/nested/minute">Minute</router-link> |
      <router-link to="/nested/second">Second</router-link>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
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
  .router-view {
    width: 500px;
    height: 500px;
    border: 1px solid #000;
    box-shadow: inset 0 0 5px 3px #11e2c6;
    margin: 0 auto;
  }
</style>