/**
 * v-email指令，对email格式进行验证
 */
var eventListener = require('../utils/eventListener')
var $ = require('jquery')

module.exports = {
  /**
   * 初始化时将判断条件注入到formdata，用于提交时整体验证，并绑定blur事件进行焦点移出验证
   */
  name: 'email',
  params: ['target'],
  bind: function () {
    var el = this.el
    var model = this.params.target

    model.validation = 'email'   // 添加validation属性，用于validationService
    model.el = el    // 备份element，用于出现错误后focus

    // TODO 目前仅支持input元素
    if (el.nodeName === 'INPUT') {
      this._blurHanlder = eventListener.listen(el, 'blur', function () {
        var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/
        if ($.trim(el.value) && !reg.test(el.value)) {
          model.msg = '格式不正确'
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
