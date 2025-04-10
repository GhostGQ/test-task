'use client';

import {useEffect, useState} from 'react';
import {useParams} from 'next/navigation';
import {fetchProductById} from '@/entities/products';
import {ProductDetails} from '@/widgets/product-details';
import {Product} from '@/shared/types/product';

export default function ProductPage() {
  const params = useParams();
  const id = params?.id;

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    
    fetchProductById(String(id))
      .then(data => {
        if (data) {
          setProduct(data);
        } else {
          setError('Товар не найден');
        }
      })
      .catch(() => setError('Ошибка при загрузке товара'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return null;

  return <ProductDetails product={product} />;
}
