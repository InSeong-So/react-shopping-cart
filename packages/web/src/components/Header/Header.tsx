import useMediaQuery from '@/hooks/useMedia';
import { 페이지 } from '@/Routes';
import { Link } from 'react-router-dom';
//
import { styles, dynamicStyles } from './Header.styled';
import { 로고 } from 'assets';

const 헤더_네비게이션_메뉴_리스트 = [
  { to: 페이지.장바구니, title: '장바구니' },
  { to: 페이지.주문_목록, title: '주문 목록' },
];

const Header = () => {
  const isMedium = useMediaQuery('medium');

  return (
    <header style={dynamicStyles.headerContainer({})}>
      <div style={dynamicStyles.headerArea({})}>
        <div style={dynamicStyles.headerTitleArea({})}>
          <a href="/" style={dynamicStyles.headerTitleLogo({})}>
            <img style={dynamicStyles.headerTitleItem({})} alt="parang-shop" src={로고} />
            <span style={dynamicStyles.headerTitleItem({ isMedium })}>파랑 쇼핑몰</span>
          </a>
        </div>
        {isMedium ? (
          <div style={styles.headerNavigationMenuImageArea}>
            <HamburgerIcon />
          </div>
        ) : (
          <nav style={dynamicStyles.headerNavigationMenu({})}>
            {헤더_네비게이션_메뉴_리스트.map(({ to, title }) => (
              <Link to={to} key={to} style={dynamicStyles.headerNavigationMenuItem({ isMedium })}>
                {title}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

const HamburgerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 3H2V4H14V3Z" fill="#3F3F3F" />
    <path d="M14 12H2V13H14V12Z" fill="#3F3F3F" />
    <path d="M14 6H2V7H14V6Z" fill="#3F3F3F" />
    <path d="M14 9H2V10H14V9Z" fill="#3F3F3F" />
  </svg>
);
