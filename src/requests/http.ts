import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HttpClientError<T extends object = {}> extends Error {
  status: number
  response?: T
}

export interface Response<T> {
  data?: T
  status: number
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS'
export interface RequestOptions<T> {
  payload?: T
  method?: HttpMethod
  headers?: object
}

const request = async <R extends object = {}, P extends object = {}, E extends object = {}>(
  url: string,
  options?: RequestOptions<P>,
): Promise<Response<R>> => {
  const config: RequestOptions<P> = {
    method: 'GET',
    ...options,
  }

  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    ...config.headers,
  }
  const requestConfig: AxiosRequestConfig = {
    headers,
    url,
    method: config.method,
    timeout: 60000,
    withCredentials: true,
  }

  if (requestConfig.method !== 'GET') {
    requestConfig.data = config.payload
  }
  try {
    const response: AxiosResponse<R> = await axios.request(requestConfig)
    const data: Response<R> = response as Response<R>
    return data
  } catch (err) {
    const { response } = err
    const error: HttpClientError<E> = {
      status: response.status,
      response: response.data,
      name: 'HttpClientError',
      message: response.statusText,
    }
    throw error
  }
}

export default { request }
