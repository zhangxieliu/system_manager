<template>
  <div v-loading.body="loading"
       element-loading-text="拼命加载中">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        公司信息录入
        <small>请确保填写正确公司信息</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="/home"><i class="fa fa-dashboard"></i>主页</a></li>
        <li class="active">公司信息录入</li>
      </ol>
    </section>

    <!-- Main content
     这里放页面的主要内容-->
    <section class="content animated fadeInUp">
      <el-form
        label-position="left"
        :model="company"
        :rules="rules"
        ref="company"
        label-width="120px"
        class="demo-company">
        <el-form-item label="公司Logo" prop="companyLogo">
          <div class="logo">
            <input type="file" id="profilePhotoFileUpload" @change="changeLogo">
            <img v-if="company.companyLogo" :src="company.companyLogo" class="avatar">
            <i v-else class="el-icon-plus"></i>
          </div>
        </el-form-item>
        <el-form-item label="公司名称" prop="companyName">
          <el-col :span="10">
            <el-input v-model="company.companyName"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="公司地址" prop="companyCity">
          <el-select v-model="company.companyCity" placeholder="所在城市">
            <el-col :span="10">
              <el-option-group
                v-for="group in cityList"
                :key="group.label"
                :label="group.label">
                <el-option
                  v-for="item in group.options"
                  :key="item.label"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-option-group>
            </el-col>
          </el-select>
        </el-form-item>
        <el-form-item label="公司成立时间" prop="companyCreateDate" required>
          <el-col :span="10">
            <el-date-picker type="date" placeholder="选择日期" v-model="company.companyCreateDate"
                            style="width: 100%;">
            </el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="公司网址" prop="companyWebsite">
          <el-col :span="10">
            <el-input v-model="company.companyWebsite"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="公司类型" prop="companyType">
          <el-col :span="10">
            <el-select v-model="company.companyType" placeholder="请选择公司类型">
              <el-option
                v-for="item in companyTypeList"
                :key="item.objectId"
                :label="item.type"
                :value="item.objectId">
              </el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="公司规模" prop="companyScale">
          <el-col :span="10">
            <el-select v-model="company.companyScale" placeholder="请选择公司规模">
              <el-option
                v-for="item in companyScaleList"
                :key="item.objectId"
                :label="item.scale"
                :value="item.objectId">
              </el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="公司行业" prop="companyIndustry">
          <el-col :span="20">
            <el-checkbox-group v-model="company.companyIndustry">
              <el-checkbox
                v-for="item in companyIndustryList"
                :key="item.objectId"
                :label="item.industry"
                :name="item.industry">
              </el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-form-item>
        <el-form-item label="公司介绍" prop="companyIntroduce">
          <el-col :span="15">
            <el-input
              type="textarea"
              autosize
              placeholder="请输入公司介绍信息"
              v-model="company.companyIntroduce"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('company')">立即创建</el-button>
          <el-button @click="resetForm('company')">重置</el-button>
        </el-form-item>
      </el-form>
    </section>
    <!-- /.content -->
  </div>
</template>
<style>
  .logo {
    display: inline-block;
    width: 100px;
    height: 100px;
    position: relative;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
  }

  #profilePhotoFileUpload {
    background: none;
    font-size: 20px;
    opacity: 0;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }

  .el-icon-plus {
    position: absolute;
    top: 40%;
    left: 40%;
    text-align: center;
    align-content: center;
  }

  /*.el-upload {*/
  /*width: 100%;*/
  /*border: 1px dashed #d9d9d9;*/
  /*border-radius: 6px;*/
  /*cursor: pointer;*/
  /*position: relative;*/
  /*overflow: hidden;*/
  /*}*/

  /*.el-upload__input {*/
  /*display: none !important;*/
  /*}*/

  .avatar {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100px;
    height: 100px;
    display: block;
  }

  /*解决默认是margin-left，导致左边不对齐*/
  .el-checkbox {
    padding-right: 15px !important;
    margin-left: 0px !important;
  }
</style>
<script>
  export default{
    data(){
      var validateIndustry = (rule, value, callback) => {
        if (value.length > 3) {
          callback(new Error('最多只能选择三个'));
        } else if (value.length == 0) {
          callback(new Error('请至少选择一个'));
        } else {
          callback();
        }
      };
      return {
        loading: true,
        cityList: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        companyScaleList: [],
        companyIndustryList: [],
        companyTypeList: [],
        company: {
          companyLogo: '',
          companyName: '',
          companyCity: '',
          companyCreateDate: '',
          companyWebsite: '',
          companyType: '',
          companyScale: '',
          companyIndustry: [],
          companyIntroduce: ''
        },
        rules: {
          companyLogo: [
            {required: true, message: '请上传公司Logo', trigger: 'blur'}
          ],
          companyName: [
            {required: true, message: '请输入公司名称', trigger: 'blur'},
            {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
          ],
          companyCity: [
            {required: true, message: '请选择公司所在城市', trigger: 'change'}
          ],
          companyCreateDate: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          companyWebsite: [
            {required: true, message: '请输入公司网址', trigger: 'blur'}
          ],
          companyType: [
            {required: true, message: '请选择公司类型', trigger: 'change'}
          ],
          companyScale: [
            {required: true, message: '请选择公司规模', trigger: 'change'}
          ],
          companyIndustry: [
            {type: 'array', required: true, validator: validateIndustry, trigger: 'change'}
          ],
          companyIntroduce: [
            {required: true, message: '请输入公司介绍', trigger: 'blur'},
            {min: 200, max: 1000, message: '长度在 200 到 1000 个字符', trigger: 'blur'}
          ]
        }
      };
    },
    mounted: function () {
      this.loadCompanyType();
      this.loadCompanyScale();
      this.loadCompanyIndustry();
    },
    methods: {
      changeLogo(){
        let fileUpload = $('#profilePhotoFileUpload')[0];
        let file = fileUpload.files[0];
        let src = window.URL.createObjectURL(file);
        this.company.companyLogo = src;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          console.log(this.company.companyName);
          let fileUpload = $('#profilePhotoFileUpload')[0];
          console.log(fileUpload.files.length);
          if (fileUpload.files.length > 0) {
            let file = fileUpload.files[0];
            var src = window.URL.createObjectURL(file);
            this.company.companyLogo = src;
            console.log(src);
            var name = "logo_test.jpg";
            var file = new Bmob.File(name, file);
//            file.save();
          }
          if (valid) {
            let Company = Bmob.Object.extend("Company");
            let company = new Company();
            let com = this.company;
            company.set("companyName", com.companyName);
            company.set("companyType", Bmob.Object.createWithoutData('CompanyType', com.companyType));
            company.set("companyScale", Bmob.Object.createWithoutData('CompanyScale', com.companyScale));
            company.save(null, {
              success: (company) => {
                // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），
                // 你还可以在Bmob的Web管理后台看到对应的数据
                this.$message({
                  message: '公司录入成功！',
                  type: 'success'
                });
                alert('添加数据成功，返回的objectId是：' + company.id);
              },
              error: (company, error) => {
                // 添加失败
                this.$message.error('公司信息添加出错，错误原因：' + error.message);
                return false;
              }
            });
          } else {
            this.$message({
              message: '警告，请修改错误地方！',
              type: 'warning'
            });
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleAvatarScucess(response, file) {
        this.company.companyLogo = URL.createObjectURL(file.raw);
        console.log(file);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      loadCompanyType() {
        let self = this;
        let companyType = Bmob.Object.extend("CompanyType");
        let query = new Bmob.Query(companyType);
        query.find({
          success: (results) => {
            // 循环处理查询到的数据
            for (let i = 0; i < results.length; i++) {
              let object = results[i];
              let objectId = object.id;
              let type = object.get('type');
              let companyType = new Object();
              companyType.objectId = objectId;
              companyType.type = type;
              self.$data.companyTypeList.push(companyType);
            }
            self.loading = false;
          },
          error: (error) => {
            self.loading = false;
            self.$message.error('数据获取错误，错误原因：' + error.message);
          }
        });
      },
      loadCompanyScale() {
        let self = this;
        let companyScale = Bmob.Object.extend("CompanyScale");
        let query = new Bmob.Query(companyScale);
        query.find({
          success: (results) => {
            // 循环处理查询到的数据
            for (let i = 0; i < results.length; i++) {
              let object = results[i];
              let objectId = object.id;
              let scale = object.get('scale');
              let companyScale = new Object();
              companyScale.objectId = objectId;
              companyScale.scale = scale;
              self.$data.companyScaleList.push(companyScale);
            }
            self.loading = false;
          },
          error: (error) => {
            self.loading = false;
            self.$message.error('数据获取错误，错误原因：' + error.message);
          }
        });
      },
      loadCompanyIndustry() {
        let self = this;
        let companyIndustry = Bmob.Object.extend("CompanyIndustry");
        let query = new Bmob.Query(companyIndustry);
        query.find({
          success: (results) => {
            // 循环处理查询到的数据
            for (let i = 0; i < results.length; i++) {
              let object = results[i];
              let objectId = object.id;
              let industry = object.get('industry');
              let companyIndustry = new Object();
              companyIndustry.objectId = objectId;
              companyIndustry.industry = industry;
              self.$data.companyIndustryList.push(companyIndustry);
            }
            self.loading = false;
          },
          error: (error) => {
            self.loading = false;
            self.$message.error('数据获取错误，错误原因：' + error.message);
          }
        });
      }
    }
  }
</script>
