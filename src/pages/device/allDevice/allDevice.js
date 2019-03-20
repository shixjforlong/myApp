import Taro, { Component } from "@tarojs/taro";
import { View, Text, ScrollView, Image } from "@tarojs/components";
import devicePng from "../../images/device.jpg";
import morePng from "../../images/more.png";
import offlinePng from "../../images/1.jpg";
import coinPng from "../../images/2.jpg";
import faultPng from "../../images/3.jpg";
import "./allDevice.scss";

export default class allDevice extends Component {
  config = {
    navigationBarTitleText: ""
  };
  constructor() {
    super(...arguments);
    this.state = {
      deviceList: [
        {
          id: "1111",
          assetId: "151111",
          online: "1",
          siteName: "启明国际大厦11层",
          lineName: "望京街道线",
          todayIncome: 56400,
          todayVolume: 1354,
          fault: "0",
          coin: "0",
          emptyState: "7/1"
        },
        {
          id: "2222",
          assetId: "cloud1",
          online: "0",
          siteName: "华彩大厦",
          lineName: "望京街道线",
          todayIncome: 76565,
          todayVolume: 4565,
          fault: "1",
          coin: "1",
          emptyState: "7/1"
        },
        {
          id: "3333",
          assetId: "cloud2",
          online: "1",
          siteName: "首都机场",
          lineName: "望京街道线",
          todayIncome: 23432,
          todayVolume: 3456,
          fault: "0",
          coin: "1",
          emptyState: "7/1"
        }
      ]
    };
  }
  navigate(url) {
    Taro.navigateTo({ url: url });
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { deviceList } = this.state;
    return (
      <ScrollView
        scroll-y
        scroll-top="45"
        lowerThreshold="30"
        style="height:100vh"
      >
        {deviceList.map((item, index) => {
          return (
            <View
              className="dataItem"
              key={index}
              onClick={this.navigateDetail.bind(this, "")}
            >
              <View className="upItem">
                <Text>{item.assetId}</Text>

                <Image
                  className="icon"
                  src={offlinePng}
                  hidden={item.online === "0" ? false : true}
                />
                <Image
                  className="icon"
                  src={coinPng}
                  hidden={item.coin === "1" ? false : true}
                />
                <Image
                  className="icon"
                  src={faultPng}
                  hidden={item.fault === "1" ? false : true}
                />
              </View>
              <View className="downItem">
                <View className="leftItem">
                  <Image src={devicePng} className="leftItemimage" />
                </View>
                <View className="rightItem">
                  <View className="itemContent">
                    <View className="title">
                      <Text>{item.siteName}</Text>
                    </View>
                    <View className="title">
                      <Text>今日收入:</Text>
                      <Text className="titleItem">{item.todayIncome}元</Text>
                    </View>
                    <View className="title">
                      <Text>今日销量:</Text>
                      <Text className="titleItem">{item.todayVolume}笔</Text>
                    </View>
                    <View className="title">
                      <Text>货道空置数:</Text>
                      <Text className="titleItem">{item.emptyState}</Text>
                    </View>
                  </View>
                  <View className="more">
                    <Image src={morePng} className="rightItemimage" />
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}
