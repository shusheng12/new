<template>
  <div class="wamp">
    <!--<van-nav-bar title="创新成果" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>-->
    <!--<div style="height: 46px"></div>-->
    <div class="head">
      <div class="hd_left">
        <van-icon name="arrow-left" @click="onClickLeft" />
      </div>
      <div class="hd_body">
        <van-icon name="search" />
        <input type="text" placeholder="请输入搜索内容" v-model="keyword" />
      </div>
      <div class="hd_right">
        <van-button round type="info" @click="onSearch">搜索</van-button>
      </div>
    </div>
    <div style="height: 49px"></div>

    <div class="search">
      <!-- 历史记录是否为空 -->
      <div v-if="history != 0">
        <div class="history">
          历史搜索
          <van-icon class="icon" @click="clearall" name="delete" />
        </div>
        <div class="search_groud">
          <div v-for="(item, index) in history" :key="index" class="search_item">{{ item }}</div>
        </div>
      </div>
      <!-- 搜索推荐 -->
      <div class="history">猜你喜欢</div>
      <div class="search_groud">
        <div
          v-for="(item, index) in recommendedlist"
          :key="index"
          class="search_item"
          @click="recommended(item)"
        >{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { Toast } from "vant";
import storage from "@/utils/storage.js"; // 导入storage
export default {
  components: {
    [Dialog.Component.confirm]: Dialog.confirm
  },
  data() {
    return {
      keyword: "",
      recommendedlist: [
        "三分钟教你成为时间管理大师",
        "火影忍者",
        "王者荣耀s20赛季钻石消耗活动",
        "番职最帅的男人",
        "程序员35岁后何去何从"
      ],
      // 历史记录数据
      history: []
    };
  },
  methods: {
    //回到首页
    onClickLeft() {
      this.$router.go(-1);
    },
    //点击搜索
    onSearch() {
      if (this.keyword == "" || this.history.indexOf(this.keyword) > -1) return;
      this.history.unshift(this.keyword);
      storage.set("history", this.history.join(","));
    },
    //清除全部历史记录
    clearall() {
      Dialog.confirm({
        message: "确认删除所有历史记录"
      })
        .then(() => {
          storage.remove("history");
          this.history = [];
          Toast("删除成功");
          this.clear = false;
        })
        .catch(() => {
          Toast("已取消删除");
        });
    }
  },
  created() {
    this.history =
      storage.get("history") != null ? storage.get("history").split(",") : [];
    console.log(this.history);
    this.history = this.history.filter(el => el != "");
  },
  mounted() {
    document.querySelector("input").focus();
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/style.less";

.head {
  display: flex;
  position: fixed;
  background-color: #fff;
  .hd_left {
    width: 10%;
    .van-icon {
      font-size: 1.5rem;
      color: #1e1e1e;
      margin: 0.5rem;
      margin-top: 0.8rem;
    }
  }
  .hd_body {
    flex: 1;
    color: #ccc;
    position: relative;
    padding: 0.5rem;
    .van-icon {
      position: absolute;
      top: 1rem;
      left: 2rem;
      // transform: translate(50%, 50%);
    }
    input {
      border: 0;
      color: #2a2d2e;
      box-sizing: border-box;
      border-radius: 1.5rem;
      width: 100%;
      height: 1.5rem;
      background-color: #f8f8f8;
      padding: 1rem;
      padding-left: 3rem;
    }
  }
  .hd_right {
    width: 18%;
    height: 48/16rem;
    box-sizing: border-box;
    padding: 0.5rem;
    /deep/ .van-button {
      width: 100%;
      height: 1.8rem;
      background-color: @red;
      border: 0;
    }
  }
}
.van-hairline--bottom::after {
  border-bottom-width: 0;
}
.van-icon {
  vertical-align: middle;
}
.van-search__action {
  color: #fff;
}

.history {
  margin: 1.5rem 0.5rem 0.5rem;
  font-weight: bold;
  font-size: 1rem;
}
.history .icon {
  float: right;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
  color: rgb(180, 178, 178);
  margin-right: 0.5rem;
  span {
    i {
      color: #fff;
    }
  }
}
.search_groud {
  width: 98%;
}
.search_groud::after {
  content: "";
  display: block;
  clear: both;
}
.search_item {
  float: left;
  // border: 0.1rem solid #f2f2f2;
  position: relative;
  max-width: 85%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  .tx-14;
  border-radius: 1rem;
  background-color: #f2f2f2;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
