<template>
  <section class="ArticleArchive-Container">
    <el-page-header @back="goBack" content="文章归档" style="margin-bottom: 30px"></el-page-header>
    <div>
      <span>切换年份：</span>
      <a href="#">2019年</a>
      <a href="#">2018年</a>
    </div>
    <div>
      <el-link type="primary" :underline="false"
               style="color: #2a2935;background-color: transparent;font-size: 24px;margin-bottom: 16px">Java动态追踪技术探究
      </el-link>
      <div class="detail-desc-i">
        <i class="el-icon-date card-icon"></i>
        <span style="margin-right: 2em">2022年08月04日</span>
        <span>海源 仕禄 肖恩 鸿洛 启帆 胡荣 李杰</span>
      </div>
      <div>
        <i class="el-icon-price-tag card-icon"></i>
        <span><a v-for="(item,index) in items" :key="index" class="card-tag">{{ item.label }}</a></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ArticleArchive",
  methods: {
    goBack() {
      console.log('go back');
    }
  },
  data() {
    return {
      items: [
        {type: '', label: '标签一'},
        {type: 'success', label: '标签二'},
        {type: 'info', label: '标签三'},
        {type: 'danger', label: '标签四'},
        {type: 'warning', label: '标签五'}
      ]
    }
  }
}
</script>

<style scoped lang="less">
.card-tag {
  color: #757575;
  text-decoration: underline;
  text-underline-position: under;
  margin-right: 4px;
  cursor: pointer;
  font-size: 12px;
}

.ArticleArchive-Container div {
  margin-bottom: 30px;
}
</style>