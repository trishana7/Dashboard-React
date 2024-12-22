/* eslint-disable @typescript-eslint/no-explicit-any */
import { extractErrorMessage } from "@/utils/errorMessageUtils";
import { showErrorModal } from "@/utils/sweetAlertModalUtils";
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
      const errorMessage = extractErrorMessage(error.response.data.message);
      showErrorModal({
        imageUrl: "/error.png",
        errorTitle: "Application ran into an error",
        errorMessage: errorMessage || "Something went wrong!",
        customTitleClass: "custom-title",
      });
    } catch ({ err }: any) {
      return Promise.reject(err);
    }
  }
);
export default instance;
