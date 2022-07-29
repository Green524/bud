<template>
  <div class="RightArticleItems-Container">
    <div class="Article-List">文章列表</div>
    <ArticleItem v-for="item in article" :key="item.id" :article="item"></ArticleItem>
  </div>
</template>

<script>
import ArticleItem from "@/components/ArticleItem";

export default {
  name: "RightArticleItems",
  components: {ArticleItem},
  data() {
    return {
      article: [
        {
          title: "测试1",
          date: "2022-02-01 11:11:00",
          author: ['cpq1', 'cp2', 'cpq3'],
          summary: "1111111111111111",
          articleTag: ['1', '2', '3']
        },
        {
          title: "测试2",
          date: "2022-02-02 11:11:00",
          author: ['cpq1', 'cp2', 'cpq3'],
          summary: "1111111111111111",
          articleTag: ['1', '2', '3']
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.ArticleItem-Container{
  float: left;
}
.Article-List{
  margin-top: 20px;
  width: 100%;
  border-bottom: 1px solid rgba(20,81,154,0.5);
}
</style>