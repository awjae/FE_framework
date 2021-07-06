<!-- vue 컴포넌트의 기본 형태 -->
<template>
    <div>
        <div>
            <input type="text" v-model="title" />
            <select v-model="selectedCity">
                <option :value="city.code" :key="i" v-for="(city, i) in cityList">{{ city.name }}</option>
            </select>
            <input type="text" v-model="userName" @keyup.enter="searchUserList" />
            <button type="button" @click="searchUserList">조회</button>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                        <th>직업</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="i" v-for="(person, i) in userList">
                        <td>{{ person.name }}</td>
                        <td>{{ person.age }}</td>
                        <td>{{ person.job }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name:'',
    components: {}, //하나의 컴포넌트는 다른 컴포넌트에서 쉽게 불러와 사용할 수 있다.
    data() {
        return {
          cityLisy: [
            { name:"서울", code:"01" },
            { name:"대구", code:"02" },
            { name:"제주", code:"03" }
          ],
          selectedCity: "",
          userName: "",
          userList: []
        };
    },
    setup() {},
    created() {}, //컴포넌트가 처음 실행된순간
    mounted() {}, // 컴포넌트의  dom들이 완성된순간
    unmounted() {},
    methods: {
        searchUserList() {
            // const selectedCity = this.selectedCity;
            // const userName = this.userName;
            const params = {
                selectedCity: this.selectedCity,
                useName: this.useName
            }

            this.userList = this.getUserList(params);
        },
        getUserList(params) {
            console.log(params)
            let list = [
                {name:'유재석', age: 50, job: '얀에인'},
                {name:'하하', age: 35, job: '가수'},
                {name:'정준하', age: 34, job: '사수'},
            ];

            return list;
        }
    }
}
</script>
<style scoped>

</style>