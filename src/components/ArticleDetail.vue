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
        <span>{{ article.wordCount }}字</span>
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
    <div v-if="article.isComment" style="width: 80%">
      <el-input type="text" placeholder="Github用户名(用于获取头像)" v-model="commenterText"/>
      <el-input type="text" placeholder="你的邮箱(方便我联系你)" v-model="commenterEmailText" :change="inputPattern()"/>
      <comment  :commentList=commentList :commentNum=commentList.length commentWidth=100% @doSend="doSend"
               @doChidSend="doChidSend"/>
      <el-button @click="loadMore" :disabled="this.loadMoreSwitch === false" :loading="this.loadingSwitch">加载更多</el-button>
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
    this.appendCommentList = this.appendCommentList.concat(this.commentList);
  },
  methods: {
    getArticleDetail() {
      this.$http.get(process.env.VUE_APP_BASE_URL + '/blog/query/' + this.articleId).then(function (success) {
        this.article = success.body.data;
      }, function () {
        this.$message('获取文章失败');
      });
    },

    getComment() {
      this.$http.get(process.env.VUE_APP_BASE_URL + '/comment/get/byarticleid', {
        params: {
          articleId: this.articleId,
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      }).then(function (success) {
        this.commentList = success.body.data.list;
        this.appendCommentList = this.appendCommentList.concat(this.commentList);
        this.commentTotal = success.body.data.total;
      }, function () {
        this.$message('获取评论失败');
      });
    },
    doSend(text) {
      this.$http.post(process.env.VUE_APP_BASE_URL + '/comment/add', {
        articleId: this.articleId,
        parentId: 0,
        commenter: this.commenterText,
        commenterEmail: this.commenterEmailText,
        comment: text
      }).then(function (success) {
        if (success.body.code == 200) {
          this.getComment();
        }
      }, function () {

      });
    },
    doChidSend(text, targetUserId, parentId) {
      this.$http.post(process.env.VUE_APP_BASE_URL + '/comment/add', {
        articleId: this.articleId,
        parentId: targetUserId,
        commenter: this.commenterText,
        commenterEmail: this.commenterEmailText,
        comment: text,
        ext1: parentId
      }).then(function (success) {
        console.log(success)
        if (success.body.code == 200) {
          this.getComment();
        }
      }, function () {

      });
    },
    inputPattern() {
      const isMatch = this.emailReg.test(this.commenterEmailText);
      if (!isMatch) {
        this.$message('这是一条消息提示');
      }
    },
    loadMore() {
      this.loadingSwitch = true;
      this.pageNum++;
      this.getComment();
      const vm = this;
      setTimeout(function () {
        if (vm.commentList.length === 0) {
          vm.loadMoreSwitch = false;
          vm.$message('无更多评论');
          vm.loadingSwitch = false;
        }
      }, 500)
    }
  },
  data() {
    return {
      emailReg: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
      article: {},
      commentList: [],
      appendCommentList: [],
      commenterText: 'chenums',
      commenterEmailText: '1@123.com',
      pageNum: 1,
      pageSize: 10,
      commentTotal: 0,
      loadMoreSwitch: true,
      loadingSwitch: false
    }
  }
}
</script>

<style scoped lang="less">
.el-button{
  width: 100%;
}
.el-button:focus, .el-button:hover {
  color: rgb(97, 155, 111);
  border-color: rgb(139, 183, 151);
  background-color: #fff;
}
.el-input {
  display: block;
  margin-bottom: 10px;
}

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