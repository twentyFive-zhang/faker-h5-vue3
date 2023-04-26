import { defineComponent, Fragment, reactive } from "vue";
import LoginBackImage from "@/assets/image/login.png";
import "./index.less";
import { Dialog, Field, Radio, Toast } from "vant";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";
import { appData } from "@/mock";


const protocolList = [
	{ title: '用户协议', path: '/protocol' },
	{ title: '隐私政策', path: '/private' },
	{ title: '账号注销协议', path: '/cancellation' },
]

const Login = defineComponent({
	setup() {
		const router = useRouter()
		const { login } = useUserStore()
		const data = reactive({
			username: "",
			password: "",
			check: false,
		});
		const onSubmit = async () => {
			if (!data.username) {
				Toast("请输入账号或手机号");
				return;
			}
			if (!data.password) {
				Toast("请输入密码");
				return;
			}
			if (!data.check) {
				Toast("请先同意下方协议");
				return;
			}
			const status = await login(data)

			if (status)
				Toast.success({
					message: '登录成功',
					duration: 1000,
					onClose: () => {
						router.push('/')
					}

				})
		};

		const triggerToFind = () => {
			Dialog.alert({
				title: "找回密码",
				message: `请拨打${appData.phone}客服热线`,
				confirmButtonColor: "#13C2C2",
				confirmButtonText: "知道了",
			});
		};

		return () => (
			<div {...{ class: "login" }}>
				<img {...{ class: "backImage", src: LoginBackImage }}></img>
				<div {...{ class: "logo" }}><img {...{ src: appData.icon }}></img></div>
				<div {...{ class: "content" }}>
					<Field
						{...{
							placeholder: "请输入账号或手机号",
							modelValue: data.username,
							"onUpdate:modelValue": (e) => {
								data.username = e;
							},
						}}></Field>
					<Field
						{...{
							placeholder: "请输入密码",
							type: "password",
							modelValue: data.password,
							clearable: true,
							"onUpdate:modelValue": (e) => {
								data.password = e;
							},
						}}></Field>
					<div {...{ class: "button", onClick: onSubmit }}>登 录</div>
					<div {...{ class: 'radio-line' }}>
						<Radio
							{...{
								name: true,
								shape: "square",
								iconSize: 16,
								modelValue: data.check,
								clearable: true,
								"onUpdate:modelValue": (e) => {
									data.check = !data.check;
								},
							}}>
						</Radio>
						<div>
							登录即表示您同意{protocolList.map(({ title, path }, i) => <Fragment {...{ key: i, }}><span {...{
								onClick: () => {
									console.log(111, path)
									router.push({ path })
								},
								class: 'protocol-item'
							}}>《{title}》</span>{i !== protocolList.length - 1 ? '、' : ''}</Fragment>)}</div>
					</div>
					<p {...{ class: "find" }}>
						<span {...{ onClick: triggerToFind }}>找回密码</span>
					</p>
				</div>
			</div >
		);
	},
});

export default Login;
