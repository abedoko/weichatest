<template>
  <div class="sticker">
    <p class="st_top plr5b">
      <span class="st_sptitle">{{source.typeName}}{{source.subTypeName?'-' + source.subTypeName:''}}</span> <span><img src="../assets/images/dot.png" alt="glod"></span>
    </p>
    <div class="plr5b clearfix">
      <div class="fr sticker_face"><img src="../assets/images/lock.png" alt="pic"></div>
      <div class="stick_detail">
        <p>{{source.name}}</p>
        <p class="mt10 f14 color999">拟截止日期 {{source.setDate}}</p>
      </div>
    </div>
    <div class="plr5b ui-justify">
      <ul class="ptb3b de_three">
          <li><p>{{source.expAror}}-{{source.expArorSec}}%</p></li>
          <li><p>{{source.raiseScopeStr}}</p></li>
          <li><p>{{source.life}}个月</p></li>
      </ul>
    </div>
    <div class="stick_state">
     <span v-if="type === 'fund'">{{step[source.matchingState]}}</span>
     <template v-else>
        <span v-if="source.state === 'CREATE' || source.state === 'UPDATE'">审核中</span>
        <span v-if="source.state === 'MOREINFO'">需提交更多材料</span>
        <span v-if="source.state === 'AUDITFAIL'">审核未通过</span>
        <span v-if="source.state === 'GIVEUP'">已放弃</span>
        <span v-if="source.state === 'RAISING' && source.confirmVolume">已预约{{source.confirmVolume}}万</span>
        <span v-if="source.state === 'RAISING' && !source.confirmVolume">未预约</span>
        <span v-if="source.state === 'STOPSALE-USER' || source.state === 'STOPSALE-PLATEFORM'">停止售卖</span>
        <span v-if="source.state === 'COMPLETE'">已成立</span>
        <span v-if="source.state === 'SETUPFAIL'">成立失败</span>
        <span v-if="source.state === 'CLOSED'">已结束</span>
        <span v-if="source.state === 'AUDITED'">审核通过</span>
     </template>
    </div>
  </div>
</template>

<script>
// var config = require('../utils/globalConfig')
var Vue = require('vue')
module.exports = {
  name: 'sticker',
  props: {
    source: {
      type: Object,
      default: function () {
        return {}
      }
    },
    placement: {
      type: String,
      require: true
    },
    type: {
      type: String,
      require: true
    }
  },
  data: function () {
    return {
      step: {
        FUND_PREPARE: '待提交过会',
        ASSET_PREPARE: '意向',
        ASSET_CFMVOLUME: '待确认额度',
        FUND_CFMVOLUME: '待预约',
        FUND_CFMVOLUME_AGAIN: '待确认额度',
        ASSET_SENDAGM: '待发送合同',
        FUND_CFMAGM: '待确认合同',
        ASSET_CFMAGM: '待确认合同',
        FUND_INVESTCMD: '待发送投资指令',
        FUND_INVESTCMD_FEEDBACK: '待发送投资指令',
        ASSET_INVESTCMD: '待发送投资指令',
        FUND_CFMOFFLINE: '待确认线下购买',
        GM_TRANSCMD: '待发送划款指令',
        BANK_TRANSCMD: '发送划款指令中',
        FUND_CFMTRANS: '待确认划款',
        FUND_AUDITED: '审核通过',
        FUND_BEFORE_TERMINATE: '交易中止',
        FUND_INVESTING_TERMINATE: '交易中止',
        ASSET_TERMINATE: '交易中止',
        FUND_TERMINATE_FINISH: '交易中止',
        FUND_TRANTYPE: '待支付'
      }
    }
  },
  created: function () {
    var source = this.source
    Vue.set(source, 'raiseScopeStr', getRaiseScopeStr(source.raiseScope))
  }
}

function getRaiseScopeStr (raiseScope) {
  if (raiseScope < 10000) {
    return raiseScope + '万'
  } else {
    return parseFloat(raiseScope / 10000).toFixed(2) + '亿'
  }
}
</script>
<style lang="scss">
  .sticker {margin-top: 10px; padding-top:3%; background:#fff;  font-size: 16px;border:1px solid #e0e0e0; box-shadow:0px 2px 5px 0px rgba(0,0,0,0.06); border-radius:2px;
    .sticker_face {
      max-width:60px; height:60px; overflow:hidden;
      img {width:100%; }
    }
    .st_top {
      padding-bottom:9px;
      .st_sptitle {background:#fdede9; border-radius:12px; display:inline-block; color:#f4551f;vertical-align:middle; padding:0 3%; font-size:14px;
      }
      img {vertical-align:middle; width:15px;}
    }
    .stick_detail {
      width:calc(100% - 70px);
    }
    .de_three li p {font-size:20px;}
    .de_three li:first-child{color:#f4551f;}
    .stick_state {border-top:1px solid #f0f0f0; text-align:center;color:#999; height:44px; line-height:44px;}
  }
</style>
