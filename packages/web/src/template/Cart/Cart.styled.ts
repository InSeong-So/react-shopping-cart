import type { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  cartContainer: {
    padding: '24px 300px',
  },
  cartItemArea: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  carItemInfoArea: {
    display: 'flex',
    gap: 15,
    marginTop: 10,
  },
};

export default styles;
