import { defineComponent, reactive } from "vue";
import './index.less'
import { appData } from "@/mock";

const Cancellation = defineComponent({
  setup() {
    const pageData = reactive(appData);
    return () => (
      <div {...{ class: 'cancellation' }}>

        <div>
          {/* <h1
            style="margin-top: 17.4pt;margin-bottom: 10.5pt;text-align: center;	page-break-inside: avoid;page-break-after: avoid;"
          >
            <span style="font-family: '微软雅黑'; color: #ff0000">{pageData.appName}</span
            ><span style="font-family: '微软雅黑'; color: #2a333a">账号注销协议</span>
          </h1>
          <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
            <span style="font-family: Calibri">&#xa0;</span>
          </p> */}
          <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
            <span style="font-family: '微软雅黑'; color: #2a333a"
            >您在申请注销流程中点击同意前，应当认真阅读《</span
            ><span style="font-family: '微软雅黑'; ">{pageData.appName}</span
            ><span style="font-family: '微软雅黑'; color: #2a333a"
            >帐号注销协议》。特别提醒您，当您成功提交注销申请后，即表示您已充分阅读、理解并接受本协议的全部内容。阅读本协议的过程中，如果您不同意相关任何条款，请您立即停止帐号注销程序。如您对本协议有任何疑问，可通过客服专区联系我们的客服。</span
            >
          </p>
          <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
            <span style="font-family: '微软雅黑'; font-weight: bold; color: #2a333a"
            >您可以通过联系我们的客服或通过其他我们公示的方式注销您的账号（但法律法规另有规定的除外），一旦您注销账号，将无法使用我们提供的全线用户产品的服务，因此请您谨慎操作。</span
            ><span style="font-family: '微软雅黑'; color: #2a333a"
            >我们为了保护您或他人的合法权益会结合您对我们提供的各产品的使用情况判断是否支持您的注销请求，比如若您在钱包里有未使用的余额、您还有服务未完结，则我们不会立即支持您的请求，而会提示您先进行相应处理。除法律法规另有规定外，注销账号之后，您该账户内的所有信息将被清空，并根据您的要求删除您的个人信息。您通过第三方账号（如微信、微博、QQ等）授权登录我们的服务时，需要向第三方申请注销账号。</span
            >
          </p>
          <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
            <span style="font-family: '微软雅黑'; font-size: 10pt; font-weight: bold; color: #2a333a"
            >提前获知产品和服务停止运营权</span
            ><br /><span style="font-family: '微软雅黑'; font-size: 10pt; color: #2a333a"
            >我们愿一直陪伴您，若因特殊原因导致我们部分或全部产品和服务被迫停止运营，我们将提前在产品或服务的主页面或站内信或向您发送电子邮件或其他合适的能触达您的方式通知您，并将停止对您个人信息的收集，同时会按照法律规定对所持有的您的个人信息进行删除或匿名化处理等，法律法规另有规定的除外。</span
            >
          </p>
          <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
            <span style="font-family: '微软雅黑'; font-weight: bold; color: #2a333a">例外情形</span>
          </p>
          <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
            <span style="font-family: '微软雅黑'; color: #2a333a"
            >在以下情形中，按照法律法规要求，我们将无法响应您的请求：</span
            >
          </p>
          <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
            <span style="font-family: '微软雅黑'; color: #2a333a"
            >- 与国家安全、国防安全直接相关的；</span
            >
          </p>
          <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
            <span style="font-family: '微软雅黑'; color: #2a333a"
            >- 与公共安全、公共卫生、重大公共利益直接相关的；</span
            >
          </p>
          <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
            <span style="font-family: '微软雅黑'; color: #2a333a"
            >- 与犯罪侦查、起诉、审判和判决执行等直接相关的；</span
            >
          </p>
          <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
            <span style="font-family: '微软雅黑'; color: #2a333a"
            >- 有充分证据表明您存在主观恶意或滥用权利的；</span
            >
          </p>
          <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
            <span style="font-family: '微软雅黑'; color: #2a333a"
            >- 响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的。</span
            >
          </p>
          <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
            <span style="font-family: '微软雅黑'; color: #2a333a">- 涉及商业秘密的。</span>
          </p>
          <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
            <span style="font-family: Calibri">&#xa0;</span>
          </p>
          <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
            <span style="font-family: Calibri">&#xa0;</span>
          </p>
        </div>
      </div>
    );
  },
});

export default Cancellation