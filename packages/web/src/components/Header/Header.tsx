import { Link } from 'react-router-dom';
//
import styles from './Header.styled';
import { 로고 } from 'assets';

const 헤더_네비게이션_메뉴_리스트 = [
  { to: '/carts', title: '장바구니' },
  { to: '/orders', title: '주문 목록' },
];

const Header = () => {
  return (
    <header style={styles.headerContainer}>
      <div style={styles.headerArea}>
        <div style={styles.headerTitleArea}>
          <a href="/" style={styles.headerTitleLogo}>
            <img style={styles.headerTitleItem} alt="parang-shop" src={로고} />
            <span style={styles.headerTitleItem}>파랑 쇼핑몰</span>
          </a>
        </div>
        <nav style={styles.headerNavigationMenu}>
          {헤더_네비게이션_메뉴_리스트.map(({ to, title }) => (
            <Link to={to} key={to} style={styles.headerNavigationMenuItem}>
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
