<!-- vue 컴포넌트의 기본 형태 -->
<template>
    <div>
        <select v-model="city">
            <option :value="city.v" :key="i" v-for="(city, i) in options">{{city.t}}</option>
        </select>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product, i) in productList">
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name:'',
    components: {}, //하나의 컴포넌트는 다른 컴포넌트에서 쉽게 불러와 사용할 수 있다.
    data() {
        return {
          options: [
              { v: '02', t: '서울'},
              { v: '21', t: '제주'},
              { v: '276', t: '부산'}
          ],
          city: '276',
          productList: [
              { product_name: '기계식 키보드', price:25000, category: '전자제품' },
              { product_name: '마우스', price:9000, category: '전자제품' }
          ],
        };
    },
    setup() {},
    created() {}, //컴포넌트가 처음 실행된순간
    mounted() {}, // 컴포넌트의  dom들이 완성된순간
    unmounted() {},
    methods: {}
}
</script>
<style scoped>

</style>