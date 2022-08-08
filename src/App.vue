<template>
  <el-container>
    <el-aside width="200px">
      <el-row class="tac">
        <el-col>
          <el-menu
              class="el-menu-vertical-demo"
              default-active="1"
              background-color="#fff"
              text-color="#000"
              active-text-color="rgb(97, 155, 111)"
              >
            <el-menu-item index="1">
              <i class="el-icon-s-home"></i>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="5">
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</template>
<script>
export default {
  name: 'App',
}
</script>

<style scoped>
.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 200px;
  width: 50px;
  font-family: fantasy;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
  height: 100%;
}
.el-submenu__title:hover{
  background-color: rgb(97, 155, 111) !important;
}
.el-menu-item:hover {
  background-color: rgb(139, 183, 151) !important;
}
</style>
