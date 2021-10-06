import { Header } from '../components/Header/Header';
import styled from 'styled-components';
import { MovieList } from '../components/Movies/MovieList';
import { useLazyLoadQuery } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { MoviesPage_moviesQuery } from './__generated__/MoviesPage_moviesQuery.graphql';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MoviesPage = () => {
  const query = useLazyLoadQuery<MoviesPage_moviesQuery>(
    graphql`
      query MoviesPage_moviesQuery {
        ...MovieList_query
      }
    `,
    {},
  );

  return (
    <>
      <Header />
      <Container>
        <MovieList query={query} />
      </Container>
    </>
  );
};
