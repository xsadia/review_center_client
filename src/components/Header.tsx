import styled from "styled-components";
import { FaComments } from 'react-icons/fa';

const Container = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 50px;
    padding: 0 1%;
    background-color: var(--pink);
`;

const HeaderTitleContainer = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    svg {
        font-size: 1.25rem;
    }
`;

const HeaderTitle = styled.h1`
    font-size: 1.17rem;
    margin-right: 0.4rem;
`;

export const Header = () => {
    return (
        <Container>
            <HeaderTitleContainer>
                <HeaderTitle>
                    Review Center

                </HeaderTitle>
                <FaComments />
            </ HeaderTitleContainer>
        </Container>
    );
};