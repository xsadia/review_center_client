import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #000;
        --pink: #e61b58;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        overflow-x: hidden;
        background-color: var(--background);
    }

    body, input, textarea, button {
        font-family: 'Roboto Slab', serif;
        font-weight: 400;
    }
    h1, h1, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button, a {
        cursor: pointer;
    }
`;
