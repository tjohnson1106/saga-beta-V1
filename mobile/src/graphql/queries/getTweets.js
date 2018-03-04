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

// export default gql`
//   {
//     getTweets {
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
