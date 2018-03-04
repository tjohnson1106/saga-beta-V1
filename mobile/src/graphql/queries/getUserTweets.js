import { gql } from "react-apollo";

import FeedCard from "../../components/FeedCard/FeedCard";

export default gql`
  {
    getTweets {
      ...FeedCard
    }
  }
  ${FeedCard.fragments.tweet}
`;

// import { gql } from "react-apollo";

// export default gql`
//   {
//     getUserTweets {
//       text
//       _id
//       createdAt
//       isFavorited
//       favoriteCount
//       user {
//         username
//         firstName
//         lastName
//         avatar
//       }
//     }
//   }
// `;
