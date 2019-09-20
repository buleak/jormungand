<template>
  <div class="block">
    <el-carousel height="150px" trigger="click" indicator-position="outside" arrow="always" :interval="3000" type="card" direction="horizontal">
      <el-carousel-item v-for="(item, index) of carouselList" :key="index">
        <h3 class="small">{{index}}-{{item}}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      carouselList: ["jormungand", "buleak", "fenrir", "atalanta"]
    };
  },
  methods: {}
});
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>