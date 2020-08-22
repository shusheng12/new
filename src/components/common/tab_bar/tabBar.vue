<template>
  <div class="wamp">
    <item :class="{active:ative_item==0}" @click.native="ative_item=0">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </item>
    <item :class="{active:ative_item==1}" @click.native="ative_item=1">
      <i class="iconfont icon-ziyuan"></i>
      <span>视频</span>
    </item>
    <item :class="{active:ative_item==2}" @click.native="ative_item=2">
      <i class="iconfont icon-gz"></i>
      <span>关注</span>
    </item>
    <item :class="{active:ative_item==3}" @click.native="ative_item=3">
      <i class="iconfont icon-wode"></i>
      <span>我的</span>
    </item>
  </div>
</template>
<script>
import Item from "./tab_bar_item.vue";
export default {
  components: {
    Item
  },
  data() {
    return {
      ative_item: 0
    };
  }
};
</script>

<style lang="less" scoped>
.wamp {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 48/16rem;
  z-index: 99999;
  background-color: #fff;
  display: flex;
  text-align: center;
  .active {
    color: red;
  }
  i {
    font-size: 1.5rem;
  }
  span {
    font-size: 12/16rem;
  }
}
</style>
