import { VueConstructor } from 'vue';
import camelKeys from 'camelcase-keys';
import ky, { Input as KyInput, Options as KyOptions } from 'ky';

const BASE_URL_DEFAULT = 'https://qiita.com/api/v2';

const KY_OPTIONS_DEFAULT: KyOptions = {
  hooks: {
    beforeRequest: [],
    afterResponse: [
      async (_requst, _options, response) => {
        const body = await response.json();
        const { headers, status, statusText } = response;
        const init = {
          headers,
          status,
          statusText,
        };
        return new Response(
          new Blob([JSON.stringify(camelKeys(body), null, 2)], {
            type: 'application/json',
          }),
          init
        );
      },
    ],
  },
};

type FetcherMethod = <T = any>(
  input: KyInput,
  options?: KyOptions
) => Promise<T>;

export type Fetcher = {
  get: FetcherMethod;
};

type ApiPluginOptions = {
  baseUrl: string;
};

export const ApiPlugin = {
  install(
    Vue: VueConstructor,
    { baseUrl }: ApiPluginOptions = { baseUrl: BASE_URL_DEFAULT }
  ) {
    const kyInstance = ky.create({
      ...KY_OPTIONS_DEFAULT,
      prefixUrl: baseUrl,
    });

    const fetcher: Fetcher = {
      get: (input, options) => {
        return kyInstance.get(input, options).json();
      },
    };

    // eslint-disable-next-line @typescript-eslint/camelcase
    Vue.prototype.$_fetcher = fetcher;
    // eslint-disable-next-line @typescript-eslint/camelcase
    Vue.prototype.$_api = null;
  },
};
