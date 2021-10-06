/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MoviesPage_moviesQueryVariables = {};
export type MoviesPage_moviesQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"MovieList_query">;
};
export type MoviesPage_moviesQuery = {
    readonly response: MoviesPage_moviesQueryResponse;
    readonly variables: MoviesPage_moviesQueryVariables;
};



/*
query MoviesPage_moviesQuery {
  ...MovieList_query
}

fragment MovieList_query on Query {
  movies(first: 4) {
    edges {
      cursor
      node {
        id
        ...Movie_movie
        __typename
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

fragment Movie_movie on Movie {
  id
  title
  firstAirDate
  score
  posterPath
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 4
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MoviesPage_moviesQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "MovieList_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MoviesPage_moviesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "MovieConnection",
        "kind": "LinkedField",
        "name": "movies",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MovieEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Movie",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "firstAirDate",
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
                    "kind": "ScalarField",
                    "name": "posterPath",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
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
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "movies(first:4)"
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "MovieList_movies",
        "kind": "LinkedHandle",
        "name": "movies"
      }
    ]
  },
  "params": {
    "cacheID": "be84f5872ddfabe83edd0c33313c65f3",
    "id": null,
    "metadata": {},
    "name": "MoviesPage_moviesQuery",
    "operationKind": "query",
    "text": "query MoviesPage_moviesQuery {\n  ...MovieList_query\n}\n\nfragment MovieList_query on Query {\n  movies(first: 4) {\n    edges {\n      cursor\n      node {\n        id\n        ...Movie_movie\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}\n\nfragment Movie_movie on Movie {\n  id\n  title\n  firstAirDate\n  score\n  posterPath\n}\n"
  }
};
})();
(node as any).hash = 'c9692c7093c9d8ac6f082b538e2c7474';
export default node;
