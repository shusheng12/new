<template>
  <div>
    <div v-for="i of list" :key="i.id">
      <div class="header">
        <div class="user">
          <div class="img">
            <img src="@/assets/img/zly1.jpg" alt />
          </div>
          <div class="name">
            <div>
              <span class="username">赵丽颖</span>
            </div>
            <span class="time">8小时前</span>
          </div>
        </div>
        <div class="icon">
          <van-icon name="ellipsis" />
        </div>
      </div>
      <div class="item1" v-if="i.type == 1">
        <div>《乌龙闯关病已到底喜不喜欢霍水仙霍水仙？</div>
      </div>
      <div class="item" v-if="i.type == 2">
        <div class="title">《乌龙闯关病已到底喜不喜欢霍水仙霍水仙？</div>
        <div class="img_url">
          <img src="@/assets/img/zly1.jpg" alt />
        </div>
      </div>
      <div class="item2" v-if="i.type == 3">
        <div class="title2">《乌龙闯关病已到底喜不喜欢霍水仙霍水仙？</div>
        <div class="img_url2">
          <img src="@/assets/img/zly1.jpg" alt />
        </div>
      </div>
      <div class="item3" v-if="i.type == 4">
        <div class="title3">《乌龙闯关病已到底喜不喜欢霍水仙霍水仙？</div>
        <div class="img_list">
          <div class="img_url3">
            <img src="@/assets/img/zly1.jpg" alt />
          </div>
          <div class="img_url3">
            <img src="@/assets/img/zly1.jpg" alt />
          </div>
          <div class="img_url3">
            <img src="@/assets/img/zly1.jpg" alt />
          </div>
          <div class="img_url3">
            <img src="@/assets/img/zly1.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          user_name: "张三",
          type: 1,
          time: "2020-09-11",
          msg: "组件产出组件产出组件产出组件产出组件产出组件产出"
        },
        {
          id: 1,
          type: 2,
          user_name: "张三",
          time: "2020-09-11",
          msg: "组件产出组件产出组件产出组件产出组件产出组件产出",
          img_url: require("@/assets/img/zly1.jpg")
        },
        {
          id: 1,
          type: 3,
          user_name: "张三",
          time: "2020-09-11",
          msg: "组件产出组件产出组件产出组件产出组件产出组件产出",
          img_url: require("@/assets/img/zly1.jpg")
        },
        {
          id: 1,
          type: 4,
          user_name: "张三",
          time: "2020-09-11",
          msg: "组件产出组件产出组件产出组件产出组件产出组件产出",
          img_url: [
            require("@/assets/img/zly1.jpg"),
            require("@/assets/img/zly1.jpg"),
            require("@/assets/img/zly1.jpg")
          ]
        },
        {
          id: 5,
          user_name: "张三",
          type: 1,
          time: "2020-09-11",
          msg: "组件产出组件产出组件产出组件产出组件产出组件产出"
        },
        {
          id: 6,
          type: 2,
          user_name: "张三",
          time: "2020-09-11",
          msg: "组件产出组件产出组件产出组件产出组件产出组件产出",
          img_url: require("@/assets/img/zly1.jpg")
        },
        {
          id: 7,
          type: 3,
          user_name: "张三",
          time: "2020-09-11",
          msg: "组件产出组件产出组件产出组件产出组件产出组件产出",
          img_url: require("@/assets/img/zly1.jpg")
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@import "~@/assets/css/style.less";

.header {
  display: flex;
  width: 100%;
  height: 2.5rem;
  margin-top: 0.5rem;
  justify-content: space-between;
  padding-right: 1rem;
  box-sizing: border-box;
  align-items: center;
  color: #8c8c8c;
  .user {
    display: flex;
    flex: 1;
    .img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        height: 100%;
      }
    }
    .name {
      flex: 1;
      padding-left: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      line-height: 0;
      width: 100%;
      .username {
        font-size: 0.8rem;
        font-weight: 600;
        color: rgba(38, 38, 38, 1);
      }
      .time {
        font-size: 0.4rem;
        color: rgba(140, 140, 140, 1);
      }
    }
  }
  .icon {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
}

.item {
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  border-bottom: 1px solid #f2f2f2;

  .title {
    flex: 1;
    height: 4.5rem;
    display: -webkit-box;
    display: -moz-box;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; /*显示行数*/
  }
  .img_url {
    width: 7rem;
    img {
      width: 100%;
      border-radius: 0.4rem;
    }
  }
}
.item1 {
  padding: 1rem;
  box-sizing: border-box;
  border-bottom: 1px solid #f2f2f2;
}

.item2 {
  padding: 1rem;
  box-sizing: border-box;
  border-bottom: 1px solid #f2f2f2;
  .title2 {
    margin-bottom: 0.5rem;
  }
  .img_url2 {
    width: 100%;
    img {
      width: 100%;
      border-radius: 0.4rem;
    }
  }
}
.item3 {
  padding: 1rem;
  box-sizing: border-box;
  border-bottom: 1px solid #f2f2f2;
  .title3 {
    margin-bottom: 0.5rem;
  }
  .img_list {
    .img_url3 {
      width: 30%;
      float: left;
      margin-right: 3%;
      img {
        width: 100%;
        border-radius: 0.4rem;
      }
    }
    &::after {
      content: "";
      clear: both;
      display: block;
    }
  }
}
</style>
