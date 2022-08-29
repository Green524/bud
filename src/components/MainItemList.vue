<template>
  <section class="MainItemList-Container">
    <el-page-header @back="goBack" content="最新文章" style="margin-bottom: 30px"></el-page-header>
    <ArticleCard v-for="(item,index) in 17" :key="index"></ArticleCard>

    <el-button @click="getArticlePage">点击</el-button>
  </section>
</template>

<script>
import ArticleCard from "@/components/ArticleCard";

// const getArticlePageParams = {
//   pageNum: 1,
//   pageSize: 1
// }
// function getArticlePageParams() {
//   return {
//     pageNum: 1,
//     pageSize: 1
//   };
// }
export default {
  name: "MainItemList",
  components: {ArticleCard},
  methods: {
    goBack() {
      console.log('go back');
    },
    getArticlePage() {
      return this.$http.get(
          'http://localhost:8842/blog/query/page', {
            params:{ pageNum: 1, pageSize: 1}
          }).then(function (success) {
        console.log('请求成功' + success.text());
      }, function (error) {
        console.log('请求失败' + error.text);
      });
    }
  }
}
</script>

<style scoped>

</style>