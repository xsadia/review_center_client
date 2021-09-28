import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { useRouteMatch } from 'react-router';
import styled from 'styled-components';
import { Header } from '../components/Header/Header';
import { MovieInfoPageQuery as MovieInfoPageQueryType } from './__generated__/MovieInfoPageQuery.graphql';
import { GenreTag } from '../components/Movies/GenreTag';
import { BsStarFill } from 'react-icons/bs';
import { ReviewInput } from '../components/Movies/ReviewInput';
import { Review } from '../components/Movies/Review';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type MovieParams = {
  id: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  width: 100%;
  margin-top: 48px;
  margin-bottom: 24px;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 345px;
  margin-left: 16px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScoreContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: var(--pink);
    margin-left: 8px;
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 640px;
  margin-top: 8px;
  padding-bottom: 16px;
`;

const MovieScore = styled.h3`
  color: var(--pink);
  font-size: 1.75rem;
`;

const MovieTitle = styled.h1`
  color: var(--pink);
  font-size: 2rem;
  text-transform: capitalize;
`;

const MovieDate = styled.span`
  color: var(--pink);
  font-size: 1rem;
`;

const MoviePoster = styled.img`
  height: 345px;
  width: 230px;
  border: 2px solid var(--pink);
`;

const MovieOverview = styled.p`
  color: #fff;
  max-width: 390px;
  margin-top: 8px;
`;

const DateGenresContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MovieInfoPage = () => {
  const { params } = useRouteMatch<MovieParams>();

  const data = useLazyLoadQuery<MovieInfoPageQueryType>(
    graphql`
      query MovieInfoPageQuery($id: String!) {
        movieById(id: $id) {
          _id
          id
          title
          firstAirDate
          overview
          score
          posterPath
          reviews {
            edges {
              node {
                review
                score
                userId {
                  _id
                  username
                }
              }
            }
          }
          genres {
            edges {
              node {
                genreName
              }
            }
          }
        }
      }
    `,
    { id: params.id },
    { fetchPolicy: 'network-only' },
  );

  return (
    <>
      <Header />

      <Container>
        <MovieContainer>
          <MoviePoster src={data.movieById.posterPath} />

          <InformationContainer>
            <TitleContainer>
              <MovieTitle>{data.movieById.title}</MovieTitle>
              <ScoreContainer>
                <MovieScore>{data.movieById.score}</MovieScore>
                <BsStarFill />
              </ScoreContainer>
              <DateGenresContainer>
                <MovieDate>
                  {new Date(
                    Number(data.movieById.firstAirDate),
                  ).toLocaleDateString('pt-BR', { year: 'numeric' })}
                </MovieDate>
                {data.movieById.genres.edges.map(({ node }) => (
                  <GenreTag key={node.genreName} genreName={node.genreName} />
                ))}
              </DateGenresContainer>
            </TitleContainer>
            <MovieOverview>{data.movieById.overview}</MovieOverview>
          </InformationContainer>
        </MovieContainer>
        <ReviewInput movieId={data.movieById._id} />
        <ReviewContainer>
          {data.movieById.reviews.edges.map(({ node }) => (
            <Review
              key={node.userId._id}
              username={node.userId.username}
              review={node.review}
              score={node.score}
            />
          ))}
        </ReviewContainer>
      </Container>
      <ToastContainer />
    </>
  );
};
