import { apiClient } from './defaults';

export const request = async (client, options) => {
  const onSuccess = (response) => response.data;

  const onError = async (error) => Promise.reject(error.response);

  return client(options).then(onSuccess).catch(onError);
};

export const apiRequest = async (options) => request(apiClient, options);
