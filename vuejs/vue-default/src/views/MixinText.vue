<template>
    <div>
        <button type="button" @click="getProductList">조회</button>
    </div>
</template>
<script>
import ApiMixin from '../api.js';

export default {
    mixins: [ApiMixin], //모듈안에 methods 가 합쳐 완성 
    data() {
        return {
          productList: []
        };
    },
    methods: {
        async getProductList() {
            this.productList = await this.$callAPI('', 'get');
            console.log(this.productList);
        }
    }
}
</script>
<style scoped>

</style>
