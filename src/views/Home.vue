<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <Register msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Register from "@/components/Register.vue"; // @ is an alias to /src

@Component({
  components: {
    Register
  }
})
export default class Home extends Vue {}
</script>

<style></style>
