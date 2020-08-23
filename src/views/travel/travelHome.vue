<template>
  <div>
    <!-- 头部 -->
    <div class="navbar">
      <nav-bar color="#FF4E56">
        <router-link slot="left" tag="div" to="/Home">
          <van-icon name="arrow-left" />
        </router-link>
        <div slot="center" class="center">
          <input type="search" class="input_search" v-model="keywork" placeholder="输入城市/景点/游玩主题" />
        </div>
        <div slot="right" @click="tocity">北京</div>
      </nav-bar>
    </div>
    <div style="height:3rem"></div>
    <!-- 图片轮播 
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) of imgUrl" :key="index">
          <img :src="item" alt />
        </van-swipe-item>
      </van-swipe>
    </div>-->

    <!-- icons -->
    <div class="icons">
      <van-swipe :show-indicators="false">
        <van-swipe-item v-for="(item, index) in pages" :key="index">
          <div class="grid">
            <van-grid :border="false">
              <van-grid-item v-for="(item, index) in item" :key="index" class="icons">
                <img :src="item.imgUrl" />
                <div>{{ item.desc }}</div>
              </van-grid-item>
            </van-grid>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="rec">
      <div class="recommend_title">热销推荐</div>
      <div>
        <div class="recommend" v-for="item of recommendList" :key="item.id">
          <div class="recommend_img">
            <img :src="item.imgUrl" alt />
          </div>
          <div class="rem_msg">
            <div class="rem_title">{{ item.title }}</div>
            <div class="rem_desc">{{ item.desc }}</div>
            <div class="rem_btn">
              <div class="rem_btn_msg">查看详情</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 周末 -->
    <div class="weekend">
      <div class="weekend_title">周末去哪儿</div>
      <div v-for="item of weekendList" :key="item.id">
        <div class="weekend_img">
          <img :src="item.imgUrl" alt />
        </div>
        <div class="we_title">{{ item.title }}</div>
        <div class="we_desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import navBar from "@/components/common/navbar/navbar";
export default {
  components: {
    navBar
  },
  data() {
    return {
      keywork: "",
      // 轮播图
      imgUrl: [
        require("@/assets/img/zly1.jpg"),
        require("@/assets/img/zly2.jpg"),
        require("@/assets/img/zly3.jpg"),
        require("@/assets/img/zly4.jpg")
      ],
      iconList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
          desc: "景点门票"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
          desc: "滑雪季"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
          desc: "泡温泉"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
          desc: "动植园"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
          desc: "游乐园"
        },
        {
          id: "0006",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
          desc: "必游榜单"
        },
        {
          id: "0007",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
          desc: "演出"
        },
        {
          id: "0008",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
          desc: "城市观光"
        },
        {
          id: "0009",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
          desc: "一日游"
        }
      ],
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
          title: "故宫",
          desc: "东方宫殿建筑代表，世界宫殿建筑典范"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg",
          title: "南山滑雪场",
          desc: "北京专业级滑雪圣地"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg",
          title: "天安门广场",
          desc: "我爱北京天安门，天安门上太阳升"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg",
          title: "水立方",
          desc: "中国的荣耀，阳光下的晶莹水滴"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg",
          title: "温都水城养生馆",
          desc: "各种亚热带植物掩映其间仿佛置身热带雨林"
        }
      ],
      weekendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
          title: "北京必游TOP10",
          desc: "来北京必去的景点非这些地方莫属"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
          title: "寻找北京的皇城范儿",
          desc: "数百年的宫廷庙宇，至今依旧威严霸气"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
          title: "学生最爱的博物馆",
          desc: "周末干嘛？北京很多博物馆已经免费开放啦"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg",
          title: "儿童剧场，孩子的乐园",
          desc: "带宝贝观看演出，近距离体验艺术的无穷魅力"
        }
      ]
    };
  },

  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  },
  methods: {
    tocity() {
      this.$router.push("/travelcity");
    }
  }
};
</script>
<style lang="less" scoped>
.navbar {
  .input_search {
    width: 100%;
    line-height: 1.7rem;
    margin-top: 0.5rem;
    height: 1.7rem;
    border: 0;
    border-radius: 0.8rem;
    padding: 0 0.6rem;
  }
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  height: 3rem;
}

// 图片轮播
.banner {
  .my-swipe .van-swipe-item img {
    width: 100%;
  }
}
.icons {
  .icons img {
    width: 100%;
  }
  .grid {
    height: 0;
    padding-bottom: 65%;
  }
}
.rec {
  .recommend_title {
    background-color: #eeeeee;
    height: 2rem;
    line-height: 2rem;
    padding-left: 1rem;
    margin: 0.5rem 0;
  }
  .recommend {
    width: 100%;
    height: 0;
    padding-bottom: 25%;
    overflow: hidden;
    display: flex;
  }
  .recommend_img {
    width: 25%;
    height: 0;
    padding-bottom: 100%;
    overflow: hidden;
  }

  .recommend_img img {
    padding: 0.5rem;
    width: 100%;
  }
  .rem_msg {
    flex: 1;
    height: 5rem;
    display: flex;
    margin: 1rem 0;
    padding-left: 1rem;
    flex-direction: column;
  }
  .rem_title {
    font-weight: 600;
    height: 1.5rem;
  }
  .rem_desc {
    flex: 1;
    line-height: 2rem;
    overflow: hidden;
  }
  .rem_btn {
    height: 1.5rem;
  }
  .rem_btn_msg {
    box-shadow: rgb(0, 0, 0.1);
    background-color: #ff9200;
    border-radius: 0.2rem;
    color: #fff;
    text-align: center;
    height: 1.3rem;
    line-height: 1.3rem;
    width: 5rem;
  }
}
.weekend {
  .weekend_title {
    background-color: #eeeeee;
    height: 2rem;
    line-height: 2rem;
    padding-left: 1rem;
    margin: 0.5rem 0;
  }
  .weekend_img {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
  }
  .weekend_img img {
    width: 100%;
  }
  .we_title {
    padding: 0.5rem;
    font-weight: 600;
  }
  .we_desc {
    color: #d2d2d2;
    padding: 0 0.5rem;
    margin-bottom: 0.5rem;
  }
}
</style>
