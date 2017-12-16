import React, { Component } from "react";
import styled from "styled-components/native";

//temporary and Android Only
import { MaterialIcons } from "@expo/vector-icons";
import Touchable from "@appandflow/touchable";

import { colors } from "../utils/constants";

const Root = styled.View`
  flex: 1;
  position: relative;
`;

const T = styled.Text``;

const Wrapper = styled.View`
  /* prettier-ignore */
  alignSelf: center;
  /* prettier-ignore */
  alignItems: center;
  width: 90%;
  height: 100%;
  /* prettier-ignore */
  backgroundColor: red;
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
`;

const ButtonConfirmText = styled.Text`
  color: ${props => props.theme.WHITE};
  /* prettier-ignore */
  fontWeight: 600;
`;

class SignupForm extends Component {
  state = {};
  render() {
    return (
      <Root>
        <BackButton onPress={this.props.onBackPress}>
          <MaterialIcons color={colors.WHITE} size={30} name="arrow-back" />
        </BackButton>
        <Wrapper />
        <ButtonConfirm>
          <ButtonConfirmText>Sign Up With Facebook</ButtonConfirmText>
        </ButtonConfirm>
      </Root>
    );
  }
}

export default SignupForm;
