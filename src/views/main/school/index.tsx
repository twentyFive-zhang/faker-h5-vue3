//@ts-nocheck

import TabList from "@/components/Tabs";
import { Sticky, IndexBar, IndexAnchor, Tabs, Tab, Image, Picker, Popup, ConfigProvider } from "vant";
import { defineComponent, reactive, Fragment, ref } from "vue";
import "./index.less";
import { getSchoolList } from "@/services";
import playImage from '@/assets/image/play.png'
import type { IndexBarInstance, TabsInstance } from 'vant';
import { useRouter } from 'vue-router'
import switchImage from '@/assets/image/switch.png'


const typeList = [{ name: 'math', title: '数学' }, { name: 'physics', title: '物理' }]

const School = defineComponent({
	setup() {
		const indexBarRef = ref<IndexBarInstance>();
		const tabsRef = ref<TabsInstance>();
		const params = reactive({ type: typeList[0].name })
		const router = useRouter()

		const pageData = reactive({
			indexList: [{}, {}, {}],
			list: [{ list: [{}, {}, {}, {}, {}] },],
			activeIndex: 0,
			isLoaded: false,
			bookList: [],
			choseBook: {},
			showPicker: false,
			tabListData: [
				{
					list: [{}, {}, {}, {}, {}]
				},
				{
					list: [{}, {}, {}, {}, {}]
				},
				{
					list: [{}, {}, {}, {}, {}]
				},
			]
		})

		const getList = async () => {
			const data = await getSchoolList(params)
			console.log({ data })
			pageData.isLoaded = true
			pageData.tabListData = data?.data
			pageData.activeIndex = data?.data?.filter(item => !!item.list?.length)?.[0]?.chapterId
			pageData.bookList = data.bookList.map(item => ({ ...item, text: `${item.bookName}${item.disabled ? `(敬请期待)` : ''}`, value: item.index }))
			pageData.choseBook = pageData.bookList.filter(item => !item.disabled)[0]

		}

		getList()

		return () => (
			<div {...{ class: "school" }}>
				<Sticky {...{ class: 'school-sticky' }}>
					<div {...{ class: 'title-line' }}>启航学园<span {...{
						class: 'book', onClick: () => {
							pageData.showPicker = true
						}
					}}>{pageData.choseBook.text}<img {...{ src: switchImage }}></img></span></div>
					<div {...{ class: 'tabList' }}>
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
					</div>
				</Sticky>
				<Popup {...{ show: pageData.showPicker, position: 'bottom', }}>
					<ConfigProvider {...{
						themeVars: {
							'picker-cancel-action-color': "#13C2C2",
							'picker-confirm-action-color': "#13C2C2",
						}
					}}>
						<Picker {...{
							columns: pageData.bookList, modelValue: pageData.choseBook.value, title: '切换教材', onCancel: () => {
								pageData.showPicker = false
							},
							onConfirm: () => {
								pageData.showPicker = false
							}
						}}></Picker>
					</ConfigProvider>
				</Popup>
				<div {...{ class: "main-list" }}>
					<div {...{ class: "left-cont" }}>
					</div>
					<div {...{ class: "right-list", id: 'right-list' }}>
						<Tabs {...{
							scrollspy: true,
							ref: tabsRef,
							modelValue: pageData.activeIndex,
							ellipsis: false
						}}>
							{
								pageData.tabListData?.map(item => <Tab {...{
									title: item?.name, key: item?.id,
									disabled: !item.list?.length
								}}>
									{
										{
											default: () => item?.list?.map((sItem, j) => {
												return <div {...{ class: 'video-item' }}>
													<div {...{
														key: j,
														class: `coverImage  ${!pageData.isLoaded ? 'skeleton-item' : ''}`, onClick: () => {
															// console.log(sItem)
															if (!sItem.id) return

															router.push({
																path: `/${sItem.type}`,
																query: { id: sItem.id, from: sItem.key }
															})
														}
													}}>
														{
															pageData.isLoaded &&
															<Fragment>
																<Image {...{ src: `/image/data/${params.type}/${sItem.id}.png`, style: { width: '100%', height: '100%' } }}></Image>

																<img {...{ src: playImage, class: 'play-icon' }}></img>
															</Fragment>
														}
													</div>


													{
														pageData.isLoaded && <p {...{ class: 'title van-ellipsis' }}>{sItem.title}</p>
													}
												</div>
											}),
											title: () => !item.list?.length ? <div>
												<p>{item?.name}</p>
												<p {...{ class: 'plus-text' }}>生产中</p>
											</div> : <div>{item?.name}</div>
										}
									}

								</Tab>
								)
							}

						</Tabs>

						{
							pageData.isLoaded && <p {...{ class: 'more-info' }}>更多内容，敬请期待</p>
						}
						{/* <IndexBar {...{
							indexList: pageData.indexList?.map(item => item.id), onChange: e => {
								// console.log({ e })
								// pageData.activeIndex = e
							},
							ref: indexBarRef
						}}>
							{
								pageData.list.map((item, i) => <Fragment {...{ key: i }}>
									<IndexAnchor {...{ index: item.index }}>
										{
											item.list.map((sItem, j) => <div {...{
												key: j, class: `video-item ${!pageData.isLoaded ? 'skeleton-item' : ''}`,
											}}>
												<div {...{
													class: `coverImage  ${!pageData.isLoaded ? 'skeleton-item' : ''}`, onClick: () => {
														console.log(sItem)
														if (!sItem.id) return

														router.push({
															path: `/${sItem.type}`,
															query: { id: sItem.id, from: sItem.key }
														})
													}
												}}>
													{
														pageData.isLoaded &&
														<Fragment>
															<img {...{ src: 'https://5-img.bokecc.com/comimage/479645DF56640DE7/2022-04-01/4DB0D517DBDC96203F35109F9F77F2A8-1.jpg' }}></img>

															<img {...{ src: playImage, class: 'play-icon' }}></img>
														</Fragment>
													}
												</div>
												{
													pageData.isLoaded && <p {...{ class: 'title van-ellipsis' }}>{sItem.title}</p>
												}

											</div>)
										}
									</IndexAnchor>
								</Fragment>)
							}
						</IndexBar> */}
					</div>
				</div>
			</div>
		);
	},
});

export default School;
