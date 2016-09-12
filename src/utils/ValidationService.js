/**
 * 表单整体验证模块
 */
var $ = require('jquery')

module.exports = {
  /**
   * 用于点击“提交”按钮时，对传入的formdata进行整体验证，验证判断条件已通过directive注入到formdata中
   * -- 现验证逻辑为：遇到不符合验证要求的第一个条件即return并显示错误文本
   * @param formdata
   * @returns {boolean}
   */
  doValidate: function (formdata) {
    // var eleArr = []
    // 展示所有验证失败结果
    // if (eleArr.length > 0) {
    //  eleArr[0].focus()
    // }
    // return rlt
    return deepValid(formdata)
  }
}

/**
 * 深度验证formdata对象
 * @param formdata
 * @returns {boolean}
 */
function deepValid (formdata) {
  var rlt = true
  for (var key in formdata) {
    var obj = formdata[key]
    if (Object.prototype.toString.call(obj) === '[object Object]' &&      // 只迭代object属性
        key.indexOf('_') !== 0 &&          // 不迭代vue自动添加上的属性
        key !== 'el') {                   // 不迭代el属性
      var validation = obj.validation
      if (validation) {
        switch (validation) {
          case 'required':
            var isRequired = required(obj)
            if (!isRequired) {
              rlt = isRequired
              // 展示所有验证失败结果
              // eleArr.push(obj.el)
              return rlt           // 只展示第一个验证失败结果
            }
            break
          case 'email':
            var isEmail = email(obj)
            if (!isEmail) {
              rlt = isEmail
              return rlt
            }
            break
          default:
            break
        }
      }
      var deepRlt = deepValid(obj)
      if (!deepRlt) {
        rlt = deepRlt
        return rlt
      }
    }
  }
  return rlt
}

function required (obj) {
  if (!$.trim(obj.value)) {
    obj.msg = '不能为空'
    obj.el.focus()
    return false
  } else {
    obj.msg = ''
    return true
  }
}

function email (obj) {
  var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/
  if ($.trim(obj.value) && !reg.test(obj.value)) {
    obj.msg = '格式不正确'
    obj.el.focus()
    return false
  } else {
    obj.msg = ''
    return true
  }
}
