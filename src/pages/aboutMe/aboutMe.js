import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./aboutMe.scss";

export default class AboutMe extends Component {
  config = {
    navigationBarTitleText: "关于我"
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
    return <View className="index">关于</View>;
  }
}
