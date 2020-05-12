import axios, { AxiosRequestConfig } from 'axios'

export class ServerError extends Error {
  response: any
  constructor(message?: string) {
    super(message)

    Error.captureStackTrace(this, ServerError)

    this.name = 'ServerError'

    return this
  }
}

export function setupInterceptor(): void {
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    },
  )
}
/**
 * Fetch data
 *
 * @param {string} url
 * @param {Object} options
 * @param {string} [options.method] - Request method ( GET, POST, PUT, ... ).
 * @param {string} [options.payload] - Request body.
 * @param {Object} [options.headers]
 *
 * @returns {Promise}
 */
export function request(url: string, options: any = {}): Promise<any> {
  const config = {
    method: 'GET',
    ...options,
  }
  const errors = []

  if (!url) {
    errors.push('url')
  }

  if (!config.payload && config.method !== 'GET' && config.method !== 'DELETE') {
    errors.push('payload')
  }

  if (errors.length) {
    throw new Error(`Error! You must pass \`${errors.join('`, `')}\``)
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
    requestConfig.data = JSON.stringify(config.payload)
  }

  return axios
    .request(requestConfig)
    .then(async (response) => response.data)
    .catch(async (err) => {
      const { response } = err
      const error: any = new ServerError(response.statusText)
      error.status = response.status
      error.response = await response.data
      throw error
    })
}
