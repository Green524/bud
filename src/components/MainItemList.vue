<template>
  <section class="MainItemList-Container">
    <el-page-header @back="$router.back()" content="最新文章" style="margin-bottom: 30px"></el-page-header>
    <ArticleCard v-for="(item,index) in appendLatestArticles" :key="index" :article="item"></ArticleCard>
    <el-button @click="loadMore" :disabled="this.loadMoreSwitch === false" style="display: block">查看更多</el-button>

    <!--    <template>-->
    <!--      <Pagination :total="latestArticles.size" :pageNum="latestArticles.pageNum" :pageSize="latestArticles.pageSize"/>-->

    <!--    </template>-->
  </section>
</template>

<script>
import ArticleCard from "@/components/ArticleCard";

import load from "@/load";

export default {
  name: "MainItemList",
  components: {ArticleCard},
  mounted() {
    this.getArticlePage();
  },
  data() {
    return {
      latestArticles: [],
      appendLatestArticles:[],
      pageNum: 1,
      pageSize: 20,
      loadMoreSwitch:true
    }
  },
  methods: {
    getArticlePage() {
      load.openLoading();
      this.$http.get(
          'http://localhost:8842/blog/query/page', {
            params: {pageNum: this.pageNum, pageSize: this.pageSize}
          }).then(function (success) {

        load.closeLoading();

        if (success.body['code'] === 500) {
          this.$message('获取文章失败');
        } else {
          this.latestArticles = success.body.data.list;
          this.appendLatestArticles = this.appendLatestArticles.concat(this.latestArticles);
        }
      }, function () {
        this.$message('获取文章失败');
      })
    },
    loadMore() {
      const vm = this;
      this.pageNum++;
      this.getArticlePage();
      setTimeout(function () {
        if (vm.latestArticles.length === 0) {
          vm.loadMoreSwitch = false;
          vm.$message('无更多文章');
        }
      }, 500)
    }
  },
}
</script>

<style scoped>

</style>