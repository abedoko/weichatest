/**
 * actions，资源请求模块
 * @type {config|exports|module.exports}
 */
var config = require('../utils/globalConfig')
var http = require('../utils/http')

module.exports = {
  /**
   * 登录
   */
  login: function (params, success, failure) {
    http.post(config.api.login + '?account=' + params.userName + '&password=' + params.password + '&system=AMP&resp=amp', success, failure)
  },
  /**
   * 退出登录
   */
  logout: function (callback) {
    http.post(config.api.logout, callback)
  },
  /**
   * 获取登录用户信息
   */
  ampInfo: function (callback) {
    http.get(config.api.ampInfo, callback)
  },
  /*
   * 资产详情---1
   * */
  assetDetail: function (oid, callback) {
    http.get(config.api.assetDetail + '?matchingOid=' + oid, callback)
  },
  /*
  * 资产详情---2
  * */
  assetDetail2: function (params, success, failure) {
    http.post(config.api.assetDetail2, params, success, failure)
  },
  /*
   * 资金端 历史兑付信息
   * */
  getPay: function (params, success, failure) {
    http.post(config.api.findPay, params, success, failure)
  },
  /*
  * pdf生成
  * */
  getPdf: function (oid, callback) {
    http.get(config.api.pdfCreate + '?oid=' + oid, callback)
  },
  /*
  * 收益率详情
  * */
  getRate: function (params, success, failure) {
    http.post(config.api.getRate, params, success, failure)
  },
  /*
  * 得到消息
  * */
  getMessage: function (params, success, failure) {
    http.post(config.api.getMessage, params, success, failure)
  },
  /*
  * 已读消息
  * */
  readMessage: function (params, success, failure) {
    http.post(config.api.readMessage, params, success, failure)
  },
  /*
  * 获取未读消息数量
  * */
  getUnRead: function (callback) {
    http.get(config.api.getUnRead, callback)
  },
  /*
   * 密码修改
   * */
  resetPass: function (params, success, failure) {
    http.post(config.api.resetPassWord, params, success, failure)
  },
  /*
  * 获取资产规模
  * */
  getAssetCount: function (assetOid, success, failure) {
    http.post(config.api.getAssetCount + '?assetOid=' + assetOid, success, failure)
  },
  /*
  * 资产端-获取资产列表
  * */
  getAssetList: function (assetOid, stage, callback) {
    http.get(config.api.getAssetList + '?assetOid=' + assetOid + '&stage=' + stage, callback)
  },
  /*
  * 资产端-获取步骤
  * */
  getAssetDetail: function (matchingOid, callback) {
    http.get(config.api.getAssetDetail + '?matchingOid=' + matchingOid, callback)
  },
  /*
  * 资产端资产投资之
  * */
  getMaxDate: function (assetOid, callback) {
    http.get(config.api.getMaxDate + '?assetOid=' + assetOid, callback)
  },
  /**
   * 资金端-投前交易查询
   */
  fundB4invest: function (callback) {
    http.post(config.api.fundB4invest, callback)
  },
  /**
   * 资金端-根据资产ID获取资产明细
   */
  getAmp: function (oid, callback) {
    http.get(config.api.getAmp + '?oid=' + oid + '&filable=true&attentionable=true&assetable=true', callback)
  },
  /**
   * 资金端-投中交易查询
   */
  fundInvesting: function (callback) {
    http.post(config.api.fundInvesting, callback)
  },
  /**
   * 资金端-找资产
   */
  search: function (reqbody, callback) {
    http.get(config.api.search + '?' + reqbody, callback)
  },

  /**
   * 资产端-获取资产
   */
  getAsset: function (oid, matchingOid, callback) {
    http.get(config.api.getAsset + '?oid=' + oid + '&matchingOid=' + matchingOid, callback)
  },
  /**
   * 资产端-添加资产
   */
  saveAsset: function (reqbody, callback) {
    http.post(config.api.saveAsset, reqbody, callback)
  },
  /**
   * 资产端-修改资产
   */
  updateAsset: function (reqbody, callback) {
    http.post(config.api.updateAsset, reqbody, callback)
  },
  /**
   * 资产端-归档资产
   */
  closeAsset: function (reqbody, callback) {
    http.post(config.api.closeAsset, reqbody, callback)
  },
  /**
   * 资产端-开始售卖资产
   */
  startAsset: function (reqbody, callback) {
    http.post(config.api.startAsset, reqbody, callback)
  },
  /**
   * 资产端-停止售卖资产
   */
  pauseAsset: function (reqbody, callback) {
    http.post(config.api.pauseAsset, reqbody, callback)
  },
  /**
   * 资产端-项目成立
   */
  setupAsset: function (reqbody, callback) {
    http.post(config.api.setupAsset, reqbody, callback)
  },
  /**
   * 资产端-项目失败
   */
  failAsset: function (reqbody, callback) {
    http.post(config.api.failAsset, reqbody, callback)
  },
  /**
   * 资产端-判断项目是否可以成立或失败
   */
  setcheckAsset: function (reqbody, callback) {
    http.post(config.api.setcheckAsset, reqbody, callback)
  },
  /**
   * 资产端-投前交易列表
   */
  assetListB4invest: function (callback) {
    http.post(config.api.assetListB4invest, callback)
  },
  /**
   * 资产端-投中交易列表
   */
  assetListInvesting: function (callback) {
    http.post(config.api.assetListInvesting, callback)
  },
  /**
   * 资产端-投前交易查询
   */
  assetB4invest: function (oid, callback) {
    http.post(config.api.assetB4invest + '?assetOid=' + oid, callback)
  },
  /**
   * 资产端-投中交易查询
   */
  assetInvesting: function (oid, callback) {
    http.post(config.api.assetInvesting + '?assetOid=' + oid, callback)
  },
  /**
   * 资产端-获取审核状态资产
   */
  getAudit: function (callback) {
    http.get(config.api.getAudit, callback)
  },

  /**
   * 交易-工作流
   */
  flow: function (reqbody, callback, failure) {
    http.post(config.api.flow, reqbody, callback, failure)
  },
  /**
   * 管理人-获取管理人数据
   */
  getGmData: function (reqbody, success, failure) {
    http.post(config.api.getGmData + '?filable=true&assetable=true', reqbody, success, failure)
  },
  /**
   * 管理人-获取管理人数据
   */
  getBankData: function (reqbody, success, failure) {
    http.post(config.api.getBankData + '?filable=true&assetable=true', reqbody, success, failure)
  },

  /**
   * 批量下载
   */
  filePkg: function (reqbody, callback) {
    http.post(config.api.filePkg, reqbody, callback)
  },
  /**
   * 机构列表
   */
  mcorporate: function (callback) {
    http.get(config.api.mcorporate, callback)
  },
  /**
   * 资产类型
   */
  dictAssetType: function (callback) {
    http.get(config.api.dict + '?specs=ASSETTYPE', callback)
  },

  /**
   * 资金端-投后-新增资产池
   */
  saveAssetPool: function (reqbody, callback) {
    http.post(config.api.saveAssetPool, reqbody, callback)
  },
  /**
   * 资金端-投后-修改资产池
   */
  updateAssetPool: function (reqbody, callback) {
    http.post(config.api.updateAssetPool, reqbody, callback)
  },
  /**
   * 资金端-投后-获取用户底下全部资产池
   */
  getAllAssetPool: function (callback, failure) {
    http.get(config.api.getAllAssetPool, callback, failure)
  },
  /**
   * 资金端-投后-获取资产池变动记录
   */
  getChangeList: function (reqbody, callback) {
    http.post(config.api.getChangeList, reqbody, callback)
  },
  /**
   * 资金端-投后-获取用户资产统计数据
   */
  getStatistics: function (callback) {
    http.get(config.api.getStatistics, callback)
  },
  /**
   * 资金端-投后-按资产池获取用户资产图表数据
   */
  getStatisticsByPid: function (reqbody, callback) {
    http.post(config.api.getStatisticsByPid, reqbody, callback)
  },
  /**
   * 资金端-投后-新增非标资产
   */
  saveSelfAsset: function (reqbody, callback) {
    http.post(config.api.saveSelfAsset, reqbody, callback)
  },
  /**
   * 资金端-投后-查询单条非标资产
   */
  findSelfAssetByOid: function (reqbody, callback) {
    http.post(config.api.findSelfAssetByOid, reqbody, callback)
  },
  /**
   * 资金端-投后-修改非标资产
   */
  updateSelfAsset: function (reqbody, callback) {
    http.post(config.api.updateSelfAsset, reqbody, callback)
  },
  /**
   * 资金端-投后-删除非标资产
   */
  deleteUSAsset: function (reqbody, callback) {
    http.post(config.api.deleteUSAsset, reqbody, callback)
  },
  /**
   * 资金端-投后-获取标准资产信息
   */
  getAssetInfo: function (callback) {
    http.get(config.api.getAssetInfo, callback)
  },
  /**
   * 资金端-投后-新增标准资产
   */
  saveStdAsset: function (reqbody, callback) {
    http.post(config.api.saveStdAsset, reqbody, callback)
  },
  /**
   * 资金端-投后-获取标准资产详情
   */
  getStdAssetStatementList: function (reqbody, callback) {
    http.post(config.api.getStdAssetStatementList, reqbody, callback)
  },
  /**
   * 资金端-投后-删除标准资产
   */
  delStdAsset: function (reqbody, callback) {
    http.post(config.api.delStdAsset, reqbody, callback)
  },
  /**
   * 资金端-投后-标准资产分页查询
   */
  findPageStdAsset: function (reqbody, callback) {
    http.post(config.api.findPageStdAsset, reqbody, callback)
  },
  /**
   * 资金端-投后-新增银行
   */
  saveBank: function (reqbody, callback) {
    http.post(config.api.saveBank, reqbody, callback)
  },
  /**
   * 资金端-投后-修改银行
   */
  updateBank: function (reqbody, callback) {
    http.post(config.api.updateBank, reqbody, callback)
  },
  /**
   * 资金端-投后-银行详情流水
   */
  findBankStatement: function (reqbody, callback) {
    http.post(config.api.findBankStatement, reqbody, callback)
  },
  /**
   * 资金端-投后-获取非标本息兑付列表
   */
  getPayment: function (reqbody, callback) {
    http.post(config.api.getPayment, reqbody, callback)
  },
  /**
   * 资金端-投后-获取资产池已兑付资产列表
   */
  getPaymentList: function (reqbody, callback) {
    http.post(config.api.getPaymentList, reqbody, callback)
  },
  /**
   * 资金端-投后-更新非标本息兑付
   */
  updatePayment: function (reqbody, callback) {
    http.post(config.api.updatePayment, reqbody, callback)
  },
  /**
   * 资金端-投后-申赎管理
   */
  saveSs: function (reqbody, success, failure) {
    http.post(config.api.saveSs, reqbody, success, failure)
  },
  /**
   * 资金端-投后-申赎历史流水
   */
  getSsList: function (reqbody, callback) {
    http.post(config.api.getSsList, reqbody, callback)
  },
  /**
   * 资金端-投后-获取资产池历史列表
   */
  getHistoryListByPid: function (reqbody, callback) {
    http.post(config.api.getHistoryListByPid, reqbody, callback)
  },

  tempData: function (callback) {
    http.get(config.api.tempData, callback)
  },
  /**
   * 银行流水可编辑
   */
  bankwaterUpdate: function (reqbody, callback) {
    http.post(config.api.bankwaterUpdate, reqbody, callback)
  },
  /**
   * 查看资金端投后
   */
  fundAllafter: function (reqbody, callback) {
    http.post(config.api.fundAllafter, reqbody, callback)
  },
  /**
   * 查看资产端投后
   */
  assetAllafter: function (reqbody, callback) {
    http.post(config.api.assetAllafter, reqbody, callback)
  },
  /**
   * 查看资金端
   */
  getAllPool: function (reqbody, callback) {
    http.post(config.api.getAllPool, reqbody, callback)
  },
  /**
   * 查看自有资产
   */
  findByOid: function (reqbody, callback) {
    http.post(config.api.findByOid, reqbody, callback)
  },
  /**
   * 资产端管理导出
   */
  myAssetDown: function ($userId, callback) {
    http.get(config.api.myAssetDown + '?operator=' + $userId, callback)
  },
  /**
   * 资产投后导出
   */
  findByZCDown: function (callback) {
    http.get(config.api.findByZCDown, callback)
  },
  /**
   * 资金投后导出
   */
  findByZJDown: function (callback) {
    http.get(config.api.findByZJDown, callback)
  },
  /**
   * 资产投后资产查询接口
   */
  findAsset: function (reqbody, callback) {
    http.post(config.api.findAsset, reqbody, callback)
  },
  /**
   * 资产投后查看利息
   */
  findUns: function (reqbody, callback) {
    http.post(config.api.findUns, reqbody, callback)
  },
  /**
   * 资产投后完成对付
   */
  refundOrdf: function (reqbody, callback) {
    http.post(config.api.refundOrdf, reqbody, callback)
  },
  /**
   * 获取区间图形数据
   */
  findView: function (startCreateDate, endCreateDate, callback) {
    http.get(config.api.findView + '?startCreateDate=' + startCreateDate + '&endCreateDate=' + endCreateDate, callback)
  },
  /**
   * 获取所有图形数据
   */
  findall: function (callback) {
    http.get(config.api.findall, callback)
  },
  /**
   * 付息追踪
   */
  findHistoryPay: function (reqbody, callback) {
    http.post(config.api.findHistoryPay, reqbody, callback)
  },
  /**
   * 核审端详情
   */
  refuse: function (reqbody, callback) {
    http.post(config.api.refuse, reqbody, callback)
  },
  /**
   * 删除非标资产附件
   */
  deleteUploadFile: function (reqbody, callback) {
    http.post(config.api.deleteFile, reqbody, callback)
  },
  /**
   * 资产复审删除
   */
  giveup: function (reqbody, callback) {
    http.post(config.api.giveup, reqbody, callback)
  },
  /**
   * 提交意见反馈
   */
  giveFeedback: function (reqbody, callback) {
    http.post(config.api.giveFeedback, reqbody, callback)
  },
  /**
   * 资金端退款
   */
  backAsset: function (reqbody, callback) {
    http.post(config.api.backAsset, reqbody, callback)
  },
  /**
   * 资产日历
   */
  findCalendar: function (reqbody, callback, failure) {
    http.post(config.api.findCalendar, reqbody, callback, failure)
  },
  /**
   * 付息提醒
   */
  findPaymentDescOrAsc: function (reqbody, callback, failure) {
    http.post(config.api.findPaymentDescOrAsc, reqbody, callback, failure)
  },
  /**
   * 添加联系人
   */
  addContacts: function (reqbody, callback, failure) {
    http.post(config.api.addContacts, reqbody, callback, failure)
  },
  /**
   * 新建分组
   */
  addGroup: function (params, callback, failure) {
    http.post(config.api.addGroup, params, callback, failure)
  },
  /**
   * 所有联系人
     */
  getAllContacts: function (callback) {
    http.post(config.api.getAllContacts, callback)
  },
  /**
   * 获取所有分组
   */
  getAllGroup: function (callback) {
    http.post(config.api.getAllGroup, callback)
  },
  /**
   * 修改联系人信息
   */
  getContactsUpdate: function (params, callback, failure) {
    http.post(config.api.getContactsUpdate, params, callback, failure)
  },
  /**
   * 根据组Id，获取内容
   */
  getContByGroup: function (groupOid, callback, failure) {
    http.get(config.api.getContByGroup + '?opeOid=&groupOid=' + groupOid, callback, failure)
  },
  /**
   * 删除联系人
   */
  deleteContacts: function (oid, callback, failure) {
    http.get(config.api.deleteContacts + '?oid=' + oid, callback, failure)
  },
  /**
   * 更新组内容
   */
  updateGroup: function (params, callback, failure) {
    http.post(config.api.updateGroup, params, callback, failure)
  },
  /**
   * 删除组
   */
  deleteGroup: function (oid, callback, failure) {
    http.get(config.api.deleteGroup + '?oid=' + oid, callback, failure)
  },
  /**
   * 首字母显示联系人
   */
  queryAllList: function (callback) {
    http.post(config.api.queryAllList, callback)
  },
  /**
   * 查询常用联系人
   */
  querycommon: function (callback) {
    http.post(config.api.querycommon, callback)
  },
  /**
   * 新增费用方
   */
  addCostInfo: function (reqbody, callback) {
    http.post(config.api.addCostInfo, reqbody, callback)
  },
  /**
   * 费用详情
   */
  costDetail: function (params, callback) {
    http.post(config.api.costDetail, params, callback)
  },
  /**
   * 用户注册
   */
  createUser: function (params, success, failure) {
    http.post(config.api.createUser, params, success, failure)
  },
  /**
   * 发送确认邮箱
   */
  sendActive: function (params, callback) {
    http.post(config.api.sendActive, params, callback)
  },
  /**
   * 注册成功-确认
   */
  active: function (params, success, failure) {
    http.post(config.api.active, params, success, failure)
  },
  /**
   * 账户认证
   */
  certification: function (params, success, failure) {
    http.post(config.api.certification, params, success, failure)
  },
  /**
   * 获取所属行业
   */

  industry: function (callback) {
    http.get(config.api.industry, callback)
  },
   /**
   * 删除费用
   */
  deleteCost: function (params, callback) {
    http.post(config.api.deleteCost, params, callback)
  },
  /**
   * 编辑费用
   */
  updateCostInfo: function (reqbody, callback) {
    http.post(config.api.updateCostInfo, reqbody, callback)
  },
  /**
   * 编辑当日费用
   */
  updateCostDay: function (params, callback) {
    http.post(config.api.updateCostDay, params, callback)
  },
  /**
   * 导出费用信息
   */
  downCostInfo: function (cid, name, callback) {
    http.get(config.api.downCostInfo + '?cid=' + cid + '&name=' + name, callback)
  },
  /**
   * 查询费用走势
   */
  queryCostTrend: function (params, callback) {
    http.post(config.api.queryCostTrend, params, callback)
  },
  /*
   * 资产端请求
   */
  assetMatching: function (oid, callback) {
    http.post(config.api.assetMatching + '?assetOid=' + oid, callback)
  },
  /**
   * 资产端-交易列表
   */
  assetListMatching: function (callback) {
    http.post(config.api.assetListMatching, callback)
  },
  /**
   * 资金端-交易查询
   */
  fundMatching: function (callback) {
    http.post(config.api.fundMatching, callback)
  },
  /**
  * 发送邮箱验证
  */
  findPass: function (email, success, farlure) {
    http.post(config.api.findPass, email, success, farlure)
  },
  /**
   * 发送邮箱验证成功
   */
  findPsuccess: function (reqbody, callback) {
    http.post(config.api.findPsuccess, reqbody, callback)
  },
  /**
   * 找回密码验证邮箱
   */
  verifyPass: function (params, success, farlure) {
    http.post(config.api.verifyPass, params, success, farlure)
  },
  /**
   * 找回密码重置密码
   */
  retrievePass: function (params, callback) {
    http.post(config.api.retrievePass, params, callback)
  },
  /**
   * 返回登录信息
   */
  loginInfo: function (callback) {
    http.get(config.api.loginInfo, callback)
  },
  /**
   * 资产详情页获取资产交易步骤
   */
  assetSearch: function (matchingOid, filable, callback) {
    http.post(config.api.assetSearch + '?matchingOid=' + matchingOid + '&filable=' + filable, callback)
  },
  /**
   * 资金详情
   */
  fundDetail: function (oid, matchingOid, callback) {
    http.get(config.api.fundDetail + '?oid=' + oid + '&matchingOid=' + matchingOid, callback)
  },
  /**
   * 资金端操作步骤
   */
  fundLog: function (matchingOid, fileable, callback) {
    http.get(config.api.fundLog + '?matchingOid=' + matchingOid + '&fileable=' + fileable, callback)
  },
  /**
   * 获取资金端步骤 关注人，协办人
   */
  fundPerson: function (matchingOid, gzr, xbr, callback) {
    http.get(config.api.fundLog + '?matchingOid=' + matchingOid + '&fileable = false' + '&gzr=' + gzr + '&xbr=' + xbr, callback)
  },
   /**
   * 资金首页列表查询
   */
  allFundlist: function (callback) {
    http.post(config.api.allFundlist, callback)
  },
   /**
   * 导出收益率
   */
  assetPooldown: function (reqbody, callback) {
    http.get(config.api.assetPooldown + '?pid=' + reqbody.pid + '&uid=' + reqbody.uid + '&poolName=' + reqbody.poolName, callback)
  },
  /**
   * 资产详情3
   */
  assetDetail3: function (oid, callback) {
    http.get(config.api.assetdetail2 + '?oid=' + oid, callback)
  }
}
