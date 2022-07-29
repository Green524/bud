<template>
  <div class="NavLogo-Container">
    <span :style="cssFont">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "NavLogo",
  props: {
    name: {
      type: String,
      required: true
    },
    font: {
      type: String,
      required: true,
      default:"10px"
    }
  },
  computed: {
    cssFont() {
      return {'--font': this.font,}
    }
  }
}
</script>

<style scoped lang="less">
.NavLogo-Container {
  background-color: #26252F;
  color: #FFC402;
  height: 50px;
  width: 100%;
  position: relative;
  span {
    font-size: var(--font);
    text-align: right;
    line-height: 50px;
    display: block;
    cursor: pointer;
    position: relative;
    padding-right: 15px;
    font-family:PingFang SC,Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans-serif;
    font-weight: 400;
    color: #FFC402;

  }
  :hover {
    color: black;
    background-color: aliceblue;
  }
}
</style>