import { graphql } from 'babel-plugin-relay/macro';
import {
  loadQuery,
  usePaginationFragment,
  usePreloadedQuery,
} from 'react-relay';
import styled from 'styled-components';
import RelayEnviroment from '../../relay/RelayEnviroment';
import { Movie } from './Movie';
import React, { useCallback } from 'react';
import {
  MovieList_query,
  MovieList_query$key,
} from './__generated__/MovieList_query.graphql';
import { MovieListPaginationQuery } from './__generated__/MovieListPaginationQuery.graphql';

type MovieListProps = {
  query: MovieList_query$key;
};

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-flow: wrap;
  height: 100vh;
  width: 80vw;
  margin-top: 48px;
`;

/* const MoviesQuery = graphql`
  query MovieListQuery($first: Int!) {
    movies(first: $first) {
      edges {
        cursor
        node {
          id
          ...Movie_movie
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

const preloadedQuery = loadQuery<MovieListQueryType>(
  RelayEnviroment,
  MoviesQuery,
  { first: 8 },
);
 */
export const MovieList = ({ query }: MovieListProps) => {
  /* const data = usePreloadedQuery(MovieListQuery, preloadedQuery, {
    UNSTABLE_renderPolicy: 'full',
  }); */

  const { data, loadNext, isLoadingNext } = usePaginationFragment<
    MovieListPaginationQuery,
    MovieList_query$key
  >(
    graphql`
      fragment MovieList_query on Query
      @argumentDefinitions(
        first: { type: Int, defaultValue: 4 }
        after: { type: String }
      )
      @refetchable(queryName: "MovieListPaginationQuery") {
        movies(first: $first, after: $after)
          @connection(key: "MovieList_movies") {
          edges {
            cursor
            node {
              id
              ...Movie_movie
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    `,
    query,
  );

  const loadMore = useCallback(() => {
    if (isLoadingNext) {
      return;
    }

    loadNext(4);
  }, [loadNext, isLoadingNext]);

  return (
    <Container>
      {data?.movies.edges.map(({ node }) => (
        <React.Fragment key={node.id}>
          <Movie query={node} />
        </React.Fragment>
      ))}
      <button onClick={() => loadMore()}>load</button>
    </Container>
  );
};
