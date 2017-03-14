<template>
  <div class="wrapper">

    <!-- Main Header -->
    <header class="main-header">

      <!-- Logo -->
      <a href="index2.html" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>J</b>OB</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>JOB</b>DIRVER</span>
      </a>

      <!-- Header Navbar -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <!-- Messages: style can be found in dropdown.less
                    消息菜单-->
            <li class="dropdown messages-menu">
              <!-- Menu toggle button -->
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-envelope-o"></i>
                <!--消息数量-->
                <span class="label label-success">4</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">您有4条新信息</li>
                <li>
                  <!-- inner menu: contains the messages -->
                  <ul class="menu">
                    <li><!-- start message -->
                      <a href="#">
                        <div class="pull-left">
                          <!-- User Image -->
                          <img src="../assets/img/user2-160x160.jpg" class="img-circle"
                               alt="User Image">
                        </div>
                        <!-- 消息标题和消息发送时间 -->
                        <h4>
                          职位申请
                          <small><i class="fa fa-clock-o"></i> 5 mins</small>
                        </h4>
                        <!-- 消息内容 -->
                        <p>请问我的职位申请可以通过吗?</p>
                      </a>
                    </li>
                    <!-- end message -->
                  </ul>
                  <!-- /.menu -->
                </li>
                <li class="footer"><a href="#">查看所有消息</a></li>
              </ul>
            </li>
            <!-- /.messages-menu -->

            <!-- Notifications Menu 通知菜单 -->
            <li class="dropdown notifications-menu">
              <!-- Menu toggle button -->
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-bell-o"></i>
                <span class="label label-warning">10</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">你有10条通知</li>
                <li>
                  <!-- Inner Menu: contains the notifications -->
                  <ul class="menu">
                    <li><!-- start notification -->
                      <a href="#">
                        <i class="fa fa-users text-aqua"></i>
                        你申请的职位认证信息未通过，详情查看
                      </a>
                    </li>
                    <!-- end notification -->
                  </ul>
                </li>
                <li class="footer"><a href="#">显示所有通知</a></li>
              </ul>
            </li>
            <!-- Tasks Menu -->
            <li class="dropdown tasks-menu">
              <!-- Menu Toggle Button -->
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-flag-o"></i>
                <span class="label label-danger">3</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">你有3条任务</li>
                <li>
                  <!-- Inner menu: contains the tasks -->
                  <ul class="menu">
                    <li><!-- Task item -->
                      <a href="#">
                        <!-- Task title and progress text -->
                        <h3>
                          审核未通过的职位申请记录进度
                          <small class="pull-right">20%</small>
                        </h3>
                        <!-- The progress bar -->
                        <div class="progress xs">
                          <!-- Change the css width attribute to simulate progress -->
                          <div class="progress-bar progress-bar-aqua" style="width: 20%"
                               role="progressbar" aria-valuenow="20" aria-valuemin="0"
                               aria-valuemax="100">
                            <span class="sr-only">20% Complete</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <!-- end task item -->
                  </ul>
                </li>
                <li class="footer"><a href="#">显示所有任务</a></li>
              </ul>
            </li>
            <!-- User Account Menu -->
            <li class="dropdown user user-menu">
              <!-- Menu Toggle Button -->
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <!-- The user image in the navbar-->
                <img src="../assets/img/user2-160x160.jpg" class="user-image" alt="User Image">
                <!-- hidden-xs hides the username on small devices so only the image appears. -->
                <span class="hidden-xs">张协流</span>
              </a>
              <ul class="dropdown-menu">
                <!-- The user image in the menu -->
                <li class="user-header">
                  <img src="../assets/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                  <p>
                    张协流 - 软件开发者
                    <small>开发于2017-02-28</small>
                  </p>
                </li>
                <!-- Menu Body -->
                <li class="user-body">
                  <div class="row">
                    <div class="col-xs-4 text-center">
                      <a href="#">我的职责</a>
                    </div>
                    <div class="col-xs-4 text-center">
                      <a href="#">我的任务</a>
                    </div>
                    <div class="col-xs-4 text-center">
                      <a href="#">我的好友</a>
                    </div>
                  </div>
                  <!-- /.row -->
                </li>
                <!-- Menu Footer-->
                <li class="user-footer">
                  <div class="pull-left">
                    <a href="#" class="btn btn-default btn-flat">关于我</a>
                  </div>
                  <div class="pull-right">
                    <a href="#" class="btn btn-default btn-flat">注销登录</a>
                  </div>
                </li>
              </ul>
            </li>
            <!-- Control Sidebar Toggle Button
             设置按钮-->
            <li>
              <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">

      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">

        <!-- Sidebar user panel (optional) -->
        <div class="user-panel">
          <div class="pull-left image">
            <img src="../assets/img/user2-160x160.jpg" class="img-circle" alt="User Image">
          </div>
          <div class="pull-left info">
            <p>张协流</p>
            <!-- Status -->
            <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
          </div>
        </div>

        <!-- search form (Optional) 搜索表单 -->
        <form action="#" method="get" class="sidebar-form">
          <div class="input-group">
            <input type="text" name="q" class="form-control" placeholder="搜索...">
            <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
          </div>
        </form>
        <!-- /.search form -->

        <!-- Sidebar Menu -->
        <ul class="sidebar-menu">
          <li class="header">分类菜单</li>
          <!-- Optionally, you can add icons to the links -->
          <li class="active"><a href="#"><i class="fa fa-home"></i> <span>职位列表</span></a></li>
          <li><a href="#"><i class="fa fa-calendar"></i> <span>公司列表</span></a></li>
          <li class="treeview">
            <a href="#"><i class="fa fa-table"></i> <span>职位管理</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><a href="#">职位录入</a></li>
              <li><a href="#">职位审核</a></li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#"><i class="fa fa-line-chart"></i> <span>公司管理</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><a href="#">公司信息录入</a></li>
              <li><a href="#">公司职位发布</a></li>
            </ul>
          </li>
        </ul>
        <!-- /.sidebar-menu -->
      </section>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          职位信息查看
          <small>你可以具体查看职位所属详细信息</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i>主页</a></li>
          <li class="active">职位列表</li>
        </ol>
      </section>

      <!-- Main content
       这里放页面的主要内容-->
      <section class="content animated fadeInUp">

        <div class="row">
          <div class="col-xs-12">
            <div class="box">
              <div class="box-header">
                <h3 class="box-title">职位信息表</h3>
              </div>
              <!-- /.box-header -->
              <div class="box-body">
                <table id="example"
                       class="table table-bordered dataTable"
                       cellpadding="0"
                       width="100%">
                  <thead>
                  <tr>
                    <td class="text-center">LOGO</td>
                    <td class="text-center">公司名称</td>
                    <td class="text-center">公司规模</td>
                    <td class="text-center">所在城市</td>
                    <td class="text-center">学历</td>
                    <td class="text-center">经验</td>
                    <td class="text-center">薪资</td>
                    <td class="text-center">职位</td>
                    <td class="text-center">工作类型</td>
                  </tr>
                  </thead>
                </table>
              </div>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <!-- Main Footer -->
    <footer class="main-footer">
      <!-- To the right -->
      <div class="pull-right hidden-xs">
        联系我：zhagnxieliu@outlook.com
      </div>
      <!-- Default to the left -->
      <strong>Copyright &copy; 2016 <a href="#">个人</a>.</strong>本网页使用AdminLTE开发.
    </footer>

    <!-- Control Sidebar 设置按钮弹出面板 -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Create the tabs -->
      <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
        <li class="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
        <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content">
        <!-- Home tab content -->
        <div class="tab-pane active" id="control-sidebar-home-tab">
          <h3 class="control-sidebar-heading">Recent Activity</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript:;">
                <i class="menu-icon fa fa-birthday-cake bg-red"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Langdon's Birthday</h4>

                  <p>Will be 23 on April 24th</p>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

          <h3 class="control-sidebar-heading">Tasks Progress</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript:;">
                <h4 class="control-sidebar-subheading">
                  Custom Template Design
                  <span class="pull-right-container">
                  <span class="label label-danger pull-right">70%</span>
                </span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-danger" style="width: 70%"></div>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->
        </div>
        <!-- /.tab-pane -->
        <!-- Stats tab content -->
        <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
        <!-- /.tab-pane -->
        <!-- Settings tab content -->
        <div class="tab-pane" id="control-sidebar-settings-tab">
          <form method="post">
            <h3 class="control-sidebar-heading">General Settings</h3>

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Report panel usage
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
                Some information about this general settings option
              </p>
            </div>
            <!-- /.form-group -->
          </form>
        </div>
        <!-- /.tab-pane -->
      </div>
    </aside>
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div>
</template>
<style>
  body {
  }
</style>
<script>
  $(function () {
    var table = $('#example').DataTable({
      scrollX: false,
      lengthMenu: [[2, 4, 6, -1], [2, 4, 6, "全部"]],
      //当处理大数据时，延迟渲染数据，有效提高Datatables处理能力
      "deferRender": true,
      dom: "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-5'i><'col-sm-7'p>>",
      language: { // 格式化数字显示格式
        "decimal": ",",
        "thousands": ".",
        "search": "搜索:",
        "processing": "玩命加载中...",
        "lengthMenu": "显示 _MENU_ 条记录",
        "zeroRecords": "没有找到记录",
//            "info": "第 _PAGE_ 页 ( 总共 _PAGES_ 页 )  共 _TOTAL_ 条",
        "info": "显示第 _START_ 至 _END_ 条结果，共 _TOTAL_ 条",
        "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
        "infoFiltered": "(从 _MAX_ 条记录过滤)",
        "infoPostFix": "",
        "paginate": {
          "first": "首页〉",
          "previous": "上一页〉",
          "next": "下一页〉",
          "last": "最后一页〉"
        }
      },
      ajax: {
        url: "http://119.29.26.42:8080/webapp/job/list",
        type: 'GET',
        dataType: 'json',//here
        dataSrc: ""
      },
      columnDefs: [
        {
          targets: 0,
          data: "companyLogo",
          visible: true,   // 是否可见该列，也可以使用columns.visible选项来实现
          searchable: false,    // 是否能被搜索
          render: function (data, type, row, meta) {
            return '<img width="70px" class="center-block" src="http://119.29.26.42:8080/webapp/resources/img/' + data + '">';
          }
        },
        {
          targets: 1,
          data: "companyName",
          title: "公司名称",
          order: [[1, 'asc']],
          render: function (data, type, row, meta) {
            return '<div class="text-center">' + data;
          }
        },
        {
          targets: 2,
          data: "companySize",
          render: function (data, type, row, meta) {
            return '<div class="text-center">' + data;
          }
        },
        {
          targets: 3,
          data: "workCity",
          render: function (data, type, row, meta) {
            return '<div class="text-center">' + data;
          }
        },
        {
          targets: 4,
          data: "workEducation",
          render: function (data, type, row, meta) {
            return '<div class="text-center">' + data;
          }
        },
        {
          targets: 5,
          data: "workExperience",
          render: function (data, type, row, meta) {
            return '<div class="text-center">' + data;
          }
        },
        {
          targets: 6,
          data: "workSalary",
          order: [[1, 'asc']],
          render: function (data, type, row, meta) {
            return '<div class="text-center">' + data;
          }
        },
        {
          targets: 7,
          data: "workTitle",
          render: function (data, type, row, meta) {
            return '<div class="text-center">' + data;
          }
        },
        {
          targets: 8,
          data: "workType",
          render: function (data, type, row, meta) {
            return '<div class="text-center">' + data;
          }
        }
      ]
    });
    $('#example')
      .on('order.dt', function () {
        console.log('排序');
      })
      .on('search.dt', function () {
        console.log('搜索');
      })
      .on('page.dt', function () {
        console.log('翻页');
      })
      .dataTable();
    $('#example tbody').on('click', 'tr', function () {
      var data = table.row(this).data();
      alert('You clicked on ' + data[1] + '\'s row');
    });
    $(".table").colResizable();
    Date.prototype.Format = function (fmt) { //author: meizz
      var o = {
        "M+": this.getMonth() + 1,
        //月份
        "d+": this.getDate(),
        //日
        "h+": this.getHours(),
        //小时
        "m+": this.getMinutes(),
        //分
        "s+": this.getSeconds(),
        //秒
        "q+": Math.floor((this.getMonth() + 3) / 3),
        //季度
        "S": this.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
      }
      return fmt;
    };
  });
  export default{
    data(){
      return {}
    }
  }
</script>
