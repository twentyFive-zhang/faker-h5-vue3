//@ts-nocheck
import { defineComponent, reactive } from "vue";
import './index.less'
import { useRoute } from "vue-router";
import { getLessonDetail } from "@/services";
import { Divider } from "vant";
import teacherImage from '@/assets/image/teacher.png'


const Lesson = defineComponent({
  setup() {
    const route = useRoute()
    const pageData = reactive({
      data: {}

    })
    const getDetail = async () => {
      const data = await getLessonDetail(route.query)
      console.log(data)
      pageData.data = data
    }
    getDetail()
    console.log(route, route.query)
    return () => <div {...{ class: 'lesson' }}>
      <div {...{ class: 'video-cont' }}>
        <video {...{
          src: pageData.data.videoUrl, controls: true,
          controlslist: 'nodownload',
          // controlslist: ['nodownload', 'nofullscreen', 'noremoteplayback', 'disablePictureInPicture', 'noplaybackrate'].join(' '),
          disablePictureInPicture: true

        }}></video>
      </div>
      <div {...{ class: 'info-cont title-cont' }}>
        <p {...{ class: `title-line ${pageData.data.title ? '' : 'skeleton-item'}` }}>{pageData.data.title}</p>
      </div>
      <div {...{ class: 'info-cont content-cont' }}>
        <div>
          <p {...{ class: `title-line` }}>内容简介</p>
          <p {...{ class: `content-item ${!pageData.data.id ? 'skeleton-item' : ''}` }}>{pageData.data.content}</p>
        </div>
        <Divider></Divider>
        <div>
          <p {...{ class: `title-line` }}>讲师介绍</p>
          <div {...{ class: 'avatar-cont' }}>
            <img {...{ src: teacherImage }}></img>
            <p {...{ class: `${!pageData.data.id ? 'skeleton-item' : ''}` }}>{pageData.data.teacherTeam?.substring(0, pageData.data.teacherTeam.indexOf('团队') + 2)}</p>
          </div>
          <p {...{ class: `content-item ${!pageData.data.id ? 'skeleton-item' : ''}` }}>{pageData.data.teacherTeam}</p>
        </div>
      </div>
    </div>;
  },
});

export default Lesson
