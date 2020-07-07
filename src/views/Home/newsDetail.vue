<template>
  <div class="wamp">
    <van-nav-bar title="新闻详情" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
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

    <div class="user_msg">
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
        <div class="user_msg">
          <span>
            根据《实施细则》，如果没有按要求向香港警方提供资料，除非被证明已尽力，或者有不可能控制的原因，否则一旦定罪，将被判罚款10万元港币及监禁6个月。
            根据《实施细则》，如果没有按要求向香港警方提供资料，除非被证明已尽力，或者有不可能控制的原因，否则一旦定罪，将被判罚款10万元港币及监禁6个月。
            根据《实施细则》，如果没有按要求向香港警方提供资料，除非被证明已尽力，或者有不可能控制的原因，否则一旦定罪，将被判罚款10万元港币及监禁6个月。
          </span>
          <p>5小时前</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/style.less";

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
    margin-top: 3rem;
  }
}
.user_msg {
  display: flex;
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
    .user_msg {
      margin-top: 0.8rem;
      display: flex;
      flex-direction: column;

      p {
        margin-top: 0.5rem;
        .tx-12;
        color: @grey393939;
      }
    }
  }
}
</style>
