/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateReviewInput = {
    review: string;
    score: number;
    movieId: string;
    clientMutationId?: string | null;
};
export type ReviewInputMutationVariables = {
    input: CreateReviewInput;
};
export type ReviewInputMutationResponse = {
    readonly CreateReviewMutation: {
        readonly review: {
            readonly id: string;
            readonly review: string | null;
            readonly score: number | null;
            readonly userId: {
                readonly id: string;
                readonly _id: string | null;
                readonly username: string | null;
            } | null;
        } | null;
        readonly error: string | null;
    } | null;
};
export type ReviewInputMutation = {
    readonly response: ReviewInputMutationResponse;
    readonly variables: ReviewInputMutationVariables;
};



/*
mutation ReviewInputMutation(
  $input: CreateReviewInput!
) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateReviewPayload",
    "kind": "LinkedField",
    "name": "CreateReviewMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Review",
        "kind": "LinkedField",
        "name": "review",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "review",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "score",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "userId",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "_id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "username",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ReviewInputMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ReviewInputMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "bb5b7bea65964d1c159837149ece4918",
    "id": null,
    "metadata": {},
    "name": "ReviewInputMutation",
    "operationKind": "mutation",
    "text": "mutation ReviewInputMutation(\n  $input: CreateReviewInput!\n) {\n  CreateReviewMutation(input: $input) {\n    review {\n      id\n      review\n      score\n      userId {\n        id\n        _id\n        username\n      }\n    }\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = 'db982a7aa373137a5ed2eb68fefbc7d7';
export default node;
