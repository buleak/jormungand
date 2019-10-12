<template>
  <div class="namedView">
    <h1>NamedView</h1>
    <div class="content">
      <router-view name="left"></router-view>
      <router-view name="right"></router-view>
    </div>
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
  .content {
    width: 800px;
    margin: 0 auto;
    display:flex;
    justify-content: space-between;
  }
</style>