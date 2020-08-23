<template>
  <div>
    <div class="top">
      <nav-bar color="#FF4E56">
        <div slot="left" @click="tohome">
          <van-icon name="arrow-left" />
        </div>
        <div class="city_header" slot="center">城市选择</div>
      </nav-bar>
      <van-search shape="round" v-model="keyword" background="#FF4E56" placeholder="请输入搜索关键词" />
      <div>
        <div class="cities_item" v-for="(item, index) in list" :key="index">{{ item.name }}</div>
      </div>
    </div>
    <div style="height:105px"></div>
    <div class="body">
      <div class="city_key">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>

      <div class="city_key">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
          <div class="button">{{ item.name }}</div>
        </div>
      </div>

      <div v-for="(item, key) of cities" :key="key">
        <div class="city_key" :ref="key">{{ key }}</div>
        <div class="cities_item" v-for="i of item" :key="i.id">{{ i.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import data from "@/data/city.json";
import navBar from "@/components/common/navbar/navbar";

export default {
  components: {
    navBar
  },
  data() {
    return {
      userinform: "",
      keyword: "",
      hotCities: [],
      cities: {},
      list: []
    };
  },
  mounted() {
    // this.userinform = data;
    console.log(data.data);
    this.hotCities = data.data.hotCities;
    this.cities = data.data.cities;
  },
  methods: {
    tohome() {
      this.$router.go(-1);
    },
    changecity(city) {
      this.$notify({ type: "success", message: "城市修改成功", duration: 750 });
      this.$store.commit("changecity", city);
    }
  }
};
</script>
<style lang="less" scoped>
.top {
  .city_header {
    text-align: center;
    line-height: 2.75rem;
    color: #fff;
  }

  .cities_item {
    height: 1.8rem;
    line-height: 1.8rem;
    padding-left: 1rem;
    border-bottom: 0.01rem solid #ccc;
  }
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.body {
  .city_key {
    background-color: #eeeeee;
    height: 1.8rem;
    line-height: 1.8rem;
    padding-left: 0.5rem;
    color: #777777;
  }
  .button-list {
    overflow: hidden;
    margin: 0.5rem 0;
    padding: 0.1rem 1rem 0.1rem 0.1rem;
  }
  .button-wrapper {
    float: left;
    width: 33.33%;
  }
  .button {
    margin: 0.3rem;
    border: 0.05rem solid #ccc;
    line-height: 1.5rem;
    text-align: center;
    border-radius: 0.06rem;
  }
  .cities_item {
    height: 1.8rem;
    line-height: 1.8rem;
    padding-left: 1rem;
    border-bottom: 0.01rem solid #ccc;
  }
}
</style>
