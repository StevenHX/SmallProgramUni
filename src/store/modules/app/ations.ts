import { ActionTree, ActionContext } from 'vuex'
import { RootState } from '@/store'
import { AppState } from './state'
import { Mutations } from './mutations'
import { AppActionTypes } from './action-types'
import { AppMutationTypes } from './mutation-types'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
} & Omit<ActionContext<AppState, RootState>, 'commit'>


export const actions: ActionTree<AppState, RootState> & Actions = {
  [AppActionTypes.ACTION_LOGIN]({ commit }: AugmentedActionContext) {
    commit(AppMutationTypes.SET_TOKEN, "xxxxxxxxx")
  },
  [AppActionTypes.ACTION_RESET_TOKEN]({ commit }: AugmentedActionContext) {
    commit(AppMutationTypes.SET_TOKEN, '')
  },
}