import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  if (error) {
    console.error('Error:', error);
  }

  const { repositories = null } = data || {};

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];


  return { repositories: repositoryNodes, loading };
};

export default useRepositories;