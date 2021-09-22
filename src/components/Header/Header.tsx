import styled from "styled-components";
import { FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
        font-size: 1.5rem;
    }
`;

const HeaderTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    margin-right: 0.4rem;

    a {
        color: inherit;
        text-decoration: none;
    }
`;

export const Header = () => {
    return (
        <Container>
            <HeaderTitleContainer>
                <HeaderTitle>
                    <Link to="/">
                        Review Center
                    </Link>
                </HeaderTitle>
                <FaComments />
            </ HeaderTitleContainer>
        </Container>
    );
};