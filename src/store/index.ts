import Vue from 'vue';
import Vuex from 'vuex';
import * as root from './root';
import { account } from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'productionn',

  ...root,
  modules: {
    account,
  },
});

export default store;
