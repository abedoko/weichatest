<template>
  <div class="body">
    <!-- 资产列表 -->
    <div class="pro_list asset_list pt10" v-if="assetListBox">
      <div class="border1e0 add_new" @click="addnewasset"><img src="../../assets/images/add.png" alt="add" > 新增资产</div>
      <sticker v-for="a in audit" type="add" :source="a" @click="goasset(a)"></sticker>
      <sticker v-for="a in macthing" type="asset" :source="a" @click="goasset(a)"></sticker>
    </div>
    <!-- 新建资产 -->
    <div class="info asset_info creat_asset" v-if="addAssetBox">
      <div class="reg_tips">
        温馨提示：资产一旦提交，审核通过后将无法再做修改，请谨慎录入信息
      </div>
      <div class="creat_body mt20">
        <div class="input_line linebok_p">
          <div class="log_left"><span class="mark_required">资产名称</span></div>
          <div class="log_right"><input type="text" v-dr-required
                        :target="formdata.name"
                        v-model="formdata.name.value" placeholder="请输入资产名称"></div>
        </div>
        <div class="input_line linebok_p">
          <div class="log_left"><span class="mark_required">拟成立时间</span></div>
          <div class="log_right"><datepicker
                      :value.sync="formdata.setDate.value"
                      :disabled-days-of-Week="[]"
                      :format="formdata.setDate.format"></datepicker></div>
        </div>
        <div class="input_line linebok_p">
          <div class="log_left"><span class="mark_required">预计年化收益</span></div>
          <div class="log_right pertsent"><input type="tel" placeholder="请输入" v-model="formdata.expAror.value"
                         v-dr-required
                         :target="formdata.expAror"
                         v-dr-float="formdata.expAror.value"
                         :float-target="formdata.expAror"
                         float-range="2.2"></div>
        </div>
        <div class="input_line linebok_p">
          <div class="log_left"><span class="mark_required">资产期限</span>
          </div>
          <div class="log_right low">
            <input v-if="formdata.lifeUnit.value[0] === 'DAY'"
                         type="tel" placeholder="请选择" 
                         v-model="formdata.life.value"
                         v-dr-required
                         :target="formdata.life"
                         v-dr-int="formdata.life.value"
                         :int-target="formdata.life"
                         int-range="1-1200">
            <input v-if="formdata.lifeUnit.value[0] === 'YEAR'"
                         type="tel" placeholder="请选择"
                         v-model="formdata.life.value"
                         v-dr-required
                         :target="formdata.life"
                         v-dr-int="formdata.life.value"
                         :int-target="formdata.life"
                         int-range="1-20">
            <input v-if="formdata.lifeUnit.value[0] === 'MONTH'"
                         type="tel" placeholder="请选择"
                         v-model="formdata.life.value"
                         v-dr-required
                         :target="formdata.life"
                         v-dr-int="formdata.life.value"
                         :int-target="formdata.life"
                         int-range="1-240">
            <div class="input-group pull-left ml5">
                         <select v-model="formdata.lifeUnit.value[0]">
                           <option v-for="a in formdata.lifeUnit.options" value="{{a.value}}">{{a.label}}</option>
                         </select>
            </div>
          </div>
        </div>
        <div class="input_line linebok_p">
          <div class="log_left"><span class="mark_required">资产规模</span></div>
          <div class="log_right tens"><input type="text" placeholder="请输入资产规模" v-model="formdata.raiseScope.value"
                         v-dr-required
                         :target="formdata.raiseScope"
                         v-dr-float="formdata.raiseScope.value"
                         :float-target="formdata.raiseScope"
                         float-range="6.4"></div>
        </div>
        <div class="input_line linebok_p">
          <div class="log_left"><span class="mark_required">起购金额</span></div>
          <div class="log_right tens"><input type="text" placeholder="请输入起购金额" v-model="formdata.floorVolume.value"
                          v-dr-required
                          :target="formdata.floorVolume"
                          v-dr-float="formdata.floorVolume.value"
                          :float-target="formdata.floorVolume"
                          float-range="6.4"></div>
        </div>
        <div class="input_line linebok_p">
          <div class="log_left"><span class="mark_required">资产类型</span></div>
          <div class="log_right pro_type">
            <select class="" :class="{'w80': formdata.typeOid.value[0] === 'ASSETTYPE_01'}" v-model="formdata.typeOid.value[0]" >
              <option v-for="a in formdata.typeOid.options" value="{{a.value}}">{{a.label}}</option>
            </select>
            </select><select v-if="formdata.typeOid.value[0] === 'ASSETTYPE_01'">
              <option v-for="a in formdata.accrualCycleOid.options" value="{{a.value}}">{{a.label}}</option>
            </select>
          </div>
        </div>
        <div class="input_line linebok_p borderb1ddd">
          <div class="log_left"><span class="mark_required">付息方式</span></div>
          <div class="log_right">
            <select v-model="formdata.accrualCycleOid.value">
              <option v-for="a in formdata.accrualCycleOid.options" value="{{a.value}}">{{a.label}}</option>
            </select><select v-if="formdata.accrualCycleOid.value[0] === 'ACCRUALCYCLE_01'" v-model="formdata.subAccrualCycleOid.value">
              <option v-for="a in formdata.subAccrualCycleOid.options" value="{{a.value}}">{{a.label}}</option>
            </select>
          </div>
        </div>
        <div class="input_line linebok_p mt20">
          <div class="log_left"><span class="mark_required">用途</span></div>
          <div class="log_right"><input type="text" v-model="formdata.usages.value" placeholder="请输入用途"></div>
        </div>
        <div class="input_line linebok_p">
          <div class="log_left"><span class="mark_required">风控</span></div>
          <div class="log_right"><input type="text" v-model="formdata.risk.value" placeholder="请输入风控"></div>
        </div>
        <div class="input_line linebok_p">
          <div class="log_left">额外增信</div>
          <div class="log_right" style="position:relative">
            &nbsp;
            <label class="ui-switch">
                <input type="checkbox" v-model="checkstate" :checked="false">
            </label>
          </div>
        </div>
        <div class="input_line linebok_p borderb1ddd" v-if="checkstate">
          <div class="log_left">说明</div>
          <div class="log_right"><input type="text" v-model="formdata.revealComment.value" placeholder="请输入说明"></div>
        </div>
        <div class="reg_tips mt10 bgf">
         如需要添加附件文档，请移步桌面网页端进行操作
        </div>
        <button class="or_btn width100b" @click="submitAddAsset">
          提交
        </button>
      </div>
    </div>
    <!-- 建立成功 -->
    <div class="seccess_tip" v-if="seccessTipBox">
      <div class="st_body bgf tc">
        <img src="../../assets/images/right.png" alt="right">
        <p class="mt20">提交成功，正在等平台审核</p>
      </div>
      <div class="tc">
        <button class="or_btn width94b ra2 mt15" @click="gobackAsset">
          返回资产平台
        </button>
      </div>
    </div>
    <!-- 悬浮窗 -->
    <popbox v-if="showPopbox" :title="tiptext1" :msg="tiptext2"></popbox>
  </div>
</template>

<script>
  var action = require('../../actions/action')
  var $ = require('jquery')
  // var eventListener = require('../../utils/eventListener')
  // var config = require('../../utils/globalConfig')
  var popbox = require('../../components/popbox')
  var sticker = require('../../components/sticker')
  var formUtil = require('../../utils/formUtil')
  var validationService = require('../../utils/validationService')
  var datepicker = require('../../components/datepicker') // require('vue-strap').datepicker
  var select = require('../../components/select')
  var moment = require('moment')
  var drRequired = require('../../directives/required')
  var drFloat = require('../../directives/float')
  var drInt = require('../../directives/int')

  module.exports = {
    name: 'asset',
    components: {
      popbox: popbox,
      datepicker: datepicker,
      vSelect: select,
      sticker: sticker
    },
    directives: {
      drRequired: drRequired,
      drFloat: drFloat,
      drInt: drInt
    },
    data: function () {
      return {
        tiptext1: '您的帐户暂未认证',
        tiptext2: '您需要成为认证会员才能发布资产，申请成为认证会员请移步桌面网页端进行操作。',
        userName: '',
        password: '',
        errorMessage: '',
        errorName: '',
        errorPass: '',
        showEmail: false,
        showPass: false,
        errorEmail: '',
        assetListBox: true,
        addAssetBox: false,
        seccessTipBox: false,
        showPopbox: false,
        checkstate: false,
        audit: '',
        macthing: '',
        status: '',
        formdata: {
          oid: {
            value: ''
          },
          name: {
            value: '',
            msg: ''
          },
          setDate: {
            value: moment().add(1, 'days').format('YYYY-MM-DD'),
            format: 'yyyy-MM-dd',
            msg: ''
          },
          autoShut: {
            value: 1,
            type: 'checkbox'
          },
          expAror: {
            value: '',
            type: 'number',
            msg: ''
          },
          expArorSec: {
            value: '',
            type: 'number',
            switch: false,
            msg: ''
          },
          life: {
            value: '',
            msg: ''
          },
          lifeUnit: {
            value: ['MONTH'],
            type: 'select',
            options: [{
              label: '年',
              value: 'YEAR'
            }, {
              label: '月',
              value: 'MONTH'
            }, {
              label: '日',
              value: 'DAY'
            }]
          },
          raiseScope: {
            value: '',
            msg: ''
          },
          floorVolume: {
            value: '',
            msg: ''
          },
          raiseUnit: {
            value: ['10THOUSAND'],
            type: 'select'
          },
          typeOid: {
            value: ['ASSETTYPE_01'],
            type: 'select',
            options: [{
              label: '信托',
              value: 'ASSETTYPE_01'
            }, {
              label: '券商资管',
              value: 'ASSETTYPE_02'
            }, {
              label: '基金资管',
              value: 'ASSETTYPE_03'
            }, {
              label: '保险资管',
              value: 'ASSETTYPE_04'
            }, {
              label: '融资租赁',
              value: 'ASSETTYPE_05'
            }, {
              label: '商业保理',
              value: 'ASSETTYPE_06'
            }, {
              label: '供应链金融',
              value: 'ASSETTYPE_07'
            }, {
              label: '消费金融',
              value: 'ASSETTYPE_08'
            }, {
              label: '大学生分期',
              value: 'ASSETTYPE_09'
            }, {
              label: '海外资产',
              value: 'ASSETTYPE_10'
            }, {
              label: '期货资管',
              value: 'ASSETTYPE_11'
            }, {
              label: '基子资管',
              value: 'ASSETTYPE_12'
            }, {
              label: '房抵贷',
              value: 'ASSETTYPE_13'
            }, {
              label: '车抵贷',
              value: 'ASSETTYPE_14'
            }, {
              label: '农业金融',
              value: 'ASSETTYPE_15'
            }]
          },
          subTypeOid: {
            value: ['ASSETTYPE_0101'],
            type: 'select',
            options: [{
              label: '证券类',
              value: 'ASSETTYPE_0101'
            }, {
              label: '股权类',
              value: 'ASSETTYPE_0102'
            }, {
              label: '政信类',
              value: 'ASSETTYPE_0103'
            }, {
              label: '地产类',
              value: 'ASSETTYPE_0104'
            }, {
              label: '其他',
              value: 'ASSETTYPE_0100'
            }]
          },
          typeName: {
            value: '',
            switch: false
          },
          accrualCycleOid: {
            value: ['ACCRUALCYCLE_01'],
            type: 'select',
            options: [{
              label: '按周期付息',
              value: 'ACCRUALCYCLE_01'
            }, {
              label: '到期一次性',
              value: 'ACCRUALCYCLE_02'
            }]
          },
          subAccrualCycleOid: {
            value: ['ACCRUALCYCLE_0101'],
            type: 'select',
            switch: true,
            options: [{
              label: '月',
              value: 'ACCRUALCYCLE_0101'
            }, {
              label: '季',
              value: 'ACCRUALCYCLE_0102'
            }, {
              label: '半年',
              value: 'ACCRUALCYCLE_0103'
            }, {
              label: '年',
              value: 'ACCRUALCYCLE_0104'
            }]
          },
          accrualCycleName: {
            value: ''
          },
          usages: {
            value: ''
          },
          risk: {
            value: ''
          },
          reveal: {
            value: 'NO'
          },
          revealComment: {
            value: ''
          },
          comment: {
            value: ''
          },
          files: {
            type: 'file',
            source: []
          },
          disabled: true
        }
      }
    },
    methods: {
      goasset: function (obj) {
        console.log(obj)
        var oid = obj.oid
        var path = '/asset/assetdetail/assetinfo/' + oid
        this.$route.router.go(path)
        $(window).scrollTop(0)
      },
      addnewasset: function () {
        if (this.status === 'VALID') {
          this.$route.router.go('/asset/assetcreat')
        } else {
          this.showPopbox = true
        }
      },
      submitAddAsset: function () {
        var that = this
        if (this.formdata.accrualCycleOid.value[0] === 'ACCRUALCYCLE_02') {
          this.formdata.subAccrualCycleOid.value = ''
        }
        if (this.formdata.typeOid.value[0] !== 'ASSETTYPE_01') {
          this.formdata.subTypeOid.value = ''
        }
        var formdata = this.formdata
        var excution = 'saveAsset'
        if (parseFloat(formdata.raiseScope.value) === 0 || parseFloat(formdata.floorVolume.value) === 0 || parseFloat(formdata.raiseScope.value) < 0 || parseFloat(formdata.floorVolume.value) < 0) {
          formdata.disabled = true
        } else if (validationService.doValidate(formdata)) {
          var reqbody = formUtil.generateRequestBody(formdata)
          formdata.disabled = true
          action[excution](reqbody, function (res) {
            console.log(res)
            formdata.disabled = false
            that.$dispatch('$refreshAudit')
            that.closeSlideLayer()
          })
        }
      }
    },
    watch: {
    },
    events: {
      'colsePopbox': function (flag) {
        this.showPopbox = flag
      }
    },
    ready: function () {
      var that = this
      action.ampInfo(function (res) {
        console.log(res)
        this.fundAuth = res.fundAuth
        this.assetAuth = res.assetAuth
        this.user = res.oid
        this.status = res.status
      }.bind(this))
      action.getAudit(function (res) {
        that.audit = res.rows
      })
      action.assetListMatching(function (res) {
        that.macthing = res.rows
      })
    },
    route: {
      data: function (transition) {
        var that = this
        var flag = transition.to.params.key1
        that.tid = transition.to.params.oid
        switch (flag) {
          case 'assetcreat':
            that.addAssetBox = true
            that.assetListBox = false
            that.seccessTipBox = false
            break
          case 'addAsset':
            that.addAssetBox = false
            that.seccessTipBox = true
            that.assetListBox = false
            break
          default:
            that.assetListBox = true
            that.addAssetBox = false
            that.seccessTipBox = false
            break
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
/*资产*/
.pro_list {
  margin:0 3%;
  .add_new {
    background:#fff;
    text-align:center;
    font-size:18px;
    padding:10% 0;
    img { width:18px; margin-bottom:-2px;}
  }
}
.info {
  .linebok_p {
    .log_left { width:35%; max-width:110px;}
    .log_right { width:63%;
      .ui-switch { right:0;}
    }
  }
  .bgf.reg_tips { background-color:#fff; border-top:#ddd 1px solid; border-bottom:#ddd 1px solid;}
}
.st_body {
  padding:28% 0 30%;
  img { width:20%;}
  p { color:#262626;}
}

.pertsent {
  position:relative;
  &:after {content:'%'; position:absolute;
    top:0;
    right: 10px;
  }
}

.tens {
  position:relative;
  &:after {content:'万'; position:absolute;
    top:0;
    right: 10px;
  }
}
.pull-left { float:right;}
select {border:none; background:none;}
.pro_type {
  white-space:nowrap;
  .w80 {width:80px;}
}
</style>
