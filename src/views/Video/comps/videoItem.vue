<template>
  <div>
    <video-player
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
      @click="playerOrStop"
    ></video-player>
  </div>
</template>
<script>
export default {
  props: ["videolist", "index"],
  data() {
    return {
      playerOptions: {
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: this.videolist.src //url地址
          }
        ],
        //poster: "../../static/images/test.jpg", //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: false
      },
      playing: true
    };
  },
  created() {
    this.ative();
  },
  methods: {
    playerOrStop() {
      //console.dir(this.$refs.videoPlayer);
      if (this.playing) {
        this.$refs.videoPlayer.player.pause();
        this.playing = false;
      } else {
        this.$refs.videoPlayer.player.play();
        this.playing = true;
      }
    },
    // 暂停
    stop() {
      this.$refs.videoPlayer.player.pause();
      this.playing = false;
    },
    // 播放
    play() {
      this.$refs.videoPlayer.player.load();
      this.$refs.videoPlayer.player.play();
      this.playing = true;
    },
    ative() {
      if (this.index == 0) {
        this.playerOptions.autoplay = true;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.video-player {
  height: 100vh;
  display: flex;
  align-items: center;
}
/deep/ .video-js .vjs-big-play-button {
  height: 2rem !important;
  line-height: 2rem !important;
  border-radius: 50%;
  font-size: 1.5rem;
  width: 2rem;
}
/deep/.vjs-icon-placeholder:before {
  padding-left: 0.1rem;
}
</style>
