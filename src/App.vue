<template>
  <div id="app">
    <div class="router-group">
      <router-link to="/">注册</router-link> | 
      <router-link to="/about">About</router-link> |
      <router-link to="/carousel">轮播图</router-link> 
    </div>
    <router-view></router-view>
    <!-- <Register msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import Register from './components/Register.vue'

export default {
  name: 'app',
  components: {
    // Register
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
