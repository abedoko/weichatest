module.exports = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * event处理实用工具模块
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen: function (target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false)
      return {
        remove: function () {
          target.removeEventListener(eventType, callback, false)
        }
      }
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback)
      return {
        remove: function () {
          target.detachEvent('on' + eventType, callback)
        }
      }
    }
  }
}
