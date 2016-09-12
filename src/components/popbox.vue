<template>
  <div class="">
    <div class="mask"></div>
    <div class="alert_box">
      <div class="alert_title">{{title}}</div>
      <div class="alert_msg">{{msg}}</div>
      <div class="close" @click="closePopobx">
        确定
      </div>
    </div>
  </div>
</template>
<script>
module.exports = {
  props: {
    msg: {
      type: String,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    placement: {
      type: String,
      require: true
    }
  },
  methods: {
    closePopobx: function () {
      this.$dispatch('colsePopbox', false)
    }
  }
}
</script>
<style lang="scss">
  .mask { position:fixed; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.56); z-index:9;}
  .alert_box { position:fixed; left:50%; top:50%; z-index:10; background:#fff; transform:translate(-50%,-50%); text-align:center; width:80%; border-radius:8px; padding-top:5%;
    .alert_title { font-size:24px;}
    .alert_msg { font-size:18px;padding:4% 6%;}
    .close {
      border-top:#ddd 1px solid;
      font-size:24px;
      padding:5% 0;
    }
  }
</style>
