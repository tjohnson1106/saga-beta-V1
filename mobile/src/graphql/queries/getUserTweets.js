import { gql } from "react-apollo";

export default gql`
  {
    getUserTweets {
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
