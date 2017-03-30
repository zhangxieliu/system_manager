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
          <div class="logo-pic" v-if="company.companyLogo">
            <img :src="company.companyLogo" class="avatar" width="80px" height="80px">
          </div>
          <a href="javascript:;" class="upload">
            <span>上传<i class="el-icon-upload el-icon--right"></i></span>
            <input type="file" accept="image/png,image/gif" id="fileUpload" @change="changeLogo">
          </a>
        </el-form-item>
        <el-form-item label="公司名称" prop="companyName">
          <el-col :span="10">
            <el-input v-model="company.companyName"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="公司地址" prop="companyCity">
          <el-col :span="6">
            <el-select v-model="company.companyCity" placeholder="所在城市">
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
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="公司成立时间" prop="companyCreateDate" required>
          <el-date-picker type="date"
                          placeholder="选择日期"
                          v-model="company.companyCreateDate">
          </el-date-picker>
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
          <el-col :span="14">
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
  .logo-pic {
    width: 100px;
    height: 100px;
  }

  .upload {
    cursor: pointer;
    position: relative;
    display: inline-block;
    background: #20A0FF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 5px 12px;
    overflow: hidden;
    color: white;
    text-decoration: none;
    text-indent: 0;
    line-height: 25px;
  }

  .upload:hover {
    cursor: pointer;
    background: #58B7FF;
    color: white;
    border-color: #78C3F3;
    text-decoration: none;
  }

  .upload input {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
  }

  /*解决默认是margin-left，导致左边不对齐*/
  .el-checkbox {
    padding-right: 15px !important;
    margin-left: 0px !important;
  }
</style>
<script>
  import ImageUtils from '../utils/ImageUtils'
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
            value: '上海',
            label: '上海'
          }, {
            value: '北京',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: '成都',
            label: '成都'
          }, {
            value: '深圳',
            label: '深圳'
          }, {
            value: '广州',
            label: '广州'
          }, {
            value: '大连',
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
    created () {
      this.loadCompanyType();
      this.loadCompanyScale();
      this.loadCompanyIndustry();
    },
    methods: {
      changeLogo() {
        var reader;
        if (window.FileReader) {
          reader = new FileReader();
        } else {
          this.$message.error('您的设备不支持图片预览功能，如需该功能请升级您的设备！');
        }
        let fileUpload = $('#fileUpload')[0];
        let file = fileUpload.files[0];
        if (window.URL) {
          //File API
          let src = window.URL.createObjectURL(file);
          this.company.companyLogo = src;
          $('img').load(() => window.URL.revokeObjectURL(src))
        } else if (window.FileReader) {
          //opera不支持createObjectURL/revokeObjectURL方法。我们用FileReader对象来处理
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function (e) {
            this.company.companyLogo = this.result;
          }
        } else {
          // ie
          fileUpload.files.select();
          fileUpload.files.blur();
          var src = document.selection.createRange().text;
          document.selection.empty();
          this.company.companyLogo = src;
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let Company = Bmob.Object.extend("Company");
            let company = new Company();
            let com = this.company;
            let fileUpload = $('#fileUpload')[0];
            if (fileUpload.files.length > 0) {
              let file = fileUpload.files[0];
              company.set("companyLogo", new Bmob.File(file.name, file));
            }
            company.set("companyName", com.companyName);
            company.set("companyCity", com.companyCity);
            company.set("companyCreateDate", com.companyCreateDate);
            company.set("companyWebsite", com.companyWebsite);
            company.set("companyType", Bmob.Object.createWithoutData('CompanyType', com.companyType));
            company.set("companyScale", Bmob.Object.createWithoutData('CompanyScale', com.companyScale));
            company.set("companyIndustry", com.companyIndustry);
            company.set("companyIntroduce", com.companyIntroduce);
            company.save(null, {
              success: (company) => {
                // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），
                // 你还可以在Bmob的Web管理后台看到对应的数据
                this.$message({
                  message: '公司录入成功！',
                  type: 'success'
                });
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
        const isPic = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isPic) {
          this.$message.error('上传头像图片只能是JPG/PNG格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isPic && isLt2M;
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
