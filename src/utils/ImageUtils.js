/**
 * Created by Administrator on 2017/3/16.
 */
// 上传图片前预览
export default {
  previewImage: function (obj) {
    window.URL = window.URL || window.webkitURL;
    var fileList = document.getElementById("fileList");
    var files = obj.files,
      img = new Image();
    if (window.URL) {
      //File API
      alert(files[0].name + "," + files[0].size + " bytes");
      img.src = window.URL.createObjectURL(files[0]); //创建一个object URL，并不是你的本地路径
      img.width = 200;
      img.onload = function (e) {
        window.URL.revokeObjectURL(this.src); //图片加载后，释放object URL
      }
      fileList.appendChild(img);
    } else if (window.FileReader) {
      //opera不支持createObjectURL/revokeObjectURL方法。我们用FileReader对象来处理
      var reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = function (e) {
        alert(files[0].name + "," + e.total + " bytes");
        img.src = this.result;
        img.width = 200;
        fileList.appendChild(img);
      }
    } else {
      //ie
      obj.select();
      obj.blur();
      var nfile = document.selection.createRange().text;
      document.selection.empty();
      img.src = nfile;
      img.width = 200;
      img.onload = function () {
        alert(nfile + "," + img.fileSize + " bytes");
      }
      fileList.appendChild(img);
    }
  },
  // 获取缩放的尺寸
  getZoomParam: function (maxWidth, maxHeight, width, height) {
    let param = {top: 0, left: 0, width: width, height: height};
    if (width > maxWidth || height > maxHeight) {
      let rateWidth = width / maxWidth;
      let rateHeight = height / maxHeight;
      if (rateWidth > rateHeight) {
        param.width = maxWidth;
        param.height = Math.round(height / rateWidth);
      } else {
        param.width = Math.round(width / rateHeight);
        param.height = maxHeight;
      }
    }
    param.left = Math.round((maxWidth - param.width) / 2);
    param.top = Math.round((maxHeight - param.height) / 2);
    return param;
  }
}
