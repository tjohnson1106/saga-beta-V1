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

const Avatar = styled.Image`
height: ${AVATAR_SIZE};
width: ${AVATAR_SIZE};
/* prettier-ignore */
borderRadius: ${AVATAR_SIZE};
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

const MetaContainer = styled.View`
  flex: 0.8;
  /* prettier-ignore */
  flexDirection: row;
`;

const MetaBox = styled.View`
  flex: 1;
  /* prettier-ignore */
  justifyContent: center;
  /* prettier-ignore */
  alignItems: center;
`;

const MetaText = styled.Text`
  color: ${props => props.theme.SECONDARY};
  /* prettier-ignore */
  fontSize: 16;
  /* prettier-ignore */
  fontWeight: 600;
`;

const MetaTextNumber = styled.Text`
  color: ${props => props.theme.PRIMARY};
`;

export default function ProfileHeader({
  firstName,
  lastName,
  avatar,
  username
}) {
  return (
    <Root>
      <Heading>
        <Avatar source={{ uri: avatar }} />
        <UsernameContainer>
          <FullName>
            {firstName} {lastName}
          </FullName>
          <UserName>@{username}</UserName>
        </UsernameContainer>
      </Heading>
      <MetaContainer>
        <MetaBox>
          <MetaText>
            {" "}
            <MetaTextNumber> 5</MetaTextNumber> Shares
          </MetaText>
        </MetaBox>
        <MetaBox>
          <MetaText>
            {" "}
            <MetaTextNumber> 5</MetaTextNumber> Likes
          </MetaText>
        </MetaBox>
      </MetaContainer>
    </Root>
  );
}
