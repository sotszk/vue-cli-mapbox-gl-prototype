import Vue from 'vue';
import { Fetcher } from './api';

declare module 'vue/types/vue' {
  interface Vue {
    $_api: null;
    $_fetcher: Fetcher;
  }
}
