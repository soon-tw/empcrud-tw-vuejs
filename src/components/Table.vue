<template>
    <div class="table">
        <h1> {{title}} </h1>
        <p>
            <el-button @click="test" type="primary">查 詢</el-button>
        </p>
        <el-table show-summary="false"  :data="Datas" height="600" border style="width: 100%" :default-sort="{prop: 'id', order: 'descending'}">
            <el-table-column prop="id" label="序號" sortable width="120"> </el-table-column>
            <el-table-column prop="name" label="姓名" sortable width="200"> </el-table-column>
            <el-table-column prop="email" label="電子郵件" sortable width="200"> </el-table-column>
            <el-table-column prop="contact_number" label="電話" width="200"> </el-table-column>
            <el-table-column prop="position" label="地址" sortable > </el-table-column>
            <el-table-column prop="created_at" label="建檔時間" width="220"> </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
        name: 'table',
        data() {
            return {
                title: 'Laravel Api 後端呼叫練習（專案：Table.vue）',
                apiUrl: 'http://localhost:8888/api/v1/employees',
                dayCount: 1,
                Datas: []
            }
        },
        methods: {
            test() {
                this.getOpenData()
                //this.dayCount ++
                //     this.dayCount = this.dayCount + 1
    
                //   console.log(this.dayCount);
            },
            getOpenData() {
                this.loading = true
                axios.get(this.apiUrl)
                    .then(response => {
                        this.Datas = response.data
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        }
    }
</script>