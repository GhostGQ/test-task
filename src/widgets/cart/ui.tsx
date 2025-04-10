import {useCart} from '@/features/add-to-cart';
import styles from './styles.module.scss';

export const CartWidget = () => {
  const {totalItems, totalPrice} = useCart();

  return (
    <div className={styles.cartWidget}>
      <div>🛒 Товаров: {totalItems}</div>

      <div>Сумма: ${totalPrice}</div>
    </div>
  );
};
