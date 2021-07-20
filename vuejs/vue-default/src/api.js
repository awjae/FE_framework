import axios from 'axios';
//글로벌과 지역 믹스인을 잘 구분해서 사용하도록

export default {
    mounted() {
        console.log('Mixin mounted')
    },
    methods: {
        //공통 모듈을 만드는 방법 중 하나 Mixin
        //믹스인 함수 구분하기위해 딸러
        async $callAPI(url, method, data) {
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