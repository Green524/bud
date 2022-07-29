<template>
  <div class="ArticleItem-Container">
    <h3>{{article.title}}</h3>
    <div>
      <span>{{article.date}}</span>
      <span v-for="(item,i) in article.author" :key="i">{{item}}&nbsp;</span>
    </div>
    <p>{{article.summary}}<button>阅读原文</button></p>
    <div>
      <i>标签图标</i>
      <span v-for="(tag,i) in article.articleTag" :key="i">{{tag}},</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",
  props: {
    article:{
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>