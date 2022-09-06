<template>
  <section class="MainItemList-Container">
    <el-page-header @back="$router.back()" :content="pageName" style="margin-bottom: 30px"></el-page-header>
    <ArticleCard v-for="(item,index) in appendLatestArticles" :key="index" :article="item"></ArticleCard>
    <div class="more-container" v-if="this.appendLatestArticles.length > 0">
      <el-button @click="loadMore" :disabled="this.loadMoreSwitch === false" :loading="this.loadingSwitch">浏览更多文章</el-button>
    </div>
  </section>
</template>

<script>
import ArticleCard from "@/components/ArticleCard";

import load from "@/load";

export default {
  name: "MainItemList",
  components: {ArticleCard},
  mounted() {
    this.blogTag = this.$route.params.tag;
    if (this.$route.params.pageName != null){
      this.pageName = this.$route.params.pageName;
    }
    console.log(this.$route.params.author)
    this.getArticlePage();
  },
  data() {
    return {
      latestArticles: [],
      appendLatestArticles:[],
      pageNum: 1,
      pageSize: 20,
      loadMoreSwitch: true,
      loadingSwitch: false,
      blogTag:'',
      pageName:'最新文章'
    }
  },
  methods: {
    getArticlePage() {
      console.log(this.blogTag)
      load.openLoading();
      this.$http.get(
          process.env.VUE_APP_BASE_URL + '/blog/query/page', {
            params: {
              pageNum: this.pageNum,
              pageSize: this.pageSize,
              contentTag: this.blogTag,
            }
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
      this.loadingSwitch = true;
      this.pageNum++;
      this.getArticlePage();
      const vm = this;
      setTimeout(function () {
        if (vm.latestArticles.length === 0) {
          vm.loadMoreSwitch = false;
          vm.$message('无更多文章');
          vm.loadingSwitch = false;
        }
      }, 500)
    }
  },
}
</script>

<style scoped lang="less">
.more-container{
  display: block;
  width: inherit;
  clear: both;
  border-top: 1px solid rgba(0,0,0,.05);
  padding: 10px;
  .el-button:focus, .el-button:hover {
    color: rgb(97, 155, 111);
    border-color: rgb(139, 183, 151);
    background-color: #fff;
  }
}
</style>