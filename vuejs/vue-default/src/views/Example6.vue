<!-- vue 컴포넌트의 기본 형태 -->
<template>
    <div>
        <PageTitle title="부모 컴포넌트에서 전송할 페이지 타이틀" />
    </div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue';

export default {
    name:'',
    components: { PageTitle }, //하나의 컴포넌트는 다른 컴포넌트에서 쉽게 불러와 사용할 수 있다.
    data() {
        return {
          title: 'Hello world' //양방향 바인딩 
        };
    },
    setup() {},
    created() {}, //컴포넌트가 처음 실행된순간
    mounted() {}, // 컴포넌트의  dom들이 완성된순간
    unmounted() {},
    methods: {}
}
</script>
<style scoped>

</style>