import Taro, { Component } from "@tarojs/taro";
import { View, Text, ScrollView, Image } from "@tarojs/components";
import devicePng from "../../images/device.jpg";
import morePng from "../../images/more.png";
import "./replenishment.scss";

export default class replenishment extends Component {
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
          goodskc: "50%",
          shelfkz: "40%"
        },
        {
          id: "2222",
          assetId: "cloud001",
          online: "1",
          siteName: "华彩大厦",
          goodskc: "50%",
          shelfkz: "40%"
        },
        {
          id: "3333",
          assetId: "cloud002",
          online: "1",
          siteName: "望京SOHO",
          goodskc: "50%",
          shelfkz: "40%"
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
      <View className="bottomItem">
        <View className="bottomTitle">
          <Text>急需补货</Text>
          <Text>
            (<Text className="bottomTxt">803</Text>台)
          </Text>
        </View>
        <ScrollView
          scroll-y
          scroll-top="45"
          lowerThreshold="30"
          style="height:100vh"
        >
          {deviceList.map((item, index) => {
            return (
              <View className="deviceItem">
                <View className="leftItem">
                  <Image src={devicePng} className="leftItemimage" />
                </View>
                <View className="rightItem">
                  <View className="itemContent">
                    <View className="itemText">
                      <Text>{item.assetId}</Text>
                    </View>
                    <View className="title">
                      <Text>{item.siteName}</Text>
                    </View>
                    <View className="rightBottom">
                      <View className="title">
                        <Text>商品库存</Text>
                        <Text className="lack">{item.goodskc}</Text>
                      </View>
                      <View className="title">
                        <Text>货道空置率</Text>
                        <Text className="lack">{item.shelfkz}</Text>
                      </View>
                    </View>
                  </View>
                  <View className="more">
                    <Image src={morePng} className="rightItemimage" />
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
