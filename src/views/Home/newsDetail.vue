<template>
  <div class="wamp">
    <van-nav-bar title="新闻快报" fixed left-arrow @click-left="onClickLeft">
      <template #title>
        <div v-if="is_show_info" class="create_user create_user_top">
          <div class="imgUrl">
            <img src="@/assets/img/zly1.jpg" alt />
          </div>
          <div class="create_name create_name_top">
            <p>赵丽颖</p>
            <span>2020/7/7</span>
          </div>
        </div>
      </template>
    </van-nav-bar>
    <div style="height: 46px"></div>
    <div class="title">
      时间管理大师 时间管理大师 时间管理大师 时间管理大师 时间管理大师
      时间管理大师时间管理大师 时间管理大师 时间管理大师 时间管理大师
      时间管理大师 时间管理大师时间管理大师 时间管理大师 时间管理大师
      时间管理大师 时间管理大师 时间管理大师
    </div>
    <div class="create_user">
      <div class="imgUrl">
        <img src="@/assets/img/zly1.jpg" alt />
      </div>
      <div class="create_name">
        <p>赵丽颖</p>
        <span>2020/7/7</span>
      </div>
      <div class="guanzu">
        <span>关注</span>
      </div>
    </div>
    <div class="detail">
      <span>
        《中华人民共和国香港特别行政区维护国家安全法第四十三条实施细则》的主要内容包括7条：
        <br />1、为搜证而搜查有关地方;
        <br />2、限制受调查的人离开香港；
        <br />3、冻结、限制、没收及充公与危害国家安全罪行相关财产；
        <br />4、移除危害国家安全的信息及要求协助；
        <br />5、向外国及台湾政治性组织及其代理人要求就涉港活动提供资料；
        <br />6、进行截取通讯及秘密监察的授权申请； 7、提供资料和提交物料。
        <br />其中，第五条尤其让“台独”心虚。
        根据《实施细则》，如果没有按要求向香港警方提供资料，除非被证明已尽力，或者有不可能控制的原因，否则一旦定罪，将被判罚款10万元港币及监禁6个月。
        这一细则已于7日生效。
      </span>
      <p>2020人阅读</p>
    </div>

    <div class="user_msg" v-for="list of 5" :key="list">
      <div class="user_left">
        <div class="img_url">
          <img src="@/assets/img/zly1.jpg" alt />
        </div>
      </div>
      <div class="user_right">
        <div class="user_name">
          <div>赵丽颖</div>
          <div>
            <van-icon name="good-job-o" />777
          </div>
        </div>
        <div class="user_msg_detail">
          <span>
            根据《实施细则》，如果没有按要求向香港警方提供资料，除非被证明已尽力，或者有不可能控制的原因，否则一旦定罪，将被判罚款10万元港币及监禁6个月。
            根据《实施细则》，如果没有按要求向香港警方提供资料，除非被证明已尽力，或者有不可能控制的原因，否则一旦定罪，将被判罚款10万元港币及监禁6个月。
            根据《实施细则》，如果没有按要求向香港警方提供资料，除非被证明已尽力，或者有不可能控制的原因，否则一旦定罪，将被判罚款10万元港币及监禁6个月。
          </span>
          <p>5小时前</p>
        </div>
      </div>
    </div>
    <div style="height:2.5rem"></div>

    <div class="footer">
      <div class="info">
        <input type="text" placeholder="留下你的精彩评论~" />
      </div>
      <div class="icon">
        <van-icon name="chat-o" />
        <van-icon name="star-o" />
        <van-icon name="good-job-o" />
        <van-icon name="share" @click="show_share = true" />
      </div>
    </div>

    <van-popup v-model="show_share" round position="bottom" :style="{ height: '40%' }">
      <div class="share">
        <div class="share_title">分享到</div>
        <div class="share_body">
          <div class="share_item" v-for="(item, index) in 4" :key="index">
            <i class="iconfont icon-weibo"></i>
            <span>qq</span>
          </div>
        </div>

        <button class="share_btn" @click="show_share = false">取消</button>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 是否显示头部user信息
      is_show_info: false,
      show_share: false
    };
  },
  mounted() {
    // 监听滚动
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    // 返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    // 监听滚动回调
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 200) {
        this.is_show_info = true;
      } else {
        this.is_show_info = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/style.less";

/deep/.van-nav-bar__title {
  width: 60%;
}
.create_name_top {
  text-align: left;
  // color: #000;
}

.wamp {
  padding: 0 0.3rem;
}
.title {
  padding: 0.3rem;
  line-height: 3/2rem;
  height: 2.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.create_user {
  padding: 1rem 0.2rem;
  display: flex;
  height: 2.5rem;
  .imgUrl {
    height: 2.5rem;
    width: 2.5rem;
    overflow: hidden;
    border-radius: 50%;
    img {
      height: 100%;
    }
  }
  .create_name {
    flex: 1;
    padding: 0 0.8rem;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    p {
      margin: 0;
    }
    span {
      .tx-12;
    }
  }
  .guanzu {
    width: 3rem;
    text-align: center;
    span {
      display: inline-block;
      background-color: @red;
      padding: 0.2rem 0.5rem;
      color: #fff;
      .tx-14;
      margin-top: 0.3rem;
      border-radius: 0.2rem;
    }
  }
}
.detail {
  .tx-14;
  color: #000;
  line-height: 1.3rem;

  p {
    .tx-12;
    margin: 2rem 0 1rem 0.5rem;
  }
}

// 评论列表
.user_msg {
  display: flex;
  margin-bottom: 1.3rem;
  .user_left {
    width: 2.5rem;
    .img_url {
      height: 2.5rem;
      width: 2.5rem;
      overflow: hidden;
      border-radius: 50%;
      img {
        height: 100%;
      }
    }
  }
  .user_right {
    flex: 1;
    .tx-14;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    .user_name {
      display: flex;
      justify-content: space-between;
      :nth-child(1) {
        color: @blue;
      }
      .van-icon {
        vertical-align: middle;
      }
    }
    .user_msg_detail {
      margin-top: 0.8rem;
      display: flex;
      flex-direction: column;

      p {
        margin-top: 0.5rem;
        .tx-12;
        color: @grey393939;
        margin: 0.5rem 0;
      }
    }
  }
}
//底部固定导航
.footer {
  display: flex;
  position: fixed;
  padding-top: 0.5rem;
  border-top: 0.1px solid @grey_3c;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 1;
  height: 2.5rem;
  .info {
    width: 50%;
    input {
      width: 100%;
      box-sizing: border-box;
      padding: 0 0.8rem;
      border: 0.1px solid @grey_3c;
      height: 2rem;
      border-radius: 2rem;
    }
  }
  .icon {
    flex: 1;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .van-icon {
      font-size: 1.5rem;
    }
  }
}

//修改input-placeholder样式
::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: @grey_3c;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: @grey_3c;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: @grey_3c;
}
:-moz-placeholder {
  /* Firefox 18- */
  color: @grey_3c;
}
.share {
  .share_title {
    text-align: center;
    margin: 2rem 0;
    font-weight: bold;
    font-size: 1rem;
  }
  .share_body {
    display: flex;
    justify-content: space-around;
    .share_item {
      width: 2.5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      i {
        font-size: 2.5rem;
      }
    }
  }
  .share_btn {
    position: fixed;
    display: block;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3.5rem;
    width: 100%;
    background-color: #fff;
    border: 0;
    border-top: 0.1rem solid #f2f2f2;
    text-align: center;
    font-size: 1rem;
  }
}
</style>
