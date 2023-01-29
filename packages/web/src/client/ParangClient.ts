import { request } from './ParangClient.request';
import { Options, Response } from './ParangClient.types';

class ParangClient {
  public static all = Promise.all.bind(Promise);

  constructor(public defaults: Options = {}) {
    // 어떤 props도 없다면 withCredentials 설정
    if (Object.keys(this.defaults).length < 1) {
      this.defaults.withCredentials = true;
    }

    // 어떤 header도 없다면 Request 방식 설정
    if (!this.defaults.headers) {
      this.defaults.headers = {
        'X-Requested-With': 'XMLHttpRequest',
      };
    }
  }

  public create = (customOptions?: Options) => {
    return new ParangClient(customOptions);
  };

  public setConfig = (newProps: Record<string, string | Record<string, string>>) => {
    for (const key in newProps) {
      if (key.includes('@@DEL@@')) {
        // @ts-ignore
        delete this.defaults[key];
        continue;
      }
      // @ts-ignore
      this.defaults[key] = newProps[key];
    }
  };

  public get = <T>(url: string, config?: Options): Promise<Response<T>> => {
    return request<T>(url, config || {}, 'get', undefined, this.defaults);
  };

  public delete = <T>(url: string, config?: Options): Promise<Response<T>> => {
    return request<T>(url, config || {}, 'delete', undefined, this.defaults);
  };

  public head = <T>(url: string, config?: Options): Promise<Response<T>> => {
    return request<T>(url, config || {}, 'head', undefined, this.defaults);
  };

  public options = <T>(url: string, config?: Options): Promise<Response<T>> => {
    return request<T>(url, config || {}, 'options', undefined, this.defaults);
  };

  public post = <T = unknown>(
    url: string,
    body?: BodyInit,
    config?: Options,
  ): Promise<Response<T>> => {
    return request<T>(url, config || {}, 'post', body, this.defaults);
  };

  public put = <T = unknown>(
    url: string,
    body?: BodyInit,
    config?: Options,
  ): Promise<Response<T>> => {
    return request<T>(url, config || {}, 'put', body, this.defaults);
  };

  public patch = <T = unknown>(
    url: string,
    body?: BodyInit,
    config?: Options,
  ): Promise<Response<T>> => {
    return request<T>(url, config || {}, 'patch', body, this.defaults);
  };

  public static spread = <Args, R>(fn: (...args: Args[]) => R): ((...args2: Args[]) => R) => {
    // @ts-ignore
    return fn.apply.bind(fn, fn);
  };

  public abortSignal = (timeoutMs = 3000) => {
    const abortController = new AbortController();
    setTimeout(() => abortController.abort(), timeoutMs);
    return abortController.signal;
  };
}

const parangClient = new ParangClient();

export default parangClient;
