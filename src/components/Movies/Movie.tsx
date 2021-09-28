import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Movie_movie$key } from './__generated__/Movie_movie.graphql';
import { BsStarFill } from 'react-icons/bs';

type MovieProps = {
  query: Movie_movie$key;
};

const Container = styled.div`
  color: #fff;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  flex: 0 1 calc(25%);

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const PosterInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 236px;
`;

const MoviePoster = styled.img`
  height: 351px;
  width: 236px;

  border: 2px solid #949995;
  transition: border-color 0.2s;

  &:hover {
    border-color: var(--pink);
  }
`;

const MovieInfo = styled.h2`
  font-size: 1.17rem;
  color: var(--pink);
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: var(--pink);
    margin-left: 8px;
  }
`;

export const Movie = ({ query }: MovieProps) => {
  const data = useFragment<Movie_movie$key>(
    graphql`
      fragment Movie_movie on Movie {
        id
        title
        firstAirDate
        score
        posterPath
      }
    `,
    query,
  );
  return (
    <Container>
      <Link to={`/movies/${data.id}`}>
        <MoviePoster src={data.posterPath} alt={data.title} />
      </Link>
      <PosterInfoContainer>
        <StarsContainer>
          <MovieInfo>{data.score}</MovieInfo>
          <BsStarFill />
        </StarsContainer>
        <MovieInfo>
          {new Date(Number(data.firstAirDate)).toLocaleDateString('pt-BR', {
            year: 'numeric',
          })}
        </MovieInfo>
      </PosterInfoContainer>
    </Container>
  );
};
