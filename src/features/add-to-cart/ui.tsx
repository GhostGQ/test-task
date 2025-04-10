'use client';

import {Product} from '@/shared/types/product';
import styles from './styles.module.scss';
import {useCart} from './model/context';

interface AddToCartProps {
  product: Product;
}

export const AddToCart = ({product}: AddToCartProps) => {
  const {addToCart, removeFromCart, getProductQuantity} = useCart();

  const quantity = getProductQuantity(product.id);

  if (quantity === 0) {
    return (
      <button className={styles.button} onClick={() => addToCart(product)}>
        <img className={styles.image} src='/plus.svg' alt='Plus' />
      </button>
    );
  }

  return (
    <div className={styles.buttonGroup}>
      <button
        className={styles.button}
        onClick={() => removeFromCart(product.id)}
      >
        <img className={styles.image} src='/minus.svg' alt='Plus' />
      </button>
      <span>{quantity}</span>
      <button className={styles.button} onClick={() => addToCart(product)}>
        <img className={styles.image} src='/plus.svg' alt='Plus' />
      </button>
    </div>
  );
};
