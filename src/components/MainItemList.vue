<template>
  <section class="MainItemList-Container">
    <el-page-header @back="$router.back()" content="最新文章" style="margin-bottom: 30px"></el-page-header>
    <ArticleCard v-for="(item,index) in latestArticles.list" :key="index" :article="item"></ArticleCard>
<!--    <template>-->
<!--      <Pagination :total="latestArticles.size" :pageNum="latestArticles.pageNum" :pageSize="latestArticles.pageSize"/>-->

<!--    </template>-->
  </section>
</template>

<script>
import ArticleCard from "@/components/ArticleCard";
// import Pagination from "@/components/Pagination";

export default {
  name: "MainItemList",
  components: {ArticleCard},
  mounted() {
    this.getArticlePage();
  },
  data() {
    return {
      latestArticles: {}
    }
  },
  methods: {
    goBack() {
      console.log('go back');
    },
    getArticlePage() {
      this.$http.get(
          'http://localhost:8842/blog/query/page', {
            params: {pageNum: 1, pageSize: 100}
          }).then(function (success) {
        if (success.body['code'] === 500) {
          //console.log(success.body['message']);
        } else {
          this.latestArticles = success.body.data;
        }
      }, function (error) {
        console.log('请求失败' + error.text);
      })
    }
  },
}
</script>

<style scoped>

</style>