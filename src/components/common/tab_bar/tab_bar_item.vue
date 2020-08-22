<template>
  <div class="item_wamp">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.item_wamp {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  display: flex;
  .user_img {
    width: 3rem;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>
