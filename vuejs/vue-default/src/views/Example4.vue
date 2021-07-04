<!-- vue 컴포넌트의 기본 형태 -->
<template>
    <div>
        <h1>{{ getNames() }}</h1>
        <h1>{{ getNames() }}</h1>
        <h1>{{ getNames() }}</h1>
        <h1>{{ getNames() }}</h1> <!-- 4번 호출되면 배번 계산하기 때문에 리소스가 불필요하게 들어간다-->
        <h1>{{ fullName }}</h1>
        <h1>{{ fullName }}</h1>
        <h1>{{ fullName }}</h1>
        <h1>{{ fullName }}</h1>
    </div>
</template>
<script>
export default {
    name:'',
    components: {}, 
    data() {
        return {
          firstName: '유',
          lastName: '재석'
        };
    },
    //computed 연산을 1번만 실행 (계산된 결과는 캐싱되고 종속성이 변경시 다시 계산됨)
    computed: {
        fullName() {
            return this.lastName + this.firstName;
        }
    },
    setup() {},
    created() {}, 
    mounted() {}, 
    unmounted() {},
    methods: {
        getName() {
            return this.lastName + this.firstName;
        }
    }
}
</script>
<style scoped>

</style>