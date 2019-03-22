import Taro from "@tarojs/taro";
import { observable, action } from "mobx";
import { login } from "../services/user";
import { md5 } from "../utils/md5";

class LoginStore {
  @observable username = "";
  @observable password = "";

  @action
  setUserName(username) {
    this.username = username;
  }

  @action
  setPassword(password) {
    this.password = password;
  }

  @action
  reset() {
    this.username = "";
    this.password = "";
  }

  @action
  async login() {
    const pwd = md5(this.password).toUpperCase();
    const params = {
      username: this.username,
      password: pwd,
      password_type: 2
    };
    return await login(params);
  }
}

export default new LoginStore();
