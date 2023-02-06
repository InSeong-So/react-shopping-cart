import { Button, Divide } from '@/components';
import { Font, Palette } from '@/themes';
//
import type { CSSProperties } from 'react';

type PaymentCardProps = {
  price: string;
  count: number;
  type?: 'order' | 'cart';
};

const PaymentCard = ({ price, count, type = 'cart' }: PaymentCardProps) => (
  <div style={styles.paymentCardContainer}>
    <div style={styles.paymentCardTitleArea}>
      <h3 style={styles.paymentCardTitle}>{type === 'cart' ? '결제예상금액' : '결제금액'}</h3>
    </div>
    <Divide $theme="gray" />
    <div style={styles.paymentCardInfoContainer}>
      <div style={styles.paymentCardInfoArea}>
        <span style={styles.paymentCardHighlightText}>
          {type === 'cart' ? '결제예상금액' : '총 결제금액'}
          <span style={styles.paymentCardHighlight} />
        </span>
        <span style={styles.paymentCardHighlightText}>
          {price}원
          <span style={styles.paymentCardHighlight} />
        </span>
      </div>
      <div style={styles.paymentCardButtonArea}>
        <Button $isBlock $size="large" $theme="primary">
          {type === 'cart' ? `주문하기 (${count}개)` : `${price}원 결제하기`}
        </Button>
      </div>
    </div>
  </div>
);

export default PaymentCard;

const styles: Record<string, CSSProperties> = {
  paymentCardContainer: {
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
  },
  paymentCardTitleArea: {
    display: 'flex',
    alignItems: 'center',

    padding: '16px 30px 0',
  },
  paymentCardTitle: {
    color: Palette.Gray90,
    ...Font.h4,
    ...Font.regular,
  },
  paymentCardInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
  },
  paymentCardInfoArea: {
    display: 'flex',
    justifyContent: 'space-between',

    padding: '10px 30px 0',
  },
  paymentCardHighlightText: {
    position: 'relative',

    padding: '0 2px',

    display: 'inline-block',
    textAlign: 'center',

    ...Font.p1,
    ...Font.bold,
  },
  paymentCardHighlight: {
    position: 'absolute',
    left: 0,
    bottom: -3,
    width: '100%',
    height: 8,

    display: 'block',

    backgroundColor: Palette.ShineBlue60,

    opacity: 0.5,

    zIndex: -1,
  },
  paymentCardButtonArea: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,

    display: 'flex',
    justifyContent: 'center',

    margin: '35px 30px',
  },
};
