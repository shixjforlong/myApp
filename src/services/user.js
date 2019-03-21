import Taro, { Component } from "@tarojs/taro";

export function getUserInfo() {
  return Taro.request({
    url:
      "https://svc-test.inhand.com.cn/api2/users/this?verbose=3&access_token=586673038bd8d5bdff2b32535fdf7c5a",
    method: "GET"
  });
}
