import { graphql } from 'babel-plugin-relay/macro';
import { FormEvent, useState } from 'react';
import { useMutation } from 'react-relay';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { ReviewInputMutation } from './__generated__/ReviewInputMutation.graphql';
import { ConnectionHandler, RecordProxy, ROOT_ID } from 'relay-runtime';

type ReviewInputProps = {
  movieId: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: center;
  width: 640px;
  padding: 8px 4px 8px 4px;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 8px 4px 8px 4px;
  border-bottom: 2px solid #949995;
`;

const Input = styled.input`
  width: 100%;
  background: none;
  outline: none;
  border: none;
  color: #fff;
  resize: none;
  padding: 0 8px 0 0;
  &::placeholder {
    color: #949995;
  }
`;

const SendButton = styled.button`
  width: 148px;
  padding: 8px 12px;
  background-color: var(--pink);
  border: none;
  color: #fff;
  margin-top: 8px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

const ScoreInput = styled.input`
  background: none;
  border: none;
  outline: none;
  color: var(--pink);
  width: 100px;
  border-left: 2px solid var(--pink);
  padding: 0 4px;
`;

export const ReviewInput = ({ movieId }: ReviewInputProps) => {
  const [reviewContent, setReviewContent] = useState('');
  const [reviewScore, setReviewScore] = useState(null);
  const [commit, isPending] = useMutation<ReviewInputMutation>(
    graphql`
      mutation ReviewInputMutation($input: CreateReviewInput!) {
        CreateReviewMutation(input: $input) {
          review {
            id
            review
            score
            userId {
              id
              _id
              username
            }
          }
          error
        }
      }
    `,
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    commit({
      variables: {
        input: {
          movieId,
          review: reviewContent,
          score: Number(reviewScore),
        },
      },
      onCompleted: ({ CreateReviewMutation }) => {
        if (CreateReviewMutation.error !== null) {
          toast(CreateReviewMutation.error, {
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
      },
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            placeholder="Make a review..."
            type="text"
            onChange={(e) => setReviewContent(e.target.value)}
          />
          <ScoreInput
            type="number"
            placeholder="stars"
            max="5"
            min="0"
            onChange={(e) => setReviewScore(e.target.value)}
          />
        </InputContainer>
        <SendButton type="submit">Review</SendButton>
      </Form>
    </Container>
  );
};
