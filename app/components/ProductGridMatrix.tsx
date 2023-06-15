import type {Product} from '@shopify/hydrogen/storefront-api-types';
import {ProductCard, Section} from '~/components';

const mockProducts = new Array(12).fill('');

export function ProductGridMatrix({
  title = 'Популярные товары',
  products = mockProducts,
  count = 10,
  ...props
}: {
  title?: string;
  products?: Product[];
  count?: number;
}) {
  return (
    <Section heading={title} padding="y" {...props}>
      <div className="flex flex-wrap gap-8 md:pb-8 md:px-8 lg:px-12">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            quickAdd={true}
            className="snap-start w-60"
          />
        ))}
      </div>
    </Section>
  );
}
