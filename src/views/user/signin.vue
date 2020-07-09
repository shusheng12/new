<template>
  <div class="page-container">
    <van-nav-bar title="登录" fixed></van-nav-bar>
    <div style="height: 46px"></div>
    <div class="input">
      <span class="tx-14 light-grey">手机号</span>
      <input class="tx-14" type="text" placeholder="请输入手机号" v-model="username" />
    </div>
    <div class="input">
      <span class="tx-14 light-grey">登录密码</span>
      <input class="tx-14" type="password" placeholder="请输入密码6~18位密码" v-model="password" />
    </div>
    <div class="actions p-h-15">
      <span
        class="tx-14 fl"
        @click="
          $router.push({
            name: 'signup'
          })
        "
      >注册</span>
      <span class="tx-14 fr" @click="$router.push({ name: 'forget' })">忘记密码</span>
    </div>
    <div class="login" @click="login">登录</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "13413806496",
      password: "sheng07114355"
    };
  },
  methods: {
    //登录
    login() {
      if (!/^1[34578]\d{9}$/.test(this.username)) {
        this.$popup.popup("手机号格式错位", 2000);
      } else if (this.password.length > 18 || this.password.length < 6) {
        this.$popup.popup("请输入密码6~18位密码", 2000);
      } else if (this.password != "sheng07114355") {
        this.$popup.popup("密码错误", 2000);
      } else if (this.username != "13413806496") {
        this.$popup.popup("该手机号未注册", 2000);
      } else {
        this.$popup.popup("登录成功");
        let timer = setTimeout(() => {
          clearTimeout(timer);
          this.$router.push("home");
        }, 250);
      }
    }
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
    width: 4rem;
  }
  input {
    border: none;
    height: 2rem;
    &:focus {
      outline: none;
    }
  }
}
.actions {
  height: 2.5rem;
  line-height: 2.5rem;
}
.login {
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
