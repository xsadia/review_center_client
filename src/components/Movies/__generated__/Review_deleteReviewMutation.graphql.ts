/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DeleteReviewInput = {
    movieId: string;
    clientMutationId?: string | null;
};
export type Review_deleteReviewMutationVariables = {
    input: DeleteReviewInput;
};
export type Review_deleteReviewMutationResponse = {
    readonly DeleteReviewMutation: {
        readonly success: boolean | null;
        readonly error: string | null;
    } | null;
};
export type Review_deleteReviewMutation = {
    readonly response: Review_deleteReviewMutationResponse;
    readonly variables: Review_deleteReviewMutationVariables;
};



/*
mutation Review_deleteReviewMutation(
  $input: DeleteReviewInput!
) {
  DeleteReviewMutation(input: $input) {
    success
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
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteReviewPayload",
    "kind": "LinkedField",
    "name": "DeleteReviewMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
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
    "name": "Review_deleteReviewMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Review_deleteReviewMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1f4b36cac7079bbd741aa38ce82831f6",
    "id": null,
    "metadata": {},
    "name": "Review_deleteReviewMutation",
    "operationKind": "mutation",
    "text": "mutation Review_deleteReviewMutation(\n  $input: DeleteReviewInput!\n) {\n  DeleteReviewMutation(input: $input) {\n    success\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = '55688f62e53cd70d88424308628b3f20';
export default node;
