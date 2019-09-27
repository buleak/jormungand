<template>
  <label for="">
    <span>INPUT: </span>
    <input type="text" :placeholder="placeholder">
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  // model: {
  //   prop: 'a',
  //   event: 'b'
  // },
  props: {
    placeholder: {
      type: String,
      default: '姓名 or 年龄'
    }
  },
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  computed: {
    
  },
  methods: {
    
  }
};
</script>

<style>
.son-class {
  font-size: 24px;
}
</style>
