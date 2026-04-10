export default {
    data() {
        return {
            mixinMsg: '我是myMixins中的数据'
        }
    },
    methods: {
        hi() {
            console.log('我是myMixins中的方法');
        }
    },
    created() {
        console.log('myMixins中的created钩子执行');
    }
}