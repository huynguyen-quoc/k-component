import HttpClient, { Response, RequestOptions } from './http'
import axios, { AxiosError } from 'axios'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

interface ResponseData {
  result: string
}

interface RequestData {
  fieldFirst: string
}
interface ResponseErrorData {
  error: string
}
describe('Http Client', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  describe('`GET` Http Method', () => {
    it('should return correct response', async () => {
      mockedAxios.request.mockResolvedValue({ data: { result: 'test' } })
      const response: Response<ResponseData> = await HttpClient.request<ResponseData, {}>('http://localhost')
      expect(response.data?.result).toBe('test')
      expect(mockedAxios.request).toHaveBeenCalledTimes(1)
      const requestCalledData = {
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        method: 'GET',
        timeout: 60000,
        url: 'http://localhost',
        withCredentials: true,
      }
      expect(mockedAxios.request).toHaveBeenCalledWith(requestCalledData)
    })
    it('should reject for a  bad request', async () => {
      const err: AxiosError<ResponseErrorData> = {
        code: '400',
        isAxiosError: true,
        config: {},
        name: 'error',
        message: 'error_message',
        toJSON: () => {
          return {}
        },
        response: {
          data: { error: 'FAILED' },
          status: 400,
          statusText: 'Bad Request',
          headers: {},
          config: {},
        },
      }
      mockedAxios.request.mockImplementation(() => Promise.reject(err))
      try {
        await HttpClient.request<ResponseData, {}>('http://localhost')
      } catch (e) {
        expect(e.response).toEqual({ error: 'FAILED' })
        expect(e.status).toBe(400)
      }
    })
  })
  describe('`POST` Http Method', () => {
    it('should return correct response with body', async () => {
      mockedAxios.request.mockResolvedValue({ data: { result: 'test' } })
      const payload: RequestData = { fieldFirst: 'test' }
      const config: RequestOptions<RequestData> = { method: 'POST', payload: payload }
      const response: Response<ResponseData> = await HttpClient.request<ResponseData, RequestData>(
        'http://localhost',
        config,
      )
      expect(response.data?.result).toBe('test')
      expect(mockedAxios.request).toHaveBeenCalledTimes(1)
      const requestCalledData = {
        data: payload,
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        method: 'POST',
        timeout: 60000,
        url: 'http://localhost',
        withCredentials: true,
      }
      expect(mockedAxios.request).toHaveBeenCalledWith(requestCalledData)
    })
  })
})
