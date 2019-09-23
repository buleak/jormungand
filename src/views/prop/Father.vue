<template>
  <div>
    father: {{num}} <br>
    father: {{title}}
    <!-- 父传子 :count="count", 子组件使用 props: [count]接收 -->
    <div>------------------------------------------</div>
    <Son :count="count" :title.sync="title" @father="receiveSon" /> 
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  data() {
    return {
      num: 0,
      title: '.sync',
      count: "this is father.vue"
    };
  },
  components: {
    Son
  },
  methods: {
    receiveSon(data) {
      this.num = data;
    }
  }
};
</script>

<style scoped>
div {
  color: aqua;
}
</style>