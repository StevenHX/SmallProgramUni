import { InjectionKey } from "@vue/runtime-core"
import { createStore, Store, useStore as baseUseStore } from "vuex"
import VuexPersistence from 'vuex-persist'// vuex 持久化默认localstrage
import { store as app, AppState } from "./modules/app"

//定义RootState接口，将所有模块类型放入
export interface RootState {
  app: AppState
}
export const key: InjectionKey<Store<RootState>> = Symbol()

const vuexLocal = new VuexPersistence({
	saveState: (key, state, storage) => {
		uni.setStorageSync(key, JSON.stringify(state));
	},
	restoreState: (key, storage) => {
		if (!uni.getStorageSync(key)) return '';
	    const state: AppState = JSON.parse(uni.getStorageSync(key))
		return state;
	},
	modules: ['app']
})
export const store: Store<RootState> = createStore({
  modules: { app },
  plugins: [vuexLocal.plugin],
})

export function useStore() {
  return baseUseStore(key)
}

