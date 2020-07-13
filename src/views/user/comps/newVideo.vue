<template>
  <div>
    <div class="item" v-for="i of 5" :key="i">
      <div
        class="title"
      >《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？</div>
      <div class="img_url">
        <img src="@/assets/img/zly1.jpg" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.item {
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  border-bottom: 1px solid #f2f2f2;

  .title {
    flex: 1;
    height: 4.5rem;
    display: -webkit-box;
    display: -moz-box;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; /*显示行数*/
  }
  .img_url {
    width: 7rem;
    img {
      width: 100%;
      border-radius: 0.4rem;
    }
  }
}
</style>
