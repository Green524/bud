<template>
  <section class="ArticleDetail-Container">
    <h1 style="color:#000;font-size: 28px;margin-bottom: 16px">Kafka在美团数据平台的实践</h1>
    <div class="detail-desc">
      <div class="detail-desc-i">
        <i class="el-icon-date card-icon"></i>
        <span style="margin-right: 2em">2022年08月04日</span>
        <span>海源 仕禄 肖恩 鸿洛 启帆 胡荣 李杰</span>
      </div>

      <div class="detail-desc-i">
        <i class="el-icon-document card-icon"></i>
        <span>11421字</span>
      </div>
      <div class="detail-desc-i">
        <i class="el-icon-alarm-clock card-icon"></i>
        <span>23分钟阅读</span>
      </div>
    </div>
    <div>
      <p>[TOC]
        1. 现状和挑战
        1.1 现状

        Kafka是一个开源的流处理平台，业界有很多互联网企业也都在使用这款产品。我们首先了解一下Kafka在美团数据平台的现状。

      </p>
    </div>
    <div>
      <comment :commentList="commentList" :commentNum="commentList.length"></comment>
    </div>
  </section>
</template>

<script>
import comment from 'bright-comment';

export default {
  name: "ArticleDetail",
  components: {comment},
  data() {
    return {
      commentList: [
        {
          id: 1,
          commentUser: {
            id: 1,
            nickName: "花非花",
            avatar: "http://qzapp.qlogo.cn/qzapp/101483738/6637A2B6611592A44A7699D14E13F7F7/50"
          },
          content: "<a style='text-decoration:none;color: #409eff ' href='https://blog.csdn.net/qq_40942490?spm=1000.2115.3001.5113'>我的CSDN博客地址</a>[害羞][害羞][害羞]<br/>",
          createDate: "2019-9-23 17:36:02",
          childrenList: [{
            id: 2,
            commentUser: {id: 2, nickName: "坏菠萝", avatar: ""},
            targetUser: {
              id: 1,
              nickName: "花非花",
              avatar: "http://qzapp.qlogo.cn/qzapp/101483738/6637A2B6611592A44A7699D14E13F7F7/50"
            },
            content: "真的就很棒！很Nice!",
            createDate: "2019-9-23 17:45:26"
          }]
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.detail-desc-i {
  display: inline;
  margin-right: 10px;
}

.detail-desc {
  font-size: 12px;
  color: #757575;
  padding: 1em 0;
  border-bottom: 1px dashed #cacaca;
  border-top: 1px dashed #cacaca;
  margin: 2em 0;
  box-sizing: border-box;
}
</style>