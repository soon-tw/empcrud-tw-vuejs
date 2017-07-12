<template>
  <div>
    <h1>
      {{title}}
    </h1>
    <p>
      <el-button @click='getOpenData' type="primary">查詢</el-button>
    </p>
    <el-table :data="openDatas" height="600" border style="width: 100%" :default-sort="{prop: 'id', order: 'descending'}">
      <el-table-column prop="updated_at:" label="更新日期" sortable width="180">
      </el-table-column>
      <el-table-column prop="id:" label="編號" sortable width="180">
      </el-table-column>
      <el-table-column prop="name:" label="姓名" sortable width="180">
      </el-table-column>
      <el-table-column prop="email:" label="E-Mail" sortable width="180">
      </el-table-column>
      <el-table-column prop="contact_number:" label="電話號碼">
      </el-table-column>
      <el-table-column prop="position:" label="居住地">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'test',
    data() {
      return {
        title: '開始學習',
        apiUrl: 'http://192.168.99.100:32783/api/v1/employees/',
        posts: [],
        openDatas: []

      }
    },
    methods: {
      getOpenData() {
        // this.loading = true
        axios.get(this.apiUrl)
          .then(response => {
            this.openDatas = response.data
            console.log(this.openDatas)

          })
          .catch(e => {
            this.errors.push(e)
          })
      },
    }
  }

  </script>