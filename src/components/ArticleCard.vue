<template>
  <section class="ArticleCard-Container">
    <el-link type="primary" :underline="false" style="color: #000;" >Kafka在美团数据平台的实践</el-link>
    <div style="margin-top:10px">
      <span>2022年08月04日</span>&nbsp;
      <p>海源 仕禄 肖恩 鸿洛 启帆 胡荣 李杰</p>
      <p>基础研发平台, 数据, Kafka, 慢节点</p>
    </div>
      <p>Kafka在美团数据平台承担着统一的数据缓存和分发的角色，随着数据量的增长，集群规模的扩大，Kafka面临的挑战也愈发严峻。本文分享了美团Kafka面临的实际挑战，以及美团针对性的一些优化工作，希望能给从事相关开发工作的同学带来帮助或启发</p>
      <el-button>阅读原文</el-button>
  </section>
</template>

<script>
export default {
  name: "ArticleCard"
}
</script>

<style scoped lang="less">
.ArticleCard-Container {
  margin-right: 50px;
  margin-bottom: 10px;
}
</style>