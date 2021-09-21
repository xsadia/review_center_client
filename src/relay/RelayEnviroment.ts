import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const fetchQuery = async (operation: any, variables: any) => {
    const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzIxMTE2NTgsImV4cCI6MjQ5NjAyNTI1OCwic3ViIjoiNjE0Nzg4Mzg5MjJjMjUwMjZlNzE4OGJmIn0.k40ejgzOhBDKI867OBldAU5Vu9pra_UDP2QCyOzVGRQ'
        },
        body: JSON.stringify({
            query: operation.text,
            variables
        })
    });

    return response.json();
};

const network = Network.create(fetchQuery);

const store = new Store(new RecordSource());

export default new Environment({
    network,
    store
});