import { createApiConfig } from "@/api/apiHelper";
import type { AxiosRequestConfig } from "axios";

const ORDER_LIST_API = "/OrderList.json?key=a7f10450";

export const getDashboardOrderList = (): AxiosRequestConfig =>
  createApiConfig(ORDER_LIST_API, "get");
