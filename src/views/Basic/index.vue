<template>
  <div id="basic-page">
    <div class="router-subgroup">
      <router-link class="btn" to="/basic/class&style">Class & Style</router-link>
      <router-link class="btn" to="/basic/computed&watch">计算属性 & 监听器</router-link>
      <router-link class="btn" to="/basic/template">模板语法</router-link>
      <router-link class="btn" to="v-if">条件渲染</router-link>
      <router-link class="btn" to="v-for">列表渲染</router-link>
      <router-link class="btn" to="v-on">事件处理</router-link>
      <router-link class="btn" to="v-model">表单输入绑定</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  #basic-page {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .router-subgroup {
    display: flex;
    justify-content: space-around;
  }
  .btn {
    display: inline-block;
    width: 120px;
    height: 50px;
    padding: 10px;
    color: #fff;
    background: #000;
    font-size: 16px;
  }
</style>
