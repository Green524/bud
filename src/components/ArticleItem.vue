<template>
  <div class="ArticleItem-Container">
    <h3>{{article.title}}</h3>
    <div>
      <span>{{article.date}}</span>
      <span v-for="(item,i) in article.author" :key="i">{{item}}&nbsp;</span>
    </div>
    <p>{{article.summary}}<Button>阅读原文</Button></p>
    <div>
      <i>标签图标</i>
      <span v-for="(tag,i) in article.articleTag" :key="i">{{tag}},</span>
    </div>
  </div>
</template>

<script>
import {Button} from "element-ui";
export default {
  name: "ArticleItem",
  components:{Button},
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