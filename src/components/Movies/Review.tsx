import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';

type ReviewProps = {
  review: string;
  username: string;
  score: number;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
`;

const UsernameContainer = styled.div`
  display: flex;
`;

const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: var(--pink);
  }
`;

const ReviewBody = styled.p`
  color: #fff;
`;

const Username = styled.h1`
  font-size: 1.17rem;
  color: #fff;
  margin-right: 8px;
`;

const Score = styled.span`
  font-size: 1.17rem;
  color: var(--pink);
  margin-right: 4px;
`;

export const Review = ({ review, score, username }: ReviewProps) => {
  return (
    <Container>
      <UsernameContainer>
        <Username>{username}</Username>
        <ScoreContainer>
          <Score>{score}</Score>
          <BsStarFill />
        </ScoreContainer>
      </UsernameContainer>
      <ReviewBody>{review}</ReviewBody>
    </Container>
  );
};
