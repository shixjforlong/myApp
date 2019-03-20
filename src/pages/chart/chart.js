import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

import * as echarts from "../components/ec-canvas/echarts";

import "./chart.scss";

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height * 0.35
  });
  canvas.setChart(chart);

  const option = {
    tooltip: {
      position: "top"
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisLabel: {
        show: true,
        textStyle: {
          color: "#C2C2C2"
        }
      },
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    },
    yAxis: {
      type: "value",
      splitLine: { show: false },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#C2C2C2"
        }
      }
    },
    series: [
      {
        name: "销售额",
        type: "line",
        smooth: true,
        symbol: "none",
        data: [10, 12, 21, 54, 260, 830, 710]
      },
      {
        name: "销量",
        type: "line",
        smooth: true,
        symbol: "none",
        data: [30, 182, 434, 791, 390, 30, 10]
      },
      {
        name: "广告收益",
        type: "line",
        smooth: true,
        symbol: "none",
        data: [1320, 1132, 601, 234, 120, 90, 20]
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

export default class chart extends Component {
  config = {
    navigationBarTitleText: "echarts-for-weixin 示例项目",
    navigationBarTextStyle: "black",
    navigationBarTitleText: "WxParse 使用示例",
    backgroundColor: "#eeeeee",
    backgroundTextStyle: "light",
    usingComponents: {
      "ec-canvas": "../components/ec-canvas/ec-canvas" // 书写第三方组件的相对路径
    }
  };

  state = {
    ec: {
      onInit: initChart
    }
  };

  render() {
    return (
      <View className="echarts">
        <ec-canvas
          id="mychart-dom-area"
          canvas-id="mychart-area"
          ec={this.state.ec}
        />
      </View>
    );
  }
}
