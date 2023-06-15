import clsx from 'clsx';
import type {SerializeFrom} from '@shopify/remix-oxygen';
import {MediaFile} from '@shopify/hydrogen';
import type {
  MediaImage,
  Media,
  Metafield,
  Video as MediaVideo,
} from '@shopify/hydrogen/storefront-api-types';
import {Heading, Text, Link} from '~/components';

export interface CollectionHero {
  byline: Metafield;
  cta: Metafield;
  handle: string;
  heading: Metafield;
  height?: 'full';
  loading?: 'eager' | 'lazy';
  spread: Metafield;
  spreadSecondary: Metafield;
  top?: boolean;
}

/**
 * Hero component that renders metafields attached to collection resources
 **/
export function SmallBanner({
                            byline,
                            cta,
                            handle,
                            heading,
                            loading,
                            spread,
                            spreadSecondary,
                            top,
                          }: SerializeFrom<CollectionHero>) {
  return (
    <Link to={`/collections/${handle}`}>
      <div className='relative flex flex-col justify-between'>
        {spread?.reference && (
          <div className='relative overflow-hidden inline-block min-w-[555px] h-[251px] transition-all duration-[0.2s] ease-[ease] mb-6 hover:scale-[1.02] rounded-[20px]'>
            <SpreadMedia
              sizes={
                spreadSecondary?.reference
                  ? '(min-width: 48em) 50vw, 100vw'
                  : '100vw'
              }
              data={spread.reference as Media}
              loading={loading}
            />
            <div
              className="absolute left-6 top-8 rounded-md flex flex-col items-baseline justify-between gap-3 px-1 py-4 sm:px-4 md:px-6 bg-gradient-to-b dark:from-contrast/60 dark:text-primary from-primary/60 text-contrast">
              {heading?.value && (
                <Heading format as="h2" size="display" className="max-w-md text-xl">
                  {heading.value}
                </Heading>
              )}
              {byline?.value && (
                <Text format width="narrow" as="p" size="lead">
                  {byline.value}
                </Text>
              )}
              {cta?.value && <Text size="lead">{cta.value}</Text>}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

interface SpreadMediaProps {
  data: Media | MediaImage | MediaVideo;
  loading?: HTMLImageElement['loading'];
  sizes: string;
}

function SpreadMedia({data, loading, sizes}: SpreadMediaProps) {
  return (
    <MediaFile
      data={data}
      className="block object-cover w-full h-full"
      mediaOptions={{
        video: {
          controls: false,
          muted: true,
          loop: true,
          playsInline: true,
          autoPlay: true,
          previewImageOptions: {src: data.previewImage?.url ?? ''},
        },
        image: {
          loading,
          crop: 'center',
          sizes,
          alt: data.alt || '',
        },
      }}
    />
  );
}
