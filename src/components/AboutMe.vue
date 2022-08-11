<template>
  <section class="AboutMe-Container">
    <el-page-header @back="goBack" content="关于我" style="margin-bottom: 30px;"></el-page-header>
    <div class="aboutme-content">
        fjdksfjksd jksdkf sjfksdjf ksdjkf jk
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      currentDate: new Date()
    };
  },
  methods: {
    goBack() {
      console.log('go back');
    }
  }
}
</script>

<style scoped lang="less">
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
.aboutme-content{
  padding: 1rem;
  border: 1px solid #eee;
  background: #fff;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
  box-shadow: 0 1px 1px rgba(0,0,0,.05);
}
</style>