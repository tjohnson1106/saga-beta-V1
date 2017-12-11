import React from "react";
import styled from "styled-components/native";

const Root = styled.View`
/* prettier-ignore */
  alignItems: center;
  /* prettier-ignore */
  justifyContent: center;
  flex: 1;
  /* prettier-ignore */
  backgroundColor: ${props => props.theme.WHITE};
  width: 90%;
  /* prettier-ignore */
  alignSelf: center;
`;

const Text = styled.Text`
  color: ${props => props.theme.PRIMARY};
  fontsize: 18;
  textalign: center;
`;

export default function Welcome() {
  return (
    <Root>
      <Text>Welcome</Text>
    </Root>
  );
}
