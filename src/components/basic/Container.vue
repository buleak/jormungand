<template>
  <div>
    <el-container class="container">
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>

    <el-container class="container">
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>

    <el-container class="container">
      <el-aside>Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>

    <el-container class="container">
      <el-header>Header</el-header>
      <el-container>
        <el-aside>Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

    <el-container class="container">
      <el-aside width="100px">Aside</el-aside>
      <el-container>
        <el-header height="120px">Header</el-header>
        <el-main>Main</el-main>
        <el-footer height="120px">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>



<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  .container {
    margin-bottom: 40px;
    padding-bottom: 30px;
    background: #000;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>