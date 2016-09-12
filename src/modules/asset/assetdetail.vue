<template>
  <div class="body detail_offset">
    <!-- 资产详情 -->
    <ul class="tabs bgf ui-tiled shadowb1dddin mb10">
      <li class="tab" :class="{'selected': state === 'assetinfo'}" ><a v-link="{path:'/asset/assetdetail/assetinfo/' + Oid }">资产信息</a></li><li class="tab" :class="{'selected': state === 'paydetail'}"><a v-link="{path:'/asset/assetdetail/paydetail/' + Oid +'/'+ assetOid}">交易详情</a></li><li class="tab" :class="{'selected': state === 'fundinfo'}"><a v-link="{path:'/asset/assetdetail/fundinfo/' + Oid}">投资详情</a></li>
    </ul>
    <!-- empty -->
    <div v-show="" class="empty">

    </div>
    <!-- 资产信息 -->
    <div class="detail_body" v-if="state === 'assetinfo'">
      <div class="ui-justify plr5b bgf borderb1ddd bordert1ddd" >
        <ul class="detail_main de_title borderb1ddd">
          <li><p class="f20">{{assetObj.name}}</p></li><li><p class="colororange2 f14">来源: <span v-if="assetObj.stems!=='USERDEFINE'">平台</span><span v-else>自有</span></p></li>
        </ul>
        <ul class="detail_main color999 mb10">
          <li><p>资产名称：</p></li><li><p>{{assetObj.name}}</p></li>
          <li><p>拟成立日期：</p></li><li><p>{{assetObj.setDate}}</p></li>
          <li><p>预计年化收益：</p></li><li><p>{{assetObj.expAror === assetObj.expArorSec ? assetObj.expAror : assetObj.expAror + '-' + assetObj.expArorSec}}%</p></li>
          <li><p>资产期限：</p></li><li><p>{{assetObj.life}}</p></li>
          <li><p>资产规模：</p></li><li><p>{{assetObj.raiseScope | scope}}</p></li>
          <li><p>起购金额：</p></li><li><p>{{assetObj.floorVolume | scope}}</p></li>
          <li><p>资产类型：</p></li><li><p>{{assetObj.typeName}}</p></li>
          <li><p>付息方式：</p></li><li><p>{{assetObj.accrualCycleName}}</p></li>
        </ul>
        <div class="detail_block bordert1ddd pb10">
          <div class="db_list">
            <p class="pt3bb5b">用途</p>
            <p class="color999">{{assetObj.usages}}</p>
          </div>
        </div>
        <div class="detail_block bordert1ddd pb10">
          <div class="db_list">
            <p class="pt3bb5b">风控</p>
            <p class="color999">{{assetObj.risk}}</p>
          </div>
        </div>
        <div class="detail_block bordert1ddd pb10">
          <div class="db_list">
            <p class="pt3bb5b">额外增信</p>
            <p class="color999">{{assetObj.reveal}}</p>
          </div>
        </div>
        <div class="detail_block bordert1ddd pb10">
          <div class="db_list">
            <p class="pt3bb5b">说明</p>
            <p class="color999">{{assetObj.pcomment}}</p>
          </div>
        </div>
      </div>
      <div class="file_body plr5b bgf mt10 borderb1ddd bordert1ddd">
        <p class="borderb1ddd ptb3b">附件({{files ? files.length : 0}}个)</p>
        <ul class="file_test pb10">
          <li v-for="file in files">
            <a :href="downloadhost + '/' + file.furl">
              <span></span> <span>{{file.name}}</span>
            </a> <span>({{file.sizeh}})</span></li>
        </ul>
      </div>
      <div class="plant_adv plr5b bgf mt10 borderb1ddd bordert1ddd">
        <p class="plant_title borderb1ddd mb10">
          <span class="plant_mark"><img src="../../assets/images/logo.png" alt="logo"></span> 平台建议
        </p>
        <div class="detail_inner pb10 color999">
          {{assetObj.psuggest}}
        </div>
        <p class="tr pb10"><a class="item-color" :href="downloadhost + '/html2pdf?u=http%3a%2f%2fcloud.guohuaigroup.com%2fpdf%2fpdf.html%23'+ Oid 
              +'&filename=%e8%b5%84%e4%ba%a7%e5%ae%a1%e6%89%b9%e6%84%8f%e8%a7%81%e4%b9%a6.pdf'" download="资产审批书.pdf" target="_blank">《资产审批书》下载</a></p>
      </div>
      <div class="plr5b bgf mt10 borderb1ddd bordert1ddd bdsecess">
        <div class="db_list ui-justify">
            <ul class="detail_main de_title borderb1ddd">
              <li><p class="f20">项目成立信息</p></li>
            </ul>
            <ul class="detail_main color999" v-if="assetObj.assetState === 'COMPLETE'">
              <li><p>项目成立日：</p></li><li><p>{{assetObj.setupDate}}</p></li>
              <li><p>收益起始日：</p></li><li><p>{{assetObj.arorBeginDate}}</p></li>
              <li><p>收益截止日：</p></li><li><p>{{assetObj.arorEndDate}}</p></li>
              <li><p>兑付时间：</p></li><li><p>{{assetObj.honourZCDate}}</p></li>
              <li><p>付息方式：</p></li><li><p>{{assetObj.accrualCycleName}}</p></li>
              <li><p>付息日：</p></li><li><p>{{assetObj.accrualDate}}</p></li>
              <li><p>首付息日：</p></li><li><p>{{assetObj.arorFirstDate}}</p></li>
              <li><p>合同天数：</p></li><li><p>{{assetObj.contractDays}}</p></li>
            </ul>
            <ul class="detail_main color999" v-if="assetObj.assetState === 'SETUPFAIL'">
              <li><p>项目成立日：</p></li><li><p>{{assetObj.initZCDate}}</p></li>
              <li><p>收益起始日：</p></li><li><p>{{assetObj.refundZCQuota}}</p></li>
            </ul>
            <div class="detail_main color999" v-else>
              <p>资产未成立</p>
            </div>
          </div>
      </div>
    </div>
    <!-- 交易详情 -->
    <div class="detail_body pl5br2b" v-if="state === 'paydetail'">
      <div class="state_box mb10">
        <p v-if="assetObj.matchingState  === 'MATCHING'">资产撮合</p>
        <p v-if="assetObj.matchingState  === 'TERMINATE'">中止</p>
        <p v-if="assetObj.assetState === 'BEFORECOMPLETE'">资产待成立</p>
        <p v-if="assetObj.assetState === 'COMPLETE'">资产成立</p>
        <p v-if="assetObj.assetState === 'SETUPFAIL'">资产成立失败</p>
        <p v-if="assetObj.assetState === 'EXPIRE'">资产到期</p>
        <p v-if="assetObj.assetState === 'HONOUR'">资产到期已兑付</p>
      </div>
      <div class="step_detail" v-for="day in matchingObj.rows">
        <div class="daystep clearfix">
          <div class="fr step_block">
            <div class="ui-justify">
              <ul class="detail_main borderb1ddd">
                <li><p>{{day.eventName}}</p></li><li><p><span v-if="day.part == 'FUND'" class="user_from">资金方</span><span v-if="day.part == 'ASSET'" class="user_from assetuser">资产方</span><span v-if="day.part == 'BANK'" class="user_from">银行</span><span v-if="day.part == 'GM'" class="user_from gmuser">协办人</span></p></li>
              </ul>
              <div class="describe">资金方向{{day.operatorName}}发送了{{day.eventName}}</div>
              <ul class="detail_main">
                <template v-if="day.content.email"><li><p>管理人</p></li><li><p>{{day.content.email}}</p></li></template>
                <template v-if="day.content.volume"><li><p>拟预约额
</p></li><li><p>{{day.content.volume}}万</p></li></template>
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
      </div>
      <div class="amount_box">
        <!-- 当前帐户 -->
        <div v-if="switchOn" class="mask" @click="switchOn = false"></div>
        <div v-if="assetOidfirst" class="amount_switch" @click="amount_switch">
          当前帐户：<br>
          <span class="am_name">{{assetOidfirst[firstfund].assetName}}</span>
        </div>
        <div v-if="switchOn" class="amount_list">
          <ul class="al_inner">
            <li :class="{'creatfail': a.fundStage === 'TERMINATE' || a.assetStage === 'TERMINATE'}" v-for="a in assetObj.matchingList" @click="changefund(a, $index)">
              <img :src="downloadhost +'/'+ a.fundLogo" alt="pic">
              <span v-if="a.fundStage === 'TERMINATE' || a.assetStage === 'TERMINATE'" class="am_state">中止</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 投资详情 -->
    <div class="detail_body" v-if="state === 'fundinfo'">
      <div class="refund_detail ui-justify bgf plr5b bordert1ddd borderb1ddd color999">
        <ul class="detail_main">
          <li><p>资产总规模(万)：</p></li><li><p>{{dataStep.asset_quota}}</p></li>
          <li><p>通过平台募集(万)：</p></li><li><p>{{dataStep.sum_quota}}</p></li>
          <li><p>平台募集占比率：</p></li><li><p>{{dataStep.proportion + '%'}}</p></li>
          <li><p>机构数：</p></li><li><p>{{dataStep.sum_org}}</p></li>
          <li><p>需付利息(万)：</p></li><li><p>{{dataStep.sum_interest}}</p></li>
        </ul>
      </div>
      <div v-for="a in dataStep.list" class="refund_detail ui-justify mt10 bgf plr5b bordert1ddd borderb1ddd">
        <ul class="detail_main borderb1ddd">
          <li><p class="f20">{{a.asset_issuer}}</p></li><li><p><span class="f20">{{a.investment_quota}}</span> 万</p></li>
        </ul>
        <ul class="detail_main color999">
          <li><p>收益率：</p></li><li><p>{{a.yield}}%</p></li>
          <li><p>利息：</p></li><li><p>{{a.total_interest}}</p></li>
          <li><p>投资时间：</p></li><li><p>{{a.investment_day}}</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  var action = require('../../actions/action')
  // var eventListener = require('../../utils/eventListener')
  var config = require('../../utils/globalConfig')
  var popbox = require('../../components/popbox')
  var moment = require('moment')

  module.exports = {
    name: 'assetdetail',
    components: {
      popbox: popbox
    },
    data: function () {
      return {
        downloadhost: config.api.downhost,
        local: config.api.local,
        time: moment().format('YYYY-MM-DD'),
        state: '',
        switchOn: false,
        assetOid: '',
        assetOidfirst: '',
        Oid: '',
        assetObj: '',
        files: [],
        matchingObj: '',
        firstfund: 0,
        dataStep: ''
      }
    },
    route: {
      data: function (transition) {
        var that = this
        this.state = transition.to.params.state
        this.Oid = transition.to.params.oid
        this.matchingObj = []
        action.assetDetail3(this.Oid, function (res) {
          that.assetObj = res
          that.dataStep = res.myAssetRes
          that.files = res.files
          that.assetOidfirst = res.matchingList
          if (transition.to.params.assetoid) {
            that.assetOid = transition.to.params.assetoid
          } else {
            that.assetOid = that.assetOidfirst[0].oid
          }
          if (that.state === 'paydetail') {
            action.assetSearch(that.assetOid, false, function (res) {
              that.matchingObj = res
            })
          }
        })
      }
    },
    methods: {
      amount_switch: function () {
        this.switchOn = true
      },
      changefund: function (obj, index) {
        var assetOid = obj.oid
        this.firstfund = index
        var path = '/asset/assetdetail/paydetail/' + this.Oid + '/' + assetOid
        this.$route.router.go(path)
        this.switchOn = false
      }
    },
    ready: function () {
    },
    watch: {
    }
  }
</script>
<style lang="scss">
.detail_offset {
  padding-top:50px;
}
.detail_offset_b {padding-bottom:50px;}
.detail_main {
  li { width:50%; text-align:left;}
}
.tabs {
  position:fixed;
  left:0;
  top:0;
  width:100%;
  height:40px;
  padding: 0 3%;
  z-index:12;
  li {height:40px; line-height:40px; margin:0 3%;
    a {
      display:block;
      width:100%;
      color:#999;
    }
    &.selected, &:target {
      a {
        color:#ea7e5a;
        box-shadow:0 -2px 0 #ea7e5a inset;
      }
    }
  }
}
.detail_body {
  .detail_main {
    padding-top:3%;
    padding-bottom:3%;
    li {padding:5px 0;
      &:nth-child(even) { 
      text-align:right;
      }
    }
  }
}
.file_test {
  li {padding:5px 0;
    a {
      word-wrap: break-word;
    }
  }
}
.plant_title {
  padding:10px 0;
  .plant_mark {
    display:inline-block;
    background:#fff3ef;
    padding-bottom:15%;
    border:1px solid #f7cabb;
    text-align:center;
    vertical-align:middle;
    width:15%;
    position:relative;
    border-radius:50%;
    margin-right:15px;
    img {width:80%; vertical-align:middle; left:11%; top:10%; position:absolute;}
  }
}
.bdsecess {position:relative;}
.bdsecess:after {content:' '; display:block; height:120px; width:16%; max-width:150px; position:absolute; right:5%; top:15px; background:url(../../assets/images/secess.png) no-repeat; background-size:100% auto;
}
.bdsecess.bdfail:after {content:' '; background:url(../../assets/images/fail.png) no-repeat;}

.amount_box {
  .mask { top:40px; height:calc(100% - 40px)};
  .amount_list {
    position:fixed;
    top:235px;
    left:0;
    width:120px;
    z-index:11;
    height:calc(100% - 235px);
    background:#fff;
    &:before{
      content:'';
      display:block;
      width:0;height:0;
      border:transparent 5px solid;
      border-bottom-color:#fff;
      position:absolute;
      top:-10px;
      left:30px;
    }
    .al_inner {
      position:relative;
      height:100%;
      overflow:auto;
      li {
        position:relative;
        text-align:center;
        height:120px;
        line-height:120px;
        border-bottom:#e0dee0 1px solid;
        width:120px;
        text-align:center;
        &.creatfail {
          -webkit-filter:grayscale(1)
        }
        &:after{content:'&nbsp'; opacity:0; font-size:0; text-indent:-999px;}
        img {
          width:60%;
          vertical-align:middle;
        }
        .am_state {
          position:absolute;
          left:5%;
          bottom:5%;
          width:90%;
          height:24px; line-height:24px;
          background:rgba(0,0,0,0.59);
          color:#fff;
        }
      }
    }
  }
}
.amount_switch {
  width:130px; 
  padding:12px 0 12px 10px;
  position:fixed;
  z-index:11;
  color:#fff;
  left:0;
  top:150px;
  border-radius:0 40px 40px 0;
  background:url(../../assets/images/arrow.png) no-repeat 90% center rgba(245,98,43,0.91);
  background-size:18px auto;
  .am_name {
    font-size:18px; color:#780606
  }
}
.state_box {
  p {border-radius:18px;
  background:#ea7e5a;
  display:inline-block;}
  color:#fff;
  padding:6px 20px;
}
.step_date {
  width:60px;
  padding-right:10px;
  text-align:center;
  .time {font-size:14px; color:#999;}
  .date { font-size:26px; color:#666; border-bottom:#ddd 2px solid; line-height:1.4;}
  .week { font-size:16px; color:#666;}
}
.step_detail {
  &:nth-of-type(2), &:active {
    .step_block {
      border-color:#f7cabb;
    }
    .date {border-bottom-color:#f7cabb;}
  }
  .step_block{
    width:calc(100% - 60px);
    background:#ffffff;
    border:1px solid #ddd;
    box-shadow:0px 4px 8px 0px rgba(0,0,0,0.06);
    border-radius:4px;
    padding:0 10px;
    .detail_main {
      li {
        vertical-align:top;
        a { word-wrap: break-word;}
        &:nth-child(even) {
          color:#999;
        }
      }
    }
    span.user_from {
      font-size:14px;
      display:inline-block;
      padding:2px 8px;
      text-align:center;
      color:#ea7e5a;
      border-radius:13px;
      border:1px solid #fbd8cf;
      background:#ffece7;
      &.funduser {}
      &.assetuser {background:#fff;}
      &.gmuser {background:#ededed;color:#888;}
    }
  }
}

.describe {
  font-size:14px;
  color:#999;
  padding-top:10px;
}
.step_memory {
  margin-top:15px;
  padding-top:10px;
  padding-bottom:10px;
  background:linear-gradient(90deg, #f2f2f2 0%, #dadada 49%, #f2f2f2 100%) no-repeat;
  background-size: 100% 1px;
  text-align:center;
  color:#999;
}
.daystep {
  margin-bottom:10px;
}
</style>
