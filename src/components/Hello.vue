<template>
    <div class="home">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span style="line-height: 36px;"><h1>{{title}}</h1></span>
    
            </div>
            <div>
                <p>
                    <el-button @click="getOpenData" type="primary">查 詢</el-button>
                </p>
                <el-table show-summary="true" v-loading.body="loading" :data="filterTable" height="600" border style="width: 100%" :default-sort="{prop: 'id', order: 'descending'}">
                    <el-table-column prop="FileNo_" label="案號" sortable width="150"> </el-table-column>
                    <el-table-column prop="UnitName_" label="承辦機關" sortable width="120"> </el-table-column>
                    <el-table-column prop="ZipName_" label="行政區域" sortable width="120"> </el-table-column>
                    <el-table-column prop="BeforeDesc_" label="反映內容"> </el-table-column>
                    <el-table-column prop="Cre_Date_" label="反映日期" sortable width="220"> </el-table-column>
                    <el-table-column prop="address_" label="地點" width="200"> </el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <template scope="scope">
                            <el-button @click="getMap(scope.row.address_)" type="text" size="small">地圖</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="block">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="tableTotal">
                    </el-pagination>
                </div>
            </div>
        </el-card>
    
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'hello',
    data() {
        return {
            title: '高雄受理事件查詢系統',
            apiUrl: 'http://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery',
            openDatas: [],
            filterTable: [],
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
                    this.setFilterTable(100)
                    this.loading = false
                })
                .catch(e => {
                    this.errors.push(e)
                    this.tableTotal = 0
                    this.loading = false
                })
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`)
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.setFilterTable(100)
            console.log(`当前页: ${val}`)
        },
        test() {
            console.log(this.openDatas)
        },
        setFilterTable(value) {
            this.filterTable = this.openDatas.slice(this.currentPage * value - value, this.currentPage * value);
        },
        getMap(address) {
            console.log(address)
        },
        setUnitName(){

        }


    }
}
</script>
<style lang="sass">

.text 
  font-size: 14px
.item 
  padding: 18px 0
  
.clearfix:before,.clearfix:after 
  display: table
  content: ""

.clearfix:after 
  clear: both
  
.box-card 
  width: 100%
  
    
</style>