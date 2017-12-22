import React, { Component } from "react";
import styled from "styled-components/native";

const Root = styled.View`
  /* prettier-ignore */
  backgroundColor: ${props => props.theme.WHITE};
  flex: 1;
  /* prettier-ignore */
  alignItems: center;
`;

const Wrapper = styled.View`
height: 80%;
width: 90%
/* prettier-ignore */
paddingTop: 5;
/* prettier-ignore */
backgroundColor: pink;
`;

const T = styled.Text``;

class NewDataScreen extends Component {
  state = {};
  render() {
    return (
      <Root>
        <Wrapper>
          <T>New Data Screen</T>
        </Wrapper>
      </Root>
    );
  }
}

export default NewDataScreen;
