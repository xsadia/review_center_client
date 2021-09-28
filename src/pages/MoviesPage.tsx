import { Header } from '../components/Header/Header';
import styled from 'styled-components';
import { MovieList } from '../components/Movies/MovieList';

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

export const MoviePages = () => {
  return (
    <>
      <Header />
      <Container>
        <MovieList />
      </Container>
    </>
  );
};
