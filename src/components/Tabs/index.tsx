import { defineComponent, reactive } from "vue";
import { PropType } from "vue";
import { Tabs, Tab } from "vant";
import "./index.less";

const TabList = defineComponent({
	props: {
		list: {
			type: Array as PropType<{ name: string; title: string }[]>,
			default: () => [],
		},
		onChange: {
			type: Function as PropType<(...args: any[]) => any>,
			default: () => { },
		},
	},
	setup(props) {
		console.log({ props });
		const params = reactive({
			activeKey: props.list[0]?.name || "",
		});

		return () => (
			<div {...{ class: "tab-list" }}>
				{/* <Tabs {...{ onChange: props.onChange, shrink: true }}>
					{props.list.map((item, i) => (
						<Tab {...{ ...item }}></Tab>
					))}
				</Tabs> */}
				<div {...{ class: "tab-list-cont" }}>
					{props?.list.map(({ title, name }, i) => (
						<div {...{
							key: name,
							class: `tab-item ${name === params.activeKey ? "active" : ""}`,
							onClick: () => {
								params.activeKey = name;
								props?.onChange?.(name);
							}
						}}>
							{title}
						</div>
					))}
				</div>
			</div>
		);
	},
});

export default TabList;
