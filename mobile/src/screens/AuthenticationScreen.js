import React, { Component } from "react";
import styled from "styled-components/native";
import Touchable from "@appandflow/touchable";
import { LinearGradient } from "expo";

import SignupForm from "../components/SignupForm";

const Root = styled.View`
flex: 1;
/* prettier-ignore */
backgroundColor: ${props => props.theme.GRAY_REVISE};
position: relative;
`;

const ButtonSignupText = styled.Text`
  color: ${props => props.theme.WHITE};
  /* prettier-ignore */
  fontWeight: bold;
  /* prettier-ignore */
  fontSize: 20;
`;

const ButtonSignup = styled(Touchable).attrs({
  feedback: "opacity"
})`
  height: 75;
  width: 150;
  /* prettier-ignore */
  backgroundColor: ${props => props.theme.PRIMARY};
  /* prettier-ignore */
  justifyContent: center;
  position: absolute;
  top: 30%;
  right: 0;
  /* prettier-ignore */
  borderTopLeftRadius: 20;
  /* prettier-ignore */
  borderBottomLeftRadius: 20;
  /* prettier-ignore */
  shadowOpacity: 0.4;
  /* prettier-ignore */
  shadowRadius: 5;
  /* prettier-ignore */
  shadowOffset: 0px 4px;
  /* prettier-ignore */
  shadowColor: #000;
  elevation: 2;
`;

const ButtonTextContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200;
  /* prettier-ignore */
  justifyContent: center;
  /* prettier-ignore */
  alignItems: center;
`;

const ButtonLogin = styled(Touchable).attrs({
  feedback: "opacity",
  hitSlop: { top: 20, bottom: 20, right: 20, left: 20 }
})`
  /* prettier-ignore */
  justifyContent: center;
  /* prettier-ignore */
  alignItems: center;
`;

const ButtonLoginText = styled.Text`
  color: ${props => props.theme.WHITE};
  /* prettier-ignore */
  fontWeight: 400;
  /* prettier-ignore */
  fontSize: 16;
`;

const initialState = {
  showSignup: false,
  showLogin: false
};

class AuthenticationScreen extends Component {
  state = initialState;

  _onShowSignupPress = () => this.setState({ showSignup: true });

  _onBackPress = () => this.setState({ ...initialState });

  render() {
    if (this.state.showSignup) {
      return (
        <Root>
          <SignupForm onBackPress={this._onBackPress} />
        </Root>
      );
    }

    return (
      <Root>
        <ButtonSignup onPress={this._onShowSignupPress}>
          <ButtonSignupText>Get Started</ButtonSignupText>
        </ButtonSignup>
        <ButtonTextContainer>
          <ButtonLogin>
            <ButtonLoginText>Already have an account?</ButtonLoginText>
          </ButtonLogin>
        </ButtonTextContainer>
      </Root>
    );
  }
}

export default AuthenticationScreen;

// const AuthenticationScreen = () => (
//   (state = {
//     showSignup: false
//   }),
//   (
//     <Root>
//       <ButtonSignUp>
//         <ButtonSignUpText>Get Started</ButtonSignUpText>
//       </ButtonSignUp>
//       <ButtonTextContainer>
//         <Button>
//           <ButtonText>Already have an account?</ButtonText>
//         </Button>
//       </ButtonTextContainer>
//     </Root>
//   )
// );

// export default AuthenticationScreen;
//temp fix for maximum class size exceed error
