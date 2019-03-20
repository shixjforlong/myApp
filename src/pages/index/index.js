import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtForm, AtInput, AtButton } from "taro-ui";
import "./index.scss";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "订单"
  };
  constructor() {
    super(...arguments);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className="index">首页</View>;
  }
}
