import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query GetPosts {
    blogPostCollection(limit: 100) {
      items {
        title
        slug
        excerpt
        featuredImage {
          title
          url
        }
        content {
          json
        }
      }
    }
  }
`;

export default GET_POSTS;
