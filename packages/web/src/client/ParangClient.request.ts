import type { Options, RequestHeaders, Response } from './ParangClient.types';

export interface ParangClientError {
  name: string;
  message: string;
  stack?: string;
  status?: number;
  code?: number;
}

const deepMerge = <T, U>(opts: T, overrides: U, lowerCase = false) => {
  const out: any = {};

  if (Array.isArray(opts)) return opts.concat(overrides);

  for (const i in opts) {
    const key = lowerCase ? i.toLowerCase() : i;
    out[key] = opts[i];
  }

  for (const i in overrides) {
    const key = lowerCase ? i.toLowerCase() : i;
    const value = /** @type {unknown} */ overrides[i];
    out[key] =
      key in out && typeof value === 'object'
        ? deepMerge(out[key], value, key === 'headers')
        : value;
  }
  return out;
};

export const request = async <T>(
  urlOrConfig: string | Options,
  config?: Options,
  _method?: string,
  data?: BodyInit,
  defaults: Options = {},
  // eslint-disable-next-line max-params
): Promise<Response<T>> => {
  const response = {} as Response<T>;
  const customHeaders: RequestHeaders = {};

  let url = (typeof urlOrConfig !== 'string' ? (config = urlOrConfig).url : urlOrConfig) as string;
  const options: Options = deepMerge(defaults, config);
  let dataSet = data || options.data;

  (options.transformRequest || []).map((f) => {
    dataSet = (f(dataSet, options.headers) || dataSet) as BodyInit;
  });

  if (options.auth) customHeaders.authorization = options.auth;

  if (dataSet && typeof dataSet === 'object') {
    dataSet = JSON.stringify(dataSet);
    customHeaders['content-type'] = 'application/json';
  }

  try {
    // @ts-ignore
    customHeaders[options.xsrfHeaderName] = decodeURIComponent(
      // @ts-ignore
      document.cookie.match(RegExp('(^|; )' + options.xsrfCookieName + '=([^;]*)'))[2],
    );
  } catch (e) {
    // 처리하지 않음
  }

  if (options.baseURL) {
    url = url.replace(/^(?!.*\/\/)\/?/, options.baseURL + '/');
  }

  if (options.params) {
    url +=
      (~url.includes('?') ? '&' : '?') +
      (options.paramsSerializer
        ? options.paramsSerializer(options.params)
        : new URLSearchParams(options.params));
  }

  const fetcher = window.fetch;
  const method = (_method || options.method || 'get').toUpperCase();

  if (options.trackerCallback) {
    options.trackerCallback('event', 'x-api', {
      type: 'request',
      method,
      path: url,
    });
  }

  const start = Date.now();
  try {
    const fetchResponse = await fetcher(url, {
      method,
      body: dataSet,
      headers: deepMerge(options.headers, customHeaders, true),
      credentials: options.withCredentials ? 'include' : undefined,
      signal: options.signal || null,
    });

    for (const i in fetchResponse) {
      // @ts-ignore
      if (typeof fetchResponse[i] !== 'function') response[i] = fetchResponse[i];
    }

    if (options.responseType === 'stream') {
      // @ts-ignore
      response.data = fetchResponse.body;
      return response;
    }

    const parsedData = await fetchResponse[options.responseType || 'text']();
    response.data = parsedData;
    // 방어 코드
    response.data = JSON.parse(parsedData);

    if (options.trackerCallback) {
      options.trackerCallback('event', 'x-api', {
        type: 'response',
        method,
        path: url,
        status: response.status,
        time: Date.now() - start,
      });
    }

    const ok = options.validateStatus
      ? options.validateStatus(fetchResponse.status)
      : fetchResponse.ok;
    return ok ? response : Promise.reject(response);
  } catch (err) {
    if (options.trackerCallback) {
      options.trackerCallback('event', 'x-api', {
        type: 'response',
        method,
        path: url,
        status: (err as ParangClientError).status,
        time: Date.now() - start,
      });
    }

    if ((err as Error).name === 'AbortError')
      return Promise.reject({
        message: '너무 빠른 재요청으로 해당 요청은 취소되었습니다.',
        code: 406,
      });

    if (options.errorInterceptor) options.errorInterceptor(err);

    throw err;
  }
};
