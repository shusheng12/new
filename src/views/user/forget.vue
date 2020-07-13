<template>
  <div class="page-container">
    <van-nav-bar title="登录" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div style="height: 46px"></div>
    <div class="input">
      <span class="tx-14 light-grey">手机号</span>
      <input class="tx-14" type="text" placeholder="请输入手机号" v-model="phone" maxlength="11" />
    </div>
    <div class="input">
      <span class="tx-14 light-grey">验证码</span>
      <input class="tx-14" type="text" placeholder="请输入右方内容" v-model="captcha" maxlength="4" />
      <span class="tx-14 fr light-grey" @click="updata_captcha_user">{{ captcha_user }}</span>
    </div>
    <div class="input">
      <span class="tx-14 light-grey">短信验证码</span>
      <input class="tx-14" type="text" placeholder="请输入短信验证码" v-model="smscode" maxlength="6" />
      <span class="tx-14 fr p-l-15 bdr-l" @click="sendSms">
        获取验证码
        <span v-show="SMSdisabled"></span>
      </span>
    </div>
    <div class="input">
      <span class="tx-14 light-grey">登录密码</span>
      <input class="tx-14" type="password" placeholder="设置新密码" v-model="password" maxlength="6" />
    </div>
    <div class="input">
      <span class="tx-14 light-grey">确认密码</span>
      <input class="tx-14" type="password" placeholder="确认新密码" v-model="password2" maxlength="6" />
    </div>
    <div class="forget" @click="formSubmit()">确定</div>
  </div>
</template>
<script>
import { randomString } from "@/utils/utils";
export default {
  data() {
    return {
      phone: "",
      captcha: "",
      captcha_user: "",
      smscode: "",
      password: "",
      password2: "",
      SMSdisabled: 0
    };
  },
  created() {
    this.captcha_user = randomString(6);
  },
  methods: {
    //go(-1)
    onClickLeft() {
      this.$router.go(-1);
    },
    // 刷新验证码
    updata_captcha_user() {
      this.captcha_user = randomString(6);
    },
    //提交
    formSubmit() {},
    // 获取验证码
    sendSms() {}
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/style.less";

.page-container {
  height: 100%;
  padding: @header_height + 0.3rem;
}

.input {
  padding: 0.15rem;
  box-sizing: border-box;
  height: 3rem;
  font-size: 1rem;
  color: @dark_grey;
  line-height: 3rem;
  border-bottom: 0.01rem solid @bg;

  span:first-child {
    display: inline-block;
    width: 4.8rem;
    text-align: right;
  }
  input {
    width: 10rem;
    border: none;
    padding-left: 0.5rem;
    height: 2rem;
    &:focus {
      outline: none;
    }
  }
}

.forget {
  width: 15rem;
  height: 2.5rem;
  line-height: 2.5rem;
  background-color: @red;
  text-align: center;
  border-radius: 2.5rem;
  font-size: 1rem;
  margin: 1rem auto;
  color: #fff;
}
</style>
