<template>
  <div class="public-navbar">
    <img src="@/assets/cy.png" alt="" class="cyImg" />
    <div class="body">
      <div class="body-left">
        <div
          class="item"
          v-for="(item, index) in items"
          :key="item.id"
          :class="{ active: index === activeIndex }"
          @click="activeIndex = index"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="body-right">
        <img src="@/assets/icons/sousuo.png" alt="" class="bodyImg" />
        <img src="@/assets/icons/shijian.png" alt="" class="bodyImg" />
      </div>
    </div>
    <div class="edit">
      <div class="user">
        <img src="@/assets/icons/yonghu.png" alt="" class="userImg" />
      </div>

      <div class="userBack">客户端下载</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        { name: "首页", id: 1 },
        { name: "4K专区", id: 2 },
        { name: "剧场番剧", id: 3 },
        { name: "TV番组", id: 4 },
        { name: "更多", id: 5 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.public-navbar {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;
  padding: 20px 40px;
  width: 100%;
  background: rgba(16, 16, 16, 0.1);
  display: flex;
  align-items: center;
  .cyImg {
    width: 200px;
  }
  .body {
    display: flex;
    justify-content: space-between;
    flex: 1;
    .body-left {
      display: flex;
      padding-left: 25px;
      .item {
        display: flex;
        padding-right: 25px;
        font-weight: 600;
        cursor: pointer;
      }
      .item.active {
        color: #ed5d64;
      }
    }
    .body-right {
      .bodyImg {
        padding-right: 20px;
        cursor: pointer;
      }
    }
  }
  .edit {
    display: flex;
    align-items: center;
    .user {
      width: 40px;
      height: 40px;
      background-color: #ed5d64;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
    }
    .userImg {
      background-color: #ed5d64;
      cursor: pointer;
    }
    .userBack {
      padding: 0 20px;
      height: 40px;
      font-weight: 600;
      background-color: #ed5d64;
      display: flex;
      align-items: center;
      border-radius: 18px;
      cursor: pointer;
    }
  }
}
</style>
