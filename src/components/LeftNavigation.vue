<template>
  <div class="LeftNavigation-Container">
    <NavLogo name="Chenum" font="22px" ></NavLogo>
    <NavClassification name="最新文章" font="14px"></NavClassification>
    <NavClassification name="文章存档" font="14px"></NavClassification>
    <NavClassification name="技术沙龙" font="14px"></NavClassification>
    <NavClassification name="关于我" font="14px"></NavClassification>
  </div>
</template>


<script>
import NavClassification from "@/components/NavClassification";
import NavLogo from "@/components/NavLogo";
export default{
  name:"LeftNavigation",
  components:{
    /* eslint-disable */
    NavClassification,
    NavLogo
  }

}
</script>

<style scoped lang="less">

</style>