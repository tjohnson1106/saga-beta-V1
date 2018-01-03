import { gql } from "react-apollo";

export default gql`
  subscription {
    tweetAdded {
      text
      _id
      createdAt
      isFavorited
      favoriteCount
      user {
        username
        firstName
        lastName
        avatar
      }
    }
  }
`;
