'use client';

import {Product} from '@/shared/types/product';
import styles from './styles.module.scss';
import {FC, useEffect, useState} from 'react';
import {ProductCard} from '@/shared/ui/product-card';
import {fetchProducts} from '@/entities/products';

interface ProductListProps {
  search: string;
}

let allProductsCache: Product[] = [];

export const ProductList: FC<ProductListProps> = ({search}) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);

  // Загружаем данные при первом рендере
  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setAllProducts(data);
      setLoading(false);
    };

    loadProducts();
  }, []);

  // Фильтрация и отображение продуктов при изменении поиска или количества
  useEffect(() => {
    const filtered = allProducts.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(filtered.slice(0, visibleCount));
  }, [allProducts, search, visibleCount]);

  const showMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length <
        allProducts.filter(p =>
          p.name.toLowerCase().includes(search.toLowerCase())
        ).length && (
        <button className={styles.showMore} onClick={showMore}>
          Показать больше
        </button>
      )}
    </div>
  );
};
