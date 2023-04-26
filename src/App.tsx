import { defineComponent, Fragment, Transition, h, KeepAlive, onMounted, watch, ref, toRaw } from "vue";
import { Button, ConfigProvider, Toast } from "vant";
// @ts-ignore
import { useUserStore } from "./store/user";
import { useRoute } from 'vue-router';
import { appData } from "./mock";


const App = defineComponent({
	setup() {
		document.title = appData.appName;
		const transitionName = ref('')
		const { getModel, createModelFunction } = useUserStore()
		getModel()
		createModelFunction()
		const routeData = useRoute()
		Toast.setDefaultOptions({ forbidClick: true });
		watch(() => routeData.meta.type, (n, o) => {
			console.log(n, o)
			if (!o || n === o) {
				transitionName.value = ''
			} else {
				if (n === 'other' || (n === 'main' && o === 'user')) {
					transitionName.value = 'slide-right'
				} else {
					transitionName.value = 'slide-left'

				}
			}

		}, {
			immediate: true,
			deep: true
		})
		return () => (
			<ConfigProvider
				{...{
					themeVars: {
						textColor: "#333333",
						textColor3: "#ccc",
						themeColor: "#13C2C2",
						primaryColor: "#13C2C2",
						buttonPrimaryBackgroundColor: "#13C2C2",
						buttonPrimaryBorderColor: "#13C2C2",
						radioCheckedIconColor: "#13C2C2",
						dialogConfirmButtonTextColor: "#13C2C2",
						switchOnBackgroundColor: "#13C2C2",
						tabsBottomBarColor: "#13C2C2",
						navBarIconColor: "#13C2C2",
						navBarTextColor: "#13C2C2",
						tabActiveTextColor: "#13C2C2",
					},
				}}>
				<div id="page-main" class="wrapper">
					<router-view>
						{{
							default: ({ route, Component }) => {
								console.log({ route, routeData })
								return <Transition {...{ name: transitionName.value }}>
									{h(Component, { key: route.fullPath, class: 'wrapper-content' })}
								</Transition>
							}
						}}
					</router-view>
				</div>
			</ConfigProvider >
		);
	},
});
export default App;
