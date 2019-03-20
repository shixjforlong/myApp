import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./order.scss";

export default class Order extends Component {
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
    return <View className="index">订单</View>;
  }
}
