<template>
  <div class="msg">
    <transition name="fade">
      <div class="msg_content" v-show="isshow">
        <div class="msg_pl">
          <div>6666条评论</div>
          <div @click="aaa">
            <van-icon name="cross" />
          </div>
        </div>
        <div class="msg_content1" ref="msg_content">
          <div>
            <div class="msg_user" v-for="i of 30" :key="i">
              <div class="msg_img">
                <img src="@/assets/img/zly5.jpg" />
              </div>
              <div class="nr">
                <div class="msg_color">赵丽颖</div>
                <div>
                  这是一个评论这是一个评论这是一个评论这是一个评论这是一个评论
                  <span class="msg_color">3小时前</span>
                </div>
              </div>
              <div class="zhan">
                <van-icon class="icon_name" name="like-o" />
                <div>234w</div>
              </div>
            </div>
          </div>
        </div>
        <van-cell-group class="srk">
          <van-field v-model="value" placeholder="留下你精彩的评论" right-icon="chat-o " />
        </van-cell-group>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: false,
      value: ""
    };
  },
  methods: {
    aaa() {
      this.isshow = !this.isshow;
    }
  },
  mounted() {}
};
</script>

<style scoped>
.msg_color {
  color: #ccc;
  font-size: 15px;
}
.msg_content {
  position: absolute;
  height: 85%;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #fff;
  border-radius: 8px 8px 0 0;
  z-index: 9999;
  color: #000;
  overflow: hidden;
}

.msg_content1 {
  position: absolute;
  top: 40px;
  right: 0;
  left: 0;
  padding: 1rem;
  box-sizing: border-box;
  bottom: 40px;
  overflow: scroll;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(100%);
}
.msg_pl {
  display: flex;
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid #cccc;
}

.msg_pl :nth-child(1) {
  flex: 1;
}
.msg_pl :nth-child(2) {
  width: 40px;
  text-align: left;
}

.msg_user {
  display: flex;
  /* align-items: center; */
}

.msg_user .msg_img {
  width: 50px;
  height: 50px;
  margin-top: 10px;
  border-radius: 50%;
  overflow: hidden;
}
.msg_user .msg_img img {
  width: 100%;
}
.msg_user .nr {
  flex: 1;
  text-align: left;
  padding: 3px 5px;
}
.msg_user .nr :nth-child(2) {
  flex: 1;
  text-align: left;
  padding: 3px 5px;
}

.msg_user .zhan {
  width: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.srk {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 40px;
  border-top: 1px solid #ccc;
}
</style>
