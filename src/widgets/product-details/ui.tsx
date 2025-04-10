import {Product} from '@/shared/types/product';
import styles from './styles.module.scss';
import {Container} from '@/shared/ui/container';
import {PageHeading} from '@/shared/ui/page-heading';

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({product}: ProductDetailsProps) => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <PageHeading heading='Страница товара' />
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
          <div className={styles.info}>
            <h1>Смартфон {product.name}</h1>
            <p className={styles.price}>${product.price}</p>
            <p className={styles.description}>{product.description}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
