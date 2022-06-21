import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import deepExtend from 'deep-extend';
import qs from 'qs';

export async function request<Data, Error>(
  endpoint: string,
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<Data, AxiosError<Error>>> {
  const DEFAULT_API_CONFIG = {
    baseURL: process.env.API,
    returnRejectedPromiseOnError: true,
    timeout: 30000,
    headers: {
      common: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    },
    paramsSerializer: (params: string) =>
      qs.stringify(params, { indices: false })
  };

  const response: AxiosResponse<Data> | AxiosError<Error> = await axios({
    ...deepExtend(DEFAULT_API_CONFIG, config),
    url: endpoint
  });

  return response;
}
