<template>
  <div class="datepicker">
    <div class="datepicker-input" type="text"
    @click="inputClick">
      <p class="ymd">{{value.split(' ')[0]}}</p>
      <p class="hms"
         @click.stop="hmsClick">{{value.split(' ')[1]}}</p>
    </div>
    <span class="icon fa fa-calendar-check-o"></span>
      <div class="datepicker-popup" v-show="displayDayView">
          <div class="datepicker-inner">
              <div class="datepicker-body">
                  <div class="datepicker-ctrl">
                      <span class="month-btn datepicker-preBtn" @click="preNextMonthClick(0)">&lt;</span>
                      <span class="month-btn datepicker-nextBtn" @click="preNextMonthClick(1)">&gt;</span>
                      <p @click="switchMouthView">
                      {{stringifyDayHeader(currDate)}}
                      </p>
                  </div>
                  <div class="datepicker-weekRange">
                      <span v-for="w in weekRange">{{w}}</span>
                  </div>
                  <div class="datepicker-dateRange">
                      <span v-for="d in dateRange" v-bind:class="d.sclass" @click="daySelect($event, d.date)">{{d.text}}</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="datepicker-popup" v-show="displayMouthView">
        <div class="datepicker-inner">
            <div class="datepicker-body">
                <div class="datepicker-ctrl">
                    <span class="month-btn datepicker-preBtn" @click="preNextYearClick(0)">&lt;</span>
                    <span class="month-btn datepicker-nextBtn" @click="preNextYearClick(1)">&gt;</span>
                    <p @click="switchDecadeView">
                    {{stringifyYearHeader(currDate)}}
                    </p>
                </div>
                <div class="datepicker-mouthRange">
                  <template v-for="m in monthNames">
                      <span v-bind:class="{'datepicker-dateRange-item-active':
                          (monthNames[parse(value).getMonth()]  === m) &&
                          currDate.getFullYear() === parse(value).getFullYear()}"
                          @click="mouthSelect($index)"
                      >
                        {{m.substr(0,3)}}
                      </span>
                    </template>
                </div>
            </div>
        </div>
      </div>
      <div class="datepicker-popup" v-show="displayYearView">
        <div class="datepicker-inner">
            <div class="datepicker-body">
                <div class="datepicker-ctrl">
                    <span class="month-btn datepicker-preBtn" @click="preNextDecadeClick(0)">&lt;</span>
                    <span class="month-btn datepicker-nextBtn" @click="preNextDecadeClick(1)">&gt;</span>
                    <p>
                    {{stringifyDecadeHeader(currDate)}}
                    </p>
                </div>
                <div class="datepicker-mouthRange decadeRange">
                  <template v-for="decade in decadeRange">
                    <span v-bind:class="{'datepicker-dateRange-item-active':
                        parse(value).getFullYear() === decade.text}"
                      @click.stop="yearSelect(decade.text)">
                        {{decade.text}}
                      </span>
          </template>
                </div>
            </div>
        </div>
      </div>
      <div class="datepicker-popup" v-show="displayHmsView">
        <div class="datepicker-inner">
          <div class="datepicker-body">
            <ul class="datepicker-hmsRange">
              <li>
                <h5>
                  {{hour}}
                  <span class="colon">:</span>
                </h5>
                <ul class="datepicker-hmsRange-select">
                  <li v-for="o in hours"
                      @click="hmsSelect('hour', o)">{{o}}</li>
                </ul>
              </li>
              <li>
                <h5>
                  {{minute}}
                  <span class="colon">:</span>
                </h5>
                <ul class="datepicker-hmsRange-select">
                  <li v-for="o in minutes"
                      @click="hmsSelect('minute', o)">{{o}}</li>
                </ul>
              </li>
              <li>
                <h5>
                  {{second}}
                </h5>
                <ul class="datepicker-hmsRange-select">
                  <li v-for="o in seconds"
                      @click="hmsSelect('second', o)">{{o}}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
</div>
</template>

<script>
var EventListener = require('../utils/eventListener')

module.exports = {
  props: {
    value: {
      type: String,
      twoWay: true
    },
    format: {
      default: 'yyyy-MM-dd'
    },
    disabledDaysOfWeek: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data: function () {
    return {
      weekRange: ['日', '一', '二', '三', '四', '五', '六'],
      dateRange: [],
      decadeRange: [],
      currDate: new Date(),
      displayDayView: false,
      displayMouthView: false,
      displayYearView: false,
      displayHmsView: false,
      monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      hours: (function () {
        var arr = []
        for (var i = 0; i < 24; i += 1) {
          arr.push(('0' + i).slice(-2))
        }
        return arr
      })(),
      minutes: (function () {
        var arr = []
        for (var i = 0; i < 60; i += 1) {
          arr.push(('0' + i).slice(-2))
        }
        return arr
      })(),
      seconds: (function () {
        var arr = []
        for (var i = 0; i < 60; i += 1) {
          arr.push(('0' + i).slice(-2))
        }
        return arr
      })(),
      hour: '',
      minute: '',
      second: ''
    }
  },
  watch: {
    currDate: function () {
      this.getDateRange()
    }
  },
  methods: {
    close: function () {
      this.displayDayView = this.displayMouthView = this.displayMouthView = this.displayHmsView = false
    },
    inputClick: function () {
      this.displayHmsView = false
      if (this.displayMouthView || this.displayYearView) {
        this.displayDayView = false
      } else {
        this.displayDayView = !this.displayDayView
      }
    },
    hmsClick: function () {
      this.displayDayView = this.displayMouthView = this.displayYearView = false
      this.displayHmsView = !this.displayHmsView
    },
    preNextDecadeClick: function (flag) {
      var year = this.currDate.getFullYear()
      var mouths = this.currDate.getMonth()
      var date = this.currDate.getDate()

      if (flag === 0) {
        this.currDate = new Date(year - 10, mouths, date)
      } else {
        this.currDate = new Date(year + 10, mouths, date)
      }
    },
    preNextMonthClick: function (flag) {
      var year = this.currDate.getFullYear()
      var month = this.currDate.getMonth()
      var date = this.currDate.getDate()

      if (flag === 0) {
        var preMonth = this.getYearMonth(year, month - 1)
        this.currDate = new Date(preMonth.year, preMonth.month, date)
      } else {
        var nextMonth = this.getYearMonth(year, month + 1)
        this.currDate = new Date(nextMonth.year, nextMonth.month, date)
      }
    },
    preNextYearClick: function (flag) {
      var year = this.currDate.getFullYear()
      var mouths = this.currDate.getMonth()
      var date = this.currDate.getDate()

      if (flag === 0) {
        this.currDate = new Date(year - 1, mouths, date)
      } else {
        this.currDate = new Date(year + 1, mouths, date)
      }
    },
    yearSelect: function (year) {
      this.displayYearView = false
      this.displayMouthView = true
      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate())
    },
    daySelect: function (event, date) {
      if (event.target.className === 'datepicker-item-disable') {
        return false
      } else {
        this.currDate = date
        this.value = this.stringify(this.currDate)
        this.displayDayView = false
      }
    },
    switchMouthView: function () {
      this.displayDayView = false
      this.displayMouthView = true
    },
    switchDecadeView: function () {
      this.displayMouthView = false
      this.displayYearView = true
    },
    mouthSelect: function (index) {
      this.displayMouthView = false
      this.displayDayView = true
      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate())
    },
    getYearMonth: function (year, month) {
      if (month > 11) {
        year++
        month = 0
      } else if (month < 0) {
        year--
        month = 11
      }
      return {year: year, month: month}
    },
    stringifyDecadeHeader: function (date) {
      var yearStr = date.getFullYear().toString()
      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0
      var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10
      return firstYearOfDecade + '-' + lastYearOfDecade
    },
    stringifyDayHeader: function (date) {
      return this.monthNames[date.getMonth()] + ' ' + date.getFullYear()
    },
    parseMouth: function (date) {
      return this.monthNames[date.getMonth()]
    },
    stringifyYearHeader: function (date) {
      return date.getFullYear()
    },
    stringify: function (date, format = this.format) {
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      var monthName = this.parseMouth(date)

      var hms = this.value.split(' ')[1]
      var hour, minute, second
      // 加入HH:mm:ss格式判断
      if (hms) {
        var hmsArr = hms.split(':')
        hour = hmsArr[0] || '00'
        minute = hmsArr[1] || '00'
        second = hmsArr[2] || '00'
      } else {
        // var now = new Date()
        // this.hour = hour = ('0' + now.getHours()).slice(-2)
        // this.minute = minute = ('0' + now.getMinutes()).slice(-2)
        // this.second = second = ('0' + now.getSeconds()).slice(-2)
      }

      return format
        .replace(/yyyy/g, year)
        .replace(/MMMM/g, monthName)
        .replace(/MMM/g, monthName.substring(0, 3))
        .replace(/MM/g, ('0' + month).slice(-2))
        .replace(/dd/g, ('0' + day).slice(-2))
        .replace(/yy/g, year)
        .replace(/M(?!a)/g, month)
        .replace(/d/g, day)
        .replace(/HH/g, ('0' + hour).slice(-2))
        .replace(/mm/g, ('0' + minute).slice(-2))
        .replace(/ss/g, ('0' + second).slice(-2))
    },
    parse: function (str) {
      var date = str ? new Date(str.replace(/\-/g, '/')) : new Date()
      return isNaN(date.getFullYear()) ? null : date
    },
    getDayCount: function (year, month) {
      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

      if (month === 1) {
        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
          return 29
        }
        return 28
      }

      return dict[month]
    },
    getDateRange: function () {
      this.dateRange = []
      this.decadeRange = []
      var time = {
        year: this.currDate.getFullYear(),
        month: this.currDate.getMonth(),
        day: this.currDate.getDate(),
        hour: this.currDate.getHours(),
        minute: this.currDate.getMinutes(),
        second: this.currDate.getSeconds()
      }
      var yearStr = time.year.toString()
      var firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1
      for (let i = 0; i < 12; i++) {
        this.decadeRange.push({
          text: firstYearOfDecade + i
        })
      }

      var currMonthFirstDay = new Date(time.year, time.month, 1)
      let firstDayWeek = currMonthFirstDay.getDay() + 1
      if (firstDayWeek === 0) {
        firstDayWeek = 7
      }
      var dayCount = this.getDayCount(time.year, time.month)
      if (firstDayWeek > 1) {
        var preMonth = this.getYearMonth(time.year, time.month - 1)
        var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month)
        for (let i = 1; i < firstDayWeek; i++) {
          var dayText = prevMonthDayCount - firstDayWeek + i + 1
          this.dateRange.push({
            text: dayText,
            date: new Date(preMonth.year, preMonth.month, dayText),
            sclass: 'datepicker-item-gray'
          })
        }
      }

      for (let i = 1; i <= dayCount; i++) {
        var date = new Date(time.year, time.month, i)
        var week = date.getDay()
        let sclass = ''
        this.disabledDaysOfWeek.forEach(function (el) {
          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable'
        })

        if (i === time.day) {
          if (this.value) {
            var valueDate = this.parse(this.value)
            if (valueDate) {
              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
                sclass = 'datepicker-dateRange-item-active'
              }
            }
          }
        }
        this.dateRange.push({
          text: i,
          date: date,
          sclass: sclass
        })
      }

      if (this.dateRange.length < 42) {
        var nextMonthNeed = 42 - this.dateRange.length
        var nextMonth = this.getYearMonth(time.year, time.month + 1)

        for (let i = 1; i <= nextMonthNeed; i++) {
          this.dateRange.push({
            text: i,
            date: new Date(nextMonth.year, nextMonth.month, i),
            sclass: 'datepicker-item-gray'
          })
        }
      }

      this.hour = ('0' + time.hour).slice(-2)
      this.minute = ('0' + time.minute).slice(-2)
      this.second = ('0' + time.second).slice(-2)
    },
    hmsSelect: function (type, val) {
      var value = this.value
      switch (type) {
        case 'hour':
          this.hour = val
          this.value = value.substring(0, 11) + val + value.substr(13)
          break
        case 'minute':
          this.minute = val
          this.value = value.substring(0, 14) + val + value.substr(16)
          break
        default:
          this.second = val
          this.value = value.substring(0, 17) + val
          this.displayHmsView = false
          break
      }
    }
  },
  ready: function () {
    var that = this
    this.$dispatch('child-created', this)
    this.currDate = this.parse(this.value) || this.parse(new Date())
    this._closeEvent = EventListener.listen(window, 'click', function (e) {
      if (!that.$el.contains(e.target)) that.close()
    })
  },
  beforeDestroy: function () {
    if (this._closeEvent) this._closeEvent.remove()
  }
}
</script>

<style lang="scss">
.datepicker{
  position: relative;
}

.datepicker > .datepicker-input > .ymd,
.datepicker > .datepicker-input > .hms{
  display: inline-block;
  cursor: pointer;
  &:hover{
    color: #3F51B5;
  }
}

.datepicker > .datepicker-input > .hms{
  margin-left: 2px;
}

.datepicker > .icon{
  color: #9e9e9e;
  position: absolute;
  top: 8px;
  right: 10px;
  cursor: pointer;
}

.datepicker-popup{
  background: #fff;
  margin-top: 2px;
  border-radius: 2px;
  position: absolute;
  z-index: 1000;
  box-shadow: 0 10px 30px rgba(0,0,0,.2);
}
.datepicker-inner{
  width: 218px;
}
.datepicker-body{
  padding: 10px 10px;
}
.datepicker-ctrl p,
.datepicker-ctrl span,
.datepicker-body span{
  display: inline-block;
  width: 28px;
  line-height: 28px;
  height: 28px;
  border-radius: 2px;
}
.datepicker-ctrl p {
    width: 65%;
}
.datepicker-ctrl span {
  position: absolute;
}
.datepicker-body span {
  text-align: center;
}
.datepicker-mouthRange span{
  width: 48px;
  height: 50px;
  line-height: 45px;
}
.datepicker-item-disable {
  background-color: white!important;
  cursor: not-allowed!important;
}
.decadeRange span:first-child,
.decadeRange span:last-child,
.datepicker-item-disable,
.datepicker-item-gray{
  color: #999;
}

.datepicker-dateRange-item-active:hover,
.datepicker-dateRange-item-active {
  background: #f4551f !important;
  color: white!important;
}
.datepicker-mouthRange {
  margin-top: 10px
}
.datepicker-mouthRange span,
.datepicker-ctrl span,
.datepicker-ctrl p,
.datepicker-dateRange span {
  cursor: pointer;
}
.datepicker-mouthRange span:hover,
.datepicker-ctrl p:hover,
.datepicker-ctrl i:hover,
.datepicker-dateRange span:hover,
.datepicker-dateRange-item-hover {
  background-color : #eeeeee;
}

.datepicker-weekRange span{
  font-weight: bold;
}
.datepicker-label{
  background-color: #f8f8f8;
  font-weight: 700;
  padding: 7px 0;
  text-align: center;
}
.datepicker-ctrl{
  position: relative;
  height: 30px;
  line-height: 30px;
  font-weight: bold;
  text-align: center;
}
.month-btn{
  font-weight: bold;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
.datepicker-preBtn{
    left: 2px;
}
.datepicker-nextBtn{
    right: 2px;
}
.datepicker-hmsRange{
  text-align: center;
  &>li{
    width: 50px;
    display: inline-block;
    position: relative;
    h5{
      line-height: 40px;
      text-align: center;
      cursor: default;
      .colon{
        position: absolute;
        top: 5px;
        right: -15px;
      }
    }
    .datepicker-hmsRange-select{
      height: 145px;
      overflow-y: auto;
      &>li{
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        &:hover{
          color: #3F51B5;
        }
      }
    }
  }
}
</style>
