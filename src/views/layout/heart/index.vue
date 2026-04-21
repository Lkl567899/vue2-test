<template>
    <div class="box">
        <img class="apex_img" src="@/assets/apex.png" alt="">
        <div class="h1"> 404 NoT Foun D:</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    .apex_img {
        width: 200px;
    }

    .h1 {
        margin-top: 20px;
        font-family: 'Comic Neue', cursive;
        /* 可爱手写风 */
        color: #333;
        /* 可根据背景调色 */
        font-size: 18px;
    }
}
</style>