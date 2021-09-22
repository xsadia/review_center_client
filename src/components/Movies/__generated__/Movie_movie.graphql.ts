/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Movie_movie = {
    readonly title: string | null;
    readonly overview: string | null;
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
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "overview",
      "storageKey": null
    }
  ],
  "type": "Movie",
  "abstractKey": null
};
(node as any).hash = '8b625159f1d4ec14b7fc63aa6de802e7';
export default node;
