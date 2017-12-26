import React from "react";
import styled from "styled-components/native";
import { graphql } from "react-apollo";

import FeedCardHeader from "./FeedCardHeader";
import FeedCardBottom from "./FeedCardBottom";
import FAVORITE_TWEET_MUTATION from "../../graphql/mutations/favoriteData";

const Root = styled.View`
/* prettier-ignore */
  minHeight: 240;
  /* prettier-ignore */
  backgroundColor: ${props => props.theme.GRAY_REVISE};
  width: 100%;
  padding: 7px;
  /* prettier-ignore */
  shadowColor: ${props => props.theme.SECONDARY};
  /* prettier-ignore */
  shadowOffset: 0px 2px;
  /* prettier-ignore */
  shadowRadius: 2;
  /* prettier-ignore */
  shadowOpacity: 0.1;
  /* prettier-ignore */
  marginVertical: 5;
`;

const CardContentContainer = styled.View`
  flex: 1;
  padding: 10px 20px 10px 0px;
`;

const CardContentText = styled.Text`
  /* prettier-ignore */
  fontSize: 14;
  /* prettier-ignore */
  textAlign: left;
  /* prettier-ignore */
  fontWeight: 500;
  color: ${props => props.theme.PINK};
`;

function FeedCard({ text, user, createdAt, favoriteCount, favorite }) {
  return (
    <Root>
      <FeedCardHeader {...user} createdAt={createdAt} />
      <CardContentContainer>
        <CardContentText>{text}</CardContentText>
      </CardContentContainer>
      <FeedCardBottom
        favoriteCount={favoriteCount}
        onFavoritePress={favorite}
      />
    </Root>
  );
}

export default graphql(FAVORITE_TWEET_MUTATION, {
  props: ({ ownProps, mutate }) => ({
    favorite: () =>
      mutate({
        variables: { _id: ownProps._id },
        optimisticResponse: {
          __typename: "Mutation",
          favoriteTweet: {
            __typename: "Tweet",
            _id: ownProps._id,
            favoriteCount: ownProps.isFavorited
              ? ownProps.favoriteCount - 1
              : ownProps.favoriteCount + 1,
            isFavorited: !ownProps.isFavorited
          }
        }
      })
  })
})(FeedCard);
