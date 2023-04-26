import { defineComponent, reactive } from "vue";
import "./index.less";
import { appData } from "@/mock";

const Protocol = defineComponent({
	setup() {
		const pageData = reactive(appData);
		return () => (
			<div {...{ class: "protocol" }}>
				{/* <h1
          style="margin-top: 17.4pt;margin-bottom: 10.5pt;text-align: center;page-break-inside: avoid;page-break-after: avoid;">
          <span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
          <span style="font-family: '微软雅黑'; color: #2a333a">用户协议</span>
        </h1>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p> */}
				<h2 style="font-size:14pt;margin-top: 0;margin-bottom: 4pt;page-break-inside: avoid;page-break-after: avoid;">
					<span style="font-family: '微软雅黑'; color: #2a333a">一、说明</span>
				</h2>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">本用户协议双方为</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">（公司全称：</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.companyName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">）与</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						用户（含未成年人学员及其监护人），本用户协议具有合同效力。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						本用户协议内容包括协议正文及所有
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						已经发布的或将来可能发布的各类规则。所有规则为协议不可分割的一部分，与协议正文具有同等法律效力。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">用户在使用</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						提供的各项服务的同时，承诺接受并遵守各项相关规则的规定。
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						根据需要制定、修改本协议或各类规则，
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						经修订的协议在
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #111;">
						{pageData.appName}
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						网站、客户端等公布后生效，亦成为本协议的一部分，继续使用服务将表示用户接受经修订的协议。
					</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						除另行明确声明外，任何使服务范围扩大或功能增强的新内容均受本协议约束。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">用户必须是具备使用</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">相应民事行为能力的自然人。</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						用户保证：在
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #111;">
						{pageData.appName}
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						所有的付费行为均由家长确认后并由家长账户进行支付。
					</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						用户确认本用户协议后，本用户协议即在用户和
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						之间产生法律效力。请用户务必在注册之前认真阅读全部用户协议内容，如有任何疑问，可向
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">咨询。</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
					<span style="font-family: Calibri">&#xa0;</span>
				</p>
				<h2 style="font-size:14pt;margin-top: 0;margin-bottom: 4pt;page-break-inside: avoid;page-break-after: avoid;">
					<span style="font-family: '微软雅黑'; color: #2a333a">二、 用户权利和义务：</span>
				</h2>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; font-weight: bold; color: #2a333a">
						所有用户必须遵循：
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						- 遵守所有使用网络服务的网络协议、规定、程序和惯例；
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">- 不得使用</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">从事违法活动；</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">- 不得干扰或侵犯</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						的正常运行和其他用户的正常使用；
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						- 未经允许，不得以任何形式下载或试图下载
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">的任何内容；</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						- 用户购买的服务只允许个人使用，不能用于其他目的，包括不限于不得复制、传播；
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						- 从中国境内向境外传输技术性资料时不得违反中国有关法律、法规。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
					<span style="font-family: Calibri">&#xa0;</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; font-weight: bold; color: #2a333a">
						同时用户承诺：
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">（1）不得利用</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						制作、复制、查阅和传播下列信息：
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						-任何非法的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、伤害性的、庸俗的、淫秽的信息资料；
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						-任何教唆他人进行违法犯罪行为的资料；
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						-不利于国内团结和社会安定的资料；
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						-任何不符合国家法律、法规规定的资料、信息；
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						-任何捏造或者歪曲事实，散布谣言，扰乱社会秩序的信息；
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">-损害</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">声誉和商业利益的信息；</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						（2）不得未经许可而非法进入其它个人或组织电脑系统；
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">（3）未经允许，不得对</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						中存储、处理或者传输的数据和应用程序进行删除、修改或者增加；
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						（4）不得故意制作、传播计算机病毒等破坏性程序；
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">（5）法律规定的其他义务。</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
					<span style="font-family: Calibri">&#xa0;</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; font-weight: bold; color: #2a333a">
						基于网络服务的特殊性，用户同意：
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						- 在注册时按照注册提示提供准确用户名和密码以及详尽的个人资料；
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						-
						在个人的注册信息发生变化时，用户应及时更新自己的注册信息，保证其个人资料的详尽和准确。所有用户输入的个人信息将被视作准确表明了用户的身份，并作为
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">提供所有服务的有效身份依据。</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						- 用户自行配备上网的所需设备，包括个人电脑、调制解调器或其他必备上网装置；
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						- 用户应自行负担因使用这种接入方式而产生的上网电话费、上网信息费及教育信息费。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">- 用户一旦注册成功，成为</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						的正式用户后，应当对自己的账号、密码的安全性负全部责任。用户的密码只能由用户自己掌握。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						- 对于用户因账号或密码泄露造成的各种损失，
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						不承担任何责任。用户发现任何非法使用用户账号的情况，应立即通知
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">。</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						- 用户应对以其账号进行的所有活动和事件负责。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						-
						账号只为注册用户本人所专有，不得将账号出借他人使用，严禁一个账号多人使用，如果用户违反此规定，
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #111;">
						{pageData.appName}
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						将有权将此账号作为无效处理并保留追究法律责任的权利。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						- 对于侵犯
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #111;">
						{pageData.appName}
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						知识产权的账号，
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #111;">
						{pageData.appName}
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						将有权将此账号做封号、注销处理并保留追究法律责任的权利。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						-
						所有购买的服务都有截止登录时间，用户应在指定日期前登录，否则用户不得再行登录，用户自己应对此承担全部责任。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						- 同意通过提供的手机号码、QQ号、电子邮箱等联系方式，接受
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #111;">
						{pageData.appName}
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						发送的验证码、通知等产品或公司相关信息。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
					<span style="font-family: Calibri">&#xa0;</span>
				</p>
				<h2 style="font-size:14pt;margin-top: 0;margin-bottom: 4pt;page-break-inside: avoid;page-break-after: avoid;">
					<span style="font-family: '微软雅黑'; color: #2a333a">三、</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">的权利和义务：</span>
				</h2>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						有义务在现有技术上维护整个平台的正常运行，并努力提升和改进技术，使用户网络教育活动得以顺利进行。同时，对用户在注册使用
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						中所遇到的与交易或注册有关的问题及反映的情况，
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">应及时作出回复。</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						享有对用户网上活动的监督和指导权，对凡是从事网上非法活动的用户，有权终止所有服务。
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						对于用户在
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #111;">
						{pageData.appName}
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						的不当行为或其它任何
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #111;">
						{pageData.appName}
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						认为应当终止服务的情况，
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #111;">
						{pageData.appName}
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						有权作出删除相关信息、终止服务提供等处理；
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						应本着诚实信用的原则向用户提供远程教育服务，不得随意中断或停止提供该项服务。但由于战争、自然灾害、传染性疾病等不可抗力或者其它非人为因素造成的服务的中断或停止，
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">及用户互不承担违约责任。</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						内以任何形式表现的作品（包括但不限于视频、文字、软件、声音、图片、录像、表格、电子邮件等）的知识产权，由
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						享有或已获授权。用户未经许可，不得擅自对
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						的任何作品进行任何形式的翻录、复制或从事其他任何违反著作权法、专利法等相关法律、法规的活动。对侵犯
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">知识产权的个人和组织，</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						或相关权利人将依法追究其民事或刑事责任。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">有许可使用权。</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						对用户在网上发表的供学习交流的作品，在获得授权同意后享有出版、发行和复制的权利。用户以此授予
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						及其关联公司使用、复制、修订、改写、发布、翻译、分发、展示用户的作品。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">会在用户的计算机上设定或取用</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">cookies。</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">允许那些在</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						上发布广告的公司到用户计算机上设定或取用cookies。在用户登录时获取数据，
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #111;">
						{pageData.appName}
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						使用cookies可为用户提供个性化服务。
					</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						如果拒绝所有 cookies，用户将不能使用需要登录的
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">产品及服务内容。</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						对用户协议有修改和完善的权利。1、
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						将根据互联网的发展和法律、法规的变化等修改用户协议并获取用户同意。2、如果不同意所改动的内容，用户可以主动放弃获得的网络服务。如果用户继续享用网络服务，应同意接受用户协议的变动。
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						当发生争议时，应以最新用户协议的内容为准。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">如用户向</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">提出注销</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">注册用户身份时，经</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">审核同意，由</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">注销该注册用户，用户即解除与</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						的用户协议关系。但注销该用户账号后，如用户在注销前在
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						上存在违法行为或违反合同的行为，
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						仍可行使本用户协议所规定的权利。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						如用户有任何违反本协议的行为，
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">可以做出独立判断，</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						删除相关具有违法性、侵权性、不当性等内容,并有权立即采取封号、注销账号等措施。用户应对自己在
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #111;">
						{pageData.appName}
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						上的违法行为承担全部法律责任。
					</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">但如该用户在被</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						终止提供服务后，再一次直接或间接或以他人名义注册为
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">用户的，</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						有权再次单方面终止向该用户提供服务。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
					<span style="font-family: Calibri">&#xa0;</span>
				</p>
				<h2 style="font-size:14pt;margin-top: 0;margin-bottom: 4pt;page-break-inside: avoid;page-break-after: avoid;">
					<span style="font-family: '微软雅黑'; color: #2a333a">四、责任范围：</span>
				</h2>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">用户明确理解和同意，</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						不对下述情况导致的损失承担赔偿责任，
					</span>
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						损失包括但不限于利润、商誉、使用、数据等方面的损失或其它无形损失：
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						（1）因不可抗力、计算机病毒或黑客攻击、用户所在位置、电脑故障、用户关机以及其他任何技术、互联网络、通信线路原因等造成的服务中断或不能满足用户要求或遭受损失，
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						不承担责任但将尽力减少因此而给用户造成的损失和影响。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						（2）如因用户违反有关法律或者本协议之规定，使
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						遭受任何损失，受到任何第三方的索赔，或任何行政管理部门的处罚，用户应对
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						的损失承担赔偿责任，包括合理的律师费用等。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
					<span style="font-family: Calibri">&#xa0;</span>
				</p>
				<h2 style="font-size:14pt;margin-top: 0;margin-bottom: 4pt;page-break-inside: avoid;page-break-after: avoid;">
					<span style="font-family: '微软雅黑'; color: #2a333a">五、退款说明</span>
				</h2>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">1.用户自购买</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">
						之日起的3个自然日内，可向客服申请退款。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						2.存在以下任何一种情况的，不能退款：
					</span>
				</p>
				{/* <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span
            style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
            （1）因6月7日-6月31日（含7日和31日当天）为志愿填报高峰期，在其期间购买的。
          </span>
        </p> */}
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
						（1）反复恶意退款者（同一用户退款≥2次）再次购买后；
					</span>
				</p>
				{/* <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span
            style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
            （3）存在违法、侵害他人权益、或侵害
          </span>
          <span
            style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #111;">
            {pageData.appName}
          </span>
          <span
            style="font-family: '微软雅黑';font-weight: bold;text-decoration: underline;color: #2a333a;">
            权益等行为，包括但不限于一个账号多人使用。
          </span>
        </p> */}
				{/* <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'; color: #2a333a">3.e币或t币购买后不得退款。</span>
        </p> */}
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						3.退款到账时间：符合退款要求的用户，将在申请退款之日起的7个工作日内收到退款。
					</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
					<span style="font-family: Calibri">&#xa0;</span>
				</p>
				<h2 style="font-size:14pt;margin-top: 0;margin-bottom: 4pt;page-break-inside: avoid;page-break-after: avoid;">
					<span style="font-family: '微软雅黑'; color: #2a333a">六、法律与管辖：</span>
				</h2>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
					<span style="font-family: '微软雅黑'; color: #2a333a">
						本用户协议根据现行中华人民共和国法律法规制定。如发生协议条款与中华人民共和国法律法规相抵触时，则这些条款将完全按法律法规的规定重新解释，本用户协议的其它条款仍对
					</span>
					<span style="font-family: '微软雅黑'; color: #111">{pageData.appName}</span>
					<span style="font-family: '微软雅黑'; color: #2a333a">和用户具有法律约束力。</span>
				</p>
				<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
					<span style="font-family: Calibri">&#xa0;</span>
				</p>
			</div>
		);
	},
});

export default Protocol;
