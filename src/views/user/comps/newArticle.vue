<template>
  <div class>
    <div class="item" v-for="(i, index) of list" :key="index">
      <div class="content">
        <div class="msg">{{ i.msg }}</div>
        <div class="content_img" v-if="i.img">
          <img :src="i.img" alt />
        </div>
      </div>
      <div class="icons">
        <i>1阅读</i>
        <i>1阅读</i>
        <i>1阅读</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          msg:
            "《乌龙闯情关》里刘病已到底喜不喜欢霍111111水仙？《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？",
          img: require("@/assets/img/zly1.jpg")
        },
        { msg: "《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？euoeirwqrpqoeiyre" },
        {
          msg:
            "《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？"
        },
        { msg: "《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？" },
        { msg: "《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？" },
        { msg: "《乌龙闯情关》里刘病已到底喜不喜欢霍水仙？" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.item {
  padding: 1rem;
  border-bottom: 1px solid #f2f2f2;
  .content {
    .msg {
      line-height: 1.5rem;
      max-height: 4.5rem;
      display: -webkit-box;
      display: -moz-box;
      white-space: pre-wrap;
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    }
    .content_img {
      img {
        width: 100%;
      }
    }
  }

  .icons {
    margin-top: 0.6rem;
    font-size: 12/16rem;
    i {
      display: inline-block;
      padding: 0 0.8rem;
      color: #666;
    }
  }
}
</style>
