<template>
    <div class="home">
        <h1> {{title}} </h1>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
        name: 'callLaraApi',
        data() {
            return {
                title: 'Vue.js 呼叫 Laravel WebApi 新增 修改 查詢 練習 ＧＯ （CallLaraApi.vue） ',
                apiUrl: 'http://localhost:8888/api/v1/employees',
                apiDatas: []
            }
        },
        methods: {
            getOpenData() {
                axios.get(this.apiUrl)
                    .then(response => {
                        this.apiDatas = response.data
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            },    
        }
    }
</script>