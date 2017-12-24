import { gql } from "react-apollo";

export default gql`
  mutation createTweet($text: String!) {
    createTweet(
      text: $text # this is what we want back remember to review these data fields in regards to Facebook login
    ) {
      favoriteCount
      _id
      text
      createdAt
      user {
        avatar
        username
        firstName
        lastName
      }
    }
  }
`;
