<template>
  <div v-loading.body="loading"
       element-loading-text="拼命加载中">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        职位信息发布
        <small>请确保填写正确职位信息</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="/home"><i class="fa fa-dashboard"></i>主页</a></li>
        <li class="active">职位信息录入</li>
      </ol>
    </section>

    <!-- Main content

     这里放页面的主要内容-->
    <section class="content animated fadeInUp">
      <el-form
        label-position="left"
        :model="job"
        :rules="rules"
        ref="job"
        label-width="120px">
        <el-form-item label="职位名称" prop="jobName">
          <el-col :xs="16" :sm="14" :md="12" :lg="10">
            <el-input v-model="job.jobName"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="职位薪酬" prop="jobSalary">
          <el-col :xs="15" :sm="13" :md="11" :lg="9">
            <el-slider
              v-model="job.jobSalary"
              range
              show-stops
              :max="30">
            </el-slider>
          </el-col>
          <el-col :xs="6" :sm="5" :md="5" :lg="4">
            <el-tag type="primary">{{job.jobSalary[0]}}K</el-tag>
            ~
            <el-tag type="danger">{{job.jobSalary[1]}}K</el-tag>
          </el-col>
        </el-form-item>
        <el-form-item label="职位学历" prop="jobEducation">
          <el-col :xs="11" :sm="9" :md="7" :lg="5">
            <el-select v-model="job.jobEducation" placeholder="请选择职位学历">
              <el-option
                v-for="item in jobEducations"
                :key="item.objectId"
                :label="item.education"
                :value="item.objectId">
              </el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="职位类型" prop="jobType">
          <el-col :xs="11" :sm="9" :md="7" :lg="5">
            <el-select v-model="job.jobType" placeholder="请选择职位类型">
              <el-option
                v-for="item in jobTypes"
                :key="item.objectId"
                :label="item.type"
                :value="item.objectId">
              </el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="职位经验" prop="jobExperience">
          <el-col :xs="11" :sm="9" :md="7" :lg="5">
            <el-select v-model="job.jobExperience" placeholder="请选择职位经验">
              <el-option
                v-for="item in jobExperiences"
                :key="item.objectId"
                :label="item.experience"
                :value="item.objectId">
              </el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="职位福利" prop="jobBenefits">
          <el-col :xs="16" :sm="14" :md="12" :lg="10">
            <el-input v-model="job.jobBenefits"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="职位描述" prop="jobDescribe">
          <el-col :span="20">
            <div id="editor"></div>
          </el-col>
        </el-form-item>
        <el-form-item label="工作地址" prop="jobLocation">
          <el-col :span="20">
            <el-tag type="primary">选中地址为：</el-tag>
            <el-tag>{{job.jobLocation}}</el-tag>
            <div id="map">
              <div id="search">
                <input id="input" type="text" placeholder="请输入关键字搜索">
              </div>
              <div id="container"></div>
            </div>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('job')">立即发布</el-button>
          <el-button @click="resetForm('job')">重置</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>
<style>
  .el-select, .el-input {
    width: 100% !important;
  }

  #editor {
    min-height: 200px;
  }

  #map {
    min-height: 300px;
    position: relative;
    border-radius: 10px;
  }

  #search {
    background-color: #ddf;
    color: #333;
    border: 1px solid silver;
    box-shadow: 3px 4px 3px 0px silver;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 5px;
    overflow: hidden;
    line-height: 20px;
    z-index: 100;
  }

  #search input[type="text"] {
    height: 25px;
    border: 0;
    padding-left: 5px;
    width: 280px;
    border-radius: 3px;
    outline: none;
  }
</style>
<script>
  import WangEditor from 'wangeditor'

  export default{
    mounted() {
      var self = this;
      var editor = new wangEditor('editor');
      // 普通的自定义菜单
      editor.config.menus = [
        'source',
        '|',
        'bold',
        'underline',
        'italic',
        'strikethrough',
        'eraser',
        'forecolor',
        'bgcolor',
        '|',
        'quote',
        'fontfamily',
        'fontsize',
        'head',
        'unorderlist',
        'orderlist',
        'alignleft',
        'aligncenter',
        'alignright',
        '|',
        'link',
        'unlink',
        'table',
        'emotion',
        '|',
        'img',
        'video',
        'location',
        'insertcode',
        '|',
        'undo',
        'redo'
//        'fullscreen'
      ];
      editor.onchange = () => {
        // onchange 事件中更新数据
        this.job.jobDescribe = editor.$txt.html();
      };
      editor.create();

      AMapUI.setDomLibrary($);
      let map = new AMap.Map('container', {
        resizeEnable: true,
        mapStyle: 'normal',// normal:默认样式, dark:深色样式, blue_night:夜空蓝样式, fresh:浅色样式, light:OSM清新风格样式
        zoom: 11,
        center: [116.397428, 39.90923]// 设置地图中心位置
      });
      let marker = new AMap.Marker({
        position: [116.397428, 39.90923],
        title: self.job.jobName,
        content: self.job.jobName,
        map: map
      });
      AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.OverView', 'AMap.Geocoder', 'AMap.Geolocation',
        'AMap.Autocomplete', 'AMap.PlaceSearch'], () => {
        map.addControl(new AMap.ToolBar()); // 工具条：集成了缩放、平移、定位等功能按钮在内的组合控件
        map.addControl(new AMap.Scale()); // 比例尺：展示地图在当前层级和纬度下的比例尺
        map.addControl(new AMap.OverView({isOpen: true})); // 鹰眼：在地图右下角显示地图的缩略图
        const geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：无穷大
          buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          buttonPosition: 'RB'
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', (geolocationResult) => {
          marker.setPosition(geolocationResult.position);
          if (geolocationResult.accuracy) {
            console.log('精度：' + geolocationResult.accuracy + ' 米');
          }//如为IP精确定位结果则没有精度信息
          console.log('是否经过偏移：' + (geolocationResult.isConverted ? '是' : '否'));
        });
        const geocoder = new AMap.Geocoder({
          radius: 1000,
          // 默认值：base，返回基本地址信息；
          // 取值为：all，返回地址信息及附近poi、道路、道路交叉口等信息
          extensions: "base"
        });
        AMap.event.addListener(map, "click", (event) => {
          const lnglat = event.lnglat;
          marker.setPosition(lnglat);
          geocoder.getAddress(lnglat, function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
              new AMap.InfoWindow({
                content: result.regeocode.formattedAddress
              }).open(map, lnglat);
              self.job.jobLocation = result.regeocode.formattedAddress;
            } else {
              //获取地址失败
              self.$message.error('地址获取失败');
            }
          });
        });

        //实例化Autocomplete
        const autocomplete = new AMap.Autocomplete({
          input: "input"//使用联想输入的input的id
        });
        const placeSearch = new AMap.PlaceSearch({
          city: '北京',
          map: map
        })
        AMap.event.addListener(autocomplete, "select", function (e) {
          //TODO 针对选中的poi实现自己的功能
          placeSearch.search(e.poi.name);
          console.log(e.poi.name);
        });
      });
    },
    data() {
      return {
        loading: false,
        search_location: '',
        job: {
          jobName: '',
          jobSalary: [0, 0],
          jobEducation: '',
          jobExperiences: '',
          jobType: '',
          jobBenefits: '',
          jobDescribe: '',
          jobLocation: '您未选中任何地址'
        },
        rules: {
          jobName: [
            {required: true, message: '请输入职位名称', trigger: 'blur'},
            {min: 3, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
          ],
          jobBenefits: [
            {required: true, message: '请输入职位福利', trigger: 'blur'}
          ],
          jobEducation: [
            {required: true, message: '请选择职位教育', trigger: 'change'}
          ],
          jobExperience: [
            {required: true, message: '请选择职位经验', trigger: 'change'}
          ],
          jobType: [
            {required: true, message: '请选择职位类型', trigger: 'change'}
          ],
          jobDescribe: [
            {required: true, message: '请输入职位描述', trigger: 'change'}
          ]
        },
        jobEducations: [],
        jobExperiences: [],
        jobTypes: []
      };
    },
    computed: {},
    created() {
      this.loadJobType();
      this.loadJobEducation();
      this.loadJobExperience();
    },
    methods: {
      loadJobType() {
        let self = this;
        let JobType = Bmob.Object.extend("JobType");
        let query = new Bmob.Query(JobType);
        query.find({
          success: (results) => {
            for (let i = 0; i < results.length; i++) {
              let object = results[i];
              let objectId = object.id;
              let type = object.get('type');
              let jobType = new Object();
              jobType.objectId = objectId;
              jobType.type = type;
              self.$data.jobTypes.push(jobType);
            }
            self.loading = false;
          },
          error: (error) => {
            self.loading = false;
            self.$message.error('数据获取错误，错误原因：' + error.message);
          }
        });
      },
      loadJobEducation() {
        let self = this;
        let JobEducation = Bmob.Object.extend("JobEducation");
        let query = new Bmob.Query(JobEducation);
        query.find({
          success: (results) => {
            for (let i = 0; i < results.length; i++) {
              let object = results[i];
              let objectId = object.id;
              let education = object.get('education');
              let jobEducation = new Object();
              jobEducation.objectId = objectId;
              jobEducation.education = education;
              self.$data.jobEducations.push(jobEducation);
            }
            self.loading = false;
          },
          error: (error) => {
            self.loading = false;
            self.$message.error('数据获取错误，错误原因：' + error.message);
          }
        });
      },
      loadJobExperience() {
        let self = this;
        let JobExperience = Bmob.Object.extend("JobExperience");
        let query = new Bmob.Query(JobExperience);
        query.find({
          success: (results) => {
            for (let i = 0; i < results.length; i++) {
              let object = results[i];
              let objectId = object.id;
              let experience = object.get('experience');
              let jobExperience = new Object();
              jobExperience.objectId = objectId;
              jobExperience.experience = experience;
              self.$data.jobExperiences.push(jobExperience);
            }
            self.loading = false;
          },
          error: (error) => {
            self.loading = false;
            self.$message.error('数据获取错误，错误原因：' + error.message);
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let Job = Bmob.Object.extend("Job");
            let job = new Job();
            let j = this.job;
            job.set("jobName", j.jobName);
            job.set("jobSalary", j.jobSalary);
            job.set("jobBenefits", j.jobBenefits);
            job.set("jobLocation", j.jobLocation);
            job.set("jobEducation", Bmob.Object.createWithoutData('JobEducation', j.jobEducation));
            job.set("jobExperience", Bmob.Object.createWithoutData('JobExperience', j.jobExperience));
            job.set("jobType", Bmob.Object.createWithoutData('JobType', j.jobType));
            const date = new Date();
            job.set("jobPublicDate", date);
            // TODO 之后获取公司
            job.set("company", Bmob.Object.createWithoutData('Company', 'UptWHHHV'));
            job.set("jobDescribe", j.jobDescribe);
            job.save(null, {
              success: (job) => {
                // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），
                this.$message({
                  message: '职位发布成功！',
                  type: 'success'
                });
              },
              error: (job, error) => {
                // 添加失败
                this.$message.error('职位信息添加出错，错误原因：' + error.message);
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
      }
    }
  }
</script>
