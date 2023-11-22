import {gql} from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query ExampleQuery {
    repositories {
      edges {
        node {
          id
          ownerAvatarUrl
          language
          fullName
          forksCount
          stargazersCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;