<template>
  <el-container>
    <el-row type="flex" class="row-bg" justify="end" :gutter="10">
      <el-col :span="4">
        <el-input placeholder="请输入文章标题" v-model="input4"></el-input>
      </el-col>
      <el-col :span="1.5">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" icon="el-icon-edit-outline" @click="goToCreateArticle"> 创建</el-button>
      </el-col>
    </el-row>

    <el-main>
      <el-table :data="tableData" border style="width: 100%;">
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="username" label="发布人"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
<!--        <el-table-column prop="city" label="浏览次数"></el-table-column>-->
<!--        <el-table-column prop="address" label="简介" width="500"></el-table-column>-->
<!--        <el-table-column prop="zip" label="创建时间"></el-table-column>-->
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-row type="flex" class="row-bg" justify="end">
        <el-col :span="7.5">
          <div class="block">
            <el-pagination :page-size="searchFrom.pageNum" :current-page.sync="searchFrom.pageSize" layout="total, prev, pager, next" :total="total" @current-change="handleCurrentChange"></el-pagination>
          </div>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
  import {
    findAll
  } from '@/utils/api/api'
export default {
  name:"article-table",
  mounted(){
    this.getData()
  },
  methods: {
    // 获取所有的博客列表
    getData(){
      let params = this.searchFrom
      findAll(params, (data) => {
        if (data.errorCode === 0){
          this.tableData = data.data.rows
          this.total = data.data.count
          console.log(data)
        } else {
          this.$message({
            message: data.msg,
            type: 'error'
          });
        }
      })

    },
    handleClick(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },
    goToCreateArticle(){
      this.$router.push({path: '/article/create'})
    },
    handleCurrentChange: function (val) {
      document.getElementById('app').scrollTop = 0;
      this.searchFrom.pageSize = val;
      this.getData();
    },
  },

  data() {
    return {
      searchFrom:{
        pageNum:10,
        pageSize:1
      },
      total: 0,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄12312312",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ],
      input4: ""
    };
  }
};
</script>

<style lang="stylus" scoped>
.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
