<template>
  <div>
    <el-radio-group v-model="radio">
      <el-radio-button label="4" size="medium">Button1</el-radio-button>
      <el-radio label="1">Yes</el-radio>
      <el-radio label="2">No</el-radio>
      <el-radio label="3" disabled>Disabled</el-radio>
      <el-radio-button label="5" border size="mini">Button2</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      radio: '2'
    }
  }
})
</script>

<style scoped>

</style>
