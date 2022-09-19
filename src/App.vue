<template>
  <div>
    <el-container class="el-header-container">
      <el-header>
        <MobileNav></MobileNav>
      </el-header>
    </el-container>
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
<!--              <el-menu-item index="/article/archive/">-->
<!--                <span slot="title">文章存档</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="/about/">-->
<!--                <span slot="title">关于我</span>-->
<!--              </el-menu-item>-->
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main class="goTop">

        <router-view :key="key"> </router-view>
        <template>
          <el-backtop target=".goTop" :right="40" :bottom="50"></el-backtop>
        </template>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import MobileNav from "@/components/MobileNav";
export default {
  name: 'App',
  components:{MobileNav},
  computed:{
    // 这个key 保证每次切换组件都会重新通过生命周期,从而重新加载页面数据
    key () {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  },
  mounted() {
    document.title = "Bud 's blog"
  }
}
</script>

<style scoped lang="less">
.el-header-container{
  width: 0;
  height: 0;
}

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

.MobileNav-Container{
  width: inherit;
  height: 100%;
}
@media screen and (max-width: 850px) {
  .el-aside{
    visibility: hidden;
    margin-right: 0;
    width: 0 !important;
  }
  .el-header{
    background-color: rgb(139, 183, 151);
    color: #333;
    line-height: 60px;
    text-align: left;
    width: 100%;
    padding: 0;
  }
  .el-header-container{
    height: 48px;
    width: 100%;
    background-color: #E9EEF3;
  }
}
</style>
