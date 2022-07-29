<template>
  <div class="RootBody-Container">
    <LeftNavigation></LeftNavigation>
    <RightArticleItems></RightArticleItems>
  </div>
</template>

<script>
import LeftNavigation from "@/components/LeftNavigation";
import RightArticleItems from "@/components/RightArticleItems";
export default {
  name: 'RootBody',
  components:{
    LeftNavigation,RightArticleItems
  }
}
</script>

<style scoped lang="less">
.RootBody-Container{
  width: 100%;
  height: 100%;
}
.LeftNavigation-Container{
  height: inherit;
  width: 10%;
  background-color: #2A2935;
  float: left;
  margin-right: 20px;
}
.RightArticleItems-Container{
  width: 87%;
  float: left;
}
</style>
