import {products} from '@/shared/lib/products';
import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {
  const product = products.find(p => Number(p.id) === Number(params.id));

  if (!product) {
    return NextResponse.json({error: 'Not found'}, {status: 404});
  }

  return NextResponse.json(product);
}
