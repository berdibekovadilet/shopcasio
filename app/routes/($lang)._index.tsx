import {defer, type LoaderArgs} from '@shopify/remix-oxygen';
import {Suspense} from 'react';
import {Await, useLoaderData} from '@remix-run/react';
import {
  ProductSwimlane,
  ProductGridMatrix,
  BigBanner,
  SmallBanner,
  CompanyHighlights,
  StoreInfo,
  BigBannerStatic,
} from '~/components';
import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {getHeroPlaceholder} from '~/lib/placeholders';
import {seoPayload} from '~/lib/seo.server';
import type {
  CollectionConnection,
  ProductConnection,
} from '@shopify/hydrogen/storefront-api-types';
import {AnalyticsPageType} from '@shopify/hydrogen';
import {routeHeaders, CACHE_SHORT} from '~/data/cache';
import {type CollectionHero} from '~/components/Hero';

interface HomeSeoData {
  shop: {
    name: string;
    description: string;
  };
}

export const headers = routeHeaders;

export async function loader({params, context}: LoaderArgs) {
  const {language, country} = context.storefront.i18n;

  if (
    params.lang &&
    params.lang.toLowerCase() !== `${language}-${country}`.toLowerCase()
  ) {
    throw new Response(null, {status: 404});
  }

  const {shop, hero} = await context.storefront.query<{
    hero: CollectionHero;
    shop: HomeSeoData;
  }>(HOMEPAGE_SEO_QUERY, {
    variables: {handle: 'g-shock'},
  });

  const seo = seoPayload.home();

  return defer(
    {
      shop,
      primaryHero: hero,
      featuredProducts: context.storefront.query<{
        products: ProductConnection;
      }>(HOMEPAGE_FEATURED_PRODUCTS_QUERY, {
        variables: {
          country,
          language,
        },
      }),
      newProducts: context.storefront.query<{
        products: ProductConnection;
      }>(HOMEPAGE_NEW_PRODUCTS_QUERY, {
        variables: {
          country,
          language,
        },
      }),
      babygHero: context.storefront.query<{ hero: CollectionHero }>(
        COLLECTION_HERO_QUERY,
        {
          variables: {
            handle: 'graduation',
            country,
            language,
          },
        },
      ),
      edificeHero: context.storefront.query<{ hero: CollectionHero }>(
        COLLECTION_HERO_QUERY,
        {
          variables: {
            handle: 'new-arrive',
            country,
            language,
          },
        },
      ),
      forhimHero: context.storefront.query<{ hero: CollectionHero }>(
        COLLECTION_HERO_QUERY,
        {
          variables: {
            handle: 'for-him',
            country,
            language,
          },
        },
      ),
      forherHero: context.storefront.query<{ hero: CollectionHero }>(
        COLLECTION_HERO_QUERY,
        {
          variables: {
            handle: 'for-her',
            country,
            language,
          },
        },
      ),
      featuredCollections: context.storefront.query<{
        collections: CollectionConnection;
      }>(FEATURED_COLLECTIONS_QUERY, {
        variables: {
          country,
          language,
        },
      }),
      tertiaryHero: context.storefront.query<{ hero: CollectionHero }>(
        COLLECTION_HERO_QUERY,
        {
          variables: {
            handle: 'edifice',
            country,
            language,
          },
        },
      ),
      analytics: {
        pageType: AnalyticsPageType.home,
      },
      seo,
    },
    {
      headers: {
        'Cache-Control': CACHE_SHORT,
      },
    },
  );
}

export default function Homepage() {
  const {
    primaryHero,
    babygHero,
    forhimHero,
    forherHero,
    edificeHero,
    featuredProducts,
    newProducts,
  } = useLoaderData<typeof loader>();

  // TODO: skeletons vs placeholders
  const skeletons = getHeroPlaceholder([{}, {}, {}]);

  return (
    <>
      <div className='lg:flex justify-between mt-8 px-6 md:px-8 lg:px-12 gap-8'>
        <BigBannerStatic/>
        <div>
          <Await resolve={babygHero}>
            {({hero}) => {
              if (!hero) return <></>;
              return <SmallBanner {...hero} />;
            }}
          </Await>
          <Await resolve={edificeHero}>
            {({hero}) => {
              if (!hero) return <></>;
              return <SmallBanner {...hero} />;
            }}
          </Await>
        </div>
      </div>
      {newProducts && (
        <Suspense>
          <Await resolve={newProducts}>
            {({products}) => {
              if (!products?.nodes) return <></>;
              return (
                <ProductGridMatrix
                  products={products.nodes}
                  title="Новинки"
                  count={10}
                />
              );
            }}
          </Await>
        </Suspense>
      )}

      <CompanyHighlights/>

      <div className='lg:flex justify-between mt-8 px-6 md:px-8 lg:px-12 gap-8'>
        <BigBanner {...primaryHero} top loading="eager"/>
        <div>
          <Await resolve={forhimHero}>
            {({hero}) => {
              if (!hero) return <></>;
              return <SmallBanner {...hero} />;
            }}
          </Await>
          <Await resolve={forherHero}>
            {({hero}) => {
              if (!hero) return <></>;
              return <SmallBanner {...hero} />;
            }}
          </Await>
        </div>
      </div>


      {featuredProducts && (
        <Suspense>
          <Await resolve={featuredProducts}>
            {({products}) => {
              if (!products?.nodes) return <></>;
              return (
                <ProductSwimlane
                  products={products.nodes}
                  title="Популярные товары"
                  count={4}
                />
              );
            }}
          </Await>
        </Suspense>
      )}
      <StoreInfo/>

    </>
  );
}

const COLLECTION_CONTENT_FRAGMENT = `#graphql
      ${MEDIA_FRAGMENT}
      fragment CollectionContent on Collection {
      id
      handle
      title
      descriptionHtml
      heading: metafield(namespace: "hero", key: "title") {
      value
    }
      byline: metafield(namespace: "hero", key: "byline") {
      value
    }
      cta: metafield(namespace: "hero", key: "cta") {
      value
    }
      spread: metafield(namespace: "hero", key: "spread") {
      reference {
      ...Media
    }
    }
      spreadSecondary: metafield(namespace: "hero", key: "spread_secondary") {
      reference {
      ...Media
    }
    }
    }
      `;

const HOMEPAGE_SEO_QUERY = `#graphql
      ${COLLECTION_CONTENT_FRAGMENT}
      query collectionContent($handle: String, $country: CountryCode, $language: LanguageCode)
      @inContext(country: $country, language: $language) {
      hero: collection(handle: $handle) {
      ...CollectionContent
    }
      shop {
      name
      description
    }
    }
      `;

const COLLECTION_HERO_QUERY = `#graphql
      ${COLLECTION_CONTENT_FRAGMENT}
      query collectionContent($handle: String, $country: CountryCode, $language: LanguageCode)
      @inContext(country: $country, language: $language) {
      hero: collection(handle: $handle) {
      ...CollectionContent
    }
    }
      `;

// @see: https://shopify.dev/api/storefront/2023-04/queries/products
export const HOMEPAGE_FEATURED_PRODUCTS_QUERY = `#graphql
      ${PRODUCT_CARD_FRAGMENT}
      query homepageFeaturedProducts($country: CountryCode, $language: LanguageCode)
      @inContext(country: $country, language: $language) {
      products(first: 10) {
      nodes {
      ...ProductCard
    }
    }
    }
      `;

export const HOMEPAGE_NEW_PRODUCTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query homepageNewProducts($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    products(first: 10, sortKey: CREATED_AT, reverse: true) {
      nodes {
        ...ProductCard
      }
    }
  }
`;


// @see: https://shopify.dev/api/storefront/2023-04/queries/collections
export const FEATURED_COLLECTIONS_QUERY = `#graphql
      query homepageFeaturedCollections($country: CountryCode, $language: LanguageCode)
      @inContext(country: $country, language: $language) {
      collections(
        first: 7,
      sortKey: UPDATED_AT
      ) {
      nodes {
      id
      title
      handle
      image {
      altText
      width
      height
      url
    }
    }
    }
    }
      `;
