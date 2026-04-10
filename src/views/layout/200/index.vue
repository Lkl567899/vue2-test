<template>
    <div v-if="temp" class="app">
        <div class="app_box">
            <div class="img-box">
                <img class="left_img" src="../../../assets/1.png" alt="" />
                <div class="title">我要吃炖菜！！！！！</div>
            </div>
            <div class="card">
                <div class="type-kicker">你的主类型</div>
                <div class="type-name">二百斤</div>
                <div class="match">匹配度 83% · 精准命中 10/15 维</div>
                <div class="type-subname">
                    维度命中度较高，当前结果可视为你的第一人格画像。
                </div>
            </div>
            <div class="card">
                <div class="title">该人格的简单解读</div>
                <div>🖐️😭🖐️</div>
            </div>
            <div class="card">
                <div class="title">维度评分</div>
                <div>
                    👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍
                </div>
            </div>
        </div>
    </div>
    <div v-else class="web">
        <div class="box">
            <div class="temp1">
                <div class="img_box">
                    <img class="left_img" src="../../../assets/1.png" alt="" />
                    <div class="title">我要吃炖菜!!!!!</div>
                </div>
                <div class="right">
                    <div class="type-kicker">你的主类型</div>
                    <div class="type-name">二百斤</div>
                    <div class="match">匹配度 83% · 精准命中 10/15 维</div>
                    <div class="type-subname">
                        维度命中度较高，当前结果可视为你的第一人格画像。
                    </div>
                </div>
            </div>
            <div class="temp2">
                <div class="title">该人格的简单解读</div>
                <div>🖐️😭🖐️</div>
            </div>
            <div class="temp2">
                <div class="title">维度评分</div>
                <div>
                    👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        temp() {
            return window.innerWidth <= 768;
        }
    }
}
</script>

<style lang="scss" scoped>
.web {
    background-color: #dbe8dd;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.app {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #dbe8dd;
    padding: 20px 10px;
}

.app_box {
    border-radius: 20px;
    background-color: #fff;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    .img-box {
        .left_img {
            height: 400px;
            width: 100%;
            border-radius: 20px;
        }

        .title {
            font-size: 14px;
            color: #6a786f;
            margin-top: 10px;
        }
    }

    .card {
        border-radius: 20px;
        border: 2px solid #dbe8dd;
        background-color: #e8f3e9;
        padding: 10px;
        margin-top: 10px;

        .type-kicker {
            font-size: 14px;
            color: #6a786f;
            margin-top: 14px;
        }

        .type-name {
            line-height: 1.2;
            font-size: 35px;
        }

        .match {
            margin: 20px 0;
            font-weight: 700;
            display: inline-block;
            background-color: #dbe8dd;
            padding: 7px 10px;
            border-radius: 20px;
            color: #488050;
            font-size: 15px;
        }

        .type-subname {
            font-size: 14px;
            color: #6a786f;
        }

    }
}

.box {
    padding: 40px;
    width: 980px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    .temp1 {
        display: flex;

        .img_box {
            padding: 20px;
            border-radius: 15px;
            background-color: #e3f6e6;
        }

        .right {
            margin-left: 20px;

            .type-kicker {
                font-size: 14px;
                color: #6a786f;
                margin-top: 14px;
            }

            .type-name {
                line-height: 1.2;
                font-size: 45px;
            }

            .match {
                margin: 20px 0;
                font-weight: 700;
            }

            .type-subname {
                font-size: 14px;
                color: #6a786f;
            }
        }

        .title {
            font-size: 14px;
            color: #6a786f;
            margin-top: 14px;
        }

        .left_img {
            width: 250px;
            height: 350px;
        }
    }

    .temp2 {
        margin-top: 20px;
        font-weight: 700;
    }
}
</style>