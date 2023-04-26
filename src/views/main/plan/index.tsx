import { defineComponent, reactive } from "vue";
import "./index.less";
import { getPlanList } from "@/services";
import TabList from "@/components/Tabs";
import rightArrowImage from "@/assets/image/right-arrow.png";
import { Sticky, Image } from "vant";
import { useRouter } from "vue-router";
const typeList = [
	{
		name: "careerPlan",
		title: "生涯规划",
	},
	{
		name: "volunteering",
		title: "志愿填报",
	},
	{
		name: "professionalKnowledge",
		title: "职业专业认知",
	},
	{
		name: "universityStyle",
		title: "大学风采",
	},
];

const Plan = defineComponent({
	setup() {
		const params = reactive({
			type: typeList[0].name,
		});
		const router = useRouter()

		const pageData = reactive<{ list: any[], isLoaded: boolean }>({
			list: [
				{
					type: 'lesson', name: '视频', list: [{}, {}, {}]
				},
				{
					type: 'news', name: '资讯', list: [{}, {}, {}]
				},
			],
			isLoaded: false
		})

		const getList = async () => {
			//@ts-ignore
			const data: any[] = await getPlanList(params);
			console.log({ data })
			pageData.list = data
			pageData.isLoaded = true
		};
		getList()
		return () => (
			<div {...{ class: "plan" }}>
				<Sticky {...{ class: 'plan-sticky ' }}>
					<div {...{ class: 'title-line' }}>生涯规划</div>
					<TabList
						{...{
							list: typeList,
							onChange: (type) => {

								document.getElementById('app')?.scrollTo({
									top: 0,
									left: 0,
									behavior: 'smooth'
								})
								params.type = type
								getList()
							},
						}}></TabList>
				</Sticky>
				<div {...{ class: 'main-list' }}>
					{
						pageData.list.map(({ type, name, list }) => <div {...{ key: type }}>
							<p {...{ class: 'type-name' }}>{name}</p>
							<div {...{ class: 'main-list-content' }}>
								{
									list.map((item, i) => <div {...{
										key: i, class: `main-item main-item-${type} `, onClick: () => {
											console.log(item)
											if (!item.id) return

											router.push({
												path: `/${item.type}`,
												query: { id: item.id, from: item.key }
											})
										}
									}}>
										<div {...{ class: `coverImage ${!item.id ? 'skeleton-item' : ''}` }}>
											{
												// <Image {...{ src: `/image/data/${params.type}/${sItem.id}.png`, style: { width: '100%', height: '100%' } }}></Image>
												item.id && <Image {...{ src: `/image/data/${type}/${item.id}.png`, style: { width: '100%', height: '100%' } }}></Image>
											}
										</div>
										<p {...{ class: `main-item-title ${type === 'lesson' ? 'van-ellipsis' : 'van-multi-ellipsis--l2'} ${!item.id ? 'skeleton-item' : ''}` }}>{item.title}</p>
										{
											type !== 'lesson' && pageData.isLoaded && <div {...{ class: 'main-item-check' }}>查看<img {...{ src: rightArrowImage }}></img></div>
										}
									</div>)
								}
							</div>
						</div>)
					}
					{
						pageData.isLoaded && <p {...{ class: 'more-info' }}>更多内容，敬请期待</p>
					}
				</div>
			</div>
		);
	},
});

export default Plan;
