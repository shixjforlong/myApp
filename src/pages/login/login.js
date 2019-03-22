import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtForm, AtInput, AtButton } from "taro-ui";
import { observer, inject } from "@tarojs/mobx";
import "./login.scss";

@inject("loginStore")
@observer
export default class Index extends Component {
  config = {
    navigationBarTitleText: "登录"
  };
  constructor() {
    super(...arguments);
    this.state = {
      userName: "",
      password: ""
    };
  }

  handleUserNameChange = e => {
    this.props.loginStore.setUserName(e);
  };
  handlePasswordChange = e => {
    this.props.loginStore.setPassword(e);
  };
  handleSubmitForm = e => {
    e.preventDefault();
    const { loginStore } = this.props;
    loginStore.login().then(res => {
      if (res.access_token) {
        Taro.switchTab({
          url: "../index/index"
        });
      }
    });
  };

  componentWillUnmount() {
    this.props.loginStore.reset();
  }

  render() {
    const { username, password } = this.props.loginStore;

    return (
      <AtForm onSubmit={this.handleSubmitForm}>
        <AtInput
          name="userName"
          title="账号"
          type="text"
          placeholder="请输入账号"
          value={username}
          onChange={this.handleUserNameChange}
        />
        <AtInput
          name="password"
          title="密码"
          type="password"
          placeholder="请输入密码"
          value={password}
          onChange={this.handlePasswordChange}
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
