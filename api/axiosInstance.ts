/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const instance = axios.create({
  baseURL: "https://my.api.mockaroo.com",
});

instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    try {
      if (!error.response) {
        return Promise.reject(error);
      }
    } catch ({ err }: any) {
      return Promise.reject(err);
    }
  }
);
export default instance;
