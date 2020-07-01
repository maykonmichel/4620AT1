import gql from 'graphql-tag';

export default gql`
  query {
    movies {
      genre
      id
      name
      price
      rating
    }
  }
`;
