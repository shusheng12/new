<template>
  <div>
    <div class="is_show_popup" v-show="is_show_popup">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      is_show_popup: false,
      timer: null
    };
  },
  methods: {
    popup(msg, time = 1500) {
      this.is_show_popup = true;
      this.msg = msg;
      // this.hendclick1 = callback1;
      // this.hendclick2 = callback2;
      // console.log(11111111111111111);
      this.timer = setTimeout(this.callback, time);
    },

    // hendclick1() {
    //   console.log("111111111111");
    // },
    // hendclick2() {
    //   console.log("2222222222222");
    // }

    callback() {
      this.is_show_popup = false;
      clearTimeout(this.timer);
    }
  }
};
</script>
<style lang="less" scoped>
.is_show_popup {
  position: fixed;
  left: 50%;
  top: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  width: 10rem;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  max-height: 5.3rem;
  z-index: 99999;
  text-align: center;
  border-radius: 0.5rem;
}
</style>
