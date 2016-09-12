/**
 * 全局配置模块，主要用于配置api等信息
 */
// var HOST = 'http://cloud.guohuaigroup.com'
// var HOST = 'http://192.168.0.105'
var HOST = 'http://api.guohuaigroup.com'
var local = '127.0.0.1'
var logopic = 'yupload/logo.png'
var config = {
  api: {
    logopic: logopic,
    downhost: HOST,
    local: local,
    login: HOST + '/operate_cloud/admin/login',                                       // 登录
    logout: HOST + '/operate_cloud/admin/logout',                                     // 退出登录
    findPass: HOST + '/operate_cloud/admin/amp/verifyEmail',                          // 发送邮件验证
    findPsuccess: HOST + '/platform/amp/emailLog/sendRetrieve',                 // 发送邮件验证成功
    verifyPass: HOST + '/operate_cloud/admin/amp/verityPass',                         // 找回密码验证邮箱
    retrievePass: HOST + '/operate_cloud/admin/retrievePass',                         // 找回密码重置密码
    ampInfo: HOST + '/operate_cloud/admin/amp/info',                                  // 获取登录用户信息
    fileUpload: HOST + '/yup',                                                  // 文件上传
    filePkg: HOST + '/platform/amp/file/pkg',                                   // 批量下载预打包
    fileDl: HOST + '/platform/amp/file/dl',                                     // 批量下载
    getAmp: HOST + '/platform/amp/matching/get',                                // 资金端-根据oid获取资产明细
    fundB4invest: HOST + '/platform/amp/matching/list/fund/b4invest',           // 资金端-投前交易查询
    fundInvesting: HOST + '/platform/amp/matching/list/fund/investing',         // 资金端-投中交易查询
    search: HOST + '/platform/amp/asset/msearch',                               // 资金端-找资产
    resetPassWord: HOST + '/operate_cloud/admin/reset/password',                      // 修改密码
    test: HOST + '/platform/amp/matching/log/search',                              // 测试
    readTest: HOST + '/platform/amp/asset/read',                                   // 测试
    assetDetail: HOST + '/platform/amp/matching/log/search',                    // 资产详情
    readMessage: HOST + '/platform/amp/message/rela/reads',                     //  消息 已读操作
    getMessage: HOST + '/platform/amp/message/rela/search',                     // 显示消息
    findPay: HOST + '/platform/amp/investmentAfter/unStd/findPay',              // 资金端 历史兑付信息
    getRate: HOST + '/platform/amp/investmentAfter/assetPool/getAllPoolDetails',     // 收益率管理
    getUnRead: HOST + '/platform/amp/message/rela/unread',                      // 获取未读消息数量
    getAssetList: HOST + '/platform/amp/matching/list/asset/fundbystage',       // 获取资产信息 废弃接口
    getAssetDetail: HOST + '/platform/amp/matching/log/search',                   // 获取资产端步骤信息
    getMaxDate: HOST + '/platform/amp/asset/getMaxVolumeDate',                   // 获取资产端投资日
    getAssetCount: HOST + '/platform/amp/asset/assetcount',                     // 获取资产规模
    addContacts: HOST + '/platform/amp/contact/add',                          // 新建联系人
    addGroup: HOST + '/platform/amp/contactgroup/add',                             // 新建分组
    getAllContacts: HOST + '/platform/amp/contact/queryall',                    // 所有联系人
    getAllGroup: HOST + '/platform/amp/contactgroup/queryall',                  // 所有分组
    getContactsUpdate: HOST + '/platform/amp/contact/update',                   // 修改联系人信息
    getContByGroup: HOST + '/platform/amp/contact/querybyope',                  // 根据组id获取组内容
    deleteContacts: HOST + '/platform/amp/contact/del',                         // 删除联系人
    updateGroup: HOST + '/platform/amp/contactgroup/update',                  // 更新组内容
    deleteGroup: HOST + '/platform/amp/contactgroup/del',                       // 删除组
    queryAllList: HOST + '/platform/amp/contact/queryalllist',                  // 首字母显示所有联系人
    querycommon: HOST + '/platform/amp/contact/querycommon',                    // 查询常用联系人
    createUser: HOST + '/operate_cloud/admin/ amp/create',                            // 注册新用户
    active: HOST + '/operate_cloud/admin/amp/active',                                 // 注册成功
    sendActive: HOST + '/platform/amp/emailLog/sendActive',                      // 发送激活邮件
    certification: HOST + '/operate_cloud/admin/amp/certification',                   // 会员认证
    industry: HOST + '/platform/amp/dict?specs=INDUSTRY_INVOLVED',              // 所属行业
    loginInfo: HOST + '/operate_cloud/admin/amp/loginInfo',                           // 获取登录信息
    fundDetail: HOST + '/platform/amp/asset/funddetail',                        // 获取资金详情
    fundLog: HOST + '/platform/amp/matching/log/search',                               // 资金端操作步骤

    getAsset: HOST + '/platform/amp/asset/read',                                // 资产端-根据oid获取资产明细
    saveAsset: HOST + '/platform/amp/asset/save',                               // 资产端-添加资产
    updateAsset: HOST + '/platform/amp/asset/update',                           // 资产端-修改资产
    closeAsset: HOST + '/platform/amp/asset/close',                             // 资产端-归档资产
    startAsset: HOST + '/platform/amp/asset/start',                             // 资产端-开始售卖资产
    pauseAsset: HOST + '/platform/amp/asset/pause',                             // 资产端-停止售卖资产
    setupAsset: HOST + '/platform/amp/asset/setup',                             // 资产端-项目成立
    failAsset: HOST + '/platform/amp/asset/fail',                               // 资产端-项目失败
    setcheckAsset: HOST + '/platform/amp/asset/setcheck',                       // 资产端-判断项目是否可以成立或失败
    assetListB4invest: HOST + '/platform/amp/asset/list/b4invest',              // 资产端-投前列表
    assetListInvesting: HOST + '/platform/amp/asset/list/investing',            // 资产端-投中列表
    assetB4invest: HOST + '/platform/amp/matching/list/asset/b4invest',         // 资产端-投前交易查询
    assetInvesting: HOST + '/platform/amp/matching/list/asset/investing',       // 资产端-投中交易查询
    flow: HOST + '/platform/amp/matching/flow/do',                              // 交易工作流
    getGmData: HOST + '/platform/amp/matching/pin/gm',                          // 获取管理人数据
    getBankData: HOST + '/platform/amp/matching/pin/bank',                      // 获取托管行数据
    getAudit: HOST + '/platform/amp/asset/list/audit',                          // 获取审核状态资产

    mcorporate: HOST + '/platform/amp/asset/push/mcorporate',                   // 资金端-获取机构列表
    dict: HOST + '/platform/amp/dict',                                          // 资金端-获取 资产类型/等

    saveAssetPool: HOST + '/platform/amp/investmentAfter/assetPool/save',       // 资金端-投后-新增资产池
    updateAssetPool: HOST + '/platform/amp/investmentAfter/assetPool/update',   // 资金端-投后-修改资产池
    getAllAssetPool: HOST + '/platform/amp/investmentAfter/assetPool/getAll',   // 资金端-投后-获取用户底下全部资产池
    getChangeList: HOST + '/platform/amp/investmentAfter/assetPool/getChangeList', // 资金端-投后-获取资产池变动记录
    getStatistics: HOST + '/platform/amp/investmentAfter/assetPool/getStatistics', // 资金端-投后-获取用户资产统计数据
    getStatisticsByPid: HOST + '/platform/amp/investmentAfter/assetPool/getStatisticsByPid', // 资金端-投后-按资产池获取用户资产图表数据
    saveSelfAsset: HOST + '/platform/amp/investmentAfter/unStd/saveSelfAsset',  // 资金端-投后-新增非标资产
    findSelfAssetByOid: HOST + '/platform/amp/investmentAfter/unStd/findByOid', // 资金端-投后-查询单条非标资产
    updateSelfAsset: HOST + '/platform/amp/investmentAfter/unStd/updateSelfAsset', // 资金端-投后-修改非标资产
    deleteUSAsset: HOST + '/platform/amp/investmentAfter/unStd/deleteUSAsset',  // 资金端-投后-删除非标资产
    getAssetInfo: HOST + '/platform/amp/tradFund/getAssetInfo',                 // 资金端-投后-获取标准资产信息
    saveStdAsset: HOST + '/platform/amp/stdAsset/save',                         // 资金端-投后-新增标准资产
    getStdAssetStatementList: HOST + '/platform/amp/stdAssetStatement/list',    // 资金端-投后-获取标准资产详情
    delStdAsset: HOST + '/platform/amp/stdAsset/del',                           // 资金端-投后-删除标准资产
    findPageStdAsset: HOST + '/platform/amp/stdAsset/findPage',                 // 资金端-投后-标准资产分页查询
    saveBank: HOST + '/platform/amp/bank/save',                                 // 资金端-投后-新增银行
    updateBank: HOST + '/platform/amp/bank/update',                             // 资金端-投后-修改银行
    findBankStatement: HOST + '/platform/amp/bankStatement/findList',           // 资金端-投后-银行详情流水
    getPayment: HOST + '/platform/amp/investmentAfter/unStd/getPayment',        // 资金端-投后-获取非标本息兑付列表
    getPaymentList: HOST + '/platform/amp/investmentAfter/unStd/getPaymentList', // 资金端-投后-获取资产池已兑付资产列表
    updatePayment: HOST + '/platform/amp/investmentAfter/unStd/updatePayment',  // 资金端-投后-更新非标本息兑付
    saveSs: HOST + '/platform/amp/stdAssetSSManage/save',                       // 资金端-投后-申赎管理
    getSsList: HOST + '/platform/amp/stdAssetSSManage/list',                    // 资金端-投后-申赎历史流水
    getHistoryListByPid: HOST + 'platform/amp/investmentAfter/assetPool/getHistoryListByPid', // 资金端-投后-获取资产池历史列表

    tempData: HOST + '/platform/amp/temp/data',
    bankwaterUpdate: HOST + '/platform/amp/bankStatement/update',                           // 银行流水 amount: 金额  yield:收益率
    bankhistory: HOST + '/platform/amp/investmentAfter/unStd/findPay',                      // 查看历史兑付
    fundAllafter: HOST + '/platform/amp/investmentAfter/my/findZJPage',                     // 查看资金端投后
    assetAllafter: HOST + '/platform/amp/investmentAfter/my/findZCPage',                    // 查看资产端投后
    findHistoryPay: HOST + '/platform/amp/investmentAfter/unStd/findHistoryPay',            // 付息追踪
    getAllPool: HOST + '/platform/amp/investmentAfter/my/getAllPool',                       // 资产池结果集
    findByOid: HOST + '/platform/amp/investmentAfter/unStd/findByOidFormat',                // 获取自有资金
    myAssetDown: HOST + '/platform/amp/investmentAfter/my/myAssetDown',                     // 资产管理端导出接口
    findByZCDown: HOST + '/platform/amp/investmentAfter/my/findByZCDown',                   // 资产投后导出
    findByZJDown: HOST + '/platform/amp/investmentAfter/my/findByZJDown',                   // 资金投后导出
    findAsset: HOST + '/platform/amp/investmentAfter/my/findAsset',                         // 资产端投后管理
    findUns: HOST + '/platform/amp/investmentAfter/my/findUns',                             // 资产端查看利息
    refundOrdf: HOST + '/platform/amp/investmentAfter/my/refundOrdf',                       // 资产端完成对付
    findView: HOST + '/platform/amp/overview/findView',                                     // 资产端完成对付
    findall: HOST + '/platform/amp/overview/findall',                                       // 资产端图形
    refuse: HOST + '/platform/amp/asset/refuse',                                            // 核审端详情
    deleteFile: HOST + '/platform/amp/investmentAfter/file/delete',                         // 非标资产附件删除
    giveup: HOST + '/platform/amp/asset/giveup',                                            // 资产端复审删除
    giveFeedback: HOST + '/platform/amp/feedback/create',                                   // 提交意见反馈
    backAsset: HOST + '/platform/amp/investmentAfter/unStd/backAsset',                      // 资金端退款
    findCalendar: HOST + '/platform/amp/investmentAfter/calendar/findCalendar',                   // 资产日历
    findPaymentDescOrAsc: HOST + '/platform/amp/investmentAfter/calendar/findPaymentDescOrAsc',    // 付息提醒

    addCostInfo: HOST + '/platform/amp/investmentAfter/cost/save',                // 新增费用方
    costDetail: HOST + '/platform/amp/investmentAfter/cost/detail',               // 费用详情
    deleteCost: HOST + '/platform/amp/investmentAfter/cost/del',                  // 删除费用
    updateCostInfo: HOST + '/platform/amp/investmentAfter/cost/update',           // 编辑费用
    updateCostDay: HOST + '/platform/amp/investmentAfter/cost/updateHistory',     // 编辑当日费用
    downCostInfo: HOST + '/platform/amp/investmentAfter/cost/downCost',           // 导出费用信息
    queryCostTrend: HOST + '/platform/amp/investmentAfter/cost/findErc',          // 查询费用走势
    assetMatching: HOST + '/platform/amp/matching/list/asset/matching',           // 资产端详情请求
    assetListMatching: HOST + '/platform/amp/asset/list/matching',                // 资产端列表请求
    fundMatching: HOST + '/platform/amp/matching/list/fund/matching',          // 资金端列表请求
    assetdetail2: HOST + '/platform/amp/asset/assetdetail',                        // 资产端获取资产详情
    assetSearch: HOST + '/platform/amp/matching/log/search',                       // 资产详情页获取资产交易步骤
    allFundlist: HOST + '/platform/amp/matching/list/fund/allfundlist',          // 资金端列表请求
    assetPooldown: HOST + '/platform/amp/investmentAfter/assetPool/down'        // 收益详情导出
  },
  // 总状态
  stages: {
    b4Invest: 'B4INVEST'          // 投前撮合
  },
  // 交易动作
  events: {
    fundStart: 'FUND_START',                                  // 资金-意向
    fundPrepareMoreinfo: 'FUND_PREPARE_MOREINFO',             // 资金-待提交过会-更多资料
    assetPrepareSendinfo: 'ASSET_PREPARE_SENDINFO',           // 资产-待提交过会-补充材料
    fundPrepareConference: 'FUND_PREPARE_CONFERENCE',         // 资金-提交过会
    fundConferenceMoreinfo: 'FUND_CONFERENCE_MOREINFO',       // 资金-待过会-更多资料
    assetConferenceSendinfo: 'ASSET_CONFERENCE_SENDINFO',     // 资产-待过会-补充材料
    fundConferenceCfmvolume: 'FUND_CONFERENCE_CFMVOLUME',     // 资金-发起预约
    fundConferenceAdv: 'FUND_CONFERENCE_ADV',                 // 资金-通知投顾
    fadvCfmvolumeRegu: 'FADV_CFMVOLUME_REGU',                 // 投顾-发起预约
    assetCfmvolumeRegu: 'ASSET_CFMVOLUME_REGU',               // 资产端-调整额度
    fundCfmvolumeRegu: 'FUND_CFMVOLUME_REGU',                 // 资金端/投顾-再次预约
    assetCfmvolumeCfm: 'ASSET_CFMVOLUME_CFM',                 // 资产端-确认额度
    assetSendagmSendinfo: 'ASSET_SENDAGM_SENDINFO',           // 资产端-发送合同给资金端
    fundCfmagmMoreinfo: 'FUND_CFMAGM_MOREINFO',               // 资金端/投顾-合同反馈
    assetCfmagmSendinfo: 'ASSET_CFMAGM_SENDINFO',             // 资产端-确认合同
    fundCfmagmOnline: 'FUND_CFMAGM_ONLINE',                   // 资金端/投顾-线上指令
    fundCfmagmOffline: 'FUND_CFMAGM_OFFLINE',                 // 资金端/投顾-线下购买
    fundInvestcmdOffline: 'FUND_INVESTCMD_OFFLINE',					  // 资金端/投中-线下购买
    fundInvestcmdFeedbackOffkine: 'FUND_INVESTCMD_FEEDBACK_OFFLINE', // 资金断/投中-再次线下购买
    fundOfflineCfmreceipt: 'FUND_OFFLINE_CFMRECEIPT',         // 资金端-确认线下购买
    fundInvestcmdSendinfo: 'FUND_INVESTCMD_SENDINFO',         // 资金端-发送投指
    fundInvestcmdFeedbackSendinfo: 'FUND_INVESTCMD_FEEDBACK_SENDINFO',  // 资金端-再次发送投指
    gmTranscmdFeedback: 'GM_TRANSCMD_FEEDBACK',               // 资管端-投指反馈
    gmTranscmdAgmFeedback: 'GM_TRANSCMD_AGM_FEEDBACK',        // 资管端-合同反馈
    assetInvestcmdSendagm: 'ASSET_INVESTCMD_SENDAGM',         // 资产端-发送合同给资管端
    gmTranscmdTranscmd: 'GM_TRANSCMD_TRANSCMD',               // 资管端-发送划款指令
    bankTranscmdCfmtrans: 'BANK_TRANSCMD_CFMTRANS',           // 托管行-确认划款
    fundCfmtranscfmreceipt: 'FUND_CFMTRANS_CFMRECEIPT',       // 资金端-确认购买
    assetCfmreceipt: 'ASSET_CFMRECEIPT',                      // 资产端-确认收款

    fundPrepareTerminate: 'FUND_PREPARE_TERMINATE',           // 资金端-待提交过会-中止
    assetPrepareTerminate: 'ASSET_PREPARE_TERMINATE',         // 资产端-意向-中止
    assetPrepareTerminate2: 'ASSET_PREPARE_TERMINATE_2',      // 资产端-资金待提交过会-中止
    fundConferenceTerminate: 'FUND_CONFERENCE_TERMINATE',     // 资金端-待过会-中止
    assetConferenceTerminate: 'ASSET_CONFERENCE_TERMINATE',   // 资产端-过会中-中止
    assetConferenceTerminate2: 'ASSET_CONFERENCE_TERMINATE_2', // 资产端-资金待过会-中止
    fundCfmvolumeTerminate: 'FUND_CFMVOLUME_TERMINATE',       // 资金端/投顾-待确认额度-中止
    assetCfmvolumeTerminate: 'ASSET_CFMVOLUME_TERMINATE',     // 资产端-待确认额度-中止
    assetCfmvolumeTerminate2: 'ASSET_CFMVOLUME_TERMINATE_2',  // 资产端-资金待确认额度-中止
    assetSendagmTerminate: 'ASSET_SENDAGM_TERMINATE',         // 资产端-待发送合同-中止
    assetCfmagmTerminate: 'ASSET_CFMAGM_TERMINATE',           // 资产端-待确认合同-中止
    assetCfmagmTerminate2: 'ASSET_SENDAGM_TERMINATE_2',       // 资产端-资金待确认合同-中止
    fundCfmagmTerminate: 'FUND_CFMAGM_TERMINATE',             // 资金端/投顾-待确认合同-中止
    fundInvestcmdTerminate: 'FUND_INVESTCMD_TERMINATE',       // 资金端/投顾-待发送指令-中止
    fundCfmofflineTerminate: 'FUND_CFMOFFLINE_TERMINATE',     // 资金端-确认线下购买-中止
    fundBeforeTerminateFinish: 'FUND_BEFORE_TERMINATE_FINISH',      // 资金端-投前归档
    fundInvestingFinish: 'FUND_INVESTING_TERMINATE_FINISH',   // 资金端-投中归档
    fundTerminateFinish: 'ASSET_TERMINATE_FINISH',            // 资产端-归档
    fundInvestcmdFeedbackTerminate: 'FUND_INVESTCMD_FEEDBACK_TERMINATE',    // 资金端-投中后再次确认中止

    fundPreparefundTerminate: 'FUND_PREPAREFUND_TERMINATE_2',  // 资金端-意向中止
    fundConferenceTerminate2: 'FUND_CONFERENCE_TERMINATE_2',   // 资金端-过会中止
    fundCfmvolumeTerminate2: 'FUND_CFMVOLUME_TERMINATE_2',     // 资金端-待确认额度中止
    fundSendagmTerminate: 'FUND_SENDAGM_TERMINATE',            // 资金端-待发送合同
    fundCfmagmTerminate2: 'FUND_CFMAGM_TERMINATE_2',            // 资金端-待确认合同中止

    fundCfmvolumeStart: 'FUND_CFMVOLUME_1',           // 资金端-发起预约-new
    fundCfmvolumeconfirm: 'FUND_CFMVOLUME_AGAIN_OK',           // 资金端-确认预约-new
    fundCfmvolumeTerminateNew: 'FUND_CFMVOLUME_AGAIN_TERMINATE',           // 资金端-确认预约-new
    fundCfmvolumeTerminate1: 'FUND_CFMVOLUME_TERMINATE_1',           // 资金端-确认预约-new
    assetTrantypeOffline: 'FUND_TRANTYPE_OFFLINE',           // 资金端-线下购买-new
    fundInvestcmdReturn: 'FUND_INVESTCMD_RETURN',           // 资金端-线上返回-new
    fundCfmofflineReturn: 'FUND_CFMOFFLINE_RETURN',           // 资金端-线下返回-new
    fundCfmvolumeMoreinfo: 'FUND_CFMVOLUME_MOREINFO',           // 资金端-线下返回-new
    fundCfmvolumeAgainreturn: 'FUND_CFMVOLUME_AGAIN_RETURN',           // 资金端-反馈-new
    assetCfAgTerminate: 'ASSET_CFMVOLUME_AGAIN_TERMINATE',     // 资产端-归档new
    assetCfmvolumeTerminate1: 'ASSET_CFMVOLUME_TERMINATE_1'     // 资产端-中止new
  },
  // 交易状态
  matchStages: {
    start: 'START',                                   // 交易开始
    fundPrepare: 'FUND_PREPARE',                      // 资金端-待提交过会
    assetPrepare: 'ASSET_PREPARE',                    // 资产端-意向
    fundConference: 'FUND_CONFERENCE',                // 资金端-待过会
    assetConference: 'ASSET_CONFERENCE',              // 资产端-过会中
    assetCfmvolume: 'ASSET_CFMVOLUME',                // 资产端-待确认额度
    fadvCfmvolume: 'FADV_CFMVOLUME',                  // 投顾-待发送额度
    fundCfmvolume: 'FUND_CFMVOLUME',                  // 资金端/投顾-待确认额度
    assetSendagm: 'ASSET_SENDAGM',                    // 资产端-待发送合同
    fundCfmagm: 'FUND_CFMAGM',                        // 资金端/投顾-待确认合同
    assetCfmagm: 'ASSET_CFMAGM',                      // 资产端-待确认合同
    fundInvestcmd: 'FUND_INVESTCMD',                  // 资金端/投顾-待发送投指
    fundInvestcmdFeedback: 'FUND_INVESTCMD_FEEDBACK', // 资金端/投顾-指令反馈后发送投指
    assetInvestcmd: 'ASSET_INVESTCMD',                // 资产端-待发送投指
    fundCfmoffline: 'FUND_CFMOFFLINE',                // 资金端-待确认线下购买
    gmTranscmd: 'GM_TRANSCMD',                        // 资管端-待发送划款指令
    bankTranscmd: 'BANK_TRANSCMD',                    // 托管行-发送划款指令
    fundCfmtrans: 'FUND_CFMTRANS',                    // 资金端-待确认划款
    complete: 'COMPLETE',                             // 资金端-投后阶段
    assetCfmtrans: 'ASSET_CFMTRANS',                  // 资产端-确认收款
    fundBeforeTerminate: 'FUND_BEFORE_TERMINATE',     // 资金端-投前中止
    fundInvestingTerminate: 'FUND_INVESTING_TERMINATE', // 资金端-投中中止
    AssesTerminate: 'ASSET_TERMINATE',                // 资产端-中止
    FundCFAgain: 'FUND_CFMVOLUME_AGAIN',               // 资金端-确认预约new
    FundTranType: 'FUND_TRANTYPE'              // 资金端-交易方式new
  },
  // router实例，main.js中赋值
  router: {},
  const: {
    STICKER_HEIGHT: 195,                              // sticker高度
    PIECE_WIDTH: 150                                  // assetStateboard里piece宽度
  }
}

module.exports = config
