import { graphql } from 'babel-plugin-relay/macro';
import { loadQuery, usePreloadedQuery } from 'react-relay';
import { MovieListQuery as MovieListQueryType } from './__generated__/MovieListQuery.graphql';
import styled from 'styled-components';
import RelayEnviroment from '../../relay/RelayEnviroment';
import MovieListQuery from './__generated__/MovieListQuery.graphql';
import { Movie } from './Movie';
import React from 'react';

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-flow: wrap;
  height: 100vh;
  width: 80vw;
  margin-top: 48px;
`;

const MoviesQuery = graphql`
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

export const MovieList = () => {
  const data = usePreloadedQuery(MovieListQuery, preloadedQuery, {
    UNSTABLE_renderPolicy: 'full',
  });

  return (
    <Container>
      {data?.movies.edges.map(({ node }) => (
        <React.Fragment key={node.id}>
          <Movie query={node} />
        </React.Fragment>
      ))}
    </Container>
  );
};
