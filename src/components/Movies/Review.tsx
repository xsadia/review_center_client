import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';
import { IoMdTrash } from 'react-icons/io';
import { ConnectionHandler, useMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { Review_deleteReviewMutation } from './__generated__/Review_deleteReviewMutation.graphql';
import { FormEvent } from 'react';
import { toast } from 'react-toastify';

type ReviewProps = {
  id: string;
  movieId: string;
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
  word-wrap: break-word;
  max-width: 480px;
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

const ReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  align-items: flex-start;
`;

const DeleteButton = styled.button`
  outline: none;
  border: none;
  background: none;

  color: var(--pink);

  svg {
    font-size: 1.25rem;
  }
`;

export const Review = ({
  review,
  score,
  username,
  movieId,
  id,
}: ReviewProps) => {
  const [commitDeleteReview] = useMutation<Review_deleteReviewMutation>(graphql`
    mutation Review_deleteReviewMutation($input: DeleteReviewInput!) {
      DeleteReviewMutation(input: $input) {
        success
        error
      }
    }
  `);

  const handleDeleteReview = (event: FormEvent) => {
    event.preventDefault();

    commitDeleteReview({
      variables: {
        input: {
          movieId,
        },
      },
      onCompleted: ({ DeleteReviewMutation }) => {
        if (DeleteReviewMutation.error) {
          toast(DeleteReviewMutation.error, {
            type: 'error',
            theme: 'dark',
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return;
        }

        toast('Post deleted with success', {
          type: 'success',
          theme: 'dark',
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        return;
      },
      updater: (store) => {
        const movieRecord = store.get(movieId);
        const connection = ConnectionHandler.getConnection(
          movieRecord,
          'Movie_reviews',
        );

        ConnectionHandler.deleteNode(connection, id);
      },
    });
  };

  return (
    <Container>
      <UsernameContainer>
        <Username>{username}</Username>
        <ScoreContainer>
          <Score>{score}</Score>
          <BsStarFill />
        </ScoreContainer>
      </UsernameContainer>
      <ReviewContainer>
        <ReviewBody>{review}</ReviewBody>
        <DeleteButton onClick={(e) => handleDeleteReview(e)}>
          <IoMdTrash />
        </DeleteButton>
      </ReviewContainer>
    </Container>
  );
};
