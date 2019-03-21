import Taro, { Component } from "@tarojs/taro";
import { View, Text, ScrollView } from "@tarojs/components";
import { AtForm, AtInput, AtButton } from "taro-ui";
import Echart from "../chart/chart";
import Replenishment from "./replenishment/replenishment";
import { observer, inject } from "@tarojs/mobx";
import "./index.scss";
import index1Png from "../images/index1.jpg";
import index2Png from "../images/index2.jpg";
import index3Png from "../images/index3.jpg";
import index4Png from "../images/index4.jpg";

@inject("userStore")
@observer
export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页",
    navigationBarBackgroundColor: "#39334c",
    navigationBarTextStyle: "white",
    backgroundColor: "black"
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
    const {
      userStore: { userName }
    } = this.props;
    console.log(userName);
    return (
      <View className="index">
        <View className="topItem">
          <View className="chartItem">
            <Echart />
          </View>
          <View className="statisticItem">
            <View className="sItem">
              <Text>200</Text>
              <Text className="sText">销售量(件)</Text>
            </View>
            <View className="sline">|</View>
            <View className="sItem">
              <Text>36,200</Text>
              <Text className="sText">销售额(元)</Text>
            </View>
            <View className="sline">|</View>
            <View className="sItem">
              <Text>6830</Text>
              <Text className="sText">广告收入(元)</Text>
            </View>
          </View>
        </View>
        <View className="contentItem">
          <View className="conItem">
            <Image className="icon" src={index1Png} />
            <Text className="sTitle">3402</Text>
            <Text className="sText">缺货机器</Text>
          </View>
          <View className="conItem">
            <Image className="icon" src={index2Png} />
            <Text className="sTitle">445</Text>
            <Text className="sText">故障机器</Text>
          </View>
          <View className="conItem">
            <Image className="icon" src={index3Png} />
            <Text className="sTitle">38</Text>
            <Text className="sText">配货单</Text>
          </View>
          <View className="conItem">
            <Image className="icon" src={index4Png} />
            <Text className="sTitle">38</Text>
            <Text className="sText">热销数据</Text>
          </View>
        </View>
        <View>
          <Replenishment />
        </View>
      </View>
    );
  }
}
