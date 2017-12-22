import React, { Component } from "react";
import styled from "styled-components/native";

//temporary and Android Only
import { MaterialIcons } from "@expo/vector-icons";
import Touchable from "@appandflow/touchable";
import { Platform, Keyboard, AsyncStorage } from "react-native";
import { graphql, compose } from "react-apollo";
import { connect } from "react-redux";

import { colors, fakeAvatar } from "../utils/constants";
import SIGNUP_MUTATION from "../graphql/mutations/signup";

import Loading from "../components/Loading";
import { login } from "../actions/user";

const Root = styled(Touchable).attrs({
  feedback: "none"
})`
  flex: 1;
  position: relative;
`;

const T = styled.Text``;

const Wrapper = styled.View`
  /* prettier-ignore */
  alignSelf: stretch;
  /* prettier-ignore */
  alignItems: center;
  /* prettier-ignore */
  justifyContent: center;
  flex: 1;
`;

const BackButton = styled(Touchable).attrs({
  feedback: "opacity",
  hitSlop: { top: 20, bottom: 20, right: 20, left: 20 }
})`
  /* prettier-ignore */
  justifyContent: center;
  /* prettier-ignore */
  alignItems: center;
  position: absolute;
  top: 5%;
  /* prettier-ignore */
  left: 5%;
  /* prettier-ignore */
  zIndex: 1;
`;

const ButtonConfirm = styled(Touchable).attrs({
  feedback: "opacity"
})`
  position: absolute;
  bottom: 15%;
  width: 70%;
  height: 50;
  /* prettier-ignore */
  backgroundColor: ${props => props.theme.PRIMARY};
  /* prettier-ignore */
  borderRadius: 10;
  /* prettier-ignore */
  justifyContent: center;
  /* prettier-ignore */
  alignItems: center;
  /* prettier-ignore */
  shadowColor: #000;
  /* prettier-ignore */
  shadowOpacity: 0.2;
  /* prettier-ignore */
  shadowRadius: 5;
  /* prettier-ignore */
  shadowOffset 0px 2px;
  elevation: 2;
`;

const ButtonConfirmText = styled.Text`
  color: ${props => props.theme.WHITE};
  /* prettier-ignore */
  fontWeight: 600;
`;

const InputWrapper = styled.View`
  height: 50;
  width: 70%;
   /* prettier-ignore */
  borderBottomWidth: 1;
   /* prettier-ignore */
  borderBottomColor: ${props => props.theme.LIGHT_GRAY};
  /* prettier-ignore */
   marginVertical: 5;
    /* prettier-ignore */
    /* this puts the cursor to the bottom */
    justifyContent: flex-end;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.LIGHT_GRAY,
  selectionColor: Platform.OS === "ios" ? colors.PRIMARY : undefined,
  autoCorrect: false
})`
  height: 30;
  width: 100%;
  color: ${props => props.theme.WHITE};
`;

class SignupForm extends Component {
  state = {
    fullName: "",
    email: "",
    password: "",
    username: "",
    loading: false
  };

  _onOutsidePress = () => Keyboard.dismiss();

  _onChangeText = (text, type) => this.setState({ [type]: text });

  _checkIfDisabled() {
    const { fullName, email, password, username } = this.state;

    if (!fullName || !email || !password || !username) {
      return true;
    }

    return false;
  }

  _onSignupPress = async () => {
    this.setState({ loading: true });

    const { fullName, email, password, username } = this.state;
    const avatar = fakeAvatar;

    try {
      const { data } = await this.props.mutate({
        variables: {
          fullName,
          email,
          password,
          username,
          avatar
        }
      });
      await AsyncStorage.setItem("@sagamobileapp", data.signup.token);
      this.setState({ loading: false });
      return this.props.login();
    } catch (error) {
      throw error;
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <Root onPress={this._onOutsidePress}>
        <BackButton onPress={this.props.onBackPress}>
          <MaterialIcons color={colors.WHITE} size={30} name="arrow-back" />
        </BackButton>
        <Wrapper>
          <InputWrapper>
            <Input
              placeholder="Full Name"
              autoCapitalize="words"
              onChangeText={text => this._onChangeText(text, "fullName")}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={text => this._onChangeText(text, "email")}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={text => this._onChangeText(text, "password")}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={text => this._onChangeText(text, "username")}
            />
          </InputWrapper>
        </Wrapper>
        <ButtonConfirm
          onPress={this._onSignupPress}
          disabled={this._checkIfDisabled()}
        >
          <ButtonConfirmText>Sign Up With Facebook</ButtonConfirmText>
        </ButtonConfirm>
      </Root>
    );
  }
}

export default compose(graphql(SIGNUP_MUTATION), connect(undefined, { login }))(
  SignupForm
);
