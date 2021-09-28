/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Movie_movie = {
    readonly id: string;
    readonly title: string | null;
    readonly firstAirDate: string | null;
    readonly score: number | null;
    readonly posterPath: string | null;
    readonly " $refType": "Movie_movie";
};
export type Movie_movie$data = Movie_movie;
export type Movie_movie$key = {
    readonly " $data"?: Movie_movie$data;
    readonly " $fragmentRefs": FragmentRefs<"Movie_movie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Movie_movie",
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
    }
  ],
  "type": "Movie",
  "abstractKey": null
};
(node as any).hash = '1df3ae9c8a8c733f21b1afc44d2a010d';
export default node;
