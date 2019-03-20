import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtTabs, AtTabsPane } from "taro-ui";
import AllDevice from "../components/allDevice/allDevice";
import "./device.scss";

export default class Device extends Component {
  config = {
    navigationBarTitleText: "售货机"
  };
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }

  handleClick(value) {
    this.setState({
      current: value
    });
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const tabList = [
      { title: "全部" },
      { title: "缺货售货机" },
      { title: "故障售货机" }
    ];
    return (
      <AtTabs
        current={this.state.current}
        tabList={tabList}
        onClick={this.handleClick.bind(this)}
      >
        <AtTabsPane current={this.state.current} index={0}>
          <View style="background-color: #FAFBFC;">
            <AllDevice />
          </View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <View style="background-color: #FAFBFC;">缺货售货机</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          <View style="background-color: #FAFBFC;">故障售货机</View>
        </AtTabsPane>
      </AtTabs>
    );
  }
}
