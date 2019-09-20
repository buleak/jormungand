<template>
<!-- 
  :span                            共计24格 
  :gutter                          间隔
  :offset                          偏移 
  type="flex"                      采用flex布局 
  justify                          水平排列方式
  align                            垂直排列方式
  tag                              自定义元素标签
  :xs   :sm   :md    :lg    :xl    响应式  
  <768  <992  <1200  <1920  >1920
-->
<!-- 
  import 'element-ui/lib/theme-chalk/display.css'  基于断点的隐藏类 
  hidden-xs-only                                   当视口在 xs 尺寸时隐藏
  hidden-sm-only                                   当视口在 sm 尺寸时隐藏
  hidden-md-only                                   当视口在 md 尺寸时隐藏
  hidden-lg-only                                   当视口在 lg 尺寸时隐藏
  hidden-xl-only                                   当视口在 xl 尺寸时隐藏
  hidden-sm-and-down                               当视口在 sm 及以下尺寸时隐藏
  hidden-md-and-down                               当视口在 md 及以下尺寸时隐藏
  hidden-lg-and-down                               当视口在 lg 及以下尺寸时隐藏
  hidden-sm-and-up                                 当视口在 sm 及以上尺寸时隐藏
  hidden-md-and-up                                 当视口在 md 及以上尺寸时隐藏
  hidden-lg-and-up                                 当视口在 lg 及以上尺寸时隐藏
-->
  <div>
    <el-row :gutter="5">
      <el-col :span="6" class="grid-content bg-purple-dark">1</el-col>
      <el-col :span="12" :offset="3" class="grid-content bg-purple-dark">2</el-col>
      <el-col :span="3" class="grid-content bg-purple-dark">3</el-col>
    </el-row>
    <el-row>
      <el-col :span="12" class="grid-content bg-purple-dark">1</el-col>
      <el-col :span="12" class="grid-content bg-purple-dark">1</el-col>
    </el-row>
    <el-row type="flex" justify="space-around">
      <el-col :span="3" class="grid-content bg-purple-dark">1</el-col>
      <el-col :span="3" class="grid-content bg-purple-dark">1</el-col>
      <el-col :span="3" class="grid-content bg-purple-dark">1</el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

