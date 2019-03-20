import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtForm, AtInput, AtButton } from "taro-ui";
import "./login.scss";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };
  constructor() {
    super(...arguments);
    this.state = {
      userName: "",
      password: ""
    };
  }
  handleNameChange(e) {
    this.setState({
      userName: e
    });
  }
  handlePwdChange(e) {
    this.setState({
      password: e
    });
  }
  onSubmit(event) {
    console.log(this.state);
    Taro.switchTab({
      url: "../index/index"
    });
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <AtForm onSubmit={this.onSubmit.bind(this)}>
        <AtInput
          name="userName"
          title="账号"
          type="text"
          placeholder="请输入账号"
          value={this.state.userName}
          onChange={this.handleNameChange.bind(this)}
        />
        <AtInput
          name="password"
          title="密码"
          type="password"
          placeholder="请输入密码"
          value={this.state.password}
          onChange={this.handlePwdChange.bind(this)}
        />
        <AtButton
          type="primary"
          size="normal"
          formType="submit"
          className="btn"
        >
          登录
        </AtButton>
      </AtForm>
    );
  }
}
