var Vue = require('vue')
var Router = require('vue-router')
var App = require('./App.vue')
var config = require('./utils/globalConfig')
var login = require('./modules/login')
var register = require('./modules/user/register')
var asset = require('./modules/asset/asset')
var assetdetail = require('./modules/asset/assetdetail')
var fund = require('./modules/fund/fund')
var funddetail = require('./modules/fund/funddetail')
var fundcreat = require('./modules/fund/fundcreat')
Vue.use(Router)
var router = new Router({
  hashbang: false,
  history: true,
  saveScrollPosition: true
})
config.router = router

router.map({
  '/login': {
    component: login
  },
  '/register': {
    component: register
  },
  '/register/:key1': {
    component: register
  },
  '/asset': {
    component: asset
  },
  '/asset/:key1': {
    component: asset
  },
  '/fund': {
    component: fund
  },
  '/fund/funddetail/:state/:oid/:assetoid': {
    component: funddetail
  },
  '/fundcreat/:oid': {
    component: fundcreat
  },
  '/fundcreat/:oid/:success': {
    component: fundcreat
  },
  'asset/assetdetail': {
    component: assetdetail
  },
  'asset/assetdetail/:state': {
    component: assetdetail
  },
  'asset/assetdetail/:state/:oid': {
    component: assetdetail
  },
  'asset/assetdetail/:state/:oid/:assetoid': {
    component: assetdetail
  }
})

// router.beforeEach(function () {
// })

router.redirect({
  '*': '/fund'
})

router.start({
  replace: false,
  components: { App }
}, 'body')
