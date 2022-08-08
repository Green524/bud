<template>
  <section class="MainItemList-Container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>最新文章</el-breadcrumb-item>
    </el-breadcrumb>
    <ArticleCard></ArticleCard>
    <ArticleCard></ArticleCard>
  </section>
</template>

<script>
import ArticleCard from "@/components/ArticleCard";
export default {
  name: "MainItemList",
  components:{ArticleCard}
}
</script>

<style scoped>

.MainItemList-Container{

}
</style>