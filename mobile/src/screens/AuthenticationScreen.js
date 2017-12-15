import React, { Component } from "react";
import styled from "styled-components/native";
import Touchable from "@appandflow/touchable";

const Root = styled.View`
flex: 1;
/* prettier-ignore */
backgroundColor: ${props => props.theme.SECONDARY};
position: relative;
`;

const ButtonLoginText = styled.Text`
  color: ${props => props.theme.WHITE};
  /* prettier-ignore */
  fontWeight: bold;
  /* prettier-ignore */
  fontSize: 20;
`;

const ButtonLogin = styled(Touchable).attrs({
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

const Button = styled(Touchable).attrs({
  feedback: "opacity",
  hitslop: { top: 20, bottom: 20, right: 20, left: 20 }
})`
  /* prettier-ignore */
  justifyContent: center;
  /* prettier-ignore */
  alignItems: center;
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.WHITE};
  /* prettier-ignore */
  fontWeight: 400;
  /* prettier-ignore */
  fontSize: 16;
`;

const AuthenticationScreen = () => (
  <Root>
    <ButtonLogin>
      <ButtonLoginText>Get Started</ButtonLoginText>
    </ButtonLogin>
    <ButtonTextContainer>
      <Button>
        <ButtonText>Already have an account?</ButtonText>
      </Button>
    </ButtonTextContainer>
  </Root>
);

export default AuthenticationScreen;

// class AuthenticationScreen extends Component {
//   state = {};
//   render() {
//     return (
//       <Root>
//         <T>AuthenticationScreen</T>
//       </Root>
//     );
//   }
// }

// export default AuthenticationScreen;
