import { gql } from "react-apollo";

export default gql`
subscriptoin {
    tweetFavorited {
        _id
        favoriteCount
    }
}
`;
