import { defineComponent, h, KeepAlive, ref, Transition, watch } from "vue";
import planImage from "@/assets/image/plan.png";
import planActiveImage from "@/assets/image/plan_active.png";
import schoolImage from "@/assets/image/school.png";
import schoolActiveImage from "@/assets/image/school_active.png";
import myImage from "@/assets/image/my.png";
import myActiveImage from "@/assets/image/my_active.png";
import "./mainLayout.less";
import { useRoute, useRouter } from "vue-router";
import { Tabbar, TabbarItem } from "vant";

const tabBarList = [
	{
		name: "启航学园",
		img: schoolImage,
		activeImage: schoolActiveImage,
		path: "/school",
	},
	{
		name: "生涯规划",
		img: planImage,
		activeImage: planActiveImage,
		path: "/plan",
	},
	{
		name: "我的",
		img: myImage,
		activeImage: myActiveImage,
		path: "/my",
	},
];

const MainLayout = defineComponent({
	setup() {
		const route = useRoute();
		const router = useRouter();
		const name = ref('slide-left')
		watch(() => route, (n, o) => {
			console.log({ n, o })
			name.value = (n?.meta?.index || 0) < (o?.meta?.index || 0) ? 'slide-left' : 'slide-right'


		}, {
			immediate: true,
			deep: true
		})
		return () => (
			<div {...{ class: "main-layout" }}>
				<div {...{ class: "content " }}>
					<router-view>
						{/* {{
							default: ({ route, Component }) => <Transition {...{}}>
								{h(Component, { key: route.fullPath, class: 'wrapper-content' })}
							</Transition>
						}} */}
					</router-view>
				</div>
				<Tabbar {...{ route: true, fixed: true, activeColor: "#13C2C2", modelValue: route.path, class: 'tab-bar', placeholder: true }}>
					{
						tabBarList.map(({ name, img, activeImage, path }, i) => <TabbarItem {...{ key: i, class: `tab-bar-item ${path === route.path ? "active" : ""}`, name: path, to: path }}>
							{
								{
									default: () => <span>{name}</span>,
									icon: ({ active }) => {
										console.log({ active })
										return <img {...{ src: active ? activeImage : img, to: path, }}></img>
									}
								}
							}
						</TabbarItem>)
					}
				</Tabbar>
				{/* <div {...{ class: "tab-bar" }}>
					{tabBarList.map(({ name, img, activeImage, path }, i) => (
						<div
							{...{
								key: i,
								class: `tab-bar-item ${path === route.path ? "active" : ""}`,
								onClick: () => {
									router.replace(path);
								},
							}}>
							<img {...{ src: path === route.path ? activeImage : img }}></img>
							<p>{name}</p>
						</div>
					))}
				</div> */}
			</div>
		);
	},
});

export default MainLayout;
