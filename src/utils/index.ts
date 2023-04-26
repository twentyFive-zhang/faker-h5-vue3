import { Toast, Dialog } from "vant";
import type { ToastOptions, DialogOptions } from "vant";


export const showToast = (config: ToastOptions) => {
  Toast({
    teleport: '#app',
    ...config
  })

}

export const showDialog = (config: DialogOptions) => {

  Dialog({
    confirmButtonColor: "#13C2C2",
    ...config
  });
}