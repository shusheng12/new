<template>
  <div class="wamp">
    <!-- 头部 -->
    <div class="header" :style="{ color: color, background: bgc }">
      <div class="left">
        <van-icon name="arrow-left" @click="onClickLeft" />
      </div>
      <div class="body">赵丽颖</div>
      <div class="right">
        <van-icon name="search" />
        <van-icon name="ellipsis" />
      </div>
    </div>
    <!-- 背景图 -->
    <div class="bgimg">
      <img src="@/assets/img/zly1.jpg" alt />
    </div>
    <!-- 个人信息 -->
    <div class="user_inof">
      <div class="top">
        <div class="img">
          <img src="@/assets/img/zly1.jpg" alt />
        </div>
        <div class="guanzu">
          <div>私信</div>
          <div>+关注</div>
        </div>
      </div>
      <div class="body">
        <div class="user_name">赵丽颖</div>
        <div class="user_item">
          <div class="item" v-for="i of 4" :key="i">
            <div>
              <span>79w</span>
              <i>粉丝</i>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <p>认证：赵丽颖工作室值</p>
        <p class="jianjie">简介：这是赵丽颖个人全职高手这是赵丽颖个人全职高手这是赵丽颖个人全职高手</p>
      </div>
    </div>

    <div class="content">
      <van-tabs animated v-model="tabActive" title-active-color="#278bef" color="#278bef">
        <van-tab :title="'全部(' + 111 + ')'">
          <new-all></new-all>
        </van-tab>
        <van-tab :title="'文章(' + 111 + ')'">
          <new-article></new-article>
        </van-tab>
        <van-tab :title="'视频(' + 111 + ')'">
          <new-video></new-video>
        </van-tab>
        <van-tab :title="'关注(' + 111 + ')'">
          <new-attention></new-attention>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import newAll from "./comps/newAll.vue";
import newArticle from "./comps/newArticle.vue";
import newVideo from "./comps/newVideo.vue";
import newAttention from "./comps/newAttention.vue";

export default {
  components: {
    newAll,
    newArticle,
    newVideo,
    newAttention
  },
  data() {
    return {
      color: "#fff",
      bgc: "rgba(0, 0, 0, 0.1)",
      tabActive: 1
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 100) {
        this.color = "#000";
        this.bgc = "#fff";
      } else {
        this.color = "#fff";
        this.bgc = "rgba(0, 0, 0, 0.1)";
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import "~@/assets/css/style.less";

.wamp {
  background-color: @fa;
}
// 头部
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  text-align: center;
  height: 2.5rem;
  z-index: 11;
  .left {
    width: 3rem;
    margin: auto;
    .van-icon {
      font-size: 1.5rem;
      vertical-align: middle;
    }
  }
  .body {
    line-height: 2.5rem;
    flex: 1;
  }
  .right {
    width: 6rem;
    display: flex;
    margin: auto;

    .van-icon {
      flex: 1;
      font-size: 1.5rem;
      vertical-align: middle;
    }
  }
}
// 背景图
.bgimg {
  img {
    width: 100%;
  }
}
// 个人信息
.user_inof {
  .top {
    position: relative;
    height: 4.5rem;
    .img {
      width: 5rem;
      height: 5rem;
      position: absolute;
      border-radius: 50%;
      top: -30%;
      left: 10%;
      overflow: hidden;
      box-shadow: 0 1px 0.1px 0 rgba(0, 0, 0, 0.1),
        1px 0 0.1px 0 rgba(0, 0, 0, 0.1), 0 -1px 0.1px 0 rgba(0, 0, 0, 0.1),
        -1px 0 0.1px 0 rgba(0, 0, 0, 0.1);
      img {
        height: 100%;
      }
    }
    .guanzu {
      float: right;
      div {
        box-sizing: border-box;
        margin-top: 1rem;
        display: inline-block;
        padding: 0.5rem 1rem;
        background-color: @red;
        color: #fff;
        margin-right: 2rem;
      }
    }
  }
  .body {
    box-sizing: border-box;
    padding: 0 1rem;
    .user_name {
      font-size: 20/16rem;
      font-weight: 600;
    }
    .user_item {
      display: flex;
      .item {
        height: 2.5rem;
        line-height: 2.5rem;
        padding-left: 0.8rem;
        i {
          color: @grey;
          padding-left: 0.2rem;
          .tx-12;
        }
      }
    }
  }
  .footer {
    padding: 1rem;
    line-height: 1.5rem;
    .jianjie {
      margin-top: 0.5rem;
    }
  }
}
.content {
  background-color: #fff;
}
</style>
