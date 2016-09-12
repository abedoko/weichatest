/**
 * form表单数据处理
 */
module.exports = {
  /**
   * requestBody生成器，根据传入formdata生成requestBody
   * @param formdata
   * @returns requestBody
   */
  generateRequestBody: function (formdata) {
    var reqbody = {}
    for (var key in formdata) {
      var obj = formdata[key]
      var type = obj.type
      switch (type) {
        case 'select':
          reqbody[key] = obj.value[0]
          break
        case 'number':
          reqbody[key] = Number(obj.value)
          break
        case 'checkbox':
          reqbody[key] = obj.value ? 1 : 0
          break
        case 'file':
          reqbody[key] = obj.source
          break
        case 'formArray':
          reqbody[key] = giveMePlantArray(obj.source)
          break
        default:
          reqbody[key] = obj.value
          break
      }
    }
    return reqbody
  }
}

/**
 * 去除数组中的的嵌套对象，以便stringify
 * 若数组不止是用于显示，还用于表单操作的话，数组元素为object{value:'',msg:''}结构，会被注入__ob__等监控属性，
 * @param arr
 * @returns {Array}
 * FIXME TODO 目前只迭代一层
 */
function giveMePlantArray (arr) {
  var newArr = []
  for (var i = 0, al = arr.length; i < al; i += 1) {
    var obj = arr[i]
    var newObj = {}
    for (var key in obj) {
      if (typeof obj[key] === 'object') {
        newObj[key] = obj[key].value
      } else {
        newObj[key] = obj[key]
      }
    }
    newArr.push(newObj)
  }
  return newArr
}
