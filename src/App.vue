<template>
  <el-container>
    <el-aside width="13%">
      <el-row class="tac">
        <el-col>
          <el-menu
              class="el-menu-vertical-demo"
              default-active="/article/latest/"
              background-color="#E9EEF3"
              text-color="#000"
              active-text-color="rgb(97, 155, 111)"
              :router="true"
              >
            <el-menu-item index="/article/latest/">
              <span slot="title">最新文章</span>
            </el-menu-item>
            <el-menu-item index="/article/archive/">
              <span slot="title">文章存档</span>
            </el-menu-item>
            <el-menu-item index="/about">
              <span slot="title">关于我</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-main>
      <router-view>
      </router-view>
<!--      <MainItemList></MainItemList>-->
    </el-main>
  </el-container>
</template>
<script>
// import MainItemList from "@/components/MainItemList";
export default {
  name: 'App',
  // components:{MainItemList}
}
</script>

<style scoped>
.el-aside {
  background-color: #E9EEF3;
  color: #333;
  text-align: right;
  line-height: 200px;
  width: 50px;
  font-family:  "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  letter-spacing: 3px;
  margin-right: 10px;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: left;
  line-height: 15px;
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
.MainItemList-Container{
  float: left;
}
</style>
