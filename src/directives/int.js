/**
 * v-dr-int指令，对表单值进行指定范围的int验证
 *
 * 参数 int-target: 所操作的表单元素对象
 * 参数 int-range: 一般格式为 int-range="0-10000"，表示最小值为0，最大值为10000
 *                 默认取值区间为 0-1000000000
 */
module.exports = {
  name: 'int',
  params: ['int-target', 'int-range'],
  update: function (newVal, oldVal) {
    var range = this.params.intRange || '0-1000000000'
    var rangeArr = range.split('-')
    var start = Number(rangeArr[0])
    var end = Number(rangeArr[1])
    var regStr = '^[+-]?\\d*$'
    var intReg = new RegExp(regStr)
    if (!intReg.test(newVal)) {
      this.params.intTarget.value = this.el.value = oldVal
    } else {
      if (parseInt(newVal) > end) {
        this.params.intTarget.value = this.el.value = end
      }
      if (parseInt(newVal) < start) {
        this.params.intTarget.value = this.el.value = start
      }
    }
  }
}
