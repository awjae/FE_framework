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
        <input type="text" v-model.number="x1"/>
        <input type="text" v-model.number="x2"/>
        <input type="text" v-model="y"/>
        <!-- <button type="button" @click="plusNumber">+</button> -->
    </div>
</template>
<script>
export default {
    name:'',
    components: {}, 
    data() {
        return {
          firstName: '유',
          lastName: '재석',
          x1: 0,
          x2: 0,
          y: 0
        };
    },
    //computed 연산을 1번만 실행 (계산된 결과는 캐싱되고 종속성이 변경시 다시 계산됨)
    computed: {
        fullName() {
            return this.lastName + this.firstName;
        }
    },
    //꼭 필요한곳에만 쓸수 있도록
    watch : {
        x1() {
            this.y = this.x1 + this.x2;
        },
        x2() {
            this.y = this.x1 + this.x2;
        },
    },
    setup() {},
    created() {}, 
    mounted() {}, 
    unmounted() {},
    methods: {
        getName() {
            return this.lastName + this.firstName;
        },
        plusNumber() {
            this.y = this.x1 + this.x2;
        }
    }
}
</script>
<style scoped>

</style>

<!-- 
method을 사용하는 경우

DOM에서 발생하는 이벤트에 반응하려면
구성 요소에서 어떤 일이 발생할 때 함수를 호출합니다.
계산 된 속성 또는 감시자에서 메서드를 호출 할 수 있습니다.

computed을 사용하는 경우
기존 데이터 소스에서 새 데이터를 작성해야합니다.
하나 이상의 데이터 속성으로 작성된 템플릿에 사용하는 변수가 있습니다.
복잡하고 중첩 된 속성 이름을 더 읽기 쉽고 사용하기 쉬운 이름으로 줄이려고합니다 (하지만 원래 속성이 변경되면 업데이트).
템플릿의 값을 참조해야합니다. 이 경우 계산 된 속성을 만드는 것이 가장 좋은 방법입니다. 캐시되기 때문입니다.
둘 이상의 데이터 속성 변경을 수신해야합니다.
-->