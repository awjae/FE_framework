<!-- slot 재사용 -->
<template>
    <modal-layout>
        <template v-slot:header>
            <h1>팝업타이틍</h1>
        </template>
        <template v-slot:default>
            <p>팝업컨텐츠1</p>
            <p>팝업컨텐츠2</p>
        </template>
        <template v-slot:footer>
            <button type="button">닫기</button>
        </template>
    </modal-layout>
</template>
<script>
import SlotModalLayout from "./SlotModelLayout.vue";

export default {
    name:'',
    components: { "modal-layout": SlotModalLayout}, //하나의 컴포넌트는 다른 컴포넌트에서 쉽게 불러와 사용할 수 있다.
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