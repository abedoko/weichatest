<template>
  <div class="body">
    <div class="registe" v-if="registeBox">
      <div class="reg_tips">账户类型一经提交，不能修改，请谨慎选择</div>
      <div class="log_box reg_box mt10">
        <div class="input_line linebok_p">
          <div class="log_left"><span class="mark_required">账户类型</span></div>
          <div class="log_right type_choice">
            <label for="fund"><input id="fund" type="radio" value="fun" name="amount" :checked="true" v-model="picked"/> 资金方</label>&nbsp;&nbsp;
            <label for="asset"><input id="asset" type="radio" value="asset" name="amount" v-model="picked"/> 资产方</label>
          </div>
        </div>
        <div class="input_line linebok_p">
          <div class="log_left"><span class="mark_required">企业邮箱</span></div>
          <div class="log_right">
            <input type="email" placeholder="请输入您的企业邮箱" v-model="regForm.account.value" onbeforepaste="clipboardData.setData('text', clipboardData.getData('text').replace(/[^/a-zA-Z/u4E00-/u9FA5]/g,''))">
          </div>
          <poptips v-show="emailError"
                   :msg="emailInfo"
                   placement="top-left"
                   class="login-pop7 p-msg7 pop-msg7">
          </poptips>
        </div>
        <div class="input_line linebok_p">
          <div class="log_left"><span class="mark_required">企业名称</span></div>
          <div class="log_right"><input type="text" placeholder="请输入" v-model="regForm.name.value"></div>
          <poptips v-show="comName"
                   :msg="comInfo"
                   placement="top-left"
                   class="login-pop7 p-msg7 pop-msg7">
          </poptips>
        </div>
        <div class="input_line linebok_p ">
          <div class="log_left"><span class="mark_required">密码</span></div>
          <div class="log_right"><input type="password" placeholder="请输入密码" v-model="regForm.password.value" maxlength="20"></div>
          <poptips v-show="pass"
                   :msg="passInfo"
                   placement="top-left"
                   class="login-pop8 p-msg8 pop-msg8">
          </poptips>
        </div>
        <div class="input_line linebok_p borderb1ddd borderb1ddd">
          <div class="log_left"><span class="mark_required">确认密码</span></div>
          <div class="log_right"><input type="password" placeholder="确认密码" v-model="regForm.confirmPass.value" maxlength="20"></div>
          <poptips v-show="cofPass"
                   :msg="cofInfo"
                   placement="top-left"
                   class="login-pop7 p-msg7 pop-msg7">
          </poptips>
        </div>
        <div class="checkbox">
          <input id="check1" class="" type="checkbox" :checked="false" v-model="ischecked"/> <label for="check1">我已阅读并同意 <a href="#!/register/agreement">国槐金融平台使用协议</a></label><!--@click="$route.router.go('/register/1')"-->
        </div>
        <div class="tc mt20">
          <button class="or_btn width94b ra2" @click="save" :disabled="!ischecked">
            提交
          </button>
        </div>
      </div>
    </div>
    
    <!--身份验证-->
    <div class="post_email" v-if="postEmailBox">
      <div class="pm_body borderb1ddd">
        <p class="img_mark pt50"><img src="../../assets/images/lock.png" alt="key"></p>
        <p class="f14 pt30 color999 plr5b">我们已向您的邮箱发送了验证链接，点击邮件中的验证链接，即可完成账户的注册。</p>
        <p class="pt50 pb30">
          您的注册邮箱<br>
          <span>{{regForm.name.value}}</span>
        </p>
        <p class="remail">
          未收到验证邮件？<a href="#" class="underline">重新发送</a>
        </p>
      </div>
      <div class="tc mt20">
        <button class="or_btn width94b ra2" @click="$route.router.go('/login')">
          已验证？现在登录
        </button>
      </div>
    </div>
    <!--协议-->
    <div class="service" v-if="!registeBox && !postEmailBox">
        <div style="margin: 0 auto;color: #222">
            <p class="se-title" align='center'>国槐金融云平台服务协议</p>
            <span style="float: right; font-size: 14px" @click="$route.router.go('/register')">✕</span>
            <div style="margin-top: 30px;line-height: 24px">
                <p>尊敬的用户，欢迎您使用国槐金融服务！</p>
                <p>本协议是您与国槐金融资产云平台（简称“本站”，网址：http://
                www.guohuaigroup.com）所有者上海国槐金融信息服务有限公司
                （以下简称为"国槐金融"）之间就云平台资产服务等相关事宜所订立的契约，请您仔细阅读本协议，
                在您勾选"已阅读并同意国槐金融云平台服务协议"并提交注册后，本协议即构成对双方有约束力的法律文件。
                如果您不同意本服务条款的任何内容，请不要进行后续操作。</p>
            </div>


            <div class="div-height">
                <p class="div-title">本站服务条款的确认和接纳</p>
                <p>
                    1.  本站的各项在线服务的所有权和运作权归国槐金融所有。用户同意所有注册协议条款并完成注册程序，才能成为本站的正式用户。
                    用户确认：本协议条款是处理双方权利义务的契约，始终有效，法律另有强制性规定或双方另有特别约定的，依其规定。
                </p>
                <p>
                    2.  用户点击同意本协议，即视为用户确认自己具有享受在线购买资产及享受服务等相应的权利和行为能力，能够独立承担法律责任。
                </p>
                <p>
                    3.  国槐金融保留在中华人民共和国大陆地区法施行之法律允许的范围内独自决定拒绝服务、关闭用户账户、清除或编辑内容或取消订单的权利。
                </p>
            </div>


            <div class="div-height" >
                <p class="div-title">
                     协议内容和效力
                 </p>
                <p>
                    1.  本协议内容包括本协议正文及所有国槐金融已经发布或将来可能发布的各项政策、规则、
                    声明、通知、警示、提示、说明（以下简称“规则”）。前述规则为本协议不可分割的组成部分，与协议正文具有同等法律效力。
                </p>

                <p>
                    2.  国槐金融有权根据需要不时制订、修改本协议及相关规则，变更后的协议和规则一经公布，立即取代原协议及规则并自动生效。
                    如您不同意相关变更，应当立即停止使用云平台服务，如您继续使用云平台服务或进行任何网站活动，即表示您已接受经修订的协议和规则。
                </p>

                <p>
                    3.  客户与云平台基于交易合作签署的其他书面协议与本协议不一致的，以双方书面签署的协议为准。
                </p>
            </div>

            <div class="div-height">
                <p class="div-title">
                    本站服务
                </p>
                <p>
                    国槐金融资产云平台通过互联网依法为用户提供资产信息等服务，
                    用户在完全同意本协议及本站规定的情况下，方有权使用本站的相关服务。
                </p>
            </div>

            <div class="div-height">
                <p class="div-title">
                    用户资料
                </p>
                <p>
                    1．  用户应本着个人或企业诚信向本站提供注册资料，用户同意其提供的注册资料真实、准确、完整、合法有效，用户注册资料如有变动的，应及时更新其注册资料。如果用户提供的注册资料不合法有效、
                    不真实、不准确、不详尽的，用户需承担因此引起的相应责任及后果，并且国槐金融保留终止用户使用云平台各项服务的权利。
                </p>
                <p>
                    2．  用户在本站进行浏览、预约、购买资产等活动时，涉及用户及企业通信地址、联系方式、
                    营业执照等隐私信息的，本站将予以严格保密，除非得到用户授权或法律另有规定，本站不会向外界披露用户及企业隐私信息。
                </p>
                <p>
                    3．  用户注册成功后，用户应谨慎合理的保存、使用其密码，并对账号和密码安全负全部责任。
                    用户若发现任何非法使用用户账号或存在安全漏洞的情况，请立即通知本站。否则，由于用户自身的疏忽而导致账号信息泄露等后果，由用户自行承担。
                </p>

                <p>
                    4．  用户同意，国槐金融拥有通过邮件、短信、站内信、电话等形式，向在本站注册、买卖资产的用户发送订单信息、促销活动等告知信息的权利。
                </p>
                <p>
                    5．  用户账号、密码使用权仅属于初始申请注册人，禁止赠与、借用、租用、转让或者售卖。
                    用户对以其账号进行的所有活动和事件负全责。用户若将在本站注册获得的账户给他人使用，则必须承担由此产生的全部责任，且实际使用人需承担连带责任。
                </p>
                <p>
                    6．  用户同意，国槐金融有权使用用户的注册信息、密码等信息，登录进入用户的注册账户，进行证据保全，包括但不限于公证、见证等。
                </p>
            </div>

            <div class="div-height">
                <p class="div-title">
                    认证会员
                </p>
                <p>
                    1．  为享有包括发布资产，撮合交易、在线收付款等更多的服务和平台操作功能，用户需要申请成为认证会员，首先需具备认证资格，您必须确保系依照中华人民共和国法律法规设立的合法组织，并具有在中华人民共和国境内取得工商经营主体资格，
                    并按云平台提示上传相应证件。如您没有前述主体资格，本站有权拒绝用户申请认证会员，据此造成的损失由您自行承担。
                </p>
                <p>
                    2．  在您按照国槐金融注册页面提示填写信息，阅读并同意本协议并完成全部注册程序，
                    您即为国槐金融企业账号；在您按照国槐金融认证页面上传符合要求的证件并经国槐金融审核通过后，您即为国槐金融认证后的企业账号。
                </p>
                <p>
                    3．  您在成功完成会员认证后，您可以通过国槐金融平台在线交易、发布资产信息、预约求购、下载资产材料等会员服务。
                </p>
                <p>
                    4．  您申请或认证会员时，您设置的企业信息不得侵犯或涉嫌侵犯他人合法权益。
                    如您连续12个月没有登录国槐金融及没有信息更新记录或实际使用国槐金融服务的行为，国槐金融保留对您中止或终止提供服务并注销账户的权利。
                </p>
            </div>

            <div class="div-height">
                <p class="div-title">
                    信息的修改
                </p>
                <p>您成为云平台认证会员之后，如企业的注册登记信息发生变更，您必须及时、主动联系云平台进行更新。
                    因您未及时更新，造成您不能享受相关服务的、或造成账号及密码泄露等所有责任由您自行承担。</p>
            </div>


            <div class="div-height">
                <p class="div-title">
                    用户依法言行义务
                </p>
                <p>
                    本协议依据国家相关法律法规规章制定，用户同意严格遵守以下义务：
                </p>
                <p>
                    1.  不得传输或发表：煽动抗拒、破坏宪法和法律、行政法规实施的言论，
                    煽动颠覆国家政权，推翻社会主义制度的言论，煽动分裂国家、破坏国家统一的言论，煽动民族仇恨、民族歧视、破坏民族团结的言论；
                </p>
                <p>
                    2.  从中国大陆向境外传输资料信息时必须符合中国有关法规；
                </p>
                <p>
                    3.  不得利用本站从事洗钱、窃取商业秘密、窃取个人信息等违法犯罪活动；
                </p>

                <p>
                    4.  不得干扰本站的正常运转，不得侵入本站及国家计算机信息系统；
                </p>
                <p>
                    5.  不得传输或发表损害国家社会公共利益和涉及国家安全的信息资料或言论；
                </p>

                <p>
                    6.  不得教唆他人从事本条款所禁止的行为；
                </p>
                <p>
                    7.  不得利用在本站注册的账户进行非法牟利经营活动；用户应不时关注并遵守本站不时公布或修改的各类合法规则规定。本站保有删除站内各类不符合法律政策或不真实的信息内容而无须通知用户的权利。
                    若用户未遵守以上规定的，本站有权作出独立判断并采取暂停或关闭用户账号等措施。用户须对自己在网上的言论和行为承担法律责任。
                </p>
            </div>

            <div class="div-height">
                <p class="div-title">
                    资产信息
                </p>
                <p>
                    本站上资产的收益率、期限、可用额度等资产信息将根据市场行情及销售情况随时发生变动，本站不作特别通知。由于网站资产信息数量庞大，虽然本站会尽最大努力保证您所浏览资产信息的准确性，
                    但由于网络及电脑终端兼容性等客观原因存在，本站网页显示的信息可能会有一定的滞后性或差错，对此情形请您知悉并理解；国槐金融欢迎纠错，并会视情况给予纠错者一定的奖励。
                </p>
            </div>


            <div class="div-height">
                <p class="div-title">
                    预约购买
                </p>
                <p>
                    1．  您在云平台预约资产时，请您仔细确认所预约资产的拟成立日期、
                    预计年化收益、资产期限、起购金额、付息方式等信息。若您未确认清楚导致交易过程中出现利益损失的，则云平台将不承担相应法律责任及连带责任。
                </p>
                <p>
                    2．  除法律另有强制性规定外，双方约定如下：本站展示的资产可预约额度和收益率等信息仅仅是资产方的要约申请，不代表最终结果，您预约购买时须填写您希望的预约额度并与资产方针对额度和收益率进行商讨；系统生成的订单信息是计算机信息系统根据资金资产双方填写的内容自动生成的数据，
                    仅是您与资产方之间的合同要约；资产方收到您的确认预约信息后，并通过线上或线下完成合同签署后，即视为您与资产方之间建立了合同关系；
                </p>
                <p>
                    3．  由于市场变化及各种以合理商业努力难以控制的因素的影响，本站无法保证您提交的订单信息中希望购买的资产都会有额度；如您拟购买的资产已售罄，您有权中止交易。
                </p>
            </div>

            <div class="div-height">
                <p class="div-title">
                    线上支付与收款
                </p>
                <p>
                    平台用户在云平台可以通过线上和线下两种方式进行收付款，其中通过线上进行支付和收款时由宝付网络科技（上海）有限公司代为收取和中转。在订单流转过程中，
                    用户需要根据实际情况对订单的支付情况进行确认，如您不按照实际情况进行确认操作，由此产生的一切后果和责任由您自行承担。
                </p>
            </div>

            <div class="div-height">
                <p class="div-title">
                    投后管理
                </p>
                <p>
                    项目成立后本息的兑付以及项目成立失败后的退款需要通过线下完成，平台用户在云平台可以进行兑付和退款信息的输入和确认，平台会根据资产方填写的内容自动生成付息还款的试算数据，帮助您进行还款的追踪，
                    具体的兑付和还款以实际收款为准。如因未能按照约定及时付息和还款引发的纠纷由资产方负责，您可以与资产方协商处理，国槐金融对此不承担任何责任。
                </p>
            </div>

            <div class="div-height">
                <p class="div-title">用户责任</p>
                <p>
                    用户需对自己在网上的行为承担法律责任。用户必须遵守中华人民共和国的各项法律法规及国槐金融网站的规则。用户须承诺不传输任何非法的、骚扰性的信息资料，辱骂性的、恐吓性的信息资料，庸俗的、淫秽的信息资料，不能传输任何不符合国家法律、法规的信息资料，若用户的行为不符合以上提到的服务协议，国槐金融将有权独立判断取消该用户的服务账号。
                    用户单独承担发布内容的责任。用户对服务的使用是根据所有适用于国槐金融网站服务的地方法律、国家法律和国际法律标准的。用户必须遵循：
                </p>
                <p>
                    1．  发布信息时必须遵守中华人民共和国的各项有关法律法规，遵守网上一般道德及规范。
                </p>
                <p>
                    2．  不得利用国槐金融网站散布广告以及其它商业化的宣传。
                </p>
                <p>
                    3．  不干扰或混乱国槐金融网站网络服务。
                </p>
            </div>

            <div class="div-height">
                <p class="div-title">
                    结束服务和身份的取消
                </p>
                <p>
                    用户若反对任何服务协议、网站规则的建议或对后来的条款、规则修改有异议，或对国槐金融网站服务不满，用户有以下权利：
                </p>
                <p>
                    1．  不再使用国槐金融网站服务。
                </p>
                <p>
                    2．  通告国槐金融网站停止该用户的服务。结束服务后，
                    用户使用国槐金融网站服务的权利马上终止。届时，国槐金融网站不再对用户承担任何义务。
                </p>
                <p>
                    任何用户有如下行为而导致其账户被取消，责任自负：
                </p>
                <p>
                    1．  有违反服务协议或规则的行为。
                </p>
                <p>
                    2．  提供虚假注册信息。
                </p>
                <p>
                    3．  通过不正当手段参与国槐金融网站活动。
                </p>
                <p>
                    4．  有损害其他用户的行为。
                </p>
                <p>
                    5．  违反中国的法律、法规。
                </p>
                <p>
                    国槐金融网站可随时根据实际情况中断一项或多项网络服务。国槐金融网站中断服务不需对任何机构或第三方负责。
                </p>
            </div>
            <div class="div-height">
                <p class="div-title">
                    服务费用
                </p>
                <p>
                    云平台服务的任何免费试用或免费功能和服务不应视为国槐金融放弃后续收费的权利。
                    国槐金融有权提前7天以公告形式通知您收费标准，若您继续使用则需按国槐金融公布的收费标准支付费用。
                </p>
            </div>

            <div class="div-height">
                <p class="div-title">免责</p>
                <p>
                    用户同意，基于互联网的特殊性，国槐金融不担保服务不会中断，也不担保服务的及时性或安全性。系统因相关状况无法正常运作，
                    使机构用户无法使用任何国槐金融服务或使用任何国槐金融服务受到任何影响时，国槐金融对用户或第三方不负任何责任，前述状况包括但不限于：
                </p>
                <p>
                    1．  国槐金融系统停机维护期间。
                </p>
                <p>
                    2．  电信设备出现故障不能进行数据传输。
                </p>
                <p>
                    3．  由于黑客攻击、网络供应商技术调整或故障、网站升级、银行方面的问题等原因而造成的国槐金融服务中断或延迟。
                </p>
                <p>
                    4．  因台风、地震、海啸、洪水、停电、战争、恐怖袭击等不可抗力之因素，造成国槐金融系统障碍不能执行业务的。
                </p>
            </div>

            <div class="div-height">
                <p class="div-title">
                    法律
                </p>
                <p>
                    国槐金融网站保留国槐金融网站任何信息的最终解释权。
                </p>
                <p>
                    国槐金融网站保留在任何时刻，更动本服务协议全部或部份内容的权利。
                </p>
                <p>
                    国槐金融网站服务协议与网站规则应与国家法律解析一致。若有任何服务协议与法律相抵触，以国家法律为准。
                </p>
            </div>
            <div class="div-footer">
                <p>
                    Copyright © 上海国槐金融信息服务有限公司 版权所有
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  var action = require('../../actions/action')
  // var eventListener = require('../../utils/eventListener')
  var config = require('../../utils/globalConfig')
  var formUtil = require('../../utils/formUtil')
  var poptips = require('../../components/Tooltips')
  var validationService = require('../../utils/validationService')

  module.exports = {
    name: 'register',
    data: function () {
      return {
        downloadhost: config.api.downhost,
        userName: '',
        password: '',
        errorMessage: '',
        errorName: '',
        errorPass: '',
        showEmail: false,
        showPass: false,
        errorEmail: '',
        postEmailBox: false,
        registeBox: true,
        ischecked: false,
        serviceBox: false,
        regForm: {
          fundAuth: {
            value: '',
            msg: ''
          },
          assetAuth: {
            value: '',
            msg: ''
          },
          name: {
            value: '',
            msg: ''
          },
          account: {
            value: '',
            msg: ''
          },
          password: {
            value: '',
            msg: ''
          },
          confirmPass: {
            value: '',
            msg: ''
          }
        },
        dis: true,
        checkBox: false,
        emailError: false,
        emailError1: false,
        emailInfo: '请输入企业邮箱',
        emailInfo1: '',
        comName: false,
        comInfo: '请输入企业名称',
        pass: false,
        pass2: false,
        passInfo: '请输入密码',
        passInfo2: '',
        cofPass: false,
        cofInfo: '请再次输入您的密码',
        picked: ''
      }
    },
    components: {
      poptips: poptips
    },
    methods: {
      save: function () {
        var that = this
        var regForm = this.regForm
        var arrEmail = regForm.account.value.split('@')
        var reg = /((?=.*\\d)(?=.*\\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{8,20}$/
        var regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        if (regForm.account.value === '') {
          this.emailError = true
          return
        } else if (!regForm.account.value.match(regEmail)) {
          this.emailError = true
          this.emailInfo = '请输入有效的电子邮箱地址'
          return
        } else if (regForm.name.value === '') {
          this.comName = true
          return
        } else if (regForm.password.value === '') {
          this.pass = true
          return
        } else if (regForm.confirmPass.value === '') {
          this.cofPass = true
          return
        } else if (regForm.password.value.length < 8) {
          this.pass = true
          this.passInfo = '密码允许8-20位的字符'
          return
        } else if (!regForm.password.value.match(reg)) {
          this.pass = true
          this.passInfo = '密码应至少包含数字、字母、字符中的两种'
          return
        } else if (regForm.password.value !== regForm.confirmPass.value) {
          this.cofPass = true
          this.cofInfo = '两次密码输入不一致'
          return
        } else if (arrEmail.length > 1) {
          var emailVarlidate = arrEmail[1]
          var des = "'qq.com' || '126.com' || 'gmail.com' || 'hotmail.com' || 'sina.com' || '21.com' || 'msn.com' || '163.com' || 'yeah.net' || 'outlook.com' || 'foxmail.com' || 'sohu.com' || 'sogou.com' || 'tom.com' || '21cn.com' || 'live.cn' || 'live.com' || 'hexun.com' || '139.com' || '189.cn' || '91.com' || '56.com' || 'eyou.com' || 'people.com.cn' || 'sh.com'"
          if (des.indexOf('' + emailVarlidate + '') !== -1) {
            this.emailError1 = true
            this.emailInfo1 = '这可能不是你的公司或企业邮箱，请联系国槐金融客服'
            return
          } else {
            console.log(false)
            if (validationService.doValidate(regForm)) {
              var reqbody = formUtil.generateRequestBody(regForm)
              if (this.picked === 'fun') {
                reqbody.fundAuth = 'YES'
                reqbody.assetAuth = 'NO'
              } else if (this.picked === 'asset') {
                reqbody.assetAuth = 'YES'
                reqbody.fundAuth = 'NO'
              }
              action.createUser(reqbody, function (res) {
                console.log('success')
                that.data = res
                action.sendActive({oid: that.data.oid, companyFullName: that.data.companyFullName, email: that.data.email}, function (res) {
                  console.log(res)
                })
                that.p1 = false
                that.p2 = true
                that.$route.router.go('/register/success')
              }, function (err) {
                if (err.errorCode === 10106) {
                  that.emailError = true
                  that.emailInfo = '该邮箱已注册，请直接登录'
                } else if (err.errorCode === 40002) {
                  that.emailError = true
                  that.emailInfo = '校验失败,请输入企业邮箱'
                } else if (err.errorCode === 40010) {
                  that.emailError = true
                  that.emailInfo = '校验失败,请输入企业邮箱'
                } else if (err.errorCode === 40004) {
                  that.cofPass = true
                  that.cofInfo = '两次密码输入不一致'
                } else if (err.errorCode === 40005) {
                  that.cofPass = true
                  that.cofInfo = '校验失败,密码包含特殊字符'
                } else if (err.errorCode === 40006) {
                  that.pass2 = true
                  that.passInfo2 = '校验失败,密码长度为8-20个字符'
                } else if (err.errorCode === 40007) {
                  that.pass = true
                  that.passInfo = '校验失败,密码必须包含数字,字母,符号至少两种'
                } else if (err.errorCode === 40008) {
                  that.comName = true
                  that.comInfo = '校验失败,企业名称为2-20个字符'
                } else if (err.errorCode === 40009) {
                  that.comName = true
                  that.comInfo = '校验失败,企业名称包含特殊字符'
                } else if (err.errorCode === 40010) {
                  that.emailError = true
                  that.emailInfo = '请输入有效的电子邮箱地址'
                }
              })
            }
          }
        } else {

        }
      }
    },
    watch: {
      userName: function (val, oldVal) {
        // this.show = true
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
      },
      beforeDestroy: function () {
        if (this._key_enter_) {
          this._key_enter_.remove()
        }
      }
    },
    route: {
      data: function (transition) {
        var that = this
        var flag = transition.to.params.key1
        if (flag === 'agreement') {
          that.registeBox = false
          that.postEmailBox = false
        } else if (flag === 'success') {
          that.postEmailBox = true
          that.registeBox = false
        } else {
          that.registeBox = true
          that.postEmailBox = false
        }
      }
    }
  }
</script>
<style lang="scss">
/*注册*/
.reg_tips {
    min-height:25px; padding:10px 10%; line-height:1.3; background:url(../../assets/images/tips.png) no-repeat 3% 12px; background-size: auto 15px; background-color:#e7f4ff; border-top:1px solid #d8e8f5; border-bottom:1px solid #d8e8f5; font-size:14px; color:#666;
}
.body {
  .type_choice {
    label {display: inline-block; height:48px; line-height:48px;
      input { vertical-align:middle;}
    }
  }
  .checkbox {
    margin:0 auto;
    width:94%;
    font-size:14px;
    margin-top:15px;
    input { vertical-align:middle; margin-top:-2px;}
  }
  .service{
    z-index: 10;
  }
}
.pm_body { background-color:#fff;
   text-align:center;
  .img_mark {
    img {
      width:12.5%; height:auto;
    }
  }
  .remail {
    padding-top:30px;
    padding-bottom:20px;
    border-top:#ccc 1px solid;
    width:60%;
    margin:0 auto;
  }
}
button[disabled] { background-color:#999; opacity:0.6;}
.service{
  padding:0 3%;
    .se-title{
        font-size: 22px;
        line-height: 36px;
        margin-top: 50px;
        text-align: center
    }
    .div-title{
        font-size: 18px;
        font-weight: bold;
        line-height: 36px
    }
    .div-height{
        margin-top: 25px;
        line-height: 24px;
    }
    .div-footer{
        margin-top: 50px;
        text-align: center
    }
}
.input_line { position:relative;}
 .login-pop7.p-msg7, .login-pop8.p-msg8, .login-pop9.p-msg9 {
      left:0;
      position: absolute;
      width: 175px;
      height: 24px;
      font-size: 12px;
      color: white;
      line-height: 24px;
      text-align: center;
      top:50px;
  }

    .login-pop7.p-msg7.speech-bubble-top-left:after {
        border-bottom-color: #6b6f77;
        left: 30%;
    }

    .login-pop7.p-msg7.speech-bubble1:after {
        border: 4px solid transparent ;
        border-bottom-color: #6b6f77;
    }

    .pop-msg7, .pop-msg8, .pop-msg9 {
        margin-left: 15%;
        margin-top: 4px;
        z-index: 100;
    }


    .login-pop8.p-msg8.speech-bubble-top-left:after {
        border-bottom-color: #6b6f77;
        left: 30%;
    }

    .login-pop8.p-msg8.speech-bubble1:after {
        border: 4px solid transparent ;
        border-bottom-color: #6b6f77;
    }
    .login-pop9.p-msg9.speech-bubble-top-left:after {
        border-bottom-color: #6b6f77;
        left: 30%;
    }
    .login-pop9.p-msg9.speech-bubble1:after {
        border: 4px solid transparent ;
        border-bottom-color: #6b6f77;
    }
    .p-sh {
        position: absolute;
        top: 490px;
    }
    .sp-msg {
        /*margin-bottom: 12px;*/
        position: absolute;
        top: -2px;
        width: 400px;
        left: 20px;
    }
</style>
