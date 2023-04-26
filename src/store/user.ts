import { defineStore } from "pinia"
import { login } from "@/services"
import { Toast } from 'vant';

export const useUserStore = defineStore('storeUser', {
  state() {
    return {
      userInfo: null,
      model: false
    }
  },
  actions: {
    async login(data: { username: string, password: string }) {
      try {
        const res = await login(data)
        // @ts-ignore
        this.userInfo = res
        console.log(this.model)
        return true
        // console.log(router)
        // router.push('/')
      } catch (e) {
        console.log(e)
        Toast("账号或密码错误")
        return false
      }

    },
    logout() {
      this.userInfo = null
    },
    getModel() {
      console.log(this.model, window.JsBridge?.getModel?.())
      if (window.JsBridge) this.model = window.JsBridge?.getModel?.();
      else {
        window?.mstJsBridge?.call("getModel", {}, (data) => {
          console.log('model', data)
          // console.log(data);
          this.model = !!data?.model
          console.log(this.model)
        });
      }
      console.log(this.model)

    },
    createModelFunction() {
      window.getAndroidModel = (model) => {
        console.log(model, typeof model)
        // console.log(this.model)
        // console.log(window.JsBridge)
        // this.getModel()
        this.model = model === 'false' ? false : true
      }
    },
    changeModel() {
      const cModel = !this.model
      if (window.JsBridge) {
        window.JsBridge?.setModel?.(cModel)
      } else {
        window?.mstJsBridge?.call("setModel", { model: cModel }, ({ model }) => {
          this.model = cModel
        });
      }

    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'users',
        storage: localStorage,
        paths: ['userInfo']
      }
    ],
  },
})