<template>
  <div class="page">
    <el-row>
      <el-col class="head">
        <el-avatar :src="avatarUrl" circle></el-avatar>
        <div>{{ $route.params.userName }}</div>
      </el-col>
    </el-row>
    <!-- <el-row> <el-col :span="24" class="module module1">1</el-col> </el-row> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      avatarUrl: "https://image.xuexiwangzhe.com/FkJIVFOX6rZLNGoGRcYUJtr2g4L5"
    };
  },
  mounted() {
    console.log("mounted");
  }
});
</script>

<style scoped>
.header {
  height: 200px;
  margin: 10px auto;
}
.module {
  height: 150px;
  margin-bottom: 10px;
}
.header {
  background: url("https://image.xuexiwangzhe.com/FpZPuppXOREOL-dMfZK2VWVULcsm")
    0 0/100% 100% no-repeat;
}
.module1 {
  background: url("https://image.xuexiwangzhe.com/Fq0xOajoM6AqjcJRjXGI8uZLUseL")
    0 0/100% 100% no-repeat;
}
.module2 {
  background: url("https://image.xuexiwangzhe.com/FiLcSR4Sb5RjKSRy6X8oVL3AChxz")
    0 0/100% 100% no-repeat;
}
.module3 {
  background: url("https://image.xuexiwangzhe.com/FsxWIKZ1UqdZ0KOuhWKBOF8nui8k")
    0 0/100% 100% no-repeat;
}
.module4 {
  background: url("https://image.xuexiwangzhe.com/FjCe2HEjql5_XE1Titvrazd4cJYw")
    0 0/100% 100% no-repeat;
}
.module5 {
  background: url("https://image.xuexiwangzhe.com/FrPmby0nRRXJTg_i4-2diZeKkfic")
    0 0/100% 100% no-repeat;
}
.module6 {
  background: url("https://image.xuexiwangzhe.com/FqHn4ZxOKkOLS30AtJiMjRP_cnJO")
    0 0/100% 100% no-repeat;
}
/* --- */
.head {
  margin-top: 50px;
}
</style>
