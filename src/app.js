import Taro, { Component } from "@tarojs/taro";
import Index from "./pages/index";

import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config = {
    pages: [
      "pages/device/device",
      "pages/login/login",
      "pages/index/index",
      "pages/components/allDevice/allDevice",
      "pages/order/order",
      "pages/aboutMe/aboutMe"
    ],
    tabBar: {
      backgroundColor: "#ffffff",
      color: "#999999",
      selectedColor: "#09c",
      borderStyle: "black",
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "pages/images/home.png",
          selectedIconPath: "pages/images/homeSelected.png"
        },
        {
          pagePath: "pages/device/device",
          text: "售货机",
          iconPath: "pages/images/device.png",
          selectedIconPath: "pages/images/deviceSelected.png"
        },
        {
          pagePath: "pages/order/order",
          text: "订单",
          iconPath: "pages/images/order.png",
          selectedIconPath: "pages/images/orderSelected.png"
        },
        {
          pagePath: "pages/aboutMe/aboutMe",
          text: "我的",
          iconPath: "pages/images/aboutMe.png",
          selectedIconPath: "pages/images/aboutMeSelected.png"
        }
      ]
    },
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
