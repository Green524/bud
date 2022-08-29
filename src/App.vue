<template>
  <div>
    <el-container>
      <el-aside width="13%">
        <el-row class="tac">
          <el-col>
            <el-menu
                class="el-menu-vertical-demo"
                :default-active="`/article/latest`"
                background-color="#E9EEF3"
                text-color="#000"
                active-text-color="rgb(97, 155, 111)"
                :router="true"
            >
              <el-menu-item index="/article/latest">
                <span slot="title">最新文章</span>
              </el-menu-item>
              <el-menu-item index="/article/archive">
                <span slot="title">文章存档</span>
              </el-menu-item>
              <el-menu-item index="/about">
                <span slot="title">关于我</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main class="goTop">
        <router-view>
        </router-view>
        <template>
          <el-backtop target=".goTop" :right="40" :bottom="50"></el-backtop>
        </template>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>

<style scoped lang="less">
.el-aside {
  background-color: #E9EEF3;
  color: #333;
  text-align: right;
  line-height: 200px;
  width: 50px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  letter-spacing: 3px;
  margin-right: 10px;
  overflow: visible;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: left;
  line-height: 15px;
  overflow: visible;
}

.el-submenu__title:hover {
  background-color: rgb(97, 155, 111) !important;
}

.el-menu-item:hover {
  background-color: rgb(139, 183, 151) !important;
}

.MainItemList-Container {
  float: left;
}

.goTop {
  height: 100vh;
  overflow-x: hidden;
}

.el-backtop {
  color: rgb(97, 155, 111);
}
</style>
