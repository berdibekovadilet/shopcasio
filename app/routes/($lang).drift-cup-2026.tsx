import {json, type LoaderArgs, type MetaFunction} from '@shopify/remix-oxygen';
import {Link} from '~/components';
import {routeHeaders, CACHE_LONG} from '~/data/cache';
import HeroImage from '~/assets/articles/drift-cup/1.jpeg';
import Image2 from '~/assets/articles/drift-cup/2.jpeg';
import Image3 from '~/assets/articles/drift-cup/3.jpeg';
import Image4 from '~/assets/articles/drift-cup/4.jpeg';
import Image5 from '~/assets/articles/drift-cup/5.jpeg';
import Image6 from '~/assets/articles/drift-cup/6.jpeg';
import Image7 from '~/assets/articles/drift-cup/7.jpeg';
import Image8 from '~/assets/articles/drift-cup/8.jpeg';

const SEO_TITLE =
  'Drift Cup 2026 — ShopCasio и Casio Edifice на главном дрифт-событии';
const SEO_DESCRIPTION =
  'ShopCasio выступил спонсором Drift Cup 2026 с часами Casio Edifice — брендом, вдохновленным скоростью, точностью и миром motorsport.';

const EDIFICE_COLLECTION_URL = '/collections/edifice';

const GALLERY_IMAGES = [
  {src: HeroImage, alt: 'Drift Cup 2026 — ShopCasio и Casio Edifice'},
  {src: Image2, alt: 'Drift Cup 2026 — дрифт-соревнования'},
  {src: Image3, alt: 'Drift Cup 2026 — атмосфера motorsport'},
  {src: Image4, alt: 'Drift Cup 2026 — зрители и участники'},
  {src: Image5, alt: 'Drift Cup 2026 — ShopCasio на площадке'},
  {src: Image6, alt: 'Casio Edifice на Drift Cup 2026'},
  {src: Image7, alt: 'Drift Cup 2026 — скорость и точность'},
  {src: Image8, alt: 'Drift Cup 2026 — финал события'},
];

export const headers = routeHeaders;

export async function loader({request}: LoaderArgs) {
  const seo = {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    titleTemplate: '%s',
    url: request.url,
    robots: {
      noIndex: false,
      noFollow: false,
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Drift Cup 2026: скорость, точность и энергия Edifice',
      description: SEO_DESCRIPTION,
    },
  };

  return json(
    {seo},
    {
      headers: {
        'Cache-Control': CACHE_LONG,
      },
    },
  );
}

export const meta = () => {
  return [
    {
      title:
        'Drift Cup 2026 — ShopCasio и Casio Edifice на главном дрифт-событии',
    },
    {
      name: 'description',
      content:
        'ShopCasio выступил спонсором Drift Cup 2026 с часами Casio Edifice — брендом, вдохновленным скоростью, точностью и миром motorsport.',
    },
  ];
};

export default function DriftCup2026Page() {
  return (
    <section className="md:p-12 p-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          <span className="font-light">Drift Cup 2026:</span> скорость,
          точность и энергия Edifice
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          ShopCasio и Casio Edifice на главном дрифт-событии сезона
        </p>
      </div>

      <div className="my-8">
        <img
          src={HeroImage}
          alt="Drift Cup 2026 — ShopCasio и Casio Edifice"
          className="border-black md:border-[20px] border-[6px] w-full max-h-[650px] object-cover"
        />
      </div>

      <div className="mt-8 max-w-3xl">
        <p className="mb-3">
          Drift Cup 2026 стал одним из самых ярких автомобильных событий сезона
          — днем, где скорость, контроль, техника и эмоции объединились в одном
          месте. Для зрителей это было настоящее шоу: мощные автомобили, дым от
          шин, напряженные заезды и атмосфера настоящего motorsport.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-medium mb-3">
          ShopCasio — спонсор Drift Cup 2026
        </h2>
        <p className="mb-3">
          ShopCasio принял участие в Drift Cup 2026 в качестве спонсора,
          представив часы Casio Edifice — линейку, которая идеально сочетается с
          духом автоспорта. Edifice ассоциируется с точностью, динамикой,
          технологичностью и мужским стилем, поэтому участие бренда в
          дрифт-событии стало естественным продолжением его характера.
        </p>
        <p className="mb-3">
          На площадке Drift Cup 2026 гости могли почувствовать энергию
          соревнований и ближе познакомиться с миром Edifice. Для нас это было
          не просто спонсорство, а возможность показать, что часы могут быть
          частью активного образа жизни, где важны уверенность, скорость
          реакции и внимание к деталям.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-medium mb-3">
          Casio Edifice и мир motorsport
        </h2>
        <p className="mb-3">
          Дрифт — это не только зрелищность. Это точный расчет, контроль
          автомобиля, выдержка и умение действовать в нужный момент. Именно эти
          качества близки философии Casio Edifice: каждая секунда имеет
          значение, а стиль должен работать вместе с функциональностью.
        </p>
        <p className="mb-3">
          Мы рады быть частью Drift Cup 2026 и поддерживать события, которые
          объединяют людей с сильной энергией, любовью к автомобилям и
          стремлением к ярким впечатлениям.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-medium mb-6">Галерея Drift Cup 2026</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="border-black md:border-[12px] border-[4px] w-full aspect-[4/3] object-cover"
            />
          ))}
        </div>
      </div>

      <div className="mt-16 p-6 md:p-10 bg-neutral-100 dark:bg-neutral-900 rounded-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-medium mb-4">
          Casio Edifice — часы в ритме motorsport
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Откройте коллекцию Casio Edifice в ShopCasio и выберите часы, созданные
          для динамичного ритма жизни.
        </p>
        <Link to={EDIFICE_COLLECTION_URL}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            Смотреть Casio Edifice
          </button>
        </Link>
      </div>
    </section>
  );
}
