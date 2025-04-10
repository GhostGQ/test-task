import {Product} from '@/shared/types/product';

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('/api/products');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function fetchProductById(
  id: string
): Promise<Product | undefined> {
  const res = await fetch(`http://localhost:3000/api/products/${id}`); // или относительный путь
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}
