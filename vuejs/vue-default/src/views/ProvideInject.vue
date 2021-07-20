<!-- 부모 자식 자식 계층 구조가 복잡할떄 쓰는거-->
<template>
    <div>
        <ProvideInjectChild />
    </div>
</template>
<script>
import ProvideInjectChild from "./ProvideInjectChild"; 

export default {
    components: { ProvideInjectChild }, //하나의 컴포넌트는 다른 컴포넌트에서 쉽게 불러와 사용할 수 있다.
    data() {
        return {
            return: ["A", "B"]
        };
    },
    provide() {
        return {
            itemLength: this.items.length,
        }
    }
}
</script>
<style scoped>

</style>