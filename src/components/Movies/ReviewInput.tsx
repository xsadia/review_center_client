import { graphql } from 'babel-plugin-relay/macro';
import { FormEvent, useState } from 'react';
import { useMutation } from 'react-relay';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { ReviewInputMutation } from './__generated__/ReviewInputMutation.graphql';
import { ConnectionHandler, RecordProxy } from 'relay-runtime';

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
  //const connectionID = ConnectionHandler.getConnectionID()
  const [reviewContent, setReviewContent] = useState('');
  const [reviewScore, setReviewScore] = useState(null);
  const [commitReview, isPending] = useMutation<ReviewInputMutation>(
    graphql`
      mutation ReviewInputMutation(
        #$connections: [ID!]!
        $input: CreateReviewInput!
      ) {
        CreateReviewMutation(input: $input) {
          review {
            cursor
            node {
              id
              review
              score
              userId {
                id
                _id
                username
              }
            }
          }
          error
        }
      }
    `,
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    commitReview({
      variables: {
        //connections: [connectionID],
        input: {
          movieId,
          review: reviewContent,
          score: Number(reviewScore),
        },
      },
      onCompleted: ({ CreateReviewMutation }) => {
        if (CreateReviewMutation.error) {
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
      updater: (store) => {
        const movieProxy = store.get(movieId);

        const connection = ConnectionHandler.getConnection(
          movieProxy,
          'Movie_reviews',
        );

        const payload = store.getRootField('CreateReviewMutation');
        const serverEdge = payload.getLinkedRecord('review');

        const newEdge = ConnectionHandler.buildConnectionEdge(
          store,
          connection,
          serverEdge,
        );

        if (!newEdge) {
          return;
        }

        ConnectionHandler.insertEdgeBefore(connection as RecordProxy, newEdge);
      },
    });

    setReviewContent('');
    setReviewScore(0);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            value={reviewContent}
            placeholder="Make a review..."
            type="text"
            onChange={(e) => setReviewContent(e.target.value)}
          />
          <ScoreInput
            value={reviewScore}
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
