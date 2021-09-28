import styled from 'styled-components';
import { FaComments } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 50px;
  padding: 0 2%;
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

const HeaderLinksContainer = styled.div`
  display: flex;
  align-items: center;
  width: 360px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const HeaderLink = styled.h2`
  color: #fff;
  font-size: 1.17rem;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`;

const Searchbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 177px;
  background-color: #fff;
  margin-left: 16px;
  border-radius: 16px;
  padding: 8px;
`;

const SearchboxInput = styled.input`
  width: 140px;

  border: none;
  outline: none;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--pink);
  font-size: 1rem;
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
          <Link to="/">Review Center</Link>
        </HeaderTitle>
        <FaComments />
      </HeaderTitleContainer>
      <HeaderLinksContainer>
        <Link to="/movies">
          <HeaderLink>Movies</HeaderLink>
        </Link>
        <Searchbox>
          <SearchButton>
            <BiSearchAlt />
          </SearchButton>
          <SearchboxInput placeholder="Search" type="text" />
        </Searchbox>
      </HeaderLinksContainer>
    </Container>
  );
};
