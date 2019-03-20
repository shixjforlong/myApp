import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

export default class detail extends Component {
  config = {
    navigationBarTitleText: "补货详情"
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
    return <View className="index">售货机详情页面</View>;
  }
}
