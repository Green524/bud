<template>
  <section class="ArticleDetail-Container">
    <el-page-header @back="$router.back()" content="文章详情" style="margin-bottom: 30px"></el-page-header>
    <h1 style="color:#000;font-size: 28px;margin-bottom: 16px">Kafka在美团数据平台的实践</h1>
    <div class="detail-desc">
      <div class="detail-desc-i">
        <i class="el-icon-date card-icon"></i>
        <span style="margin-right: 2em">{{ article.createTime }}</span>
        <span>海源 仕禄 肖恩 鸿洛 启帆 胡荣 李杰</span>
      </div>

      <div class="detail-desc-i">
        <i class="el-icon-document card-icon"></i>
        <span>{{article.wordCount}}字</span>
      </div>
      <div class="detail-desc-i">
        <i class="el-icon-alarm-clock card-icon"></i>
        <span>23分钟阅读</span>
      </div>
    </div>
    <div>
      <p v-html="article.content" class="markdown-body"></p>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div v-if="article.isComment">
      <comment :commentList="commentList" :commentNum="commentList.length"></comment>
    </div>
  </section>
</template>

<script>
import comment from 'bright-comment';
import 'github-markdown-css'

export default {
  name: "ArticleDetail",
  components: {comment},
  mounted() {
    this.articleId = this.$route.params.id;
    this.getArticleDetail();
    this.getComment();
  },
  methods: {
    getArticleDetail() {
      this.$http.get('http://localhost:8842/blog/query/' + this.articleId).then(function (success) {
        this.article = success.body.data;
      }, function (error) {
        console.log('请求失败' + error.text);
      });
    },

    getComment() {
      this.$http.get('http://localhost:8842/comment/get/byarticleid',{
        params:{
          articleId:this.articleId
        }
      }).then(function (success) {
        console.log(success)
        // this.comment = success.body.data.list;
      }, function (error) {
        console.log('请求失败' + error.text);
      });
    }
  },
  data() {
    return {
      article: {},
      // commentList:[],
      commentList: [
        {
          id: "1",
          commentUser: {
            id: 1,
            nickName: "花非花",
            avatar: "http://qzapp.qlogo.cn/qzapp/101483738/6637A2B6611592A44A7699D14E13F7F7/50"
          },
          content: "<a style='text-decoration:none;color: #409eff ' href='https://blog.csdn.net/qq_40942490?spm=1000.2115.3001.5113'>我的CSDN博客地址</a>[害羞][害羞][哈哈]<br/>",
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
          },
            {
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