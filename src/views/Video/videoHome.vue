<template>
  <div>
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item to="/videoIndex">首页</van-tabbar-item>
      <van-tabbar-item>广州</van-tabbar-item>
      <van-tabbar-item>
        <van-icon name="add-square" class="img_icon" />
      </van-tabbar-item>
      <van-tabbar-item>消息</van-tabbar-item>
      <van-tabbar-item>我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style scoped>
.van-tabbar {
  position: fixed;
  z-index: 999999;
  background: transparent;
}
.van-tabbar-item {
  color: #ccc;
}
.van-tabbar-item--active {
  color: #fff;
  font-size: 16px;
}
.img_icon {
  font-size: 30px;
}
</style>
