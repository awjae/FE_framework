<!-- vue 컴포넌트의 기본 형태 -->
<template>
    <div>
        <button type="button" v-on:click="increaseCounter">Add 1</button>
        <p>The count is : {{ count }}</p>
        <button type="button" v-on:click="one(), two()">test</button>
        <select v-model="city" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>
        <input type="text" v-model="textValue" @keyup.enter="showValue"/>
    </div>
</template>
<script>
export default {
    name:'',
    components: {}, //하나의 컴포넌트는 다른 컴포넌트에서 쉽게 불러와 사용할 수 있다.
    data() {
        return {
          count: 0, //양방향 바인딩 
          city: "",
          textValue: "",
        };
    },
    setup() {},
    created() {}, //컴포넌트가 처음 실행된순간
    mounted() {}, // 컴포넌트의  dom들이 완성된순간
    unmounted() {},
    methods: {
        increaseCounter() {
            this.counter++;
        },
        one() {
            conosl.log(1)
        },
        two() {
            console.log(2)
        },
        changeSelect() {
            alert(this.city)
        },
        showValue() {
            // keyup에 바로 바인딩 할수 있는 요소 [ tab enter delete esc space up down left right ]
            alert(this.textValue)
        }
    }
}
</script>
<style scoped>

</style>