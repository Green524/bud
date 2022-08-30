<template>
  <nav class="MobileNav-Container">
    <van-dropdown-menu active-color="#FFF">
      <van-icon name="wap-nav" />
      <van-dropdown-item title="菜单" :v-model="0" :options="option1">

      </van-dropdown-item>
    </van-dropdown-menu>
  </nav>
</template>

<script>
export default {
  name: "MobileNav",
  data(){
    return {

      option1:[
        { text: '最新文章', value: 0 },
        { text: '文章存档', value: 1 },
        { text: '关于我', value: 2 },
      ]
    }
  },
  methods:{
    router(){
      this.$router.replace("/11")
    }
  }
}
</script>

<style scoped>
.van-dropdown-menu{
  float: right;
}
/deep/ .van-dropdown-menu__bar{
  background-color: rgb(139, 183, 151) !important;
}
</style>