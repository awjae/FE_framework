<!-- vue 컴포넌트의 기본 형태 -->
<template>
    <div>
        <h1>likes : {{ likes }}</h1>
        <h1>isOk : {{ isOk }}</h1>
        <h1>commentIdx : {{ commentIdx }}</h1>
        <h1>author name : {{ author.name }}</h1>
        <button type="button" @click="childFunc">클릭</button>
    </div>
</template>
<script>
export default {
    name:'',
    props: {
        likes: {
            type: Number,
            default: 0
        },
        isOk: {
            type: Boolean,
            default: false
        },
        commentIdx: {
            type: Array
        },
        author: {
            type: Object
        }
    },
    components: {}, //하나의 컴포넌트는 다른 컴포넌트에서 쉽게 불러와 사용할 수 있다.
    data() {
        return {
          title: 'Hello world' //양방향 바인딩 
        };
    },
    setup() {},
    created() {}, //컴포넌트가 처음 실행된순간
    mounted() {
        console.log(this.commentIdx);
    }, // 컴포넌트의  dom들이 완성된순간
    unmounted() {},
    methods: {
        childFunc() {
            alert('부모컴포넌트에서 발생시키기')
        }
    }
}
</script>
<style scoped>

</style>