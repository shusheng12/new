<template>
  <div class="home">
    <div class="nav_tab">
      <div>
        <van-icon name="live" @click="$router.push('/Home')" />
      </div>
      <div @click="navative1(0)" :class="{ ative: 0 === navative }">
        <span>关注</span>
      </div>
      <div @click="navative1(1)" :class="{ ative: 1 === navative }">
        <span>推荐</span>
      </div>
      <div>
        <van-icon name="search" />
      </div>
    </div>
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(i, index) of list" :key="index">
        <div class="msg_text">
          <div class="name">@黄树盛的抖音</div>
          <div>vue项目学习 vue项目学习 vue项目学习 vue项目学习 vue项目学习</div>
          <van-notice-bar
            color="#fff"
            background="#000"
            speed="50"
            left-icon="music-o"
            text="背景音乐背景音乐背景音乐背景音乐背景音乐背景音乐背景音乐背景音乐背景音乐背景音乐背景音乐背景音乐"
          />
        </div>
        <div class="profile">
          <div>
            <img src="@/assets/img/zly1.jpg" />
          </div>
          <div>
            <van-icon class="icon_name" name="like-o" />
            <p>234.00w</p>
          </div>
          <div>
            <van-icon class="icon_name" name="more-o" @click="pl" />
            <p>2.00w</p>
          </div>
          <div>
            <van-icon class="icon_name" name="share" />
            <p>2.00w</p>
          </div>
        </div>
        <div class="profile_img">
          <div>
            <img src="@/assets/img/zly1.jpg" />
          </div>
        </div>
        <div>
          <video-item ref="videos" :videolist="i" :index="index" />
        </div>
      </swiper-slide>
    </swiper>
    <home-msg ref="homemsg"></home-msg>
  </div>
</template>
<script>
import homeMsg from "./reply.vue";
import videoItem from "./videoItem.vue";
export default {
  components: {
    homeMsg,
    videoItem
  },
  data() {
    return {
      page: 0,
      navative: 0,
      list: [
        { id: 1, src: require("@/assets/video/v1.mp4") },
        { id: 2, src: require("@/assets/video/v2.mp4") },
        { id: 3, src: require("@/assets/video/v3.mp4") },
        { id: 4, src: require("@/assets/video/v4.mp4") }
      ],
      swiperOptions: {
        direction: "vertical",
        height: window.innerHeight,
        autoHeight: true,
        on: {
          // 点击
          tap: () => {
            this.$refs.videos[this.page].playerOrStop();
          },
          // 下一个
          slideNextTransitionStart: () => {
            this.page += 1;
            this.$refs.videos[this.page - 1].stop();
            this.$refs.videos[this.page].play();
          },
          // 上一个
          slidePrevTransitionEnd: () => {
            this.page -= 1;
            this.$refs.videos[this.page + 1].stop();
            this.$refs.videos[this.page].play();
          }
        }
      }
    };
  },
  methods: {
    pl() {
      this.$refs.homemsg.isshow = true;
    },
    navative1(id) {
      this.navative = id;
    },
    playerOrStop(index) {
      this.$refs.videos[index].playerOrStop();
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  background: #000;
  width: 100%;
  height: 100vh;
  color: #fff;
}
.img_icon {
  font-size: 30px;
}
.nav_tab {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  color: #fff;
  display: flex;
  font-size: 20px;
  justify-content: space-evenly;
  padding-top: 20px;
  text-align: center;
}
.video-player {
  height: 100vh;
  display: flex;
  align-items: center;
}

.msg_text {
  position: absolute;
  left: 10px;
  bottom: 80px;
  z-index: 9;
  font-size: 12px;
  display: flex;
  flex-direction: column;
}
.msg_text div {
  width: 250px;
  line-height: 20px;
}
.ative {
  color: #fff;
}
.ative span {
  border-bottom: 1px solid #fff;
}

.msg_text .van-notice-bar {
  padding: 0;
}

.profile {
  position: absolute;
  bottom: 120px;
  right: 0;
  height: 300px;
  width: 70px;
  z-index: 99999;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.profile :nth-child(1) {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.profile img {
  width: 100%;
}
.icon_name {
  font-size: 40px;
}
.profile p {
  padding: 0;
  margin: 0;
}
.profile_img {
  position: absolute;
  bottom: 70px;
  width: 45px;
  height: 45px;
  right: 15px;
  background-color: rgb(41, 39, 39);
  z-index: 9999;
  border-radius: 50%;
  animation: round 3s 0s linear infinite;
}
.profile_img div {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 10px;
}

.profile_img div img {
  height: 100%;
  width: 100%;
}

@keyframes round {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.video {
  height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
}
.swiper-slide {
  height: 100vh !important;
  overflow: hidden;
}
/deep/.van-notice-bar {
  background: transparent !important;
}
/deep/.video-js.vjs-fluid {
  height: 100%;
}
</style>
