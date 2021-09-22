import { graphql } from 'babel-plugin-relay/macro';
import { loadQuery, usePreloadedQuery } from 'react-relay';
import { MovieListQuery as MovieListQueryType } from './__generated__/MovieListQuery.graphql';
import styled from 'styled-components';
import RelayEnviroment from '../../relay/RelayEnviroment';
import MovieListQUery from './__generated__/MovieListQuery.graphql';
import { Movie } from './Movie';
import React from 'react';

const Container = styled.div`
  background-color: pink;
  width: 90vw;
`;

const MoviesQuery = graphql`
  query MovieListQuery {
    movies {
      edges {
        node {
          id
          ...Movie_movie
        }
      }
    }
  }
`;

const preloadedQuery = loadQuery<MovieListQueryType>(
  RelayEnviroment,
  MovieListQUery,
  {},
);

export const MovieList = () => {
  const data = usePreloadedQuery(MovieListQUery, preloadedQuery, {
    UNSTABLE_renderPolicy: 'full',
  });

  console.log(data);
  return (
    <Container>
      {data?.movies.edges.map(({ node }) => (
        <React.Fragment key={node.id}>
          <Movie query={node} />
        </React.Fragment>
      ))}
      <h1>oi</h1>
    </Container>
  );
};
