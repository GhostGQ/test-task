'use client';

import {useState} from 'react';
import {SearchInput} from '@/shared/ui/product-search';
import {Container} from '@/shared/ui/container/ui';
import {ProductList} from '@/widgets/product-list';
import {useDebounce} from '../../shared/hooks';
import {PageHeading} from '@/shared/ui/page-heading';

const page = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedQuery = useDebounce(searchQuery, 800);

  return (
    <main>
      <Container>
        <PageHeading heading={'Каталог Товаров'} />
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <ProductList search={debouncedQuery} />
      </Container>
    </main>
  );
};

export default page;
