import useMediaQuery from '@/hooks/useMedia';
import { Link } from 'react-router-dom';
//
import dynamicStyles from './Header.styled';
import { 로고 } from 'assets';

const 헤더_네비게이션_메뉴_리스트 = [
  { to: '/carts', title: '장바구니' },
  { to: '/orders', title: '주문 목록' },
];

const Header = () => {
  const isMedium = useMediaQuery('medium');

  return (
    <header style={dynamicStyles.headerContainer({})}>
      <div style={dynamicStyles.headerArea({})}>
        <div style={dynamicStyles.headerTitleArea({})}>
          <a href="/" style={dynamicStyles.headerTitleLogo({})}>
            <img style={dynamicStyles.headerTitleItem({})} alt="parang-shop" src={로고} />
            <span style={dynamicStyles.headerTitleItem({})}>파랑 쇼핑몰</span>
          </a>
        </div>
        <nav style={dynamicStyles.headerNavigationMenu({})}>
          {헤더_네비게이션_메뉴_리스트.map(({ to, title }) => (
            <Link to={to} key={to} style={dynamicStyles.headerNavigationMenuItem({})}>
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
