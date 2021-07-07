<!-- vue 컴포넌트의 기본 형태 -->
<template>
    <div v-html="htmlString"></div>
</template>
<script>
export default {
    name:'',
    components: {}, 
    data() {
        return {
          htmlString: '<p style="color:red;">This is a red String</p>' 
        };
    },
    setup() {},
    created() {}, 
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
<style scoped>

</style>