import { defineComponent, onMounted, reactive, ref, watch } from "vue";
import "./index.less";
import eyeImage from "@/assets/image/eye.png";
import privateImage from "@/assets/image/private.png";
import parentImage from "@/assets/image/parent.png";
import protocolImage from "@/assets/image/protocol.png";
import questionImage from "@/assets/image/question.png";
import rightArrowImage from "@/assets/image/right-arrow.png";
import { Dialog, Switch, Toast } from "vant";
import myBgImage from "@/assets/image/myBg.png";
import avatarImage from "@/assets/image/avatar.png";
import sex1Image from "@/assets/image/sex1.png";
import sex2Image from "@/assets/image/sex2.png";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";
import { storeToRefs } from 'pinia'
const My = defineComponent({
	setup() {

		const router = useRouter()
		const { userInfo, logout, changeModel, getModel } = useUserStore()

		const { model } = storeToRefs(useUserStore())
		watch(() => model, () => {
			console.log('reRenderModel', model.value)
		}, {
			deep: true,
			immediate: true
		})

		const list = [
			{
				name: "护眼模式",
				icon: eyeImage,
				key: "eye",
			},
			{
				name: "家长监督",
				icon: parentImage,
				key: "/parent",
			},
			{
				name: "用户协议",
				icon: protocolImage,
				key: "/protocol",
			},
			{
				name: "隐私政策",
				icon: privateImage,
				key: "/private",
			},
			{
				name: "客服中心",
				icon: questionImage,
				key: "/question",
			},
		];
		const triggerToLogout = async () => {
			try {
				await Dialog.confirm({
					title: '提示',
					message:
						'确定要退出登录吗?',
					confirmButtonColor: '#13C2C2'
				})
				Toast.success({
					message: '退出登录成功',
					duration: 1000,
					onClose: () => {
						logout()
						router.replace('/login')

					}
				})
			} catch (e) {
				console.log(e)

			}
		}
		// const userInfo = reactive({
		// 	username: "北洛",
		// 	password: "123456",
		// 	phone: "13123456789",
		// 	sex: 1,
		// });
		// const getModel = () => {
		// 	if (window.JsBridge) model.value = window.JsBridge?.getModel?.();
		// 	else if (window.mstJsBridge) {
		// 		window?.mstJsBridge?.call("getModel", {}, (data) => {
		// 			console.log('model', data)
		// 			// console.log(data);
		// 			model.value = !!data?.model
		// 		});
		// 	}
		// 	console.log('getModel', model.value)
		// }

		// const onChangeModel = () => {
		// 	console.log('changeModel')
		// 	console.log(window?.mstJsBridge?.call)
		// 	console.log('setModel2', !model.value)
		// 	if (window.JsBridge) {
		// 		console.log('setModel1', !model.value)
		// 		window.JsBridge?.setModel?.(!model.value)
		// 		getModel()
		// 	} else if (window?.mstJsBridge) {
		// 		window?.mstJsBridge?.call("setModel", { model: !model.value }, (data) => {
		// 			console.log('-----123', data)
		// 			console.log('-----12345', model.value)
		// 			// getModel()
		// 			model.value = !model.value
		// 			console.log('-----1234', model.value)
		// 		});
		// 	}
		// 	// getModel()
		// };
		onMounted(() => {
			document.addEventListener('visibilitychange', () => {
				if (!document.hidden) {
					getModel()
				}
			})
		})

		// getModel()

		return () => (
			<div {...{ class: "my" }}>
				<div {...{ class: 'top-image' }}>
					<img {...{ src: myBgImage }}></img>
				</div>
				<div {...{ class: "user-info" }}>
					<img {...{ src: avatarImage, class: "avatar" }}></img>
					<div>
						<p {...{ class: "user-name" }}>
							<span>{userInfo?.username}</span>
							<img {...{ src: userInfo?.sex === '男' ? sex1Image : sex2Image }}></img>
						</p>
						<p {...{ class: "phone" }}>{userInfo?.phone?.replace?.(/^(\d{3})\d{4}(\d+)/, "$1****$2")}</p>
					</div>
				</div>
				<div {...{ class: "list" }}>
					{list.map(({ name, icon, key }) => (
						<div
							{...{
								key,
								class: "item",
								onClick: () => {
									if (key === "eye") {
										return;
									}
									router.push(key)
								},
							}}>
							<img {...{ src: icon, class: "left-icon" }}></img>
							<p>{name}</p>
							{key === "eye" ? (
								<Switch
									{...{
										class: "right-switch",
										modelValue: model.value,
										onClick: (e) => {
											console.log('currentModel', model.value)
											e.stopPropagation();
											// model.value = !model.value;
											changeModel()
										},
									}}></Switch>
							) : (
								<img {...{ src: rightArrowImage, class: "right-arrow-img" }}></img>
							)}
						</div>
					))}
				</div>
				<p {...{ class: 'logout', onClick: triggerToLogout }}><span>退出登录</span></p>
			</div>
		);
	},
});

export default My;
