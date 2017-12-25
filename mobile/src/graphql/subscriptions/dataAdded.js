import { gql } from "react-apollo";

export default gql`
subscriptions: {
    tweetAdded {
        text
        _id
        createdAt
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
