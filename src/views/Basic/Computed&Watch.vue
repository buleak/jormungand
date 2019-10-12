<template>
  <div>
    <h1>计算属性是基于响应式依赖进行缓存的</h1>
    <label for=""><span>姓：</span><input type="text" v-model="firstName" placeholder="姓"></label>
    <label for=""><span>名：</span><input type="text" v-model="lastName" placeholder="名" ></label>
    <h1>{{name}}</h1>
    <h1>{{time}}</h1>
    <h1>{{num}}</h1>
    <button @click="alert(1)">Watch</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

declare module 'vue/types/vue' {
    interface Vue {
        firstName: string,
        lastName: string,
        num: number
    }
} 

export default Vue.extend({
  data():object {
    return {
      firstName: 'rule',
      lastName: 'breaker',
      num: 0
    }
  },
  methods: {
    addNum() {
      // this.num = 2
      // console.log(1)
    }
  },
  computed: { // 计算属性
    name():string {
      return `name: ${this.firstName} ${this.lastName}`
    },
    time():number { // 不会改变，因为 Date()不是响应式依赖
      return new Date().getTime()
    }
  },
  watch: { // 侦听属性
    num(newVal:number, oldVal:number) {
      // this.num +=1
      // this.lastName = 'buleak'
    }
  }
})
</script>

<style>
  label {
    display: block;
  }
</style>