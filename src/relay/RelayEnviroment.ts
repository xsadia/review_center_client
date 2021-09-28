import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const fetchQuery = async (operation: any, variables: any) => {
  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization:
        'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzI1Njc3NDgsImV4cCI6MjQ5NjQ4MTM0OCwic3ViIjoiNjE0ZjAxYzQwZWYwYzE1N2E1MTcxZWEwIn0.Fu6H3W5h5ot0nnSepFJAY-gy2UXhwNfg1g9-RsFfO3M',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  return response.json();
};

const network = Network.create(fetchQuery);

const store = new Store(new RecordSource());

export default new Environment({
  network,
  store,
});
