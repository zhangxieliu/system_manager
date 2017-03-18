<template>
  <div v-loading.body="loading"
       element-loading-text="拼命加载中">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        {{company.companyName}}
        <small>公司信息</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="/home"><i class="fa fa-home"></i>主页</a></li>
        <li class="active ">公司信息</li>
      </ol>
    </section>
    <!-- Main content
     这里放页面的主要内容-->
    <section class="content animated fadeInUp">
      <el-row type="flex" align="middle" justify="center">
        <el-col :span="4">
          <img width="120px" height="120px" :src="company.companyLogo"/>
        </el-col>
        <el-col :span="20">
          <el-row align="middle">
            <el-col :span="12">
              <label>公司名称：</label>{{company.companyName}}
            </el-col>
            <el-col :span="12">
              <label>公司成立时间：</label>{{company.date | formatDate}}
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <label>公司类型：</label>{{company.companyType}}
            </el-col>
            <el-col :span="12">
              <label>公司规模：</label>{{company.companyScale}}
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <label>公司网址：</label><a :href="company.companyWebsite">{{company.companyWebsite}}</a>
            </el-col>
            <el-col :span="12">
              <label>公司所在城市：</label>{{company.companyCity}}
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <label>公司行业：</label>
          <el-tag type="primary" :key="industry" v-for="industry in company.companyIndustry">{{industry}}</el-tag>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <label>公司介绍：</label>
          {{company.companyIntroduce}}
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<style>
  .el-row {
    font-size: 18px;
    margin: 10px 0px;
  }

  .el-tag {
    margin: 0px 10px;
  }
</style>
<script>
  export default{
    data(){
      return {
        loading: false,
        company: {}
      }
    },
    created() {
      console.log(this.$route.params.objectId);
      let Company = Bmob.Object.extend("Company");
      let query = new Bmob.Query(Company);
      query.include('companyType');
      query.include('companyScale');
      query.get(this.$route.params.objectId, {
        success: (object) => {
          var company = new Object;
          company.date = object.createdAt;
          company.objectId = object.id;
          company.companyLogo = object.get('companyLogo')._url;
          company.companyName = object.get('companyName');
          company.companyCity = object.get('companyCity');
          company.companyType = object.get('companyType').get('type');
          company.companyScale = object.get('companyScale').get('scale');
          company.companyWebsite = object.get('companyWebsite');
          company.companyIndustry = object.get('companyIndustry');
          company.companyIntroduce = object.get('companyIntroduce');
          this.companyName = company.companyName;
          this.company = company;
          console.log(this.company.companyName);
        },
        error: (object, error) => {
          // 查询失败
        }
      });
    },
    filters: {
      formatDate(value) {
        let split = new String(value).split(' ');
        return split[0];
      }
    }
  }
</script>
