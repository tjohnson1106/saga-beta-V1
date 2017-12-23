import { gql } from "react-apollo";

export default gql`
  mutation createNewData($text: String!) {
    createNewData(
      text: $text
    ) # this is what we want back remember to review these data fields
    {
      favoriteCount
      _id
      text
      user {
        avatar
        username
        firstName
        lastName
      }
    }
  }
`;
