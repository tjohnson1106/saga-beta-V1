import React, { Component } from "react";
import styled from "styled-components/native";
import Touchable from "@appandflow/touchable";

const Root = styled.View`
flex: 1;
/* prettier-ignore */
backgroundColor: ${props => props.theme.SECONDARY};
position: relative;
`;

const T = styled.Text``;

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
  borderbottomleftradius: 20;
`;

const AuthenticationScreen = () => (
  <Root>
    <ButtonLogin>
      <T>AuthenticationScreen</T>
    </ButtonLogin>
  </Root>
);

export default AuthenticationScreen;

// export default AuthenticationScreen;

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
