<template>
  <div class="wamp">
    <!-- 头部搜索框 -->
    <div class="head">
      <div class="hd_left">
        <van-icon name="scan" />
      </div>
      <div class="hd_body">
        <van-icon name="search" />
        <input type="text" @focus="onSearch" placeholder="请输入搜索内容" />
      </div>
    </div>
    <div style="height: 49px"></div>

    <!-- nav导航· -->
    <div class="top_nav">
      <div class="list">
        <div>
          <span
            :class="{ nav_ative: ative == index }"
            v-for="(item, index) of nav_list"
            :key="index"
            @click="at_index(index)"
          >{{ item }}</span>
        </div>
      </div>
      <div class="btn">
        <van-icon name="bars" />
      </div>
    </div>
    <!-- 图片轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) of imgUrl" :key="index">
        <img :src="item" alt />
      </van-swipe-item>
    </van-swipe>

    <!-- icon图标 -->
    <div class="icon">
      <div class="icon_item">
        <i class="iconfont icon-meishi"></i>
        <p>美食</p>
      </div>
      <div class="icon_item" @click="$router.push({ path: 'shop_home' })">
        <i class="iconfont icon-gouwu"></i>
        <p>购物</p>
      </div>
      <div class="icon_item" @click="$router.push({ path: 'videoHome' })">
        <i class="icon iconfont icon-icon-test"></i>
        <p>视频</p>
      </div>
      <div class="icon_item">
        <i class="icon iconfont icon-lvyou"></i>
        <p>旅游</p>
      </div>
    </div>

    <!-- 热门消息 -->
    <div class="hot_news">
      <div class="key">最新消息</div>
      <div class="value">
        <van-swipe style="height: 3rem" vertical :autoplay="3000" :show-indicators="false">
          <van-swipe-item @click="$router.push('newsDetail')">
            <span>热点</span>蔡徐坤花式打篮球
          </van-swipe-item>
          <van-swipe-item @click="$router.push('newsDetail')">
            <span>热点</span>罗志祥是怎样成为时间管理大师的
          </van-swipe-item>
          <van-swipe-item @click="$router.push('newsDetail')">
            <span>热点</span>我从来没碰过钱，我对钱不感兴趣
          </van-swipe-item>
          <van-swipe-item @click="$router.push('newsDetail')">
            <span>热点</span>没有什么是解决不了的，有的话一起爬山吧
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <!-- 消息 -->
    <div v-for="i of 3" :key="i">
      <div class="news">
        <p>知识改变命运知识改变命运</p>
        <div class="news_item">
          <div>
            <img src="@/assets/img/zly1.jpg" alt />
          </div>
        </div>
      </div>
      <div class="news">
        <p>知识改变命运知识改变命运</p>
        <div class="news_item1">
          <div v-for="l of 3" :key="l">
            <img src="@/assets/img/zly1.jpg" alt />
          </div>
        </div>
      </div>
    </div>
    <!-- 视频 -->
    <div class="video">
      <div class="title">
        精彩小视频
        <van-icon name="arrow" />
      </div>
      <div class="mt_join_content">
        <div class="join_list">
          <div class="myJoin_img" v-for="item in 8" :key="item">
            <img src="@/assets/img/zly5.jpg" alt />
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div>我也是有底线的~~</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      // 头部导航
      nav_list: [
        "首页",
        "推荐",
        "体育",
        "娱乐",
        "生活",
        "购物",
        "财经",
        "旅游",
        "游戏",
        "影视"
      ],
      // 轮播图
      imgUrl: [
        require("@/assets/img/zly1.jpg"),
        require("@/assets/img/zly2.jpg"),
        require("@/assets/img/zly3.jpg"),
        require("@/assets/img/zly4.jpg")
      ],
      ative: 0
    };
  },
  methods: {
    // 点击搜索框
    onSearch() {
      this.$router.push("/Search");
    },
    at_index(index) {
      this.ative = index;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/style.less";

// 页面
.wamp {
  background-color: @fa;
}
// 活跃nav
.nav_ative {
  color: @red;
}
// 头部
.wamp .head {
  position: fixed;
  display: flex;
  width: 100%;
  z-index: 1;
  background-color: @red;
  .hd_left {
    width: 10%;
    .van-icon {
      font-size: 2rem;
      color: #fff;
      margin: 0.5rem;
    }
  }
  .hd_body {
    flex: 1;
    color: #ccc;
    position: relative;
    padding: 0.5rem;
    .van-icon {
      position: absolute;
      top: 1rem;
      left: 2rem;
      // transform: translate(50%, 50%);
    }
    input {
      border: 0;
      color: #2a2d2e;
      box-sizing: border-box;
      border-radius: 1.5rem;
      width: 100%;
      height: 1.5rem;
      padding: 1rem;
      padding-left: 3rem;
    }
  }
}

// nav 导航
.wamp .top_nav {
  display: flex;
  color: #000;
  background-color: #fff;
  height: 48rem/16;
  // width: 100%;
  //align-items: center;
  // flex-direction: row;
  // flex-wrap: nowrap;
  .list {
    overflow-x: scroll;
    background: #fafafa;
    padding: 0.5rem;
    flex: 1;
    div {
      display: flex;
      width: 200%;
      height: 100%;
      align-items: center;
      span {
        width: 25%;
        text-align: center;
      }
    }
  }
  .btn {
    width: 10%;
    font-size: 2rem;
    box-sizing: border-box;
    .van-icon {
      // transform: translate(50%, 50%);
      margin-top: 0.5rem;
      margin-left: 0.2rem;
    }
  }
}

// 图片轮播
.my-swipe .van-swipe-item img {
  width: 100%;
}

// icon图标导航
.icon {
  height: 5rem;
  display: flex;
  .icon_item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    flex: 1;
    height: 100%;
    margin: auto;
    text-align: center;
    .icon {
      height: 0;
    }
    // justify-content: space-around;
    &:nth-of-type(1) i {
      font-size: 3rem;
      // color: linear-gradient(
      //   134deg,
      //   rgba(122, 176, 249, 1) 0%,
      //   rgba(35, 138, 240, 1) 100%
      // );
      //border-radius: 0rem;
      color: #ffaa00;
    }
    &:nth-of-type(2) i {
      margin: 0.2rem;
      font-size: 2.5rem;
      color: #ff5555;
    }
    &:nth-of-type(3) i {
      color: rgba(122, 176, 249, 1);
      font-size: 3rem;
    }
    &:nth-of-type(4) i {
      color: #7bdc60;
      font-size: 3rem;
    }
  }
}

// 热门
.hot_news {
  width: 90%;
  height: 3rem;
  box-sizing: border-box;
  display: flex;
  padding-left: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  margin: 1rem auto;
  line-height: 3rem;
  .key {
    .tx-18;
    font-weight: 700;
    width: 5rem;
  }
  .value {
    .tx-14;
    flex: 1;
    width: 5rem;
    .van-swipe-item {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    span {
      display: inline-block;
      .tx-12;
      color: #fff;
      padding: 0.2rem;
      height: 0.6rem;
      border-radius: 0.3rem;
      line-height: 0.6rem;
      margin-right: 0.5rem;
      vertical-align: middle;
      margin-top: -0.2rem;
      background: linear-gradient(
        134deg,
        rgba(122, 176, 249, 1) 0%,
        rgba(35, 138, 240, 1) 100%
      );
    }
  }
}

// 消息
.news {
  background-color: #fff;
  padding-bottom: 0.5rem;
  margin-bottom: 0.2rem;
  p {
    padding: 1rem 1rem 0.5rem;
  }
  .news_item {
    overflow: hidden;
    border-radius: 0.5rem;

    margin: 0 1rem;
    display: flex;
    div {
      flex: 1;
      img {
        width: 100%;
        flex: 1;
        box-sizing: border-box;
      }
    }
  }
  .news_item1 {
    overflow: hidden;
    border-radius: 0.5rem;
    margin: 0 1rem;
    display: flex;
    justify-content: space-evenly;
    div {
      width: 31%;
      img {
        width: 100%;
        flex: 1;
        box-sizing: border-box;
      }
    }
  }
}
// 短视频
.video {
  padding-bottom: 1rem;
  margin-bottom: 0.2rem;
  background: white;
  .title {
    padding: 0.5rem 1rem;
    background-color: #fff;
    .van-icon {
      vertical-align: middle;
      margin-top: -0.2rem;
    }
  }
  .mt_join_content {
    display: flex;
    align-items: center;
    flex-direction: row;
    overflow: scroll;
    .join_list {
      display: flex;
      padding-right: 1rem;
      .myJoin_img {
        width: 6.5rem;
        overflow: hidden;
        padding-left: 1rem;
        img {
          border-radius: 0.4rem;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
// 底线
.footer {
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  color: #aaaaaa;
}
</style>
