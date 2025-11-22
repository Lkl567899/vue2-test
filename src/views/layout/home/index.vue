<template>
  <div class="home" v-if="!isMobile">
    <Navbar></Navbar>
    <swiper ref="mySwiper" class="Swiper" :options="swiperOptions">
      <swiper-slide v-for="item in imgs" :key="item.id" class="slide">
        <div class="grad"></div>
        <!-- 渐变层 -->
        <img :src="item.url" alt="" class="img" @click="test" />
      </swiper-slide>
    </swiper>
  </div>
  <div v-else class="phone_home">
    <div class="nav_bar">
      <img src="@/assets/cy.png" alt="" class="phone_logo" />
      <div class="navbar_right">
        <van-icon name="search" />
        <van-icon name="underway-o" class="icons" />
        <van-icon name="ellipsis" />
      </div>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
      <van-swipe-item v-for="item in imgs" :key="item.id">
        <div class="vant_grad"></div>
        <img :src="item.url" alt="" class="vant_img" />
      </van-swipe-item>
    </van-swipe>
    <div class="title">未完待续...</div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { Button, Icon, Swipe, SwipeItem } from "vant";
export default {
  components: {
    Navbar,
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  data() {
    return {
      imgs: [
        { url: require("@/assets/girls/1.webp"), id: 1 },
        { url: require("@/assets/girls/2.webp"), id: 2 },
        { url: require("@/assets/girls/3.webp"), id: 3 },
        { url: require("@/assets/girls/4.webp"), id: 4 },
        { url: require("@/assets/girls/5.webp"), id: 5 },
      ],
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 3000, // 每隔 3 秒自动切换
        },
      },
    };
  },
  computed: {
    isMobile() {
      if (window.innerWidth <= 768) {
        console.log("123");
      }
      return window.innerWidth <= 768;
    },
  },
  methods: {
    test() {
      console.log("点击测试");
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100vw;
  .Swiper {
    width: 100%;
    height: 100vh;
    .grad {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #161616 0%, transparent 50%);
      pointer-events: none;
    }
    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.phone_home {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  .nav_bar {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(16, 16, 16, 0.1);
    .phone_logo {
      width: 100px;
      height: 100%;
    }
    .navbar_right {
      .icons {
        padding: 0 10px;
      }
    }
  }
  .my-swipe .van-swipe-item {
    height: 400px;
    width: 100%;
    .vant_grad {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #161616 0%, transparent 50%);
      pointer-events: none;
    }
    .vant_img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    text-align: center;
    margin-top: 200px;
    font-weight: 600;
  }
}
</style>
