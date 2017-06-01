<template>
  <div class="main">
    <el-row :gutter="spaceLabel">
      <el-col :xs="24" :sm="17" :md="18" :lg="18">
        <div class="resume">
          <h5 class="update-time">最后更新时间：<span>2017.04.10.14:11</span></h5>
          <!--个人基本信息-->
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
                    <span class="label-text"><i class="ic ic-degree"></i>{{user.highEducation.education}}</span>
                  </p>
                  <p class="row-contact">
                    <span class="label-text"><i class="ic ic-status"></i>{{user.workStatus.status}}</span>
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
                      <el-select v-model="updateUser.workStatus.status" placeholder="请选择求职状态">
                        <el-option v-for="item in statusList" :key="item.objectId"
                                   :label="item.status" :value="item.objectId + '#' + item.status">
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
                    <el-form-item label="学历" prop="highEducation" label-width="60px">
                      <el-select v-model="updateUser.highEducation.education" placeholder="请选择学历">
                        <el-option v-for="item in educationList" :key="item.objectId"
                                   :label="item.education" :value="item.objectId + '#' + item.education">
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
                <div class="text-center">
                  <el-form-item label-width="0px">
                    <el-button type="primary" @click="onSubmit1('updateUser')">确定</el-button>
                    <el-button @click="cancelEdit('1')">取消</el-button>
                  </el-form-item>
                </div>
              </el-form>
            </div>
          </div>
          <!--个人评价-->
          <div class="panel-info">
            <div id="item2" class="resume-item animated bounce fadeIn">
              <div class="panel-list clearfix">
                <span class="panel-title pull-left">我的优势</span>
                <a href="javascript:;" @click="editInfo('2')" class="link-edit pull-right">
                  <i class="ic ic-edit"></i>
                  编辑
                </a>
              </div>
              <div v-html="advantage"></div>
            </div>
            <div id="edit2" class="edit-panel hide animated bounce fadeIn">
              <el-form>
                <el-form-item label="我的优势"></el-form-item>
                <el-form-item>
                  <div id="advantage" class="editor"><p v-html="updateAdvantage"></p></div>
                </el-form-item>
                <el-form-item label-width="0">
                  <div class="text-center">
                    <el-button type="primary" @click="onSubmit2">确定</el-button>
                    <el-button @click="cancelEdit('2')">取消</el-button>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <!--工作经历-->
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
                  <span>{{workExperience.companyName}}</span>
                  <span
                    class="pull-right">({{workExperience.startTime | formatDate}}-{{workExperience.endTime | formatDate}})</span>
                </div>
                <div class="header-experience clearfix">
                  <span
                    class="pull-left">工作地点：{{workExperience.workLocation.province}}.{{workExperience.workLocation.city}}.{{workExperience.workLocation.area}}</span>
                  <span class="pull-right">所属部门：{{workExperience.department}}</span>
                </div>
                <div>
                  <h5>工作内容</h5>
                  <div v-html="workExperience.jobContent"></div>
                </div>
                <div>
                  <h5>工作业绩</h5>
                  <div v-html="workExperience.jobPerformance"></div>
                </div>
              </el-row>
            </div>
            <div id="edit3" class="edit-panel hide animated bounce fadeIn">
              <el-form :model="updateWorkExperience" label-position="left" label-width="75px" :rules="item3Rules"
                       ref="updateWorkExperience">
                <el-row :gutter="space">
                  <el-col :span="11">
                    <el-form-item label="职位名称" prop="jobName">
                      <el-input v-model.trim="updateWorkExperience.jobName" placeholder="请输入职位名称"></el-input>
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
                      <v-distpicker :placeholders="placeholders"
                                    :province="updateWorkExperience.workLocation.province"
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
                      <div id="jobContent" class="editor"><p v-html="updateWorkExperience.jobContent"></p></div>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :xs="24" :lg="22">
                    <el-form-item label="工作业绩" prop="jobPerformance">
                      <div id="jobPerformance" class="editor"><p v-html="updateWorkExperience.jobPerformance"></p></div>
                    </el-form-item>
                  </el-col>
                </el-row>
                <div class="text-center">
                  <el-form-item label-width="0">
                    <el-button type="primary" @click="onSubmit3('updateWorkExperience')">确定</el-button>
                    <el-button @click="cancelEdit('3')">取消</el-button>
                  </el-form-item>
                </div>
              </el-form>
            </div>
          </div>
          <!--项目经验-->
          <div class="panel-info">
            <div id="item4" class="resume-item animated bounce fadeIn">
              <el-row>
                <div class="panel-list clearfix">
                  <span class="panel-title">项目经验</span>
                  <a href="javascript:;" @click="editInfo('4')" class="link-edit pull-right">
                    <i class="ic ic-edit"></i>编辑
                  </a>
                </div>
                <div class="header-experience text-center text-info">
                  <span class="pull-left">{{projectExperience.projectName}}</span>
                  <span>{{projectExperience.projectRole}}</span>
                  <span
                    class="pull-right">({{projectExperience.startTime | formatDate}}-{{projectExperience.endTime | formatDate}})</span>
                </div>
                <div class="header-experience">
                  <span>项目URL：<a target="_blank"
                                 :href="projectExperience.projectURL">{{projectExperience.projectURL}}</a></span>
                </div>
                <div>
                  <h5>项目内容</h5>
                  <div v-html="projectExperience.projectContent"></div>
                </div>
                <div>
                  <h5>项目业绩</h5>
                  <div v-html="projectExperience.projectPerformance"></div>
                </div>
              </el-row>
            </div>
            <div id="edit4" class="edit-panel hide animated bounce fadeIn">
              <el-form :model="updateProjectExperience" label-position="left" label-width="75px" :rules="item4Rules"
                       ref="updateProjectExperience">
                <el-row :gutter="space">
                  <el-col :span="11">
                    <el-form-item label="项目名称" prop="projectName">
                      <el-input v-model.trim="updateProjectExperience.projectName" placeholder="请输入项目名称"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="11">
                    <el-form-item label="项目角色" prop="projectRole">
                      <el-input v-model.trim="updateProjectExperience.projectRole" placeholder="请输入项目担当的角色"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="22">
                    <el-form-item label="项目URL" prop="projectURL">
                      <el-input v-model.trim="updateProjectExperience.projectURL" placeholder="请输入项目URL"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="7">
                    <el-form-item label="项目时间" prop="startTime">
                      <el-date-picker
                        v-model="updateProjectExperience.startTime"
                        type="month"
                        placeholder="开始时间">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col :span="1" class="text-center">至</el-col>
                  <el-col :span="5">
                    <el-form-item prop="endTime" label-width="0">
                      <el-date-picker
                        v-model="updateProjectExperience.endTime"
                        type="month"
                        placeholder="结束时间">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :xs="24" :lg="22">
                    <el-form-item label="工作内容" prop="projectContent">
                      <div id="projectContent" class="editor">
                        <p v-html="updateProjectExperience.projectContent"></p>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :xs="24" :lg="22">
                    <el-form-item label="工作业绩" prop="projectPerformance">
                      <div id="projectPerformance" class="editor">
                        <p v-html="updateProjectExperience.projectPerformance"></p>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
                <div class="text-center">
                  <el-form-item label-width="0">
                    <el-button type="primary" @click="onSubmit4('updateProjectExperience')">确定</el-button>
                    <el-button @click="cancelEdit('4')">取消</el-button>
                  </el-form-item>
                </div>
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

  .resume-nav li {
    list-style: none;
  }

  .editor {
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
    padding: 10px;
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
</style>
<script>
  import WangEditor from 'wangeditor'
  import VDistpicker from 'v-distpicker'
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item"
  import ElForm from "../../../node_modules/element-ui/packages/form/src/form"

  export default {
    mounted() {
      // 普通的自定义菜单
      let menu = [
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
      this.customEditor('advantage', menu, (result) => {
        this.advantage = result;
      });
      this.customEditor('jobContent', menu, (result) => {
        this.updateWorkExperience.jobContent = result;
      });
      this.customEditor('jobPerformance', menu, (result) => {
        this.updateWorkExperience.jobPerformance = result;
      });
      this.customEditor('projectContent', menu, (result) => {
        this.updateProjectExperience.projectContent = result;
      });
      this.customEditor('projectPerformance', menu, (result) => {
        this.updateProjectExperience.projectPerformance = result;
      });

    },
    data() {
      return {
        spaceLabel: 40,
        space: 50,//栅格间距
        placeholders: {
          province: '省',
          city: '市',
          area: '区',
        },
        user: {workStatus: {}, highEducation: {}},
        updateUser: {workStatus: {}, highEducation: {}},
        statusList: [],
        educationList: [],
        advantage: '',
        updateAdvantage: '',
        workExperience: {workLocation: {}},
        updateWorkExperience: {workLocation: {}},
        projectExperience: {},
        updateProjectExperience: {},
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
            {min: 20, max: 600, message: '长度在 20 到 600 个字符', trigger: 'blur'}
          ],
          jobPerformance: [
            {min: 20, max: 600, message: '长度在 20 到 600 个字符', trigger: 'blur'}
          ]
        },
        item4Rules: {
          projectContent: [
            {min: 20, max: 600, message: '长度在 20 到 600 个字符', trigger: 'blur'}
          ],
          projectPerformance: [
            {min: 20, max: 600, message: '长度在 20 到 600 个字符', trigger: 'blur'}
          ]
        }
      };
    },
    created() {
      let resumeId = Bmob.User.current().get('resumeId');
      let PersonalResume = Bmob.Object.extend("PersonalResume");
      let query = new Bmob.Query(PersonalResume);
      query.include("workStatus");
      query.include("highEducation");
      query.include("workExperience");
      query.include("projectExperience");
      query.get(resumeId, {
        success: (resume) => {
          // 用户信息
          this.user = {
            objectId: resume.id,
            name: resume.get('name'),
            workStatus: {
              objectId: resume.get('workStatus').id,
              status: resume.get('workStatus').get('status')
            },
            gender: resume.get('gender'),
            startWorkTime: new Date(resume.get('startWorkTime')),
            birthDate: new Date(resume.get('birthDate')),
            weixin: resume.get('weixin'),
            phone: resume.get('phone'),
            highEducation: {
              objectId: resume.get('highEducation').id,
              education: resume.get('highEducation').get('education')
            }
          };
          this.updateUser = this.user;
          // 我的优势
          this.advantage = resume.get('advantage');
          this.updateAdvantage = this.advantage;
          // 工作经历
          let we = resume.get('workExperience');
          let location = we.get('workLocation');
          this.workExperience = {
            objectId: we.id,
            jobName: we.get('jobName'),
            companyName: we.get('companyName'),
            workLocation: {province: location[0], city: location[1], area: location[2]},
            department: we.get('department'),
            startTime: we.get('startTime'),
            endTime: we.get('endTime'),
            jobContent: we.get('jobContent'),
            jobPerformance: we.get('jobPerformance')
          };
          this.updateWorkExperience = this.workExperience;
          // 项目经验
          let pe = resume.get('projectExperience');
          this.projectExperience = {
            objectId: pe.id,
            projectName: pe.get('projectName'),
            startTime: pe.get('startTime'),
            endTime: pe.get('endTime'),
            projectURL: pe.get('projectURL'),
            projectRole: pe.get('projectRole'),
            projectContent: pe.get('projectContent'),
            projectPerformance: pe.get('projectPerformance')
          };
          this.updateProjectExperience = this.projectExperience;
        },
        error: (object, error) => {
          this.$message.error('简历载入错误，错误原因：' + error.message);
        }
      });
      this.loadWorkStatus();
      this.loadEducation();

    },
    filters: {
      formatDate: (value) => {
        if (!value) {
          return '';
        } else {
          let date = new Date(value);
          return date.getFullYear() + "." + ("0" + (date.getMonth() + 1)).slice(-2);
        }
      }
    },
    methods: {
      customEditor(id, menu, callback) {
        var editor = new wangEditor(id);
        editor.config.menus = menu;
        editor.onchange = () => {
          // onchange 事件中更新数据
          callback(editor.$txt.html())
        };
        editor.create();
      },
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
            this.custom(index);
            success();
          } else {
            this.$message.error('信息有误，请确认!');
            error();
            return false;
          }
        });
      },
      onSubmit1(formName) {
        this.validateForm(1, formName, () => {
          const ws = this.updateUser.workStatus.status.split('#');
          if (ws.length == 2) {
            this.updateUser.workStatus = {
              objectId: ws[0],
              status: ws[1]
            };
          }
          const je = this.updateUser.highEducation.education.split('#');
          if (je.length == 2) {
            this.updateUser.highEducation = {
              objectId: je[0],
              education: je[1]
            };
          }
          this.user = this.updateUser;
          // 做数据修改操作
          const update = this.updateUser;
          let PersonalResume = Bmob.Object.extend("PersonalResume");
          let personalResume = new PersonalResume();

          let workStatus = Bmob.Object.createWithoutData("WorkStatus", update.workStatus.objectId);
          let highEducation = Bmob.Object.createWithoutData("JobEducation", update.highEducation.objectId);
          personalResume.id = update.objectId;
          personalResume.set('name', update.name);
          personalResume.set('workStatus', workStatus);
          personalResume.set('gender', update.gender);
          personalResume.set('startWorkTime', '' + new Date(update.startWorkTime).getFullYear());
          personalResume.set('birthDate', new Date(update.birthDate));
          personalResume.set('weixin', update.weixin);
          personalResume.set('phone', update.phone);
          personalResume.set('highEducation', highEducation);
          personalResume.save(null, {
            success: () => {
              this.$message({
                message: '信息修改成功!',
                type: 'success'
              });
            }
          });
        }, () => {
          console.log('error');
        });
      },
      onSubmit2() {
        let PersonalResume = Bmob.Object.extend("PersonalResume");
        let personalResume = new PersonalResume();
        personalResume.id = this.user.objectId;
        personalResume.set('advantage', this.advantage);
        personalResume.save(null, {
          success: () => {
            this.$message({
              message: '信息修改成功!',
              type: 'success'
            });
            this.custom(2);
          }
        });
      },
      onSubmit3(formName) {
        this.validateForm(3, formName, () => {
          this.workExperience = this.updateWorkExperience;
          // 做数据修改操作
          const update = this.updateWorkExperience;
          let WorkExperience = Bmob.Object.extend("WorkExperience");
          let workExperience = new WorkExperience();
          workExperience.id = update.objectId;
          workExperience.set('jobName', update.jobName);
          workExperience.set('companyName', update.companyName);
          const loc = update.workLocation;
          workExperience.set('workLocation', [loc.province, loc.city, loc.area]);
          workExperience.set('department', update.department);
//          workExperience.set('startTime', update.startTime);
//          workExperience.set('endTime', update.endTime);
          workExperience.set('jobContent', update.jobContent);
          workExperience.set('jobPerformance', update.jobPerformance);
          workExperience.save(null, {
            success: () => {
              this.$message({
                message: '信息修改成功!',
                type: 'success'
              });
            }
          });
        }, () => {
          console.log('error');
        });
      },
      onSubmit4(formName) {
        this.validateForm(4, formName, () => {
          // 做数据修改操作
          this.projectExperience = this.updateProjectExperience;
          const update = this.updateProjectExperience;
          let ProjectExperience = Bmob.Object.extend("ProjectExperience");
          let projectExperience = new ProjectExperience();
          projectExperience.id = update.objectId;
          projectExperience.set('projectName', update.projectName);
          projectExperience.set('startTime', new Date(update.startTime));
          projectExperience.set('endTime', new Date(update.endTime));
          projectExperience.set('projectURL', update.projectURL);
          projectExperience.set('projectRole', update.projectRole);
          projectExperience.set('projectContent', update.projectContent);
          projectExperience.set('projectPerformance', update.projectPerformance);
          projectExperience.save(null, {
            success: () => {
              this.$message({
                message: '信息修改成功!',
                type: 'success'
              });
            }
          });
        }, () => {
          console.log('error');
        });
      },
      onSelectedLocation(result) {
        this.workExperience.workLocation = result;
        this.updateWorkExperience.workLocation = result;
      },
      loadWorkStatus() {
        let self = this;
        let WorkStatus = Bmob.Object.extend("WorkStatus");
        let query = new Bmob.Query(WorkStatus);
        query.find({
          success: function (results) {
            let statusList = [];
            // 循环处理查询到的数据
            for (var i = 0; i < results.length; i++) {
              let objectId = results[i].id;
              let status = results[i].get('status');
              statusList.push(new Object({objectId: objectId, status: status}));
            }
            self.statusList = statusList;
          },
          error: function (error) {
            this.$message.error(error.code + ": 工作状态下拉框数据载入错误");
            console.log(error.code + "," + error.message);
          }
        });
      },
      loadEducation() {
        let self = this;
        let JobEducation = Bmob.Object.extend("JobEducation");
        let query = new Bmob.Query(JobEducation);
        query.find({
          success: function (results) {
            let educationList = [];
            // 循环处理查询到的数据
            for (var i = 0; i < results.length; i++) {
              let objectId = results[i].id;
              let education = results[i].get('education');
              educationList.push(new Object({objectId: objectId, education: education}));
            }
            self.educationList = educationList;
          },
          error: function (error) {
            this.$message.error(error.code + ": 学历下拉框数据载入错误");
            console.log(error.code + "," + error.message);
          }
        });
      }
    },
    components: {ElForm, ElFormItem, VDistpicker}
  }
</script>
