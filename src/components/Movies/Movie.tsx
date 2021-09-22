import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import styled from 'styled-components';
import { Movie_movie$key } from './__generated__/Movie_movie.graphql';

type MovieProps = {
  query: Movie_movie$key;
};

const Container = styled.div`
  background-color: red;

  & + div {
    margin-top: 16px;
  }
`;

export const Movie = ({ query }: MovieProps) => {
  const data = useFragment<Movie_movie$key>(
    graphql`
      fragment Movie_movie on Movie {
        title
        overview
      }
    `,
    query,
  );
  return (
    <Container>
      <h1>{data.title}</h1>
      <h2>{data.overview}</h2>
    </Container>
  );
};
