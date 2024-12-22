/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "@/api/axiosInstance";

// Function to make an API request and return only the data
export async function makeApiRequest<T>(
  config: AxiosRequestConfig
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios(config);
    return response.data;
  } catch (error) {
    console.error("API Request Error: ", error);
    throw error;
  }
}

// Function to make an API request and return the full response (headers, status, etc.)
export async function makeApiRequestWithHeaderResponse<T>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  try {
    const response: AxiosResponse<T> = await axios(config);
    return response;
  } catch (error) {
    console.error("API Request Error: ", error);
    throw error;
  }
}

// Function to create an Axios configuration for making requests
export function createApiConfig(
  url: string,
  method: AxiosRequestConfig["method"],
  params?: { [key: string]: any },
  data?: any,
  responseType?: AxiosRequestConfig["responseType"],
  headers?: { [key: string]: string }
): AxiosRequestConfig {
  const config: AxiosRequestConfig = {
    method,
    url,
    params,
    data,
    responseType,
    headers,
  };

  return config;
}
