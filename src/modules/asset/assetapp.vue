<template>
  <div class="body">
    <!-- 审批意见书 -->
    <div class="pdf_index">
      <div class="pdf_title">
        国槐－互联网金融资产管理平台
      </div>
      <div class="">
        <img src="" alt="">
        资产审批意见书
        国民信托‧青州恒瑞项目收益权集合资金信托计划
        资产编号：2015102900981
      </div>
      <table class="">
        <tbody>
          <tr>
            <td>资产名</td><td>国民信托‧青州恒瑞权资金信托计划</td>
          </tr>
          <tr>
            <td>拟成立时间</td><td>2015.10.16</td>
          </tr>
          <tr>
            <td>预期年化收益</td><td></td>
          </tr>
          <tr>
            <td>资产期限</td><td></td>
          </tr>
          <tr>
            <td>资产规模</td><td></td>
          </tr>
          <tr>
            <td>资产类型</td><td></td>
          </tr>
           <tr>
            <td>付息方式</td><td></td>
          </tr>
          <tr>
            <td>额外增信</td><td></td>
          </tr>
           <tr>
            <td>起购金额</td><td></td>
          </tr>
          <tr>
            <td>用途</td><td></td>
          </tr>
           <tr>
            <td>风控</td><td></td>
          </tr>
          <tr>
            <td>说明</td><td></td>
          </tr>
        </tbody>
      </table>
      <div class="">
        平台点评:
        以“风正务实、温馨培训”为办学方针，试全新的“有
        情教学关系、个性化教学试全新式试全新的本公司还向
        社会推出“明明白白消费轻轻质量。
      </div>
      <div class="">
        <span>平台申明:</span>
        <span>资产信息由经平台认证机构通过平台录入生成，
               平台不保障资产信息的准确性、有效性平见仅供
               参考投资有风险，交易请谨慎。</span>
      </div>
      <div class="ui-row-flex">
        <a class="ui-flex" href="#">test</a>
        <a class="ui-flex" href="#">test</a>
        <a class="ui-flex" href="#">test</a>
      </div>
    </div>
  </div>
</template>

<script>
  var action = require('../../actions/action')
  var eventListener = require('../../utils/eventListener')
  // var config = require('../../utils/globalConfig')
  var popbox = require('../../components/popbox')
  var sticker = require('../../components/sticker')

  module.exports = {
    name: 'assetapp',
    components: {
      popbox: popbox,
      sticker: sticker
    },
    data: function () {
      return {
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
          password: this.password
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
              route.router.go('/fund/dashboard')
            } else if (res.assetAuth === 'YES') {
              route.router.go('/asset/dashboard')
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
/*意见书*/

</style>
