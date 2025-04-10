import Link from 'next/link';
import styles from './styles.module.scss';
import {Product} from '../../types/product';
import {AddToCart} from '@/features/add-to-cart';

export const ProductCard = ({product}: {product: Product}) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className={styles.card}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <h2 className={styles.name}>{product.name}</h2>
        <div className={styles.actions}>
          <p className={styles.price}>{product.price} $</p>
          <div
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </Link>
  );
};
