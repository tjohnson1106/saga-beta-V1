import React, { Component } from "react";
import styled from "styled-components/native";

//temporary and Android Only
import { MaterialIcons } from "@expo/vector-icons";
import Touchable from "@appandflow/touchable";
import { Platform, Keyboard } from "react-native";

import { colors } from "../utils/constants";

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
  feedback: "opacity"
})`
  /* prettier-ignore */
  justifyContent: center;
  /* prettier-ignore */
  alignItems: center;
  position: absolute;
  top: 5%;
  /* prettier-ignore */
  marginRight: 8%;
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
  state = {};

  _onOutsidePress = () => Keyboard.dismiss();

  render() {
    return (
      <Root onPress={this._onOutsidePress}>
        <BackButton onPress={this.props.onBackPress}>
          <MaterialIcons color={colors.WHITE} size={30} name="arrow-back" />
        </BackButton>
        <Wrapper>
          <InputWrapper>
            <Input
              placeholder="Full Name(Logo/Design will go here)"
              autoCapitalize="words"
            />
          </InputWrapper>
          <InputWrapper>
            <Input placeholder="Email" keyboardType="email-address" />
          </InputWrapper>
          <InputWrapper>
            <Input placeholder="Password" />
          </InputWrapper>
          <InputWrapper>
            <Input placeholder="Username" />
          </InputWrapper>
        </Wrapper>
        <ButtonConfirm>
          <ButtonConfirmText>Sign Up With Facebook</ButtonConfirmText>
        </ButtonConfirm>
      </Root>
    );
  }
}

export default SignupForm;
