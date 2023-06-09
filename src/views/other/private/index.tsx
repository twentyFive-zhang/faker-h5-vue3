import { defineComponent, reactive } from "vue";
import "./index.less";
import { appData } from "@/mock";
const Private = defineComponent({
  setup() {
    const pageData = reactive(appData);
    return () => (
      <div {...{ class: "private" }}>
        {/* <h1 style="margin-top: 17.4pt;margin-bottom: 10.5pt;text-align: center;page-break-inside: avoid;page-break-after: avoid;">
          <span style=" color: #111">{pageData.appName}</span>
          <span style="font-family: '微软雅黑'">隐私政策</span>
        </h1>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p> */}
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" color: #111">{pageData.appName}</span>
          <span style="font-family: '微软雅黑'">（公司全称：</span>
          <span style=" color: #111">{pageData.companyName}</span>
          <span style="font-family: '微软雅黑'">）与旗下各关联公司（以下统称"</span>
          <span style=" color: #111">{pageData.appName}</span>
          <span style="font-family: '微软雅黑'">
            "或者"我们"）非常重视用户的隐私和个人信息保护。您在使用我们的产品和服务时，我们可能会收集和使用您的相关信息。我们希望通过本《
          </span>
          <span style=" color: #111">{pageData.appName}</span>
          <span style="font-family: '微软雅黑'">
            隐私政策》（以下简称"本政策"）向您说明在您接受我们的产品服务时，我们如何收集、使用、储存、共享和转让这些信息，以及我们为您提供的访问、更新、控制和保护这些信息的方式。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            我们深知个人信息对您的重要性，并会尽全力保护您的个人信息安全可靠。我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。同时，我们承诺，我们将按业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">请在使用我们的服务前，仔细阅读并了解本政策。</span>
          <span style=" font-weight: bold; text-decoration: underline">
            如果您不同意本政策的内容，将导致我们无法为您提供完整的服务，同时也请您立即停止使用我们的产品和服务。您使用或继续使用我们提供的产品和或服务
          </span>
          <span style="font-family: '微软雅黑'">
            ，则表示您同意我们按照本政策收集、使用、储存和分享、披露、保护您的个人信息。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">1.本政策适用范围、相关词语涵义</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">1.1本政策适用范围</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            当您使用我们的任何产品和服务时，本政策即适用，无论该产品和服务是否单独设置了隐私条款，也无论您是浏览用户（访客）还是注册登录用户。请您注意，本政策不适用于以下情况：
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            通过我们的服务而接入的第三方服务（包括任何第三方网站）收集的信息；
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            通过在我们服务中进行广告服务的其他公司和机构所收集的信息。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">1.2相关词语涵义</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            个人信息：指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。如在您使用我们的服务时，我们可能会收集您的如下个人信息，包括
          </span>
          <span style=" font-weight: bold; text-decoration: underline">个人姓名、生日、性别等</span>
          <span style="font-family: '微软雅黑'">。</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            个人敏感信息：指一旦泄露、非法提供或滥用可能危害人身和财产安全，极易导致个人名誉、身心健康受到损害或歧视性待遇等的个人信息，包括
          </span>
          <span style=" font-weight: bold; text-decoration: underline">
            个人身份信息、个人财产信息、网页浏览记录、定位信息
          </span>
          <span style="font-family: '微软雅黑'">
            等。您同意您的个人敏感信息按本政策所述的目的和方式来处理。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            共享信息：指您在我们的服务中自愿与您的社交网络及使用该服务的所有用户公开分享的有关您的信息，或其他方分享的与您有关的信息，例如，他们上传或发布的信息包含有关您的信息，以及他们发送给您和其他使用我们服务的用户的通讯信息之中包含的有关您的信息。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            非个人身份信息：指任何与您有关但实际上不可直接或间接辨认您身份的信息，包括以汇集、匿名或化名方式提供的个人信息。您知悉并同意，无法识别出您的个人身份的信息不属于个人信息。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">2.我们如何收集、存储和使用您的个人信息</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: 'Times New Roman'">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">2.1帮助您成为“</span>
          <span style=" font-weight: bold; color: #111">{pageData.appName}</span>
          <span style=" font-weight: bold">”的用户</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">为使用“</span>
          <span style=" color: #111">{pageData.appName}</span>
          <span style="font-family: '微软雅黑'">”学习平台，您需要首先成为“</span>
          <span style=" color: #111">{pageData.appName}</span>
          <span style="font-family: '微软雅黑'">
            ”的注册用户，以便我们为您提供会员服务，您需要提供注册、登录“
          </span>
          <span style=" color: #111">{pageData.appName}</span>
          <span style="font-family: '微软雅黑'">”帐号使用的电话号码，</span>
          <span style=" font-weight: bold">电话号码、姓名或昵称、性别</span>
          <span style="font-family: '微软雅黑'">。并创建“</span>
          <span style=" color: #111">{pageData.appName}</span>
          <span style="font-family: '微软雅黑'">
            ”学习平台账号和密码。在您主动注销账号之后，我们将根据法律的要求删除您的个人信息，或使其匿名化处理。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: 'Times New Roman'">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">2.2改进使用体验</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">我们将基于您对“</span>
          <span style=" color: #111">{pageData.appName}</span>
          <span style="font-family: '微软雅黑'">
            ”的使用数据，结合个人常用设备信息进行统计，来诊断系统问题，优化产品体验。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">我们会使用工具（含第三方工具）统计您在使用“</span>
          <span style=" color: #111">{pageData.appName}</span>
          <span style="font-family: '微软雅黑'">
            ”产品过程中产生的数据信息，其中包含应用启动数，页面访问数，重点按钮点击数，设置项的配置属性。随着“
          </span>
          <span style=" color: #111">{pageData.appName}</span>
          <span style="font-family: '微软雅黑'">
            ”的后续版本升级，我们统计的范围会有所改变，您下载/安装/使用“
          </span>
          <span style=" color: #111">{pageData.appName}</span>
          <span style="font-family: '微软雅黑'">
            ”产品后续版本产品的行为将被视为您对届时相关改变的同意。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: 'Times New Roman'">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">2.3客服与售后</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            我们的客服和售后功能会使用你的账号信息以为您提供咨询服务。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">当您与我们联系时，我们可能会保存您的</span>
          <span style=" font-weight: bold">通信或通话记录和内容或您留下的联系方式</span>
          <span style="font-family: '微软雅黑'">
            ，以便帮助您解决问题，或记录相关问题的处理方案及结果。我们的客服会使用您的账号信息与您核验您的身份。您有可能会在与我们的客服人员沟通时，提供给出上述信息外的其他信息。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: 'Times New Roman'">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">2.4为您提供安全保护保障</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            我们会根据您在软件安装及使用中授予的具体权限，接收并记录您的个人常用设备信息：
          </span>
          <span style=" font-weight: bold">
            操作系统版本、唯一设备标识符、设备所在位置相关信息、IP地址、GPS位置以及能够提供相关信息的Wi-Fi接入点、蓝牙等传感器信息
          </span>
          <span style="font-family: '微软雅黑'">，以帮助您维护软件正常使用及使用安全。</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: 'Times New Roman'">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">2.5个人信息的存储</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            存储地点：我们依照法律法规的规定，将您的个人信息存储于中华人民共和国境内（包含港澳台）。如需跨境存储，我们会单独再征得您的授权同意；
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            存储期限：除法律或相关法规另有约定外，我们在为提供我们的服务之目的所必需的期间内保留您的个人信息，但您要求我们立即删除或注销账户的、或法律法规另有规定的除外。超出上述必需期间后，我们会对个人信息进行删除或匿名化处理。对于已匿名化的信息的存储期限和处理，我们无需取得您的授权同意，也无需做出通知。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: 'Times New Roman'">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">2.6我们如何使用您的信息</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            我们可能将在向您提供服务的过程之中所收集的信息用作下列用途：
          </span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">用于数据分析，以便向您提供更加优质的服务；</span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">
            在我们提供服务时，用于身份验证、客户服务、安全防范、诈骗监测、存档和备份用途，确保我们向您提供的产品和服务的安全性；
          </span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">帮助我们设计新服务，改善我们现有服务；</span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">
            使我们更加了解您如何接入和使用我们的服务，从而针对性地回应您的个性化需求，例如语言设定、位置设定、个性化的帮助服务和指示，或对您和其他使用我们服务的用户作出其他方面的回应；
          </span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">
            让您参与有关我们产品和服务或通过我们的产品和服务发起的调查，是否参与调查将由您全权决定，并且由您自行选择提供哪些信息；
          </span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">出于安全、合法调查等目的；</span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">
            通过您提供的手机号码、QQ号、电子邮箱等联系方式，向您发送验证码、通知等产品或公司相关信息；
          </span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style=" font-weight: bold; text-decoration: underline">
            我们可能使用您的数据做数据汇总、分析、挖掘（包括商业化利用），但这些信息都采用匿名的方式，不能识别您的身份。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            为了让我们的用户有更好的体验、改善我们的服务或您同意的其他用途，在符合相关法律法规的前提下，我们可能将通过我们的某一项服务所收集的个人信息，以汇集信息或者个性化的方式，用于我们的其他服务。例如，在您使用我们的一项服务时所收集的您的个人信息，可能在另一服务中用于向您提供特定内容或向您展示与您相关的、而非普遍推送的信息。如在实际运用中，您对于该类推送服务自主选择退出，可通过APP设置-消息推送通知中关闭您所想关闭的推送内容。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold; text-decoration: underline">
            请您注意，除非您删除或撤回同意（即通过系统设置拒绝我们的收集和使用），您在使用我们的服务时所提供的所有个人信息，将在您使用我们的服务期间持续授权我们在符合本政策的范围内使用。
          </span>
          <span style="font-family: '微软雅黑'">
            在您注销账号后，我们将根据您的要求删除您的个人信息，或做匿名化处理，但法律法规另有规定的除外。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">3.我们如何使用 Cookie 和同类技术</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">3.1Cookie</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            为确保网站正常运转，我们会在您的计算机或移动设备上存储名为 Cookie 的小数据文件。Cookie
            通常包含标识符、站点名称以及一些号码和字符。借助于
            Cookie，网站能够存储您的偏好或购物篮内的商品等数据。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            我们不会将 Cookie 用于本政策所述目的之外的任何用途。您可根据自己的偏好管理或删除
            Cookie。有关详情，请参见 AboutCookies.org。您可以清除计算机上保存的所有
            Cookie，大部分网络浏览器都设有阻止 Cookie
            的功能。但如果您这么做，则需要在每一次访问我们的网站时亲自更改用户设置。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">3.2网站信标和像素标签</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            除 Cookie
            外，我们还会在网站上使用网站信标和像素标签等其他同类技术。例如，我们向您发送的电子邮件可能含有链接至我们网站内容的点击
            URL。如果您点击该链接，我们则会跟踪此次点击，帮助我们了解您的产品或服务偏好并改善客户服务。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">4.我们如何共享、转让、公开披露您的个人信息</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">4.1共享</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            您同意，我们可能与我们的关联公司分享您必要的个人信息，以提供和发展我们的产品和服务。除以下情形外，未经您同意，我们以及我们的关联公司不会与任何第三方分享您的个人信息：
          </span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">
            我们以及我们的关联公司可能将您的个人信息与我们的关联公司、合作伙伴及第三方服务供应商、承包商及代理（例如代表我们发出电子邮件或推送通知的通讯服务提供商、以及为我们提供位置数据的地图服务供应商）分享，用作下列用途：
          </span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">向您提供我们的服务；</span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">实现"我们如何使用您的信息"部分所述目的；</span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">履行我们在《</span>
          <span style=" color: #111">{pageData.appName}</span>
          <span style="font-family: '微软雅黑'">用户协议》或本《</span>
          <span style=" color: #111">{pageData.appName}</span>
          <span style="font-family: '微软雅黑'">隐私政策》中的义务和行使我们的权利；</span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">理解、维护和改善我们的服务。</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            如我们与任何上述第三方分享您的个人信息，我们将努力确保该等第三方在使用您的个人信息时遵守本政策及我们要求其遵守的其他适当的保密和安全措施，我们会对其数据安全能力与环境进行调查，与其签署严格的保密协定，
          </span>
          <span style=" font-weight: bold; text-decoration: underline">
            并只会分享特定用途所必要的个人信息。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            随着我们业务的持续发展，我们有可能进行合并、收购、资产转让或类似的交易，而您的个人信息有可能作为此类交易的一部分而被转移，我们会要求新持有人继续遵守该政策，否则我们将要求其重新获取您的授权。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            我们还可能为以下需要保留、保存或披露您的个人信息：
          </span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">
            事先已获得您的授权同意或符合您签署的其他文件（如本政策）的约定；
          </span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">遵守适用的法律法规；</span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">遵守法院命令或其他法律程序的规定；</span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">遵守相关政府机关的要求；</span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">
            与国家安全、国防安全、公共安全、公共卫生、公共利益直接相关的；
          </span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">
            从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道；
          </span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">
            我们认为为遵守适用的法律法规、维护社会公共利益、或保护我们、我们的客户、其他用户或雇员的人身和财产安全或合法权益所合理必需的；
          </span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">法律法规规定的其他情形。</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">4.2转让</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            我们不会将您的个人信息转让给任何公司、组织和个人，但以下情况除外：
          </span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">
            在获取明确同意的情况下转让：获得您的明确同意后，我们会向其他方转让您的个人信息；
          </span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">
            在涉及合并、收购或破产清算时，如涉及到个人信息转让，我们会在要求新的持有您个人信息的公司、组织继续受此隐私政策的约束，否则我们将要求该公司、组织重新向您征求授权同意。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">4.3公开披露</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">我们仅会在以下情况下，公开披露您的个人信息：</span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">获得您明确同意后；</span>
        </p>
        <p style="margin-top: 0pt;margin-left: 24pt;margin-bottom: 0pt;text-indent: -21pt;font-size: 10pt;">

          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: 'Times New Roman'; font-size: 10.5pt">●</span>
          <span style="font: 7pt 'Times New Roman'">
            &#xa0;&#xa0;&#xa0;&#xa0;
          </span>
          <span style="font-family: '微软雅黑'">
            基于法律的披露：在法律、法律程序、诉讼或政府主管部门强制性要求的情况下，我们可能会公开披露您的个人信息。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">5.我们如何保护您的个人信息</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            我们非常重视信息安全，我们使用各种安全技术和程序，以防信息的丢失、不当使用、未经授权阅览或披露。例如，在某些服务中，我们将利用加密技术（例如SSL）来保护您向我们提供的个人信息。
          </span>
          <span style=" font-weight: bold">
            但请您谅解，由于技术的限制以及风险防范的局限，即便我们已经尽量加强安全措施，也无法始终保证信息百分之百的安全。
          </span>
          <span style="font-family: '微软雅黑'">
            您需要了解，您接入我们的服务所用的系统和通讯网络，有可能因我们可控范围外的情况而发生问题。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            我们建立了信息安全制度等，我们会采取适当的符合业界标准的安全措施和技术手段存储和保护您的个人信息，以防止您的信息丢失、收到被未经授权的访问、使用、毁损或泄漏。如发生大批量个人信息泄露、毁损或丢失事件等重大安全事件，一经发生公司将启动紧急预案、组成应急响应小组进行处理。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            在不幸发生重大安全事件后，我们将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。我们将及时将事件相关情况以邮件、信函、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            我们也请您理解，在互联网行业由于技术的限制和飞速发展以及可能存在的各种恶意攻击手段，即便本单位竭尽所能加强安全措施，也不可能始终保证信息的百分之百安全。因此，
          </span>
          <span style=" font-weight: bold">
            我们强烈建议您采取积极措施保护个人信息的安全，包括但不限于使用复杂密码、定期修改密码、不将自己的账号密码等个人信息透露给他人。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">6.您的权利</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">访问权</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">原则上您可以通过如下方式访问您的个人信息：</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            账号信息：您可以随时登录您的个人账号，访问或编辑您的账号中的个人资料信息、更改您的密码、添加安全信息、进行账号关联或身份认证等；
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            使用信息：您可以在我们的网站、客户端等服务中查阅订单信息等，您也可通过本政策文末提供的方式联系我们删除这些信息，我们将在核实您的身份后提供，但法律法规另有约定的除外；
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            其他信息：如您在此访问过程中遇到操作问题的或如需获取其他前述无法获知的个人信息内容，您可通过本政策文末提供的方式联系我们，我们将在核实您的身份后提供，但法律法规另有约定的除外。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">更正权</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            经对您的身份进行验证，且更正不影响信息的客观性和准确性的情况下，您有权对错误或不完整的信息作出更正或更新，您可以自行在我们的网站或客户端中进行更正，或在特定情况下，尤其是数据错误时，通过本政策文末提供的联系方式将您的更正申请提交给我们，要求我们更正或更新您的数据，但法律法规另有规定的除外。但出于安全性和身份识别的考虑，您可能无法修改注册时提交的某些初始注册信息。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">删除权</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            您可以通过本政策文末提供的联系方式向我们提出删除您个人信息的请求，例如您不再需要我们继续为您提供服务，但已做数据匿名化处理或法律法规另有规定的除外。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">索取权</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            如您需要您的个人数据的副本，您可以通过本政策文末提供的方式联系我们，在核实您的身份后，我们将向您提供您在我们的服务中的个人信息副本（例如基本资料、身份信息），但法律法规另有规定的除外。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">撤回同意权</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            如您想更改相关功能的授权范围（例如位置、通讯录、相机），您可以通过您的硬件设备修改个人设置、或在我们的产品或服务中的相关功能设置界面进行操作处理。如您在此过程中遇到操作问题的，可以通过本政策文末提供的方式联系我们。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            当您取消相关个人信息收集的授权后，我们将不再收集该信息，也无法再为您提供上述与之对应的服务；但您知悉并同意，除非您行使前述"删除权"，否则您的该行为不会影响我们基于您之前的授权进行的个人信息的处理、存储。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">7.我们如何处理儿童的个人信息</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold; text-decoration: underline">
            如您为14岁以下（含）的未成年人的，请务必请您的父母或监护人仔细阅读本隐私权政策，
          </span>
          <span style="font-family: '微软雅黑'">
            并在征得您的父母或监护人同意的前提下使用我们的服务或向我们提供信息。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            对于经父母或监护人同意使用我们的产品或服务而收集未成年人个人信息的情况，我们只会在法律法规允许、父母或监护人明确同意或者保护未成年人所必要的情况下使用、共享、转让或披露此信息。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            如父母或监护人发现相关未成年人信息为未成年人自行填写，需要进行修改或删除处理的，请随时与我们联系。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            联系邮箱（同为个人信息保护相关负责人联系方式）：
          </span>
          <span style=" color: #111">{pageData.email}</span>
          <span style="font-family: '微软雅黑'">。</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">我们收到通知后会第一时间予以响应处理。</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">8.您的个人信息如何在全球范围转移</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            我们在中华人民共和国境内运营中收集和产生的个人信息，存储在中国境内，以下情形除外：
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">1、法律法规有明确规定；</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">2、获得您的明确授权；</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">3、您通过互联网进行跨境交易等个人主动行为。</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            针对以上情形，我们会确保依据本隐私权政策对您的个人信息提供足够的保护。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">9.本政策如何更新</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            我们的隐私政策可能变更。未经您明确同意，我们不会削减您按照本隐私政策所应享有的权利。
          </span>
          <span style=" font-weight: bold; text-decoration: underline">
            我们会在网站、客户端等发布对本政策所做的任何变更。
          </span>
          <span style="font-family: '微软雅黑'">
            对于重大变更，我们还会尽量提供更为显著的通知（包括我们会通过
          </span>
          <span style=" color: #111">{pageData.appName}</span>
          <span style="font-family: '微软雅黑'">
            官网公示的方式进行通知甚至向您提供弹窗提示）。
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style=" font-weight: bold">10.如何联系我们</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            您可以通过以下方式与我们联系，我们将在15天内回复您的请求：
          </span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">
            1、如对本政策内容有任何疑问、意见或建议，您可通过
          </span>
          <span style=" color: #111">{pageData.email}</span>
          <span style="font-family: '微软雅黑'">与我们联系；</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">2、如发现个人信息可能被泄露，您可以通过</span>
          <span style=" color: #111">{pageData.email}</span>
          <span style="font-family: '微软雅黑'">投诉举报；</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10pt">
          <span style="font-family: '微软雅黑'">3、人工客服电话：</span>
          <span style=" color: #111">{pageData.phone}</span>
          <span style="font-family: '微软雅黑'">。</span>
        </p>
        <p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 10.5pt">
          <span style="font-family: Calibri">&#xa0;</span>
        </p>
      </div>
    );
  },
});

export default Private;
