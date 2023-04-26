// @ts-nocheck
import { defineComponent, KeepAlive } from "vue";
import { NavBar, Dialog, Sticky } from "vant";
import { useRoute, useRouter } from "vue-router";
import './titleLayout.less'
import { showDialog } from "@/utils";
import { appData } from "@/mock";



const TitleLayout = defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const rightJson = {
      'question': {
        rightText: '客服电话',
        onClickRight: () => {
          showDialog({
            title: '客服电话',
            message: `请拨打${appData.phone}客服热线`,
            confirmButtonText: '知道了'
          })

        }
      }
    }
    // watch()
    return () => <div {...{ class: 'title-layout van-safe-area-bottom' }}>
      <NavBar {...{
        fixed: true,
        safeAreaInsetTop: true,
        placeholder: true,
        title: route.meta?.label, leftArrow: true, onClickLeft: () => {
          router.go(-1)
        }, ...rightJson[route.name]
      }}></NavBar>
      <router-view {...{ class: 'title-content' }}></router-view>
    </div>
  }
})

export default TitleLayout
