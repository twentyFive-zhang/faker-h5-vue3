import excelData from "./data";
import appIconImage from "@/assets/image/icon.png";
import huaweiImage from "@/assets/image/parent/huawei.jpg";
import meizuImage from "@/assets/image/parent/meizu.jpg";
import oppo1Image from "@/assets/image/parent/oppo1.jpg";
import oppo2Image from "@/assets/image/parent/oppo2.jpg";
import vivoImage from "@/assets/image/parent/vivo.jpg";

export const appData = {
	appName: "乐教乐学云教育",
	companyName: "珠海市乐教乐学信息科技有限公司",
	email: "2830810890@qq.com",
	phone: "13068696125",
	icon: appIconImage,
};

const question = [
	{
		title: "人工客服电话与在线时间？",
		content: "人工客服的电话是13068696125。\n工作日与节假日客服的工作时间都是8:00-22:00。",
	},
	{
		title: "如何注册账号？",
		content:
			"当您在电商平台或向线下销售人员完成付款后，工作人员会向您获取相关信息，并完成注册动作，完成后会通知您账号与密码。",
	},
	{
		title: "如何注销账号？",
		content: `如果有注销账号的需求，可以联系人工客户处理。\n温馨提示：\n1. 您仅可注销本人新申请的账号。\n2. 注销后，账号下的全部权益将被清除。\n3. 注销后，账号下的所有数据、记录等将无法访问和找回。\n4. 账号一旦注销完成，将无法恢复。\n5. 账号注销申请自受理之日起，会在15个工作日内完成。\n`,
	},
	{ title: "视频是对应哪个版本的教材？", content: "新人教版本。" },
];

export const parentPhoneList = [
	{
		name: "苹果",
		key: "apple",
		steps: [
			[
				{ type: "text", content: "打开设置-通用-辅助功能-引导式访问" },
				{
					type: "image",
					content:
						"https://festatic.estudy.cn/assets/xhx-mobile/parentalMonitoringGuide/apple/apple-01@2x.jpg",
				},
				{
					type: "image",
					content:
						"https://festatic.estudy.cn/assets/xhx-mobile/parentalMonitoringGuide/apple/apple-02@2x.jpg",
				},
			],
			[
				{ type: "text", content: "打开引导式访问-密码设置" },
				{
					type: "image",
					content:
						"https://festatic.estudy.cn/assets/xhx-mobile/parentalMonitoringGuide/apple/apple-03@2x.jpg",
				},
			],
			[
				{
					type: "text",
					content: `打开${appData.appName}，连续点击Home按钮3次（iPhoneX及后续机型按3次右侧按钮），进入引导式访问，点击开始后即可在${appData.appName}进行学习`,
				},
			],
			[
				{
					type: "text",
					content: `学习结束后，点击屏幕左上方结束按钮，按提示输入密码即可退出引导式访问`,
				},
			],
		],
	},
	{
		name: "华为",
		key: "Huawei",
		steps: [
			[
				{ type: "text", content: "打开设置-健康使用手机，选择孩子使用" },
				{
					type: "image",
					content:
						"https://festatic.estudy.cn/assets/xhx-mobile/parentalMonitoringGuide/huawei/huawei-01@2x.jpg",
				},
			],
			[
				{
					type: "text",
					content: `点击应用限额，禁止使用非学习相关APP，允许使用${appData.appName}并设置时长（时间请大于孩子学习时间）`,
				},
				{ type: "image", content: huaweiImage },
			],
			[
				{
					type: "text",
					content: `打开${appData.appName}APP完成学习后，点击底部按钮关闭儿童模式`,
				},
				{
					type: "image",
					content:
						"https://festatic.estudy.cn/assets/xhx-mobile/parentalMonitoringGuide/huawei/huawei-04@2x.jpg",
				},
			],
		],
	},
	{
		name: "魅族",
		key: "Meizu",
		steps: [
			[
				{ type: "text", content: "打开设置-辅助功能-儿童空间" },
				{
					type: "image",
					content:
						"https://festatic.estudy.cn/assets/xhx-mobile/parentalMonitoringGuide/meizu/meizu-01@2x.jpg",
				},
				{
					type: "image",
					content:
						"https://festatic.estudy.cn/assets/xhx-mobile/parentalMonitoringGuide/meizu/meizu-02@2x.jpg",
				},
			],
			[
				{
					type: "text",
					content: `在儿童空间设置每次可用时长（时间请大于孩子学习时间），设置允许访问应用，允许使用${appData.appName}APP`,
				},
				{
					type: "image",
					content:
						"https://festatic.estudy.cn/assets/xhx-mobile/parentalMonitoringGuide/meizu/meizu-03@2x.jpg",
				},
				{ type: "image", content: meizuImage },
			],
			[
				{
					type: "text",
					content: `打开${appData.appName}APP完成学习，然后点击下方退出儿童空间，按引导输入密码即可退出`,
				},
			],
		],
	},
	{
		name: "OPPO",
		key: "OPPO",
		steps: [
			[
				{ type: "text", content: "打开设置-安全-儿童空间" },
				{
					type: "image",
					content:
						"https://festatic.estudy.cn/assets/xhx-mobile/parentalMonitoringGuide/oppo/oppo-01@2x.jpg",
				},
				{
					type: "image",
					content:
						"https://festatic.estudy.cn/assets/xhx-mobile/parentalMonitoringGuide/oppo/oppo-02@2x.jpg",
				},
			],
			[
				{
					type: "text",
					content: `在儿童空间设置每次可用时长（时间请大于孩子学习时间），设置允许访问应用，允许使用${appData.appName}APP`,
				},
				{
					type: "image",
					content:
						"https://festatic.estudy.cn/assets/xhx-mobile/parentalMonitoringGuide/apple/apple-03@2x.jpg",
				},
				{
					type: "image",
					content:
						"https://festatic.estudy.cn/assets/xhx-mobile/parentalMonitoringGuide/oppo/oppo-04@2x.jpg",
				},
				{ type: "image", content: oppo1Image },
			],
			[
				{
					type: "text",
					content: `打开${appData.appName}APP完成学习，然后点击下方退出儿童空间，按引导输入密码即可退出`,
				},
				{ type: "image", content: oppo2Image },
			],
		],
	},
	{
		name: "VIVO",
		key: "VIVO",
		steps: [
			[
				{ type: "text", content: "打开工具-儿童模式，点击进入并按系统提示设置密码" },
				{
					type: "image",
					content:
						"https://festatic.estudy.cn/assets/xhx-mobile/parentalMonitoringGuide/vivo/vivo-01@2x.jpg",
				},
			],
			[
				{
					type: "text",
					content:
						`进入儿童模式后点击管理应用，禁止学习无关的软件，允许使用${appData.appName}（可用时长请大于孩子学习时间）`,
				},
				{
					type: "image",
					content:
						"https://festatic.estudy.cn/assets/xhx-mobile/parentalMonitoringGuide/vivo/vivo-02@2x.jpg",
				},
				{ type: "image", content: vivoImage },
			],
			[
				{
					type: "text",
					content: `打开${appData.appName}APP完成学习后，点击儿童模式右上角退出，按引导输入密码即可退出儿童模式`,
				},
			],
		],
	},
	{
		name: "小米",
		key: "XIAOMI",
		steps: [
			[
				{
					type: "text",
					content: "打开应用商店，搜索风筝守护并下载，根据引导绑定孩子手机，即可实现对孩子的监管",
				},
				{
					type: "image",
					content:
						"https://festatic.estudy.cn/assets/xhx-mobile/parentalMonitoringGuide/mi/mi-01@2x.jpg",
				},
			],
		],
	},
	{
		name: "其他机型",
		key: "Other",
		steps: [[{ type: "text", content: "其他机型请根据您具体的手机型号和系统引导设置监管模式" }]],
	},
];

const fakerData = { ...excelData, question };

export const urlJson = {
	"/plan/list": (params: {
		type: "careerPlan" | "volunteering" | "professionalKnowledge" | "universityStyle";
	}) => {
		const { type } = params;
		// @ts-ignore
		const list = fakerData[type]?.filter?.((item) => !item.isHide);
		return [
			{
				// @ts-ignore
				type: "lesson",
				list: list.filter?.((item: any) => item.type === "lesson"),
				name: "视频",
			},
			{
				// @ts-ignore
				type: "news",
				list: list.filter?.((item: any) => item.type === "news"),
				name: "资讯",
			},
		];
	},
	"/school/list": (params: { type: "physics" | "math" }) => {
		const { type } = params;
		const list = fakerData[type];
		const indexList = Array.from(new Set(list.map((item) => item.chapterId))).map((chapterId) => {
			// @ts-ignore
			const { chapterName } = list.find((item) => item.chapterId === chapterId);
			return {
				name: chapterName?.substring(0, chapterName?.indexOf("\n")) || chapterName,
				id: chapterId,
			};
		});
		return {
			indexList,
			list,
			bookList: fakerData.textBook.filter((sItem) => sItem.type === type),
			// @ts-ignore
			data: indexList.map((item) => {
				const cList = list.filter((sItem) => sItem.chapterId === item.id);
				return { ...item, list: !!cList?.[0]?.id ? cList : [] };
			}),
		};
	},
	"/question/list": () => {
		return fakerData.question;
	},
	"/lesson/detail": (params: { id: string | number; from: string }) => {
		const { id, from } = params;
		//@ts-ignore
		return fakerData?.[from].find((item) => item.id === id);
	},
	"/news/detail": (params: { id: string | number; from: string }) => {
		const { id, from } = params;
		//@ts-ignore
		return fakerData?.[from].find((item) => item.id === id);
	},
	"/login": (data: { username: string; password: string }) => {
		const { username, password } = data;
		const res = fakerData.accountInfo.find(
			(item) =>
				(item.username === username || item.phone === username) && item.password === password
		);
		// console.log(res, data)
		if (res) return res;
		return Promise.reject();
	},
};
