<template>
  <div class="body detail_offset detail_offset_b">
    <!-- 资产详情 -->
    <ul class="tabs bgf ui-tiled shadowb1dddin mb10">
      <li class="tab" :class="{'selected': state === 'assetinfo'}" ><a v-link="{path:'/fund/funddetail/assetinfo/'+ Oid +'/'+ assetOid}">资产信息</a></li><li class="tab" :class="{'selected': state === 'paydetail'}"><a v-link="{path:'/fund/funddetail/paydetail/'+ Oid +'/'+ assetOid}">交易详情</a></li><li class="tab" :class="{'selected': state === 'fundinfo'}"><a v-link="{path:'/fund/funddetail/fundinfo/'+ Oid +'/'+ assetOid}">兑付详情</a></li>
    </ul>
   <!-- 资产信息 -->
    <div class="detail_body" v-if="state === 'assetinfo'">
      <div class="ui-justify plr5b bgf borderb1ddd bordert1ddd" >
        <ul class="detail_main de_title borderb1ddd">
          <li><p class="f20">{{fundname}}</p></li><li><p class="colororange2 f14">来源: <span v-if="stems === 'USERDEFINE'">自有</span><span v-else>平台</span></p></li>
        </ul>
        <ul class="detail_main color999 mb10">
          <li><p>资产名称：</p></li><li><p>{{fundname}}</p></li>
          <li><p>拟成立日期：</p></li><li><p>{{detailObj.setDate}}</p></li>
          <li><p>预计年化收益：</p></li><li><p>{{detailObj.expAror === detailObj.expArorSec ? detailObj.expAror : detailObj.expAror + '-' + detailObj.expArorSec}}</p></li>
          <li><p>资产期限：</p></li><li><p>{{detailObj.life}}</p></li>
          <li><p>资产规模：</p></li><li><p>{{detailObj.raiseScope | scope}}</p></li>
          <li><p>起购金额：</p></li><li><p>{{detailObj.floorVolume | scope}}</p></li>
          <li><p>资产类型：</p></li><li><p>{{detailObj.typeName}}</p></li>
          <li><p>付息方式：</p></li><li><p>{{detailObj.accrualCycleName}}</p></li>
        </ul>
        <div class="detail_block bordert1ddd pb10">
          <div class="db_list">
            <p class="pt3bb5b">用途</p>
            <p class="color999">{{detailObj.usages}}</p>
          </div>
        </div>
        <div class="detail_block bordert1ddd pb10">
          <div class="db_list">
            <p class="pt3bb5b">风控</p>
            <p class="color999">{{detailObj.risk}}</p>
          </div>
        </div>
        <div class="detail_block bordert1ddd pb10">
          <div class="db_list">
            <p class="pt3bb5b">额外增信</p>
            <p class="color999">{{detailObj.reveal}}</p>
          </div>
        </div>
        <div class="detail_block bordert1ddd pb10">
          <div class="db_list">
            <p class="pt3bb5b">说明</p>
            <p class="color999">{{detailObj.pcomment}}</p>
          </div>
        </div>
      </div>
      <div class="file_body plr5b bgf mt10 borderb1ddd bordert1ddd">
        <p class="borderb1ddd ptb3b">附件({{files.length}}个)</p>
        <ul class="file_test pb10">
        <li v-for="file in files"><a :href="downloadhost + '/' + file.furl"><span>icon</span> <span>{{file.name}}</span></a> <span>({{file.sizeh}})</span></li>
        </ul>
      </div>
      <div class="plant_adv plr5b bgf mt10 borderb1ddd bordert1ddd">
        <p class="plant_title borderb1ddd mb10">
          <span class="plant_mark"><img src="../../assets/images/logo.png" alt="logo"></span> 平台建议
        </p>
        <div class="detail_inner pb10 color999">
          {{detailObj.psuggest}}
        </div>
        <p class="tr pb10"><a class="item-color" :href="downloadhost + '/html2pdf?u=http%3a%2f%2f'+ local +'%2fpdf%2fpdf.html%23'+ assetOid +'&filename=%E4%BA%A7%E5%93%81%E8%AF%B4%E6%98%8E%E4%B9%A6.pdf'" download="资产审批书.pdf" target="_blank">《产品审批书》下载</a></p>
      </div>
      <div class="plr5b bgf mt10 borderb1ddd bordert1ddd bdsecess">
        <div class="db_list ui-justify">
            <ul class="detail_main de_title borderb1ddd">
              <li><p class="f20">项目成立信息</p></li>
            </ul>
            <ul class="detail_main color999" v-if="detailObj.assetState === 'COMPLETE'">
              <li><p>收益率：</p></li><li><p>{{detailObj.matchingAror}}</p></li>
              <li><p>投资日：</p></li><li><p>{{detailObj.assetVolumeDate}}</p></li>
              <li><p>所属资产池：</p></li><li><p>{{detailObj.poolName}}</p></li>
              <li><p>项目成立日：</p></li><li><p>{{detailObj.setupDate}}</p></li>
              <li><p>收益起始日：</p></li><li><p>{{detailObj.arorBeginDate}}</p></li>
              <li><p>收益截止日：</p></li><li><p>{{detailObj.arorEndDate}}</p></li>
              <li><p>资产期限：</p></li><li><p>{{detailObj.matchinglifed}}</p></li>
              <li><p>投资金额：</p></li><li><p>{{detailObj.assetVolume}}</p></li>
              <li><p>付息方式：</p></li><li><p>{{detailObj.accrualCycleName}}</p></li>
              <li><p>付息日：</p></li><li><p>{{detailObj.accrualDate}}</p></li>
              <li><p>首付息日：</p></li><li><p>{{detailObj.arorFirstDate}}</p></li>
              <li><p>合同天数：</p></li><li><p>{{detailObj.contractDays}}</p></li>
            </ul>
            <ul class="detail_main color999" v-if="detailObj.assetState === 'SETUPFAIL'">
              <li><p>收益率：</p></li><li><p>{{detailObj.matchingAror}}</p></li>
              <li><p>投资日：</p></li><li><p>{{detailObj.assetVolumeDate}}</p></li>
              <li><p>所属资产池：</p></li><li><p>{{detailObj.poolName}}</p></li>
              <li><p>资产期限：</p></li><li><p>{{detailObj.matchinglifed}}</p></li>
              <li><p>投资金额：</p></li><li><p>{{detailObj.assetVolume}}</p></li>
              <li><p>退款日期：</p></li><li><p>{{detailObj.initDate}}</p></li>
              <li><p>退款金额：</p></li><li><p>{{detailObj.refundQuota}}</p></li>
            </ul>
            <ul class="detail_main color999" v-if="detailObj.assetState === 'BEFORECOMPLETE'">
              <li><p>收益率：</p></li><li><p>{{detailObj.matchingAror}}</p></li>
              <li><p>投资日：</p></li><li><p>{{detailObj.assetVolumeDate}}</p></li>
              <li><p>所属资产池：</p></li><li><p>{{detailObj.poolName}}</p></li>
              <li><p>资产期限：</p></li><li><p>{{detailObj.matchinglifed}}</p></li>
              <li><p>投资金额：</p></li><li><p>{{detailObj.assetVolume}}</p></li>
            </ul>
            <div class="detail_main color999" v-else>
              <p>项目未成立</p>
            </div>
          </div>
      </div>
      <a v-if="funddata.matchStage !== 'ASSET_CFMVOLUME'" @click="fundStart" class="regbtn or_btn width100b colororange borderorange ra2">
      发起预约
      </a>
    </div>
    <!-- 交易详情 -->
    <div class="detail_body pl5br2b" v-if="state === 'paydetail'">
      <div class="state_box mb10">
        <p v-if="detailObj.matchingState  === 'MATCHING'">资产撮合</p>
        <p v-if="detailObj.matchingState  === 'TERMINATE'">中止</p>
        <p v-if="detailObj.assetState === 'BEFORECOMPLETE'">资产待成立</p>
        <p v-if="detailObj.assetState === 'COMPLETE'">资产成立</p>
        <p v-if="detailObj.assetState === 'SETUPFAIL'">资产成立失败</p>
        <p v-if="detailObj.assetState === 'EXPIRE'">资产到期</p>
        <p v-if="detailObj.assetState === 'HONOUR'">资产到期已兑付</p>
      </div>
      <div class="step_detail" v-for="day in matchingObj.rows">
        <div class="daystep clearfix">
          <div class="fr step_block">
            <div class="ui-justify">
              <ul class="detail_main borderb1ddd">
                <li><p>{{day.eventName}}</p></li><li><p><span v-if="day.part == 'FUND'" class="user_from">资金方</span><span v-if="day.part == 'ASSET'" class="user_from assetuser">资产方</span><span v-if="day.part == 'BANK'" class="user_from">银行</span><span v-if="day.part == 'GM'" class="user_from gmuser">协办人</span></p></li>
              </ul>
              <div class="describe">您向{{day.operatorName}}发送了{{day.eventName}}</div>
              <ul class="detail_main">
                <template v-if="day.content.email"><li><p>管理人</p></li><li><p>{{day.content.email}}</p></li></template>
                <template v-if="day.content.aror"><li><p>收益率</p></li><li><p>{{day.content.aror}}</p></li></template>
                <template v-if="day.content.date"><li><p>资产期限</p></li><li><p>{{day.content.date}}</p></li></template>
                <template v-if="day.content.message"><li><p>备注</p></li><li><p>{{day.content.message}}</p></li></template>
                <template v-if="day.content.file"><li><p>附件({{day.content.file.length}}个)</p></li><li><p v-for="file in day.content.file"><a :href="downloadhost + '/' + file.furl">{{file.name}}</a><span>({{file.sizeh}})</span></p></li></template>
                <template v-if="day.content.attention"><li><p>关注人</p></li><li><p v-for="att in day.content.attention"><span>{{att.email}}</span> <span>{{att.name}}</span></p></li></template>
              </ul>
            </div>
          </div>
          <div class="fl step_date">
            <p class="time">{{day.createTime | time}}</p>
            <p class="date">{{day.createTime | day}}</p>
            <p class="week">{{day.createTime | week}}</p>
            <p class="time">{{day.createTime | sec}}</p>
          </div>
        </div>
        <div v-if="" class="step_memory">
          一天前
        </div>
      </div>
    </div>
    <!-- 对付详情 -->
    <div class="detail_body" v-if="state === 'fundinfo'">
      <div v-if="detailObj.historyPayList">
        <div v-for="detail in detailObj.historyPayList" class="refund_detail ui-justify mb10 bgf plr5b bordert1ddd borderb1ddd">
          <ul class="detail_main borderb1ddd">
            <li><p class="f20">利息</p></li><li><p><span class="f20">{{detail.exp_profit.value | scope}}</span></p></li>
          </ul>
          <ul class="detail_main color999">
            <li><p>付息周期：</p></li><li><p>{{detail.cycle_count}}/{{detail.size}}</p></li>
            <li><p>支付日期：</p></li><li><p>{{detail.profit_pay_date}}</p></li>
          </ul>
        </div>
      </div>
      <div class="refund_detail mb10 bgf pltb20 tc bordert1ddd borderb1ddd" v-else>
        暂无兑付
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
  var Vue = require('vue')
  var moment = require('moment')

  module.exports = {
    name: 'funddetail',
    components: {
      popbox: popbox,
      sticker: sticker
    },
    data: function () {
      return {
        downloadhost: config.api.downhost,
        local: config.api.local,
        state: '',
        assetOid: '',
        Oid: '',
        fundname: '',
        files: [],
        stems: '',
        detailObj: {},
        matchingObj: {},
        time: moment().format('YYYY-MM-DD'),
        day: '',
        src: '',
        funddata: ''
      }
    },
    route: {
      data: function (transition) {
        var that = this
        this.state = transition.to.params.state
        this.assetOid = transition.to.params.assetoid
        this.Oid = transition.to.params.oid
        console.log(this.Oid, this.assetOid)
        action.fundDetail(this.assetOid, this.Oid, function (res) {
          that.fundname = res.name
          that.files = res.files
          that.stems = res.stems
          that.detailObj = res
          console.log(res)
        })
        action.assetSearch(this.Oid, false, function (res) {
          console.log(res)
          that.matchingObj = res
        })
      }
    },
    ready: function () {
      var that = this
      action.getAmp(this.Oid, function (res) {
        that.funddata = res
      })
    },
    methods: {
      fundStart: function () {
        var that = this
        var path = '/fundcreat/' + this.Oid
        if (this.detailObj.matchingState !== 'MATCHING') {
          var reqbody = {
            event: config.events.fundStart,
            assetOid: this.assetOid
          }
          action.flow(reqbody, function (res) {
            console.log(res)
            that.$route.router.go(path)
          })
        } else {
          that.$route.router.go(path)
        }
      },
      logout: function (vm) {
        var router = vm.$route.router
        return function () {
          action.logout(function (res) {
            console.log(res)
            router.go('/login')
          })
        }
      }
    },
    watch: {
    }
  }

  Vue.filter('scope', function (val) {
    if (val < 10000) {
      return val + '万'
    } else {
      return parseFloat(val / 10000).toFixed(2) + '亿'
    }
  })

  Vue.filter('time', function (val) {
    return moment(val).format('YYYY-M')
  })
  Vue.filter('day', function (val) {
    return moment(val).format('D')
  })
  Vue.filter('week', function (val) {
    var week
    switch (moment(val).weekday()) {
      case 1 :
        week = '周一'
        break
      case 2 :
        week = '周二'
        break
      case 3 :
        week = '周三'
        break
      case 4 :
        week = '周四'
        break
      case 5 :
        week = '周五'
        break
      case 6 :
        week = '周六'
        break
      default:
        week = '周日'
        break
    }
    return week
  })
  Vue.filter('sec', function (val) {
    return moment(val).format('HH:mm')
  })
</script>
<style lang="scss">
.detail_main {
  li { width:50%; text-align:left;}
}
a.or_btn { color:#fff; left:0; bottom:0;}
</style>
