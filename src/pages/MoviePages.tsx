import { Header } from '../components/Header';
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--background);
`;

export const MoviePages = () => {
    return (
        <>
            <Header />
            <Container>

            </Container>
        </>
    );
};