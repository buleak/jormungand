<template>
  <div>
    <h1>son: {{count}}</h1>
    <h2>son: {{num}}</h2>
    <h2>son: {{title}}</h2>
    <button type="submit" @click="toFather">子传父</button>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: String,
      default: '1'
    },
    title: {
      type: String
    }
  },
  data() {
    return {
      num: 1000,
      msg: 'this is son.vue'
    }
  },
  methods: {
    toFather() {
      this.title = 'son-----title'
      this.$emit('father', this.msg)
    }
  }
};
</script>

<style scoped>
  div { 
    color: #ff7b00; 
  }
</style>