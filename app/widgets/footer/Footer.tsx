import {EnhancedMenu, useIsHomePath} from '~/lib/utils';
import {Section} from '~/components/Text';
import {Link} from '~/components/Link';

export const Footer = ({menu}: {menu?: EnhancedMenu}) => {
  const isHome = useIsHomePath();

  return (
    <Section
      divider={isHome ? 'none' : 'top'}
      as="footer"
      role="contentinfo"
      className={`grid min-h-[25rem] items-start grid-flow-row w-full gap-6 py-8 px-6 md:px-8 lg:px-12 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-4
        bg-primary dark:bg-contrast dark:text-primary text-contrast overflow-hidden`}
    >
      <div>
        <h4 className="font-medium uppercase mb-4">О компании</h4>
        <ul>
          <li className="mb-3">
            <Link to="/about">О нас</Link>
          </li>
          <li className="mb-3">
            <Link to="/contact">Контакты</Link>
          </li>
          <li className="mb-3">
            <Link to="/history-gshock">История G-SHOCK</Link>
          </li>
          <li className="mb-3">
            <Link to="/tech-casio">Технологии Casio</Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-medium uppercase mb-4">ПОКУПАТЕЛЯМ</h4>
        <ul>
          <li className="mb-3">
            <Link to="/collections">Каталог</Link>
          </li>
          <li className="mb-3">
            <Link to="/anniversary-50-casio">CASIO 50 ЛЕТ</Link>
          </li>
          <li className="mb-3">
            <Link to="/anniversary-40">G-SHOCK 40 ЛЕТ</Link>
          </li>
          <li className="mb-3">
            <Link to="/faq">Частые вопросы</Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-medium uppercase mb-4">КАК МЫ РАБОТАЕМ</h4>
        <ul>
          <li className="mb-3">
            <Link to="/delivery">Доставка</Link>
          </li>
          <li className="mb-3">
            <Link to="/warranty">Гарантия</Link>
          </li>
          <li className="mb-3">
            <Link to="/refund">Возврат</Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-medium uppercase mb-4">СВЯЖИТЕСЬ С НАМИ</h4>
        <ul>
          <li className="mb-3">
            <a
              href="https://www.instagram.com/casio_kyrgyzstan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram: casio_kyrgyzstan
            </a>
          </li>
          <li className="mb-5">
            <a
              href="tel:+996503500071"
              target="_blank"
              rel="noopener noreferrer"
            >
              +996 (503) 50-00-71
            </a>
          </li>
          <p className="mb-3">Адреса магазинов:</p>
          <li className="mb-2">
            <a
              href="https://go.2gis.com/pfbyr2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Сasio Store в ТЦ Евразия 2 этаж
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://go.2gis.com/wx01n"
              target="_blank"
              rel="noopener noreferrer"
            >
              Casio Store в ТЦ Дордой Плаза 2 этаж
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://go.2gis.com/kk2jz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Casio Store в ТЦ Азия Молл 1 этаж
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://go.2gis.com/uadnpf"
              target="_blank"
              rel="noopener noreferrer"
            >
              G-Factory в ТЦ ЦУМ 3 этаж
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://2gis.kg/bishkek/firm/70000001024388039"
              target="_blank"
              rel="noopener noreferrer"
            >
              Casio Store в Доме Торговли
            </a>
          </li>
        </ul>
      </div>

      <div className="self-end pt-8 opacity-50 md:col-span-2 grid grid-cols-1 md:grid-cols-2">
        <Link to="/privacy" className="mb-3 md:mb-0">
          Политика конфидициальности
        </Link>
        <Link to="/terms">Пользовательское соглашение</Link>
      </div>

      <p className="self-end pt-8 opacity-50 md:col-span-2">
        &copy; 2015 - {new Date().getFullYear()}, SHOPCASIO BSTARCO / Все права
        защищены.
      </p>
    </Section>
  );
};
