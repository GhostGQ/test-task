import {products} from '@/shared/lib/products';
import {NextResponse} from 'next/server';

export async function GET() {
  return NextResponse.json(products);
}
