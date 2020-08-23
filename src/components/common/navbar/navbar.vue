<template>
  <div class="navbar" :style="{ backgroundColor: color }">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    color: String
  },
  data() {
    return {
      keyword: ""
    };
  }
};
</script>
<style scoped lang="less">
.navbar {
  display: flex;
  height: 3rem;
  text-align: center;
  color: #fff;
}
.left {
  width: 2.5rem;
  text-align: center;
  height: 3rem;
  line-height: 3rem;
}
.center {
  flex: 1;
  color: #000;
  height: 100%;
}
.right {
  width: 4rem;
  height: 3rem;
  line-height: 3rem;
  color: #fff;
}
</style>
