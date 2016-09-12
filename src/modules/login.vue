<template>
  <div class="body">
    <div class="log_box mt10">
      <div class="input_line linebok_p">
        <div class="log_left">账户</div>
        <div class="log_right"><input type="text" v-model="userName" placeholder="请输入您的邮箱"></div>
      </div>
      <div class="input_line linebok_p borderb1ddd">
        <div class="log_left">登陆密码</div>
        <div class="log_right"><input class="pwdswtich" type="password" v-model="password" placeholder="请输入您的密码"></div>
      </div>
      <p class="waring"></p>
      <div class="tc mt20">
        <button class="or_btn width94b ra2" @click="doLogin">
          登录
        </button>
        <p class="mt20 color999 f16">咨询热线: 400-456-5678</p>
      </div>
    </div>
    <a href="#!/register" class="regbtn lcenter width94b colororange borderorange ra2">
      没有账号？请注册
    </a>
  </div>
</template>

<script>
  var action = require('../actions/action')
  var eventListener = require('../utils/eventListener')
  var config = require('../utils/globalConfig')
  // var poptips = require('../components/Tooltips')

  module.exports = {
    name: 'login',
    data: function () {
      return {
        downloadhost: config.api.downhost,
        userName: '',
        password: '',
        errorMessage: '',
        errorName: '',
        errorPass: '',
        showEmail: false,
        showPass: false,
        errorEmail: ''
      }
    },
    methods: {
      doLogin: function () {
        var that = this
        var route = this.$route
        var reqbody = {
          userName: this.userName,
          password: this.password,
          adminOperate: 'WX'
        }
        /*
         if (this.userName === '') {
         this.errorName = true
         } else if (this.password === '') {
         this.errorPass = true
         } else if (this.userName === '' && this.password === '') {
         this.errorName = true
         this.errorPass = true
         return false
         }*/
        if (this.userName.trim() === '' && this.password.trim() === '') {
          this.errorName = true
          this.showPass = true
          this.showEmail = true
          this.errorPass = '请输入您的密码'
          this.errorEmail = '请输入您的账户'
          return false
        } else if (this.userName.trim() === '') {
          this.showEmail = true
          this.errorEmail = '请输入您的账户'
          return false
        } else if (this.password.trim() === '') {
          this.showPass = true
          this.errorPass = '请输入您的密码'
          return false
        } else {
          action.login(reqbody, function (res) {
            that.errorMessage = ''
            if (res.fundAuth === 'YES') {
              route.router.go('/fund')
            } else if (res.assetAuth === 'YES') {
              route.router.go('/asset')
            } else {
              that.errorMessage = '不正确的用户类型'
            }
          }, function (err) {
            console.log(err)
            if (err.errorCode === 10108) {
              that.errorMessage = '账户密码不匹配'
            } else {
              that.errorMessage = err.errorMessage
            }
          })
        }
      },
      doKeyBinding: function () {
        var that = this
        this._key_enter_ = eventListener.listen(document, 'keyup', function (e) {
          if (e.keyCode === 13) {
            that.doLogin()
          }
        })
      },
      doKeyUnbind: function () {
        this._key_enter_.remove()
      }
      /* isEmail: function () {
       //        this.show = true
       /!* var emailText = this.userName.trim()
       var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
       if (reg.test(emailText)) {
       this.msg = false
       } else {
       this.msg = true
       }*!/
       }*/
    },
    watch: {
      userName: function (val, oldVal) {
//        this.show = true
        var emailText = this.userName
        if (emailText === '') {
          this.showEmail = false
        } else {
          var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
          if (!reg.test(emailText)) {
            this.errorEmail = '邮箱格式错误'
          }
          this.showEmail = !reg.test(emailText)
        }
      },
      password: function () {
        var pass = this.password
        if (pass !== '') {
          this.showPass = false
        }
      }
    },
    beforeDestroy: function () {
      if (this._key_enter_) {
        this._key_enter_.remove()
      }
    }
  }
</script>
<style lang="scss">
html {background-color:#f0f0f0;}
  /*登录页面*/
.body {
  width:100%;
  min-width:320px;
  max-width:720px;
  font-size:16px;
  background-color:#f0f0f0;
  margin:0 auto;
}
.waring {
  color:#f00;
  padding:5% 0 0 5%;
}
.input_line {
  background-color:#fff;
  height:50px;
  border-top:#ddd 1px solid;
  padding:0 3%;
  input[type="text"], input[type="password"], input[type="tel"] {
    height:48px; line-height:48px; border:none; width:100%;
  }
  .low {
    input[type="text"], input[type="password"], input[type="tel"] {
      width:calc(100% - 100px);
    }
  }
}
.linebok_p>div { display:inline-block; height:100%; line-height:48px; vertical-align:middle;}
.linebok_p .log_left { width:25%; max-width:80px;}
.linebok_p .log_right { width:73%;}

.or_btn { background-color:#f4551e; color:#fff; border: none; text-align:center; height:45px; line-height:45px; font-size:20px;}
a.regbtn { display:block; text-align:center; height:46px; line-height:46px; position:fixed; bottom:20px; color:#f4551f; max-width:720px; min-width:320px; box-sizing:border-box;}
.lcenter {left:50%; transform:translateX(-50%);}
.log_box {
  input[type="text"],input[type="password"],input[type="tel"] {
    width:100%;
  }
}
.pwdswtich:after {
  content:''; display:block; 
}
::-webkit-input-placeholder {font-family:HiraginoSansGB-W3;color:#888;}
:-moz-placeholder {font-family:HiraginoSansGB-W3;color:#888;}
:-webkit-input-placeholder  {font-family:HiraginoSansGB-W3;color:#888;}
</style>
