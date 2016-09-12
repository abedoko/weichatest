<template>
  <div class="body">
    <!--新增预约-->
    <div class="fundcreat" v-if="fundcreatBox">
      <p class="p5b color999">{{funddata.assetName}}</p>
      <div class="input_line linebok_p">
        <div class="log_left"><span class="mark_required">拟预约额</span></div>
        <div class="log_right tens"><input type="text" v-model="commonForm.volume.value" placeholder="请输入预约额度" maxlength="12">

        </div>
      </div>
      <div class="input_line linebok_p borderb1ddd mb10">
        <div class="log_left"><span>备注</span></div>
        <div class="log_right"><input type="text" v-model="commonForm.message.value" placeholder="请输入备注"></div>
      </div>
      <div class="creat_fund ui-row bgf bordert1ddd" v-for="a in commonForm.attentions.source">
        <div class="del_btn ui-col ui-col-20 borderr1ddd" @click="foldCreatFund($index)">
          &nbsp;
        </div>
        <div class="contact_group ui-col ui-col-80">
          <div class="input_line linebok_p border_none">
            <div class="log_left"><span class="mark_required">邮箱</span></div><div class="log_right"><input v-model="a.email" value="" type="email" placeholder="请输入您的邮箱"></div>
          </div>
          <div class="input_line linebok_p">
            <div class="log_left"><span>备注</span></div><div class="log_right"><input type="text" v-model="a.msg" placeholder="请输入备注"></div>
          </div>
        </div>
      </div>
      <div class="creat_newpeople input_line borderb1ddd"  @click="addCreatFund">
        <span class="addbtn">新增关注人</span>
      </div>
      <div class="tc mt10">
        <button class="or_btn width94b ra2" @click="submitCreatfund">
          提交
        </button>
      </div>
    </div>
    <!--预约成功-->
    <div class="seccess_tip" v-if="!fundcreatBox">
      <div class="st_body bgf tc borderb1ddd">
        <img src="../../assets/images/time.png" alt="right">
        <p class="mt20">您已发起预约，正在等对方反馈</p>
      </div>
      <div class="refund_detail ui-justify mt10 bgf borderb1ddd bordert1ddd">
        <div class="plr5b borderb1ddd">
          <p class="lineh44 f20">{{funddata.assetName}}</p>
        </div>
        <ul class="detail_main plr5b ">
          <li><p>拟预约额</p></li><li><p>{{commonForm.volume.value}}万</p></li>
          <li><p>备注</p></li><li><p>{{commonForm.message.value}}</p></li>
        </ul>
      </div>
      <p class="p5b">后续操作请在桌面网站：www.guohuaigroup.com进行</p>
      <div class="tc">
        <button class="or_btn width94b ra2" @click="gobackAsset">
          返回资产平台
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  var action = require('../../actions/action')
  // var eventListener = require('../../utils/eventListener')
  var config = require('../../utils/globalConfig')
  var popbox = require('../../components/popbox')
  var sticker = require('../../components/sticker')
  var formUtil = require('../../utils/formUtil')

  module.exports = {
    name: 'fundcreat',
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
        errorEmail: '',
        createFundBox: false,
        fundcreatBox: true,
        seccessTipBox: false,
        addlist: [],
        a: 0,
        funddata: '',
        commonForm: {
          oid: {
            value: ''
          },
          volume: {
            value: '',
            msg: ''
          },
          date: {
            value: '',
            ddow: [],
            format: 'yyyy-MM-dd',
            msg: ''
          },
          message: {
            value: ''
          },
          attentions: {
            type: 'formArray',
            source: []
          },
          disabled: false
        }
      }
    },
    route: {
      data: function (transition) {
        var that = this
        var flag = transition.to.params.success
        this.commonForm.oid.value = transition.to.params.oid
        action.getAmp(this.commonForm.oid.value, function (res) {
          that.funddata = res
        })
        if (flag) {
          this.fundcreatBox = false
        } else {
          this.fundcreatBox = true
        }
      }
    },
    methods: {
      foldCreatFund: function (index) {
        console.log(index)
        this.commonForm.attentions.source.splice(index, 1)
      },
      addCreatFund: function () {
        var attentions = this.commonForm.attentions.source
        var a = {
          email: {
            value: '',
            msg: '',
            state: false
          }, name: {
            msg: '',
            value: '',
            state: false
          }
        }
        attentions.push(a)
      },
      submitCreatfund: function () {
        var that = this
        var path = '/fundcreat/' + this.commonForm.oid.value + '/success'
        var excution = 'fundCfmvolumeStart'
        var commonForm = this.commonForm
        var reqbody = formUtil.generateRequestBody(commonForm)
        reqbody.event = config.events[excution]
        // reqbody.asstOid = this.commonForm.oid.value
        action.flow(reqbody, function (res) {
          that.$route.router.go(path)
        })
      },
      gobackAsset: function () {
        this.$route.router.go('/fund')
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
.creat_fund {
  .del_btn {
    width:20%; height:100px; background:url(../../assets/images/del.png) no-repeat center center; background-size:33% auto;
  }
  .input_line.border_none{ border:none;}
  .linebok_p{
    .log_left{
      width:25%;
    }
    .log_right {
      width:75%;
      input{width:100%;}
    }
  }
}
.creat_newpeople {
  line-height:48px;
  text-align:center;
  span {display:inline-block;
    background:url(../../assets/images/creat.png) no-repeat left center;
    background-size:22px auto;
    padding:0 0 0 30px;
  }
}
.seccess_tip {
  .refund_detail {
    .detail_main {
      padding-top:3%;
      padding-bottom:3%;
      li {
        padding:3px 0;
        color:#666;
      }
    }
  }
}
</style>
