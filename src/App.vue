<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less" scoped>
@import "~@/assets/css/style.less";

/* 全局修改<van-nav-ba>标签头部样式*/
/deep/ .van-nav-bar .van-nav-bar__title {
  color: #fff;
}
/deep/ .van-nav-bar {
  background-color: @red;
}
/deep/ .van-nav-bar .van-icon {
  color: #fff;
}
</style>
