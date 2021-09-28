/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MovieListQueryVariables = {};
export type MovieListQueryResponse = {
    readonly movies: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"Movie_movie">;
            } | null;
        } | null> | null;
    } | null;
};
export type MovieListQuery = {
    readonly response: MovieListQueryResponse;
    readonly variables: MovieListQueryVariables;
};



/*
query MovieListQuery {
  movies {
    edges {
      node {
        id
        ...Movie_movie
      }
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
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MovieListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
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
                "concreteType": "Movie",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "Movie_movie"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MovieListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
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
                "concreteType": "Movie",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
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
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "63720f88a9dcd5ff123eacfc4bc19aaf",
    "id": null,
    "metadata": {},
    "name": "MovieListQuery",
    "operationKind": "query",
    "text": "query MovieListQuery {\n  movies {\n    edges {\n      node {\n        id\n        ...Movie_movie\n      }\n    }\n  }\n}\n\nfragment Movie_movie on Movie {\n  id\n  title\n  firstAirDate\n  score\n  posterPath\n}\n"
  }
};
})();
(node as any).hash = '35e9b891ecf05d78c78e300b07ecd371';
export default node;
