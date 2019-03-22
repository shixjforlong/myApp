import Taro from "@tarojs/taro";
import { stringify } from "qs";
import { checkStatus, isAuthError, shouldThrowError } from "./common";
import { refreshToken } from "../services/user";
import { AtMessage } from "taro-ui";

export default function request(url, options, retry = true) {
  let defaultOptions = {
    method: "get"
  };
  const tokenItem = Taro.getStorageSync("token");
  if (tokenItem) {
    const token = JSON.parse(tokenItem).access_token;
    defaultOptions = {
      ...defaultOptions,
      headers: {
        Authorization: `${token}`
      }
    };
  }
  const newOptions = { ...defaultOptions, ...options };
  const method = newOptions.method.toLowerCase();

  if (method === "post" || method === "put") {
    newOptions.headers = {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      ...newOptions.headers
    };

    if (typeof newOptions.body !== "string") {
      switch (newOptions.headers["Content-Type"]) {
        case "application/json; charset=utf-8":
          newOptions.body = JSON.stringify(newOptions.body);
          break;
        case "application/x-www-form-urlencoded;charset=UTF-8":
          newOptions.body = stringify(newOptions.body);
          break;
        default:
          break;
      }
    }
  }

  let newUrl = url;
  if (newOptions.params && url.indexOf("?") === -1) {
    newUrl = `${url}?${stringify(newOptions.params)}`;
  }

  newUrl = "https://svc-test.inhand.com.cn" + newUrl;

  return Taro.request({
    url: newUrl,
    method: newOptions.method,
    data: newOptions.body,
    header: newOptions.headers
  })
    .then(checkStatus)
    .then(response => {
      if (response.data.error && retry && isAuthError(response.data)) {
        return refreshToken()
          .then(() => {
            return request(url, options, false);
          })
          .catch(() => response.data);
      }
      return response.data;
    })
    .then(response => {
      if (response.error) {
        if (shouldThrowError(response)) {
          Taro.atMessage({
            message: "系统错误",
            type: "error"
          });
        }
      }
      return response;
    });
}
