<template>
    <div>
        <button type="button" @click="getProductList">조회</button>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
          productList: []
        };
    },
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