<template>
  <nav class="MobileNav-Container">
    <van-dropdown-menu active-color="#FFF">
      <van-dropdown-item title="菜单" :v-model="0" icon="1">
        <van-cell center title="最新文章" is-link to="/article/latest/"/>
        <van-cell center title="文章存档" is-link to="/article/archive/"/>
        <van-cell center title="关于我" is-link to="/about/"/>
      </van-dropdown-item>
    </van-dropdown-menu>
  </nav>
</template>

<script>
export default {
  name: "MobileNav",
  data() {
    return {

      option1: [
        {text: '最新文章', value: '/article/latest/'},
        {text: '文章存档', value: '/article/archive/'},
        {text: '关于我', value: '/about/'},
      ]
    }
  },
  methods: {
    router() {
      this.$router.replace("/11")
    }
  }
}
</script>

<style scoped>
.van-dropdown-menu {
  float: right;
}

/deep/ .van-dropdown-menu__bar {
  background-color: rgb(139, 183, 151) !important;
}
</style>