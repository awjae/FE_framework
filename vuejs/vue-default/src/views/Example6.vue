<!-- vue 컴포넌트의 기본 형태 -->
<template>
    <div>
        <page-title title="부모 컴포넌트에서 전송할 페이지 타이틀" />
        <page-title :title="title" />
        <!-- 동적 바인딩을 하면 숫자필드, 불리언 필드로 데이터 전송 가능 -->
        <!-- <ChildComponent :likes="likes" :isOk="isOk" :commentIdx="commentIdx" :author="author"/>  -->
        <button type="button" @click="callChildFunc" ref="child_btn">부모에 있는 클릭</button>
        <!-- <ChildComponent ref="child_component" /> -->
        <childComponent @send-message="sendMessage"/>
        <h1>{{ parentMessage }}</h1>
    </div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue';
import ChildComponent from './ChildComponent.vue';

export default {
    name:'',
    components: { 'page-title' : PageTitle, ChildComponent }, //하나의 컴포넌트는 다른 컴포넌트에서 쉽게 불러와 사용할 수 있다.
    data() {
        return {
          title: 'Hello world',
          likes: 23,
          isOk: true,
          commentIdx: [1,5,4,2],
          author: { name: '홍길동', company: '회사이름' },
          parentMessage: '',
        };
    },
    setup() {},
    created() {}, //컴포넌트가 처음 실행된순간
    mounted() {}, // 컴포넌트의  dom들이 완성된순간
    unmounted() {},
    methods: {
        callChildFunc() {
            // this.$refs.child_component.$refs.child_btn.click(); //ref를 이용해서 접근하고 ref를 접근해서 클릭
            // this.$refs.child_component.$refs.childFunc();
            this.$refs.child_component.msg = '부모 컴포넌트에서 변경한 메세지';
        },
        sendMessage(data) {
            // alert(data);
            this.parentMessage = (data);
        }
    }
}
</script>
<style scoped>

</style>