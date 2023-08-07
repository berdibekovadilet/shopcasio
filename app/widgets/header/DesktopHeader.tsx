import {useWindowScroll} from "react-use";
import {Form, useParams} from "@remix-run/react";
import {IconSearch, Input, Link, AccountLink, CartCount} from "~/components";
import {EnhancedMenu} from "~/lib/utils";
import {TopMenu} from "~/widgets/header/TopMenu";
import Logo from "~/assets/other/store_logo.png"
import LogoDark from "~/assets/other/store_logo_dark.png"
import Logo40 from "~/assets/other/Logo_40.svg"
import Logo40Dark from "~/assets/other/Logo_40_dark.svg"

export function DesktopHeader({
                                isHome,
                                menu,
                                openCart,
                              }: {
  isHome: boolean;
  openCart: () => void;
  menu?: EnhancedMenu;
  title: string;
}) {
  const params = useParams();
  const {y} = useWindowScroll();
  return (
    <>
      <TopMenu/>
      <header
        role="banner"
        className={`${
          isHome
            ? 'bg-white-200 text-primary dark:bg-contrast dark:text-primary'
            : 'bg-white text-primary dark:bg-contrast dark:text-primary'
        } ${
          !isHome && y > 50 && ' shadow-lightHeader'
        } hidden h-nav lg:flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8`}
      >
        <div className="flex gap-12 items-center">
          <a href="/">
            <img src={Logo} alt='store logo' className='h-12 dark:hidden'/>
            <img src={LogoDark} alt='store logo dark' className='h-12 hidden dark:block'/>
          </a>
          <nav className="flex gap-8 text-sm break-normal uppercase">
            {/* Top level menu items */}
            {(menu?.items || []).map((item) => (
              <Link
                key={item.id}
                to={item.to}
                target={item.target}
                prefetch="intent"
                className={({isActive}) =>
                  isActive ? 'pb-1 border-b -mb-px' : 'pb-1 transition-all duration-[0.2s] ease-[ease] hover:scale-[1.1]'
                }
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <Link to="/anniversary-40" prefetch="intent">
            <img src={Logo40} alt='store logo' className='h-12 dark:hidden'/>
            <img src={Logo40Dark} alt='store logo dark' className='h-12 hidden dark:block'/>
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <Form
            method="get"
            action={params.lang ? `/${params.lang}/search` : '/search'}
            className="flex items-center gap-2"
          >
            <Input
              className={
                isHome
                  ? 'focus:border-contrast/20 dark:focus:border-primary/20'
                  : 'focus:border-primary/20'
              }
              type="search"
              variant="minisearch"
              placeholder="Поиск"
              name="q"
            />
            <button
              type="submit"
              className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
            >
              <IconSearch/>
            </button>
          </Form>
          <AccountLink className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"/>
          <CartCount isHome={isHome} openCart={openCart}/>
        </div>
      </header>
    </>
  );
}
