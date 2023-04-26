import { defineComponent } from "vue";
import { parentPhoneList } from "@/mock";
import { Tab, Tabs } from 'vant'
import './index.less'
const numJson = {
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五'
}

const Parent = defineComponent({
  setup() {
    return () => <div {...{ class: 'parent' }}>
      <div {...{ class: 'cont' }}>
        <p {...{ class: 'info' }}>为了更好的监督孩子的学习，让孩子在使用手机学习过程中有效参与学习互动，防止学习时使用其他非学习软件，我们为各位家长提供不同手机机型的监管教程。请根据你所使用的手机品牌选择教程进行家长监管模式。</p>
        <Tabs {...{
          swipeable: true, sticky: true, onChange: () => {
            document.getElementById('app')?.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            })

          }
        }}>
          {
            parentPhoneList.map(({ steps, key, name }, i) => <Tab {...{ key, title: name }}>
              {
                steps.map((item, j) => <div {...{ key: `${key}-${j}` }}>
                  {/* {
                    // @ts-ignore
                    steps.length > 1 && <p {...{ class: 'step' }}>第{numJson[j + 1]}步</p>
                  } */}
                  {
                    // @ts-ignore
                    <p {...{ class: 'step' }}>第{numJson[j + 1]}步</p>
                  }
                  {
                    item.map((sItem, ii) => <div {...{ key: ii }}>
                      {sItem.type === 'text' ? <p {...{ class: 'text' }}>{sItem.content}</p> : <img {...{ src: sItem.content }}></img>}
                    </div>)
                  }
                </div>)
              }

            </Tab>)
          }
        </Tabs>
      </div>
    </div>
  }
})

export default Parent