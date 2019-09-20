<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="sendMsg">send</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      // socket: "ws://localhost:3000"
    }
  },
  methods: {
    sendMsg() {
      // let socket = io
    }
  }
})
</script>