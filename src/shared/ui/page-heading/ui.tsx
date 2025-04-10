import styles from './styles.module.scss';
import { CartWidget } from '@/widgets/cart';

interface Props {
  heading: string;
}

export const PageHeading = ({heading}: Props) => {
  return (
    <div className={styles.heading}>
      <h1>{heading}</h1>
      <CartWidget />
    </div>
  );
};
