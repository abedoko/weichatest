/**
 * v-required指令，对表单值进行非空验证
 */
var eventListener = require('../utils/eventListener')
var $ = require('jquery')

module.exports = {
  /**
   * 初始化时将判断条件注入到formdata，用于提交时整体验证，并绑定blur事件进行焦点移出验证
   */
  name: 'required',
  params: ['target'],
  bind: function () {
    var el = this.el
    var model = this.params.target

    model.validation = 'required'   // 添加validation属性，用于validationService
    model.el = el    // 备份element，用于出现错误后focus

    // TODO 目前仅支持input元素
    if (el.nodeName === 'INPUT' || el.nodeName === 'TEXTAREA') {
      this._blurHanlder = eventListener.listen(el, 'blur', function () {
        if (!$.trim(el.value)) {
          model.msg = '不能为空'
        } else if ($.trim(el.value) === '0' || parseFloat($.trim(el.value)) <= 0) {
          model.msg = '必须大于0'
        } else {
          model.msg = 0
        }
      })
    }
  },
  unbind: function () {
    if (this._blurHanlder) {
      this._blurHanlder.remove()
    }
  }
}
