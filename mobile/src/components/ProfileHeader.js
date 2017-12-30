import React from "react";

import styled from "styled-components/native";

const AVATAR_SIZE = 60;

const Root = styled.View`
height: 140;
/* prettier-ignore */
alignSelf: stretch;
/* prettier-ignore */
paddingTop: 50;
/* prettier-ignore */
backgroundColor: ${props => props.theme.WHITE};
`;

const Heading = styled.View`
  flex: 1;
  /* prettier-ignore */
  flexDirection: row;
  /* prettier-ignore */
  alignItems: center;
  /* prettier-ignore */
  justifyContent: flex-start;
  /* prettier-ignore */
  paddingLeft: 15;
  /* prettier-ignore */
  paddingTop: 5;
`;

const Avatar = styled.View`
height: ${AVATAR_SIZE};
width: ${AVATAR_SIZE};
/* prettier-ignore */
borderRadius: ${AVATAR_SIZE};
/* prettier-ignore */
backgroundColor: yellow;
`;

const UsernameContainer = styled.View`
  flex: 1;
  /* prettier-ignore */
  paddingLeft: 10;
  /* prettier-ignore */
  alignSelf: stretch;
`;

const FullName = styled.Text`
  color: ${props => props.theme.SECONDARY};
  /* prettier-ignore */
  fontWeight: bold;
  /* prettier-ignore */
  fontSize: 18;
`;

const UserName = styled.Text`
  color: ${props => props.theme.SECONDARY};
  /* prettier-ignore */
  fontSize: 15;
  opacity: 0.8;
`;

const fullName = "Thomas Johnson";
const username = "tjohnson";

export default function ProfileHeader() {
  return (
    <Root>
      <Heading>
        <Avatar />
        <UsernameContainer>
          <FullName>{fullName}</FullName>
          <UserName>@{username}</UserName>
        </UsernameContainer>
      </Heading>
    </Root>
  );
}
