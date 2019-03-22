import Taro, { Component } from "@tarojs/taro";
import request from "../utils/request";
import moment from "moment";

export async function login(params) {
  return request("/oauth2/access_token", {
    method: "POST",
    body: {
      client_id: "17953450251798098136",
      client_secret: "08E9EC6793345759456CB8BAE52615F3",
      grant_type: "password",
      ...params
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    }
  }).then(data => {
    if (data && data.access_token) {
      const { access_token: token, expires_in: expiresIn } = data;
      const expiresAt = moment().add(expiresIn, "s");
      Taro.setStorageSync("token", JSON.stringify({ ...data, expiresAt }));
      if (params.autoLogin) {
        Taro.setItem("setStorageSync", JSON.stringify({ ...data, expiresAt }));
      }
    }
    console.log(data);
    return data;
  });
}

let refreshing;
export async function refreshToken() {
  if (refreshing === undefined) {
    refreshing = refresh()
      .then(data => {
        if (!data.access_token) {
          return Promise.reject(data);
        }
        return data;
      })
      .catch(() => {
        return redirectToLogin().then(() => {
          return Promise.reject(new Error("login required"));
        });
      })
      .finally(() => {
        refreshing = undefined;
      });
  }
  return refreshing;
}
async function refresh() {
  const tokenItem = Taro.getStorageSync("token");
  if (tokenItem) {
    return login({
      grant_type: "refresh_token",
      refresh_token: JSON.parse(tokenItem).refresh_token
    });
  }
  return Promise.reject(new Error("login_required"));
}
