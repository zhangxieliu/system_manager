<template>
  <div>
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
    </section>
    <!-- /.content -->
  </div>
</template>
<style>

</style>
<script>
  $(function () {
//    var Company = Bmob.Object.extend("Company");
//    var query = new Bmob.Query(Company);
//    query.get("Mj9u000B", {
//      success: function(object) {
//        // The object was retrieved successfully.
//        console.log(object.get("companyName"));
//      },
//      error: function(object, error) {
//        console.log("query object fail:" + error.code + ":" +
//          error.message + ":" + error.description);
//      }
//    });

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
    },
    components: {}
  }
</script>
