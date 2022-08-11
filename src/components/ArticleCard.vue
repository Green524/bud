<template>
  <section class="ArticleCard-Container">
    <el-link type="primary" :underline="false" style="color:#000;font-size: 22px;margin-bottom: 16px">Kafka在美团数据平台的实践</el-link>
    <div style="margin-top:10px">
      <div class="card">
        <div>
          <i class="el-icon-date card-icon"></i>
          <span style="margin-right: 2em">2022年08月04日</span>
          <span>海源 仕禄 肖恩 鸿洛 启帆 胡荣 李杰</span>
        </div>
        <br/>
        <div>
          <i class="el-icon-price-tag card-icon"></i>
          <span><a v-for="(item,index) in items" :key="index" class="card-tag">{{item.label}}</a></span>
        </div>
      </div>
    </div>
      <p>Kafka在美团数据平台承担着统一的数据缓存和分发的角色，随着数据量的增长，集群规模的扩大，Kafka面临的挑战也愈发严峻。本文分享了美团Kafka面临的实际挑战，以及美团针对性的一些优化工作，希望能给从事相关开发工作的同学带来帮助或启发</p>
      <router-link to="/article/detail">
        <el-button type="success" @click="get">阅读原文</el-button>
      </router-link>
  </section>
</template>

<script>
export default {
  name: "ArticleCard",
  data() {
    return {
      items: [
        { type: '', label: '标签一' },
        { type: 'success', label: '标签二' },
        { type: 'info', label: '标签三' },
        { type: 'danger', label: '标签四' },
        { type: 'warning', label: '标签五' }
      ]
    }
  },
  methods:{
    get:function (){
      this.$http.get('http://localhost:8842/blog/query/page').then(({data:resp}) => {
        this.data = resp.data;
      });
    }
  }
}
</script>

<style scoped lang="less">
.ArticleCard-Container {
  margin-right: 20px;
  margin-bottom: 20px;
  width: 47%;
  float: left;
  font-family: PingFang SC,Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans-serif;
}
.card-icon{
  font-size: 18px;
  margin-right: 4px;
}
.card{
  font-size: 12px;
  color: #757575;
}
.card-tag{
  color: #757575;
  text-decoration: underline;
  text-underline-position: under;
  margin-right: 4px;
  cursor: pointer;
  font-size: 12px;
}
.el-button--success{
  color: #FFF;
  background-color: rgb(139, 183, 151);
  border-color: rgb(139, 183, 151);
  :hover{
    border-color: rgb(97, 155, 111);
  }
}
</style>