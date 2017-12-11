import React from "react";
import styled from "styled-components/native";
import { SimpleLineIcons, Entypo } from "@expo/vector-icons";
import Touchable from "@appandflow/touchable";

import { colors } from "../../utils/constants";

const ICON_SIZE = 20;

const Root = styled.View`
  height: 40;
  /* prettier-ignore */
  flexDirection: row;
`;

const Button = styled(Touchable).attrs({
  feedback: "opacity"
})`
  flex: 1;
  /* prettier-ignore */
  flexDirection: row;
  /* prettier-ignore */
  alignItems: center;
  /* prettier-ignore */
  justifyContent: space-around;
  /* prettier-ignore */
  paddingHorizontal: 32px;
`;

const ButtonText = styled.Text`
  /* prettier-ignore */
  fontSize: 14;
  /* prettier-ignore */
  fontWeight: 500;
  color: ${props => props.theme.LIGHT_GRAY};
`;

const favoriteCount = 3;
const isFavorited = false;

function FeedCardBottom() {
  return (
    <Root>
      <Button>
        <SimpleLineIcons
          name="bubble"
          size={ICON_SIZE}
          color={colors.LIGHT_GRAY}
        />
        <ButtonText>{favoriteCount}</ButtonText>
      </Button>
      <Button>
        <Entypo name="retweet" color={colors.LIGHT_GRAY} size={ICON_SIZE} />
        <ButtonText>{favoriteCount}</ButtonText>
      </Button>
      <Button>
        <Entypo
          name="heart"
          color={isFavorited ? "red" : colors.LIGHT_GRAY}
          size={ICON_SIZE}
        />
        <ButtonText>{favoriteCount}</ButtonText>
      </Button>
    </Root>
  );
}

export default FeedCardBottom;
