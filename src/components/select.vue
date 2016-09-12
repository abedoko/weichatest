<template>
  <div class="btn-group" :class="{open:show}">
    <button v-el:btn type="button" class="btn btn-default dropdown-toggle"
            @click="toggleDropdown"
            @blur="show = (search ? show:false)">
      <span class="placeholder" v-show="showPlaceholder">{{placeholder}}</span>
      <span class="content"> {{selectedItems}} </span>
      <span class="icon-ICON-26 ICON_mark"></span>
    </button>
    <ul class="dropdown-menu">
      <template v-if="options.length">
        <li v-if="search" class="bs-searchbox">
          <input type="text" placeholder="Search" v-model="searchText" class="form-control" autocomplete="off">
        </li>
        <li v-for="option in options | filterBy searchText " v-bind:id="option.value" style="position:relative">
          <a @mousedown.prevent="select(option.value)" style="cursor:pointer">
            {{ option.label }}
            <span class="icon-ICON-09 check-mark" v-show="value.indexOf(option.value) !== -1"></span>
          </a>
        </li>
      </template>
      <slot v-else></slot>
      <div class="notify" v-show="showNotify" transition="fadein">Limit reached ({{limit}} items max).</div>
    </ul>
  </div>
</template>

<script>
module.exports = {
  name: 'select',
  props: {
    options: {
      type: Array,
      default: function () {
        return []
      }
    },
    value: {
      twoWay: true,
      type: Array,
      default: function () {
        return []
      }
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    search: { // Allow searching (only works when options are provided)
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 1024
    }
  },
  data: function () {
    return {
      searchText: null,
      show: false,
      showNotify: false
    }
  },
  computed: {
    selectedItems: function () {
      if (this.multiple) {
        if (!this.options.length) {
          return this.value.join(',')
        } else {
          // we were given bunch of options, so pluck them out to display
          var them = this
          var foundItems = []
          them.options.forEach(function (item) {
            if (them.value.indexOf(item.value) !== -1) {
              foundItems.push(item.label)
            }
          })
          return foundItems.join(', ')
        }
      } else {
        // 默认情况。未添加!this.options.length判断（即是否有自定义<v-option>）
        var that = this
        var returnValue
        this.options.forEach(function (item) {
          if (that.value.indexOf(item.value) !== -1) {
            returnValue = item.label
          }
        })
        return returnValue
      }
    },
    showPlaceholder: function () {
      return this.value.length <= 0
    }
  },
  watch: {
    value: function (val) {
      var timeout
      var that = this
      if (timeout) {
        clearTimeout(timeout)
      }
      if (val.length > this.limit) {
        this.showNotify = true
        this.value.pop()
        timeout = setTimeout(function () {
          that.showNotify = false
        }, 1000)
      }
    }
  },
  methods: {
    select: function (v) {
      if (this.multiple) {
        var index = this.value.indexOf(v)
        if (index === -1) {
          this.value.push(v)
        } else {
          this.value.$remove(v)
        }
      } else {
        this.value.$set(0, v)
        this.show = !this.show
      }
    },
    toggleDropdown: function () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss">
.bs_searchbox {
  padding: 4px 8px;
}
.btn-group{
  .check-mark{color: #999999}
  .ICON_mark { float:right; /*margin-right:3px;*/ vertical-align:middle; margin-top:5px;color: #999;padding-right: 4px}
  .dropdown-menu{
    max-height: 300px;
    overflow-y: auto;
    padding: 0;
    border-radius: 2px;
    width: 100%;
    .notify{
      position: absolute;
      bottom: 5px;
      width: 96%;
      margin: 0 2%;
      min-height: 26px;
      padding: 3px 5px;
      background: #f5f5f5;
      border: 1px solid #e3e3e3;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
      pointer-events: none;
      opacity: .9;
    }
    li{
      a{
        padding: 3px 35px 3px 20px;
        height:27px;
        line-height:21px;
        &:hover {
          background-color:#555c68;
          color:#fff;
        }
      }
    }
    .bs-searchbox{
      padding: 0 5px 5px;
    }
  }
}
.higher {
  .dropdown-menu{
    li a{
      height:35px;
      line-height:29px;
    }
  }
}
.black_mod {
  .btn { border-radius:2px; border: 0px}
  .dropdown-menu { background-color:#42474F; font-size:14px;
    li a {
      height:34px;
      line-height:28px;
      color:#F0F0F0;
      &:hover {
        background:#555C68;
      }
    }
  }
  .open {
    &>.dropdown-toggle.btn-default:hover, &>.dropdown-toggle.btn-default:focus {
      color: #f0f0f0;
      font-size: 14px;
      background: linear-gradient(top, #494E58 20%, #42474F);
      background: -moz-linear-gradient(top, #494E58 20%, #42474F);
      background: -o-linear-gradient(top, #494E58 20%, #42474F);
      background: -webkit-linear-gradient(top, #494E58 20%, #42474F);
    }
  }
}
</style>
