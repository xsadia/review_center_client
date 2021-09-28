import styled from 'styled-components';

type GenreTagProps = {
  genreName: string;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  min-width: 72px;
  padding: 4px 8px;
  border: 2px solid var(--pink);
  border-radius: 16px;
  margin-left: 8px;
`;

const Genre = styled.span`
  color: #fff;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const GenreTag = ({ genreName }: GenreTagProps) => {
  return (
    <Container>
      <Genre>{genreName}</Genre>
    </Container>
  );
};
