<template>
  <div
    v-bind:class="{
       'speech-bubble-top': placement =='top',
       'speech-bubble-right': placement =='right',
       'speech-bubble-bottom': placement =='bottom',
       'speech-bubble-left': placement =='left',
       'speech-bubble-top-left': placement =='top-left',
       'speech-bubble-top-right':placement=='top-right',
        'speech-bubble-bottom-left':placement=='bottom-left',
        'speech-bubble-bottom-right':placement=='bottom-right',
        'speech-bubble1':true
    }"
  >
    {{msg}}
  </div>
</template>
<style>
  .speech-bubble1 {
    position: relative;
    background-color: #6b6f77;
    width: 96px;
    height: 32px;
    line-height: 28px; /* 垂直居中 */
    color: white;
    display: block;
    font-size: 14px;
    text-align: center;
  }

  .speech-bubble1:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 10px solid transparent; /*transparent 透明*/
  }

  /* 箭头的位置 上*/
  .speech-bubble-top:after {
    border-bottom-color: #6b6f77;

    left: 50%;
    bottom: 100%;
    margin-left: -15px;
  }

  /*左上*/
  .speech-bubble-top-left:after {
    border-bottom-color: #6b6f77;
    left: 20%;
    bottom: 100%;
    margin-left: -15px;
  }

  /*右上*/
  .speech-bubble-top-right:after {
    border-bottom-color: #6b6f77;
    left: 85%;
    bottom: 100%;
    margin-left: -15px;
  }

  /*右*/
  .speech-bubble-right:after {
    border-left-color: #6b6f77;
    left: 100%;
    top: 75%;
    margin-top: -15px;
  }

  /*下*/
  .speech-bubble-bottom:after {
    border-top-color: #6b6f77;
    top: 100%;
    left: 50%;
    margin-left: -15px;
  }

  /*左下*/
  .speech-bubble-bottom-left:after {
    border-top-color: #6b6f77;
    top: 100%;
    left: 20%;
    margin-left: -15px;
  }

  /*右下*/
  .speech-bubble-bottom-right:after {
    border-top-color: #6b6f77;
    top: 100%;
    left: 85%;
    margin-left: -15px;
  }

  .speech-bubble-left:after {
    border-right-color: #6b6f77;
    top: 75%;
    right: 100%;
    margin-top: -15px;
  }
</style>
<script>
module.exports = {
  props: {
    msg: {
      type: String,
      require: true
    },
    placement: {
      type: String,
      require: true
    }
  }
}

</script>
