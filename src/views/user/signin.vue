<template>
  <div class="page-container">
    <van-nav-bar title="登录" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div style="height: 46px"></div>
    <!-- <img class="logo" :src="$appInfo.logo">
    <p class="tx-14 black ta-c m-t-10">{{$appInfo.name}}</p>-->
    <div class="input">
      <span class="tx-14 light-grey">手机号</span>
      <input class="tx-14" type="text" placeholder="请输入手机号" v-model="username" />
    </div>
    <div class="input">
      <span class="tx-14 light-grey">登录密码</span>
      <input class="tx-14" type="password" placeholder="请输入密码" v-model="password" />
    </div>
    <div class="actions p-h-15">
      <span
        class="tx-14 fl"
        @click="
          $router.push({
            name: 'signup',
            query: { inviteCode: $route.query.inviteCode }
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
      username: "",
      password: ""
    };
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
    //margin-bottom: 0.5rem;
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
