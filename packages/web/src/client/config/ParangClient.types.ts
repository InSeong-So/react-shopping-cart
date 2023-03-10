export type RequestMethodType =
  | 'get'
  | 'post'
  | 'put'
  | 'patch'
  | 'delete'
  | 'options'
  | 'head'
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'
  | 'OPTIONS'
  | 'HEAD';

export type RequestHeaders = Record<string, string> | Headers;

export type ResponseType = 'text' | 'json' | 'stream' | 'blob' | 'arrayBuffer' | 'formData';

export type Options = Partial<{
  url: string;
  method: RequestMethodType;
  headers: RequestHeaders;
  body: FormData | string | object;
  responseType: ResponseType;
  params: string | URLSearchParams | string[][] | Record<string, string> | undefined;
  paramsSerializer: (params: Options['params']) => string;
  withCredentials: boolean;
  auth: string;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  validateStatus: (status: number) => boolean;
  // @see : https://splunktool.com/axios-transformrequest-how-to-alter-json-payload
  transformRequest: Array<(body: unknown, headers?: RequestHeaders) => unknown | null>;
  baseURL: string;
  fetch: typeof window.fetch;
  data: BodyInit;
  signal: AbortSignal;
  // 요청 전 / 요청 성공 / 요청 실패
  authCallback: (...args: unknown[]) => void;
  trackerCallback: (...args: unknown[]) => void;
  errorInterceptor: (...args: unknown[]) => void;
}>;

export type Response<T> = {
  config: Options;
  data: T | null;
  redirect: boolean;
  readonly body: ReadableStream<Uint8Array> | null;
  readonly bodyUsed: boolean;
  arrayBuffer(): Promise<ArrayBuffer>;
  blob(): Promise<Blob>;
  formData(): Promise<FormData>;
  json(): Promise<any>;
  text(): Promise<string>;
  readonly headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly type: ResponseType;
  readonly url: string;
  clone(): Response<T>;
};
