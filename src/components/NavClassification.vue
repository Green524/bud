<template>
  <div class="NavClassification-Container">
    <span :style="cssFont">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "NavClassification",
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
.NavClassification-Container {
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
  }

  :hover {
    color: black;
    background-color: aliceblue;
  }
}
</style>