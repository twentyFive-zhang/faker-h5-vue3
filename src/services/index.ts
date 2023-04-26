import request from "@/utils/fakerRequest";

export const login = (data: { username: string, password: string }) => request({
  url: '/login',
  method: 'post',
  data
})

export const getPlanList = (params: { type: string }) => request({
  url: '/plan/list',
  method: 'get',
  params
})


export const getSchoolList = (params: { type: string }) => request({
  url: '/school/list',
  method: 'get',
  params
})

export const getQuestionList = () => request({
  url: '/question/list',
  method: 'get',
})

export const getLessonDetail = (params: { id: string | number, from: string }) => request({
  url: '/lesson/detail',
  method: 'get',
  params
})
export const getNewsDetail = (params: { id: string | number, from: string }) => request({
  url: '/news/detail',
  method: 'get',
  params
})