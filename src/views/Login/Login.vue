<template>
  <div class="wamp">
    <div>
      <label for="username">
        <span>用户名</span>
        <input v-model="username" type="text" />
      </label>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: ""
    };
  }
};
</script>

<style lang="less" scoped>
.wamp input {
  border: 0;
  outline-style: hidden;
}
</style>
