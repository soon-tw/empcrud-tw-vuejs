<template>
    <div class="home">
        <h1>{{title}}</h1>
        <p>
            <el-button @click="getOpenData" type="primary">查 詢</el-button>
            <el-button @click="test" type="primary">測 試</el-button>
        </p>
    
        <el-table v-loading.body="loading" :data="openDatas" border style="width: 100%" :default-sort="{prop: 'id', order: 'descending'}">
            <el-table-column prop="FileNo_" label="案號" sortable width="150"> </el-table-column>
            <el-table-column prop="UnitName_" label="承辦機關" sortable width="120"> </el-table-column>
            <el-table-column prop="ZipName_" label="行政區域" sortable width="120"> </el-table-column>
            <el-table-column prop="BeforeDesc_" label="反映內容"> </el-table-column>
            <el-table-column prop="Cre_Date_" label="反映日期" sortable width="220"> </el-table-column>
            <el-table-column prop="address_" label="地點" width="200"> </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="tableTotal">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'home',
    data() {
        return {
            title: '高雄受理事件查詢',
            apiUrl: 'http://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery',
            openDatas: [],
            push: '',
            loading: false,
            currentPage: 1,
            tableTotal: 0
        }
    },
    methods: {
        getOpenData() {
            this.loading = true
            axios.get(this.apiUrl)
                .then(response => {
                    this.openDatas = response.data
                    this.tableTotal = this.openDatas.length
                    this.loading = false
                })
                .catch(e => {
                    this.errors.push(e)
                    this.tableTotal = 0
                    this.loading = false
                })
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        test() {
            console.log(this.openDatas);
        }


    }
}
</script>
<style lang="sass">
    
</style>｀