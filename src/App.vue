<template>
  <div id="app">
    <div class="router-group">
      <router-link to="/">注册</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/father">父子组件传参</router-link> |
      <!-- <router-link to="socket">Socket</router-link> | -->
      <router-link to="basic">基础</router-link> |
      <router-link :to="{name:'form', params: {ID: 1}}">表单</router-link> |
      <router-link to="/carousel">轮播图</router-link> |
      <router-link to="/nested">嵌套路由</router-link> |
      <router-link to="/nested">命名路由</router-link> |
      <router-link to="/namedView/content">命名视图</router-link> |
    </div>
    <div class="router-group">
      <router-link to="dynamic/ID-1">1</router-link> |
      <router-link to="dynamic/ID-2">2</router-link> |
      <router-link to="dynamic/ID-3">3</router-link> 
    </div>
    <router-view></router-view>
    <!-- <router-view name="side" class="side"></router-view>
    <router-view name="foot" class="foot"></router-view> -->
    <!-- <Register msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import Register from './components/Register.vue'
import "./assets/iconfont.css";
export default {
  name: "app",
  components: {
    // Register
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.side {
  position: fixed;
  top: 100px;
  left: 20px;
  width: 200px;
  height: 500px;
  background: #f0f0f0;
}
.foot {
  position: fixed;
  bottom: 10px;
}
</style>
