import Taro from "@tarojs/taro";
import { observable } from "mobx";

const LoginStore = observable({
  values: {
    username: "",
    password: ""
  },

  setUserName(username) {
    this.values.username = username;
  },

  setPassword(password) {
    this.values.password = password;
  },

  reset() {
    this.values.username = "";
    this.values.password = "";
  },

  login() {
    return Taro.request({
      url: "https://svc-test.inhand.com.cn/oauth2/access_token",
      method: "POST",
      data: {
        client_id: "17953450251798098136",
        client_secret: "08E9EC6793345759456CB8BAE52615F3",
        grant_type: "password",
        password_type: "2",
        username: this.values.username,
        password: this.values.password
      },
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      success(res) {
        if (res.data.error_code == null) {
          return res.data;
        }
      },
      error(e) {}
    });
  }
});

export default LoginStore;
