<template>
  <div v-loading.body="loading"
       element-loading-text="拼命加载中">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        公司信息表格信息
        <small>公司报表</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="/home"><i class="fa fa-home"></i>主页</a></li>
        <li class="active ">公司信息表格</li>
      </ol>
    </section>
    <!-- Main content
     这里放页面的主要内容-->
    <section class="content animated fadeInUp">
      <el-row type="flex" justify="end">
        <el-col :span="8">
          <el-input placeholder="请输入所搜内容" v-model="searchContent">
            <el-select v-model="select"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="公司名称" value="公司名称"></el-option>
              <el-option label="公司编号" value="公司编号"></el-option>
            </el-select>
            <el-button slot="append" @click="handleSearch" type="primary" icon="search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-table
        :data="companies"
        border
        style="width: 100%">
        <el-table-column
          label="申请日期"
          align="center"
          min-width="90"
          :show-overflow-tooltip="true"
          sortable>
          <template scope="scope">
            <el-icon name="time"></el-icon>
            <span style="margin-left: 10px">{{ scope.row.date|formatDate}}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          min-width="120"
          :show-overflow-tooltip="true"
          label="公司名称">
          <template scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>审核状态: {{ scope.row.isAudit }}</p>
              <div slot="reference" class="name-wrapper">
                <span class="cusor-pointer"><el-tag type="danger">{{ scope.row.companyName }}</el-tag></span>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          label="所在城市"
          sortable
          align="center"
          prop="companyCity">
        </el-table-column>
        <el-table-column
          label="公司类型"
          sortable
          min-width="80"
          :show-overflow-tooltip="true"
          align="center"
          prop="companyType">
        </el-table-column>
        <el-table-column
          label="公司规模"
          sortable
          min-width="85"
          :show-overflow-tooltip="true"
          align="center"
          prop="companyScale">
        </el-table-column>
        <el-table-column
          label="公司网址"
          align="left"
          :show-overflow-tooltip="true"
          min-width="120"
          prop="companyWebsite">
        </el-table-column>
        <el-table-column
          align="center"
          min-width="150"
          :show-overflow-tooltip="true"
          label="公司行业">
          <template scope="scope">
            <el-tag type="primary" style="margin: 5px" :key="item" v-for="item in scope.row.companyIndustry">{{item}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          width="147"
          label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="handleDetails(scope.$index, scope.row)">详情
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">审核
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pull-right">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[2, 3, 4, 6]"
          :page-size="limitSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalSize">
        </el-pagination>
      </div>
    </section>
  </div>
</template>
<style>
  .cusor-pointer {
    cursor: pointer;
  }

  .el-select .el-input {
    width: 110px !important;
  }

  .search-panel {
    display: inline-block;
  }
</style>
<script>
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  export default {
    components: {ElCol, ElRow}, data() {
      return {
        loading: false,
        limitSize: 4,
        currentPage: 1,
        totalSize: 0,
        companies: [],
        select: '公司名称',
        searchContent: ''
      };
    },
    created () {
      let Company = Bmob.Object.extend("Company");
      let query = new Bmob.Query(Company);
      query.include('companyType');
      query.include('companyScale');
      query.limit(this.limitSize);
      this.handleQuery(query);
    },
    filters: {
      formatDate: (value) => {
        if (!value) {
          return '';
        } else {
          let date = new Date(value);
          return date.getFullYear() + "." + ("0" + (date.getMonth() + 1)).slice(-2) + "." + ("0" + date.getDate()).slice(-2);
        }
      }
    },
    methods: {
      handleDetails(index, row) {
        this.$router.push({name: 'CompanyInfo', params: {objectId: row.objectId}});
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSizeChange(val) {
        this.limitSize = val;
        this.handleLoadData(this.currentPage);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.handleLoadData();
      },
      handleLoadData() {
        let Company = Bmob.Object.extend("Company");
        let query = new Bmob.Query(Company);
        query.include('companyType');
        query.include('companyScale');
        query.skip((this.currentPage - 1) * this.limitSize);
        query.limit(this.limitSize);
        query.descending("createdAt");
        this.handleQuery(query);
      },
      handleQuery(query){
        this.loading = true;
        query.count({
          success: (count) => {
            // 查询成功，返回记录数量
            this.totalSize = count;
          },
          error: (error) => {
            // 查询失败
          }
        });
        query.find({
          success: (results) => {
            this.companies = [];
            for (var i = 0; i < results.length; i++) {
              var object = results[i];
              var company = new Object;
              company.date = object.createdAt;
              company.objectId = object.id;
              company.companyName = object.get('companyName');
              company.companyCity = object.get('companyCity');
              company.companyType = object.get('companyType').get('type');
              company.companyScale = object.get('companyScale').get('scale');
              company.companyWebsite = object.get('companyWebsite');
              company.companyIndustry = object.get('companyIndustry');
              this.companies.push(company);
            }
            this.loading = false;
          },
          error: (error) => {
            this.loading = false;
            this.$message.error('公司信息查询错误，错误原因：' + error.message);
          }
        });
      },
      handleSearch(){
        if (this.searchContent == '') {
          let Company = Bmob.Object.extend("Company");
          let query = new Bmob.Query(Company);
          query.include('companyType');
          query.include('companyScale');
          query.limit(this.limitSize);
          this.handleQuery(query);
        } else if (this.select === '公司名称') {
          let Company = Bmob.Object.extend("Company");
          let query = new Bmob.Query(Company);
          query.include('companyType');
          query.include('companyScale');
          query.limit(this.limitSize);
          query.equalTo('companyName', this.searchContent);
          this.handleQuery(query);
        } else if (this.select === '公司编号') {
          let Company = Bmob.Object.extend("Company");
          let query = new Bmob.Query(Company);
          query.include('companyType');
          query.include('companyScale');
          query.limit(this.limitSize);
          query.equalTo('objectId', this.searchContent);
          this.handleQuery(query);
        } else {

        }
      }
    }
  }
</script>
