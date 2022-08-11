<template>
    <div>
      <el-pagination
          :background="true"
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pagination"
}
</script>
<style lang="less">
.el-pagination{
  text-align: center;
}
//.el-pagination.is-background .el-pager li {
//  /*对页数的样式进行修改*/
//  background-color: rgb(139, 183, 151);
//  color: #FFF;
//}
//.el-pagination.is-background .btn-next {
//  /*对下一页的按钮样式进行修改*/
//  background-color: rgb(139, 183, 151);
//  color: #FFF;
//}
//.el-pagination.is-background .btn-prev {
//  /*对上一页的按钮样式进行修改*/
//  background-color: rgb(139, 183, 151);
//  color: #FFF;
//}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  /*当前选中页数的样式进行修改*/
  background-color: rgb(139, 183, 151);
  color: #FFF;
}
</style>