import { Toast } from "vant";
import { urlJson } from "@/mock";


const request = ({ url, method, params, data }: { url: string, method: 'post' | 'get', params?: any, data?: any }) => {
  return new Promise((resolve, reject) => {
    Toast.loading({
      duration: 500,
      onClose: () => {
        // @ts-ignore
        resolve(urlJson?.[url]?.(params || data))
      }
    })
    // @ts-ignore
    // resolve(urlJson?.[url]?.(params || data))
  })

}

export default request