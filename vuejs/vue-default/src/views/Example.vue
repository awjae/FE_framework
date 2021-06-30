<!-- vue 컴포넌트의 기본 형태 -->
<template>
<div>
    <input type="text" v-model="valueModel"/>
    <input type="number" v-model.number="valueModel2"/>
    <textarea v-model="valueModel3">안녕하세요</textarea>
    <select v-model="city">
        <option value="01">서울</option>
        <option value="02">부산</option>
        <option value="03">제주</option>
    </select>
    <label><input type="checkbox" value="서울" v-model="checked"/>서울</label>
    <label><input type="checkbox" value="부산" v-model="checked"/>부산</label>
    <label><input type="checkbox" value="제주" v-model="checked"/>제주</label>
    <br>
    <span>{{checked}}</span>
    <label><input type="radio" v-model="picked" v-bind:value="radio1"/>서울</label>
    <label><input type="radio" v-model="picked" v-bind:value="radio2"/>부산</label>
    <label><input type="radio" v-model="picked" v-bind:value="radio3"/>제주</label>
    <img v-bind:src="url" />
    <input type="text" v-model="textValue"/>
    <button type="button" v-bind:disabled="textValue===''">Click</button>
    <div class="container">Class Binding</div>
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
          valueModel3: '안녕하세요',
          city: "02",
          checked: [],
          picked: "제주",
          radio1: "제주",
          radio2: "제주",
          radio3: "제주",
          picked: "",
          url: 'https://kr.vuejs.org/images/logo.png',
          textValue: '',
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