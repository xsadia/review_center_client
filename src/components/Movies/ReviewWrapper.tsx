import { graphql } from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment } from 'react-relay';
import styled from 'styled-components';
import { Review } from './Review';
import { ReviewWrapper_reviews$key } from './__generated__/ReviewWrapper_reviews.graphql';

const ReviewContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 640px;
  margin-top: 8px;
  padding-bottom: 16px;
`;

type ReviewWrapperProps = {
  query: ReviewWrapper_reviews$key;
};

export const ReviewWrapper = ({ query }: ReviewWrapperProps) => {
  const { reviews } = useFragment<ReviewWrapper_reviews$key>(
    graphql`
      fragment ReviewWrapper_reviews on Movie {
        reviews(first: 2147483647) @connection(key: "Movie_reviews") {
          edges {
            cursor
            node {
              review
              score
              userId {
                _id
                username
              }
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    `,
    query,
  );

  return (
    <ReviewContainer>
      {reviews?.edges?.map(({ node }) => (
        <React.Fragment key={node?.userId._id}>
          <Review
            review={node?.review}
            username={node?.userId.username}
            score={node?.score}
          />
        </React.Fragment>
      ))}
    </ReviewContainer>
  );
};
