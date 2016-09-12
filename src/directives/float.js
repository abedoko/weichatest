/**
 * v-dr-float指令，对表单值进行指定格式的float验证
 *
 * 参数 float-target: 所操作的表单元素对象
 * 参数 float-range: 一般格式为 float-range="2.3"，表示整数部分为2位，小数部分为3位
 *                   默认为整数10位小数10位
 */

module.exports = {
  name: 'float',
  params: ['float-target', 'float-range'],
  update: function (newVal, oldVal) {
    var range = this.params.floatRange || '10.10'
    var rangeArr = range.split('.')
    var intPart = rangeArr[0]
    var decPart = rangeArr[1]
    var regStr = '^[+]?\\d{0,' + intPart + '}(\\.\\d{0,' + decPart + '})?$'
    var floatReg = new RegExp(regStr)
    if (!floatReg.test(newVal)) {
      this.params.floatTarget.value = this.el.value = oldVal
    }
  }
}
