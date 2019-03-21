import Taro from "@tarojs/taro";
import { observable } from "mobx";

const userStore = observable({
  userName: "shixj"
});

export default userStore;
