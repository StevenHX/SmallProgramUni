import { Module } from 'vuex'
import { RootState } from '@/store'
import { state } from './state'
import { actions } from './ations'
import { mutations } from './mutations'
import type { AppState } from './state'

export { AppState }

export const store: Module<AppState, RootState> = {
  state,
  actions,
  mutations,
}
