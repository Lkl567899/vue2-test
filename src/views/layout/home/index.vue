<template>
  <div class="home" v-if="!isMobile">
    <swiper ref="mySwiper" class="Swiper" :options="swiperOptions">
      <swiper-slide v-for="item in imgs" :key="item.id" class="slide">
        <div class="grad"></div>
        <!-- 渐变层 -->
        <img :src="item.url" alt="" class="img" @click="test" />
      </swiper-slide>
    </swiper>
    <div style="height: 1000px; background-color: red;"></div>
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
    <div>{{ sum }}</div>
    <div>{{ a }}</div>

    <NewCom :color="color" @xxx="gogo">
      <template #xxx="slotProps">
        <div v-for="item in slotProps.list" :key="item.id">
          {{ item.name }}
        </div>
      </template>
    </NewCom>
    <div v-for="item in text" :key="item.id">
      <div v-if="item.state">{{ item.name }}</div>
    </div>
    <Old @add="add"></Old>

    {{ mixinMsg }}
    <div @click="onClick">点击</div>
  </div>
</template>

<script>
import Old from "../../../components/old";
import NewCom from "../../../components/newCom";
import { Button, Icon, Swipe, SwipeItem } from "vant";
import myMixin from "@/mixins/myMixin";
export default {
  mixins: [myMixin],
  components: {
    Old,
    NewCom,
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  created() {
    console.log("我是home中的created钩子");
    this.hi();
    console.log(this.imgs, "初始化imgs");
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
      a: 2,
      b: 2,
      color: "red",
      text: [
        { name: "3mz", id: 1, state: true },
        { name: "pite", id: 2, state: true },
        { name: "roieee", id: 3, state: false },
      ],
    };
  },
  computed: {
    isMobile() {
      if (window.innerWidth <= 768) {
        console.log("123");
      }
      return window.innerWidth <= 768;
    },
    sum() {
      return this.a + this.b;
    },
  },
  watch: {
    a(newVal, oldVal) {
      console.log(newVal);
    },
  },
  methods: {
    test() {
      console.log("点击测试");
    },
    gogo(e) {
      this.color = e;
      console.log(e, "11");
    },
    add(message) {
      console.log(message);
    },
    onClick() {
      console.log("点击");
      this.imgs[1] = 2;
      console.log(this.imgs);
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
