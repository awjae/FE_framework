<!-- vue 컴포넌트의 기본 형태 -->
<template>
<div>
    <input type="text" v-model="valueModel"/>
    <input type="number" v-model.number="valueModel2"/>
    <textarea v-model="valueModel3">안녕하세요</textarea>
</div>
</template>
<script>
export default {
    name:'',
    components: {}, //하나의 컴포넌트는 다른 컴포넌트에서 쉽게 불러와 사용할 수 있다.
    data() {
        return {
          valueModel: 'South Korea', //양방향 바인딩 
          valueModel2: 12,
          valueModel3: '안녕하세요' 
        };
    },
    setup() {},
    created() {}, //컴포넌트가 처음 실행된순간
    mounted() {
        console.log(this.valueModel2)
    }, // 컴포넌트의  dom들이 완성된순간
    unmounted() {},
    methods: {}
}
</script>
<style scoped>

</style>