<template>
  <div class="page-container">
    <van-nav-bar title="登录" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div style="height: 46px"></div>
    <div class="input">
      <span class="tx-14 light-grey">用户名</span>
      <input class="tx-14" type="text" placeholder="请输入用户名" v-model.trim="username" />
    </div>
    <div class="input">
      <span class="tx-14 light-grey">手机号</span>
      <input class="tx-14" type="text" placeholder="请输入手机号" v-model="phone" maxlength="11" />
    </div>
    <div class="input">
      <span class="tx-14 light-grey">短信验证码</span>
      <input class="tx-14" type="text" placeholder="请输入短信验证码" v-model="smscode" maxlength="6" />
      <span class="tx-14 fr p-l-15 bdr-l" @click="sendSms">获取验证码</span>
    </div>
    <div class="input">
      <span class="tx-14 light-grey">登录密码</span>
      <input
        class="tx-14"
        type="password"
        placeholder="请设置6位数字密码"
        v-model="password"
        maxlength="6"
        @keyup="acceptNumber('password')"
      />
    </div>
    <p class="agree tx-14">
      <van-checkbox v-model="checked">
        我已仔细阅读并同意
        <router-link :to="{ name: 'article', query: { id: 1, title: '用户协议' } }" class="blue">《用户协议》</router-link>
      </van-checkbox>
      <!-- <span>我已仔细阅读并同意</span> -->
    </p>
    <div class="signup" @click="formSubmit()">注册</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      phone: "",
      smscode: "",
      password: "",
      checked: ""
    };
  },
  methods: {
    //go(-1)
    onClickLeft() {
      this.$router.go(-1);
    },
    sendSms() {},
    formSubmit() {}
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/style.less";

.page-container {
  height: 100%;
  padding: @header_height + 0.3rem;
}
.logo {
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  margin: auto;
}
.input {
  padding: 0.15rem;
  box-sizing: border-box;
  height: 3rem;
  font-size: 1rem;
  color: @dark_grey;
  line-height: 3rem;
  border-bottom: 0.01rem solid @bg;
  span {
    display: inline-block;
    width: 5rem;
  }
  input {
    border: none;
    height: 2rem;
    &:focus {
      outline: none;
    }
  }
}

.login {
  width: 2.3rem;
  height: 0.45rem;
  line-height: 0.45rem;
  background-color: @red;
  border-radius: 0.225rem;
  .tx-16;
  margin: auto;
}
.agree {
  vertical-align: middle;
  margin: 0.5rem;

  i {
    font-size: 0.2rem;
  }
}
.signup {
  width: 15rem;
  height: 2.5rem;
  line-height: 2.5rem;
  background-color: @red;
  text-align: center;
  border-radius: 2.5rem;
  font-size: 1rem;
  margin: auto;
  color: #fff;
}
</style>
