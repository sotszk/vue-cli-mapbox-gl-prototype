import { Module } from 'vuex';
import { RootState } from '../root';

export type AccountState = {
  name: string | null;
};

export type AccountModule = Module<AccountState, RootState>;

const state: AccountModule['state'] = {
  name: null,
};

const mutations: AccountModule['mutations'] = {
  setName(state, name: AccountState['name']) {
    state.name = name;
  },
};

const accountModule: AccountModule = {
  namespaced: true,
  state,
  mutations,
};

export default accountModule;
