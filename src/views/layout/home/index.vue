<template>
  <div class="home">
    <Navbar></Navbar>
    <swiper ref="mySwiper" class="Swiper" :options="swiperOptions">
      <swiper-slide v-for="item in imgs" :key="item.id" class="slide">
        <div class="grad"></div>
        <!-- 渐变层 -->
        <img :src="item.url" alt="" class="img" @click="test" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
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
</style>
