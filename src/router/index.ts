import { createRouter, createWebHashHistory, RouteRecordRaw, _RouteRecordBase } from 'vue-router'
import MainLayout from '@/layout/mainLayout'
import TitleLayout from '@/layout/titleLayout'
import { useUserStore } from '@/store/user'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      index: 21,
      type: 'user'

    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/login'),
  },
  {
    path: '/',
    redirect: '/school',
    component: MainLayout,
    children: [
      {
        path: '/school',
        name: 'school',
        meta: {
          index: 11,
          type: 'main'
        },
        component: () => import(/* webpackChunkName: "school" */ '@/views/main/school'),
      },
      {
        path: '/plan',
        name: 'plan',
        meta: {
          index: 12,
          type: 'main'
        },
        component: () => import(/* webpackChunkName: "plan" */ '@/views/main/plan'),
      },
      {
        path: '/my',
        name: 'my',
        meta: {
          index: 13,
          type: 'main'
        },
        component: () => import(/* webpackChunkName: "my" */ '@/views/main/my'),
      },
    ]
  },
  {
    path: '/other',
    component: TitleLayout,
    children: [
      {
        path: '/question',
        name: 'question',
        meta: {
          label: '客服中心',
          index: 1,

          type: 'other'
        },
        component: () => import(/* webpackChunkName: "question" */ '@/views/other/question'),
      },
      {
        path: '/protocol',
        name: 'protocol',
        meta: {
          label: '用户协议',
          index: 1,

          type: 'other'
        },
        component: () => import(/* webpackChunkName: "protocol" */ '@/views/other/protocol'),
      },
      {
        path: '/private',
        name: 'private',
        meta: {
          label: '隐私政策',
          index: 1,

          type: 'other'
        },
        component: () => import(/* webpackChunkName: "private" */ '@/views/other/private'),
      },
      {
        path: '/cancellation',
        name: 'cancellation',
        meta: {
          label: '账号注销协议',
          index: 1,

          type: 'other'
        },
        component: () => import(/* webpackChunkName: "cancellation" */ '@/views/other/cancellation'),
      },
      {
        path: '/lesson',
        name: 'lesson',
        meta: {
          label: '视频',
          index: 1,
          type: 'other'
        },
        component: () => import(/* webpackChunkName: "lesson" */ '@/views/other/lesson'),
      },
      {
        path: '/news',
        name: 'news',
        meta: {
          label: '资讯',
          index: 1,
          type: 'other'
        },
        component: () => import(/* webpackChunkName: "news" */ '@/views/other/news'),
      },
      {
        path: '/parent',
        name: 'parent',
        meta: {
          label: '家长监督',
          index: 1,
          type: 'other'
        },
        component: () => import(/* webpackChunkName: "parent" */ '@/views/other/parent'),
      },

    ]
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { userInfo } = useUserStore()
  console.log(location, to)
  if (!userInfo && !['/login', '/protocol', '/private', '/cancellation'].includes(to.path)) {
    next('/login')
    return
  }
  if (!!userInfo && to.path === '/login') {
    next(from.path)
  }
  next()
})

router.afterEach((to, from, failure) => {
  console.log()
  document.getElementById('app')?.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

export default router