import React from "react";
import styled from "styled-components/native";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

import { fakeAvatar } from "../../utils/constants";

const AVATAR_SIZE = 40;
const AVATAR_RADIUS = AVATAR_SIZE / 2;

const Root = styled.View`
  height: 50;
  /* prettier-ignore */
  flexDirection: row;
  /* prettier-ignore */
  alignItems: center;
`;

const AvatarContainer = styled.View`
  flex: 0.2;
  /* prettier-ignore */
  justifyContent: center;
  /* prettier-ignore */
  alignSelf: stretch;
`;

const Avatar = styled.Image`
  height: ${AVATAR_SIZE};
  width: ${AVATAR_SIZE};
  /* prettier-ignore */
  borderRadius: ${AVATAR_RADIUS};
`;

const MetaContainer = styled.View`
  flex: 1;
  /* prettier-ignore */
  alignSelf: stretch;
`;

const MetaTopContainer = styled.View`
  flex: 1;
  /* prettier-ignore */
  alignSelf: stretch;
  /* prettier-ignore */
  flexDirection: row;
  /* prettier-ignore */
  alignItems: center;
  /* prettier-ignore */
  justifyContent: flex-start;
`;

const MetaBottomContainer = styled.View`
  flex: 0.8;
  /* prettier-ignore */
  alignSelf: stretch;
  /* prettier-ignore */
  alignItems: flex-start;
  /* prettier-ignore */
  justifyContent: center;
`;

const MetaFullName = styled.Text`
  /* prettier-ignore */
  fontSize: 16;
  /* prettier-ignore */
  fontWeight: bold;
  color: ${props => props.theme.SECONDARY};
`;

const MetaText = styled.Text`
  /* prettier-ignore */
  fontSize: 14;
  /* prettier-ignore */
  fontWeight: 600;
  color: ${props => props.theme.LIGHT_GRAY};
`;

const username = "ThomasJohnson";
const firstName = "Thomas";
const lastName = "Johnson";
const createdAt = "1 day ago";
const avatar = fakeAvatar;

function FeedCardHeader({ username, firstName, lastName, avatar }) {
  return (
    <Root>
      <AvatarContainer>
        <Avatar source={{ uri: avatar || fakeAvatar }} />
      </AvatarContainer>
      <MetaContainer>
        <MetaTopContainer>
          <MetaFullName>
            {firstName} {lastName}
          </MetaFullName>
          <MetaText style={{ marginLeft: 5 }}>@{username}</MetaText>
        </MetaTopContainer>
        <MetaBottomContainer>
          <MetaText>
            {distanceInWordsToNow(createdAt)}
            ago
          </MetaText>
        </MetaBottomContainer>
      </MetaContainer>
    </Root>
  );
}

export default FeedCardHeader;
