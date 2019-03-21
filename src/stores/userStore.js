import Taro from "@tarojs/taro";
import { observable, action } from "mobx";
import { getUserInfo } from "../services/user";

class UserStore {
  @observable userName = "shixj";

  @action
  getUser() {
    return getUserInfo().then(res => {
      console.log(res);
    });
  }
}

export default new UserStore();
