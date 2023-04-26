// @ts-nocheck

import { getNewsDetail } from "@/services";
import { defineComponent, reactive } from "vue";
import { useRoute } from "vue-router";
import './index.less'

const News = defineComponent({
  setup() {
    const route = useRoute()
    const pageData = reactive({
      data: {},
    })
    const getDetail = async () => {
      const data = await getNewsDetail(route.query)
      console.log(data)
      pageData.data = data
      const contentNode = document.createRange().createContextualFragment(data.content);
      document.getElementsByClassName('news-content')[0].appendChild(contentNode)

    }
    getDetail()
    return () => <div {...{ class: 'news-detail' }}>
      <div {...{ class: 'news-content' }}>

        <div {...{ class: `news-title ${!pageData.data.id ? 'skeleton-item' : ''}` }}>{pageData.data?.title}</div>
        {
          !pageData.data.id && <div {...{ class: 'skeleton-item content-skeleton', }}></div>
        }
      </div>
    </div>;
  },
});

export default News
