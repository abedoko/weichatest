<template>
  <div class="body">
    <!-- 资产列表 -->
    <div class="pro_list fund_list">
      <!-- <div class="search_line">
        <div class="">
          <ul class="search_list">
            <li></li>
          </ul>
        </div>
        <div class="">
          <ul class="search_list">
            <li></li>
          </ul>
        </div>
      </div> -->
      <sticker v-for="item in listResult" :source="item" type="fund"  @click="gofunddetail(item)"></sticker>
    </div>
  </div>
</template>
<script>
  var action = require('../../actions/action')
  // var eventListener = require('../../utils/eventListener')
  var config = require('../../utils/globalConfig')
  var popbox = require('../../components/popbox')
  var sticker = require('../../components/sticker')

  module.exports = {
    name: 'fund',
    components: {
      popbox: popbox,
      sticker: sticker
    },
    data: function () {
      return {
        createFundBox: false,
        fundcreatBox: true,
        seccessTipBox: false,
        addlist: [],
        a: 0,
        listResult: []
      }
    },
    ready: function () {
      action.ampInfo(function (res) {
        console.log(res)
        this.fundAuth = res.fundAuth
        this.assetAuth = res.assetAuth
        this.user = res.oid
      }.bind(this))
      refreshList(this)
    },
    methods: {
      gofunddetail: function (obj) {
        var oid = obj.oid
        var assetOid = obj.assetOid
        var path = '/fund/funddetail/assetinfo/' + oid + '/' + assetOid
        console.log(obj)
        this.$route.router.go(path)
      }
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

  function refreshList (vm) {
    var matchStages = config.matchStages
    action.allFundlist(function (res) {
      res.fundList.forEach(function (flist) {
        var FPushTime = flist.pushTime.split(' ')
        if (flist.assetState !== 'STOPSALE-USER') {
          flist.prompt = (flist.matchingState === matchStages.fundCfmvolume) || (flist.matchingState === matchStages.FundCFAgain) || (flist.matchingState === matchStages.fundInvestcmdFeedback)
          flist.timefilter = {yearTime: FPushTime[0], realTime: FPushTime[1]}
          if (vm.listResult) {
            vm.listResult.push(flist)
          }
        }
      })
      vm.allPushCount = res.allPushCount
      vm.todayPushCount = res.todayPushCount
      // console.log(res)
      // console.log(vm.listResult)
    })
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
