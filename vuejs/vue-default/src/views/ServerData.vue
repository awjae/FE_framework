<!-- vue 컴포넌트의 기본 형태 -->
<template>
    <div>
        <button type="button" @click="getProductList">조회</button>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:'',
    components: {}, //하나의 컴포넌트는 다른 컴포넌트에서 쉽게 불러와 사용할 수 있다.
    data() {
        return {
          productList: []
        };
    },
    setup() {},
    created() {}, //컴포넌트가 처음 실행된순간
    mounted() {}, // 컴포넌트의  dom들이 완성된순간
    unmounted() {},
    methods: {
        async getProductList() {
            this.productList = await this.api('', 'get');
            console.log(this.productList);
        },
        async api(url, method, data) {
            return (await axios({
                method: method,
                url: url,
                data:data
            }).catch(e => {
                console.log(e);
            })).data;
        }
    }
}
</script>
<style scoped>

</style>