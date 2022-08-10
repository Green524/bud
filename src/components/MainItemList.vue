<template>
  <section class="MainItemList-Container">
    <el-page-header @back="goBack" content="最新文章" style="margin-bottom: 30px"></el-page-header>
    <ArticleCard v-for="(item,index) in 3" :key="index"></ArticleCard>
  </section>
</template>

<script>
import ArticleCard from "@/components/ArticleCard";
export default {
  name: "MainItemList",
  components:{ArticleCard},
  methods: {
    goBack() {
      console.log('go back');
    }
  }
}
</script>

<style scoped>
/*.el-page-header{*/
/*  margin-bottom: 100px*/
/*}*/
</style>