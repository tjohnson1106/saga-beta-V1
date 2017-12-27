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
  fontSize: 15;
  /* prettier-ignore */
  fontWeight: 500;
  color: ${props => props.theme.LIGHT_GRAY};
`;

const favoriteCount = 3;

function FeedCardBottom({ favoriteCount, onFavoritePress, isFavorited }) {
  return (
    <Root>
      <Button>
        <SimpleLineIcons name="bubble" size={ICON_SIZE} color={colors.BLUE} />
        <ButtonText>0</ButtonText>
      </Button>
      <Button>
        <Entypo name="retweet" color={colors.BLUE} size={ICON_SIZE} />
        <ButtonText>0</ButtonText>
      </Button>
      <Button onPress={onFavoritePress}>
        <Entypo
          name="heart"
          color={isFavorited ? "red" : colors.BLUE}
          size={ICON_SIZE}
        />
        <ButtonText>{favoriteCount}</ButtonText>
      </Button>
    </Root>
  );
}

export default FeedCardBottom;
