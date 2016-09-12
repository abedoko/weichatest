<template>
    <router-view transition transition-mode="out-in">
    </router-view>
</template>

<script>
// require('./utils/plupload.full.min')
// var Vue = require('vue')
// var VueTap = require('vue-tap')
// Vue.use(VueTap)

module.exports = {
  name: 'App'
}
</script>

<style lang="scss">
/*20160816 ludai*/
@import "variable.scss";
@import "icomoon.scss";
@charset "utf-8";
/*==reset==*/
body, div, dl, dt, dd, ul, ol, li, pre, form, fieldset, input, textarea, p, blockquote, th, td{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
table{
  border-collapse:collapse;
  border-spacing:0;
  font-size: inherit;
}
fieldset, img{
  border:0;
}
address, caption, cite, code, dfn, em, th, var{
  font-style:normal;
  font-weight:normal;
}
ol, ul{
  list-style:none;
}
q:before, q:after{
  content:'';
}
abbr, acronym,button{
  border:0;
}
body{
  font-size: 14px;
  background: #f0f0f0;
  font-family: Helvetica Neue,Hiragino Sans GB,Microsoft Yahei,sans-serif;
}
a,button,input,textarea{
  outline:none!important;
}
a:active, a:hover {text-decoration:none;}

.form-control{border-radius: 0;}

.popover{
  border-radius: 2px;
  .popover-content{
    padding: 5px 8px;
  }
  &.bottom{
    &>.arrow{
      margin-left: -8px;
      border-width: 9px;
      top: -18px;
      &:after{
        top: -7px;
        margin-left: -8px;
        border-width: 8px;
      }
    }
  }
}
</style>