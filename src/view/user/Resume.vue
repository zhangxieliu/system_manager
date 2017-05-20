<template>
  <div class="main">
    <el-row :gutter="spaceLabel">
      <el-col :xs="24" :sm="17" :md="18" :lg="18">
        <div class="resume">
          <h5 class="update-time">最后更新时间：<span>2017.04.10.14:11</span></h5>
          <div class="panel-info">
            <div id="item1" class="resume-item animated bounce fadeIn">
              <div class="item-primary">
                <div class="panel-list clearfix">
                  <span class="panel-title pull-left">个人信息</span>
                  <a href="javascript:;" @click="editInfo('1')" class="link-edit pull-right">
                    <i class="ic ic-edit"></i>编辑
                    </a>
                </div>
                <div class="info-labels">
                  <p class="row-base">
                    <span class="label-text"><i class="ic ic-experience"></i>{{user.name}}</span>
                    <em class="vline"></em>
                    <span class="label-text">{{user.gender}}<i class="ic ic-male"></i></span>
                    <em class="vline"></em>
                    <span class="label-text"><i class="ic ic-experience"></i>一年工作经验</span>
                    <em class="vline"></em>
                    <span class="label-text"><i class="ic ic-degree"></i>{{user.education}}</span>
                  </p>
                  <p class="row-contact">
                    <span class="label-text"><i class="ic ic-status"></i>{{user.workStatus}}</span>
                    <em class="vline"></em>
                    <span class="label-text"><i class="ic ic-tel"></i>{{user.phone}}</span>
                    <em class="vline"></em>
                    <span class="label-text span-wechat"><i class="ic ic-weixin"></i>{{user.weixin}}</span>
                  </p>
                </div>
              </div>
            </div>
            <div id="edit1" class="edit-panel hide animated bounce fadeIn">
              <el-form :model="updateUser" label-position="left" label-width="120px" :rules="item1Rules"
                       ref="updateUser">
                <el-row :gutter="space">
                  <el-col :span="10">
                    <el-form-item label="姓名" prop="name" label-width="60px">
                      <el-input v-model.trim="updateUser.name" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="当前求职状态" prop="workStatus">
                      <el-select v-model="updateUser.workStatus" placeholder="请选择求职状态">
                        <el-option v-for="item in statusList" :key="item.objectId"
                                   :label="item.status" :value="item.status">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="space">
                  <el-col :span="10">
                    <el-form-item label="性别" prop="gender" label-width="60px">
                      <div>
                        <el-radio-group v-model="updateUser.gender">
                          <el-radio-button label="男"></el-radio-button>
                          <el-radio-button label="女"></el-radio-button>
                        </el-radio-group>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="开始工作时间" prop="startWorkTime">
                      <el-date-picker
                        v-model="updateUser.startWorkTime"
                        align="right"
                        type="year"
                        :default-value="updateUser.startWorkTime"
                        format="yyyy"
                        placeholder="选择年">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="space">
                  <el-col :span="10">
                    <el-form-item label="微信号" prop="weixin" label-width="60px">
                      <el-input v-model.trim="updateUser.weixin" placeholder="请输入微信号"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="出生日期" prop="birthDate">
                      <el-date-picker
                        v-model="updateUser.birthDate"
                        type="month"
                        :default-value="updateUser.birthDate"
                        format="yyyy-MM"
                        placeholder="选择月">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="space">
                  <el-col :span="10">
                    <el-form-item label="学历" prop="education" label-width="60px">
                      <el-select v-model="updateUser.education" placeholder="请选择学历">
                        <el-option v-for="item in educationList" :key="item.objectId"
                                   :label="item.education" :value="item.education">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="手机号码" prop="phone" placeholder="请输入手机号码">
                      <el-input v-model.trim="updateUser.phone"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="space" type="flex" justify="center">
                  <el-col :span="15">
                    <el-form-item>
                      <el-button type="primary" @click="onSubmit('updateUser')">确定</el-button>
                      <el-button @click="cancelEdit('1')">取消</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </div>
          <div class="panel-info">
            <div id="item2" class="resume-item animated bounce fadeIn">
              <el-row>
                <div class="panel-list clearfix">
                  <span class="panel-title pull-left">我的优势</span>
                  <a href="javascript:;" @click="editInfo('2')" class="link-edit pull-right">
                    <i class="ic ic-edit"></i>
                    编辑
                  </a>
                </div>
                <el-col :xs="24" :lg="20">
                  <div class="list-text" v-html="advantage">
                  </div>
                </el-col>
              </el-row>
            </div>
            <div id="edit2" class="edit-panel hide animated bounce fadeIn">
              <el-form>
                <el-form-item label="我的优势"></el-form-item>
                <el-form-item>
                  <div id="editor"><p v-html="updateAdvantage"></p></div>
                </el-form-item>
                <el-form-item>
                  <div class="text-center">
                    <el-button type="primary" @click="onSubmit2">确定</el-button>
                    <el-button @click="cancelEdit('2')">取消</el-button>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="panel-info">
            <div id="item3" class="resume-item animated bounce fadeIn">
              <el-row>
                <div class="panel-list clearfix">
                  <span class="panel-title">工作经历</span>
                  <a href="javascript:;" @click="editInfo('3')" class="link-edit pull-right">
                    <i class="ic ic-edit"></i>编辑
                  </a>
                </div>
                <div class="header-experience text-center text-info">
                  <span class="pull-left">{{workExperience.jobName}}</span>
                  &nbsp;&nbsp;&nbsp;
                  <span>{{workExperience.companyName}}</span>
                  &nbsp;&nbsp;&nbsp;
                  <span
                    class="pull-right">({{workExperience.startTime}}-{{workExperience.endTime}})</span>
                </div>
                <div class="header-experience">
                  <span
                    class="pull-left">工作地点：{{workExperience.workLocation.province}}.{{workExperience.workLocation.city}}.{{workExperience.workLocation.area}}</span>
                  &nbsp;&nbsp;&nbsp;
                  <span class="pull-right">所属部门：{{workExperience.department}}</span>
                </div>
                <div>
                  <h5>工作内容</h5>
                  <p class="custom-text">
                    {{workExperience.jobContent}}
                  </p>
                </div>
                <div>
                  <h5>工作业绩</h5>
                  <p class="custom-text">
                    {{workExperience.jobPerformance}}
                  </p>
                </div>
              </el-row>
            </div>
            <div id="edit3" class="edit-panel hide animated bounce fadeIn">
              <el-form :model="updateWorkExperience" label-position="left" label-width="75px" :rules="item3Rules"
                       ref="updateWorkExperience">
                <el-row :gutter="space">
                  <el-col :span="11">
                    <el-form-item label="职位名称" prop="jobName">
                      <el-input :value="updateWorkExperience.jobName" placeholder="请输入职位名称"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="11">
                    <el-form-item label="公司名称" prop="companyName">
                      <el-input v-model.trim="updateWorkExperience.companyName" placeholder="请输入公司名称"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="工作地点" prop="workLocation">
                      <v-distpicker :province="updateWorkExperience.workLocation.province"
                                    :city="updateWorkExperience.workLocation.city"
                                    :area="updateWorkExperience.workLocation.area"
                                    @selected="onSelectedLocation"></v-distpicker>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10">
                    <el-form-item label="所属部门" prop="department">
                      <el-input v-model.trim="updateWorkExperience.department" placeholder="请输入部门名称"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <el-form-item label="在职时间" prop="startTime">
                      <el-date-picker
                        v-model="updateWorkExperience.startTime"
                        type="month"
                        placeholder="开始时间">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col :span="1" class="text-center">至</el-col>
                  <el-col :span="5">
                    <el-form-item prop="endTime" label-width="0">
                      <el-date-picker
                        v-model="updateWorkExperience.endTime"
                        type="month"
                        placeholder="结束时间">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :xs="24" :lg="22">
                    <el-form-item label="工作内容" prop="jobContent">
                      <el-input
                        type="textarea"
                        :autosize="{ minRows: 5, maxRows: 8}"
                        placeholder="请输入内容"
                        v-model="updateWorkExperience.jobContent">
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :xs="24" :lg="22">
                    <el-form-item label="工作业绩" prop="jobPerformance">
                      <el-input
                        type="textarea"
                        :autosize="{ minRows: 5, maxRows: 8}"
                        placeholder="请输入工作业绩"
                        v-model="updateWorkExperience.jobPerformance">
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="space" type="flex" justify="center">
                  <el-col :span="15">
                    <el-form-item>
                      <el-button type="primary" @click="onSubmit3('updateWorkExperience')">确定</el-button>
                      <el-button @click="cancelEdit('3')">取消</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="0" :sm="7" :md="6" :lg="6">
        <div class="sider">
          <div class="sider-resume">
            <div class="resume-attachment">
              <h3 class="title">附件简历</h3>
              <div class="loadresume">
              </div>
              <div class="resume-nav">
                <ul>
                  <li>
                    <i class="ic ic-info"></i>
                    <span>个人信息</span>
                  </li>
                  <li>
                    <i class="ic ic-adventage"></i>
                    <span>我的优势</span>
                  </li>
                  <li>
                    <i class="ic ic-position"></i>
                    <span>求职意向</span>
                  </li>
                  <li>
                    <i class="ic ic-history"></i>
                    <span>工作经历</span>
                  </li>
                  <li>
                    <i class="ic ic-project"></i>
                    <span>项目经验</span>
                  </li>
                  <li>
                    <i class="ic ic-education"></i>
                    <span>教育经历</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style>
  .main {
    position: relative;
    padding: 20px;
  }

  .resume {
    padding: 28px 0;
    background-color: #fff;
  }

  .resume .update-time {
    color: #9fa3b0;
    padding: 10px 30px;
  }

  .panel-info {
    position: relative;
  }

  .panel-info .resume-item {
    padding: 0 38px;
  }

  .panel-info .edit-panel {
    padding: 10px 30px;
    background-color: rgb(248, 249, 251);
  }

  .item-primary {
    position: relative;
  }

  .ic-male {
    background-position: -24px 0;
    vertical-align: top;
  }

  .ic {
    width: 24px;
    height: 24px;
    background: url("../../assets/img/icons-resume.png") no-repeat;
    display: inline-block;
    vertical-align: middle;
  }

  .link-edit {
    color: white;
  }

  .ic-edit {
    background-position: 5px -29px;
  }

  .info-labels {
    padding: 20px 0;
  }

  .info-labels .label-text {
    display: inline-block;
    vertical-align: middle;
  }

  .ic-experience {
    background-position: 4px -477px;
  }

  .resume-item .info-labels .vline {
    margin: 0 20px;
  }

  .vline {
    display: inline-block;
    width: 1px;
    height: 12px;
    vertical-align: middle;
    background: #E0E0E0;
    margin: 0 10px;
  }

  .ic-degree {
    background-position: 2px -507px;
  }

  .ic-status {
    background-position: -26px -478px;
  }

  .row-contact {
    margin-top: 15px;
  }

  .ic-tel {
    background-position: -25px -506px;
  }

  .ic-weixin {
    background-position: -28px -586px;
  }

  .sider-resume .title {
    color: #414a60;
    font-size: 18px;
    padding: 18px 0 10px 20px;
    font-weight: 400;
  }

  .resume-attachment {
    padding-bottom: 18px;
    border-bottom: 1px solid #f6f7f9;
    position: relative;
  }

  .sider-resume {
    padding: 8px 0px;
    background-color: #fff;
  }

  .resume-nav {
    padding-bottom: 30px;
  }

  .resume-nav li span {
    padding-left: 10px;
  }

  .ic-info {
    background-position: 0 -54px;
  }

  .ic-adventage {
    background-position: 0 -109px;
  }

  .ic-position {
    background-position: 0 -168px;
  }

  .ic-history {
    background-position: 0 -225px;
  }

  .ic-project {
    background-position: 0 -283px;
  }

  .ic-education {
    background-position: 0 -339px;
  }

  .resume-nav li {
    height: 58px;
    line-height: 58px;
    width: 100%;
    position: relative;
  }

  .sider-resume li {
    color: #9fa3b0;
    font-size: 14px;
    cursor: pointer;
    padding-left: 20px;
    /*text-align: center;*/
  }

  .sider-resume li:hover {
    color: #232329;
    font-size: 14px;
    cursor: pointer;
    background-color: ghostwhite;
  }

  .sider-resume ul {
    padding-left: 0px;
  }

  li, ol, ul {
    list-style: none;
  }

  #editor {
    min-height: 200px;
  }

  .hide {
    display: none;
  }

  .hor-line {
    width: 100%;
    height: 1px;
    margin: 20px 0;
    background-color: gainsboro;
  }

  .header-experience {
    padding: 0 1em;
    font-size: 17px;
    margin: 10px 0;
  }

  .custom-text {
    font-size: 15px;
    color: gray;
    text-indent: 2em;
  }

  .panel-list {
    background-color: rgb(60, 141, 188);
    border-radius: 5px;
    padding: 13px;
    margin: 0 -16px;
  }

  .panel-title {
    color: white;
    font-weight: bold;
    font-size: 17px;
  }

  h5 {
    color: rgb(60, 141, 188);
    font-weight: bold;
    background-color: gainsboro;
    border-radius: 5px;
    padding: 7px;
    font-size: 15px;
  }

  .list-text {
    padding-left: 1.5em;
    color: gray;
    font-size: 14px;
  }
</style>
<script>
  import WangEditor from 'wangeditor'
  import VDistpicker from 'v-distpicker'
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import ElForm from "../../../node_modules/element-ui/packages/form/src/form";

  export default {
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
        'fontfamily',
        'fontsize',
        'head',
        'unorderlist',
        'orderlist',
        'alignleft',
        'aligncenter',
        'alignright',
        '|',
        'undo',
        'redo'
      ];
      editor.onchange = () => {
        // onchange 事件中更新数据
        this.advantage = editor.$txt.html();
      };
      editor.create();
    },
    data() {
      return {
        spaceLabel: 40,
        space: 50,//栅格间距
        user: {},
//        statusList: [
//          {
//            objectId: '1',
//            status: '在职-暂不考虑'
//          },
//          {
//            objectId: '2',
//            status: '离职-随时到岗'
//          },
//          {
//            objectId: '3',
//            status: '在职-考虑机会'
//          }
//        ],
        educationList: [
          {
            objectId: '1',
            education: '研究生'
          },
          {
            objectId: '2',
            education: '本科'
          },
          {
            objectId: '3',
            education: '专科'
          }
        ],
        advantage: '',
        updateAdvantage: '',
        updateUser: {},
        updateWorkExperience: {},
        item1Rules: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
            {min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur'}
          ],
          startWorkTime: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          birthDate: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          WorkStatusId: [
            {required: true, message: '请选择求职状态', trigger: 'change'}
          ],
          gender: [
            {required: true, message: '请选择性别', trigger: 'change'}
          ],
          weixin: [
            {min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur'}
          ],
          educationId: [
            {required: true, message: '请选择学历', trigger: 'change'}
          ]
        },
        item2Rules: {
          advantage: [
            {required: true, message: '请填写您的优势', trigger: 'blur'},
            {min: 20, max: 120, message: '长度在 20 到 120 个字符', trigger: 'blur'}
          ]
        },
        item3Rules: {
          jobContent: [
            {required: true, message: '请填写您的优势', trigger: 'blur'},
            {min: 20, max: 300, message: '长度在 20 到 300 个字符', trigger: 'blur'}
          ],
          jobPerformance: [
            {required: true, message: '请填写您的优势', trigger: 'blur'},
            {min: 20, max: 300, message: '长度在 20 到 300 个字符', trigger: 'blur'}
          ]
        },
      };
    },
    created() {
      let resumeId = Bmob.User.current().get('resumeId');
      let PersonalResume = Bmob.Object.extend("PersonalResume");
      let query = new Bmob.Query(PersonalResume);
      query.include("educationId");
      query.include("workStatusId");
      query.get(resumeId, {
        success: (resume) => {
          // 用户信息
          this.user = {
            name: resume.get('name'),
            workStatus: resume.get('workStatusId').get('status'),
            gender: resume.get('gender'),
            startWorkTime: new Date(resume.get('startWorkTime')),
            birthDate: new Date(resume.get('birthDate')),
            weixin: resume.get('weixin'),
            phone: resume.get('phone'),
            education: resume.get('educationId').get('education')
          };
          this.updateUser = this.user;
          // 我的优势
          this.advantage = resume.get('advantage');
          this.updateAdvantage = this.advantage;
        },
        error: (object, error) => {
          this.$message.error('简历载入错误，错误原因：' + error.message);
        }
      });
    },
    computed: {
      statusList() {
        let statusList = [];
        let WorkStatus = Bmob.Object.extend("WorkStatus");
        let query = new Bmob.Query(WorkStatus);
        query.find({
          success: function (results) {
            // 循环处理查询到的数据
            for (var i = 0; i < results.length; i++) {
              let objectId = results[i].id;
              let status = results[i].get('status');
              statusList.push(new Object({objectId: objectId, status: status}));
            }
          },
          error: function (error) {
            alert("查询失败: " + error.code + " " + error.message);
          }
        });
        return statusList;
      },
      workExperience() {
        let result = {
          jobName: 'Java软件工程师',
          companyName: '小米信息科技有限公司',
          workLocation: new Object({province: "广东省", city: "广州市", area: "海珠区"}),
          department: '软件开发',
          startTime: new Date('2015.3'),
          endTime: new Date('2017.5'),
          jobContent: '使用Java需要进行ERP系统开发，负责ERP单据的审核、确认、提交和导出。参与SQL' +
          'Server数据库设计，进行项目服务器日常上传部署和维护，手机和网页端报表制作，' +
          '使用HTML网页技术进行销售数据汇总和统计图表展示。' +
          '搭建台系统框架，功能需求分析，服务器端权限系统设计和开发。',
          jobPerformance: '使用Java需要进行ERP系统开发，负责ERP单据的审核、确认、提交和导出。参与SQL' +
          'Server数据库设计，进行项目服务器日常上传部署和维护，手机和网页端报表制作，使用HTML网页技术进行销售数据汇总和统计图表展示。' +
          '搭建台系统框架，功能需求分析，服务器端权限系统设计和开发。'
        };
        this.updateWorkExperience = result;
        return result;
      }
    },
    methods: {
      custom(index) {
        $('#edit' + index).toggleClass('hide');
        $('#item' + index).toggleClass('hide');
      },
      editInfo(index) {
        this.custom(index);
      },
      cancelEdit(index) {
        this.custom(index);
      },
      validateForm(index, formName, success, error) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: '信息修改成功!',
              type: 'success'
            });
            this.custom(index);
            success();
          } else {
            this.$message.error('信息有误，请确认!');
            error();
            return false;
          }
        });
      },
      onSubmit(formName) {
        this.validateForm(1, formName, () => {
          this.user = this.updateUser;
          // 做数据修改操作

        }, () => {
          console.log('error');
        });
      },
      onSubmit2() {

      },
      onSubmit3(formName) {
        this.validateForm(3, formName, () => {
          this.workExperience = this.updateWorkExperience;
          // 做数据修改操作

        }, () => {
          console.log('error');
        });
      },
      onSelectedLocation(result) {
        this.workExperience.workLocation = result;
        this.updateWorkExperience.workLocation = result;
      }
    },
    components: {ElForm, ElFormItem, VDistpicker}
  }
</script>
