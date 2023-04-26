import request from "@/utils/request";


export const getQuestionList = () => request({
  url: 'question/list',
  method: 'get',
})


export const getQuestionDetail = (params: any) => request({
  url: 'question/detail',
  method: 'detail',
  params
})