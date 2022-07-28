<template>
  <div class="LeftNavigation-Container">
    <NavClassification name="首页" font="35px"></NavClassification>
    <NavClassification name="最新文章" font="20px"></NavClassification>
    <NavClassification name="文章存档" font="20px"></NavClassification>
    <NavClassification name="技术沙龙" font="20px"></NavClassification>
    <NavClassification name="关于我" font="20px"></NavClassification>
  </div>
</template>


<script>
import NavClassification from "@/components/NavClassification";
export default{
  name:"LeftNavigation",
  components:{
    /* eslint-disable */
    NavClassification
  }

}
</script>

<style scoped>
.LeftNavigation-Container{
  height: 100%;
  width: 200px;
  background-color: #2A2935;
}
</style>