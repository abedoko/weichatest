/**
 * ajax请求封装模块
 */
var $ = require('jquery')
var config = require('./globalConfig')

module.exports = {
  get: function (url, data, success, failure) {
    baseAjax('get', url, data, success, failure)
  },

  post: function (url, data, success, failure) {
    baseAjax('post', url, data, success, failure)
  }
}

function baseAjax (type, url, data, success, failure) {
  if (typeof data === 'function') {
    failure = success
    success = data
    data = undefined
  }
  $.ajax({
    type: type,
    url: url,
    cache: false,
    contentType: url.indexOf('login') >= 0
        ? 'application/x-www-form-urlencoded'
        : 'application/json',
    xhrFields: {
      withCredentials: true
    },
    dataType: 'json',
    data: data ? JSON.stringify(data) : ''
  }).then(function (res) {
    if (!res.errorCode) {
      if (success) {
        success(res)
      }
    } else {
      if (failure) {
        failure(res)
      }
      errorHandle(res)
    }
  }, function (err) {
    console.log(err)
  })
}

function errorHandle (err) {
  var router = config.router
  switch (err.errorCode) {
    case 10000:
      router.go('/login')
      break
    case 10004:
      router.go('/login')
      break
    default:
      console.log(err.errorMessage)
      break
  }
  console.log(err)
}
