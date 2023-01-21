import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
//
import LogoPNG from '/images/logo.png';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link to="/">
            <img alt="wooma shop" src={LogoPNG} />
            <span>WOOMA SHOP</span>
          </Link>
        </Logo>
        <Nav>
          <li>
            <Link to="/carts">장바구니</Link>
          </li>
          <li>
            <Link to="/orders">주문목록</Link>
          </li>
        </Nav>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 0 32px;

  background: #2ac1bc;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  a {
    height: 100%;

    display: flex;
    align-items: center;

    color: white;

    img {
      width: 50px;
      height: 44px;
    }

    span {
      width: 333.83px;
      height: 57px;

      font-weight: 900;
      font-size: 40px;
      text-align: center;
      line-height: 58px;
    }
  }
`;

const Nav = styled.ul`
  display: flex;

  li {
    margin-right: 44px;

    a {
      color: white;
      font-weight: 500;
      font-size: 24px;
      line-height: 12px;
    }
  }
`;
