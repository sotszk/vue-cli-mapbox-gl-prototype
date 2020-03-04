import { MutationTree } from 'vuex';

export type RootState = {
  count: number;
};

export const state: RootState = {
  count: 0,
};

export const mutations: MutationTree<RootState> = {
  increment(state) {
    state.count = state.count + 1;
  },
};
