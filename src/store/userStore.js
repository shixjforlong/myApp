import Taro from "@tarojs/taro";
import { observable } from "mobx";
import { getUserInfo } from "../services/user";

const userStore = observable({
  userName: "shixj",
  getUser() {
    getUserInfo().then(res => {
      console.log(res);
    });
  }
});

export default userStore;
