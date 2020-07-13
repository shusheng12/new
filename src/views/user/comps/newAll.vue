<template>
  <div>
    <div class="create_user">
      <div class="imgUrl" @click="$router.push('new_user')">
        <img src="@/assets/img/zly1.jpg" alt />
      </div>
      <div class="create_name" @click="$router.push('new_user')">
        <p>赵丽颖</p>
        <span>2020/7/7</span>
      </div>
      <div class="guanzu">
        <span>关注</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@import "~@/assets/css/style.less";

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
</style>
