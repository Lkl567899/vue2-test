<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar
  },
  computed: {
    needPlaceholder() {
      const path = ['/home', '/']
      console.log(this.$route.path);
      return !path.includes(this.$route.path)
    }
  }
}

</script>

<template>
  <div id="app">
    <!-- <Navbar></Navbar>
    <div class="navbar-placeholder" v-show="needPlaceholder"></div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// body {
//   background-color: #161616;
//   /* 只给 body 设置背景色 */
//   color: #fff;
//   /* 只给 body 设置文字颜色 */
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
// }

// .navbar-placeholder {
//   height: 91px;
// }
</style>
