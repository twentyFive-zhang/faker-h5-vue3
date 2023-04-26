import { defineComponent, reactive } from "vue";
import { getQuestionList } from "@/services";
import './index.less'

const QuestionList = defineComponent({
  setup() {
    const pageData = reactive({
      list: []
    })
    const getList = async () => {
      const data = await getQuestionList()
      // @ts-ignore
      pageData.list = data
    }
    getList()
    return () => <div {...{ class: 'question-list' }}>
      {
        pageData.list.map(({ title, content }, i) => <div {...{ key: i, class: 'question-item' }}>
          <p {...{ class: 'question-title' }}>{i + 1}.{title}</p>
          <p {...{ class: 'question-content' }}>{content}</p>
        </div>)
      }
    </div>
  }
})

export default QuestionList