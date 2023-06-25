import {Form, useParams} from "@remix-run/react";
import {IconMenu, IconSearch, Input, Link, AccountLink, CartCount} from "~/components";
import Logo from "~/assets/other/store_logo.png"

export function MobileHeader({
                               isHome,
                               openCart,
                               openMenu,
                             }: {
  title: string;
  isHome: boolean;
  openCart: () => void;
  openMenu: () => void;
}) {
  // useHeaderStyleFix(containerStyle, setContainerStyle, isHome);

  const params = useParams();

  return (
    <header
      role="banner"
      className={`${
        isHome
          ? 'bg-white-200 text-primary dark:bg-primary dark:text-contrast'
          : 'bg-white text-primary dark:bg-primary dark:text-contrast'
      } flex lg:hidden items-center h-16 sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 px-4 md:px-8`}
    >
      <div className="flex items-center justify-start w-full gap-4">
        <button
          onClick={openMenu}
          className="relative flex items-center justify-center w-8 h-8"
        >
          <IconMenu/>
        </button>
        <Form
          method="get"
          action={params.lang ? `/${params.lang}/search` : '/search'}
          className="items-center gap-2 sm:flex"
        >
          <button
            type="submit"
            className="relative flex items-center justify-center w-8 h-8"
          >
            <IconSearch/>
          </button>
          <Input
            className={
              isHome
                ? 'focus:border-contrast/20 dark:focus:border-primary/20'
                : 'focus:border-primary/20'
            }
            type="search"
            variant="minisearch"
            placeholder="Search"
            name="q"
          />
        </Form>
      </div>

      <Link
        className="flex items-center self-stretch leading-[3rem] md:leading-[4rem] justify-center flex-grow w-full h-full"
        to="/"
      >
        <img src={Logo} alt='store logo' className='py-2'/>
      </Link>

      <div className="flex items-center justify-end w-full gap-4">
        <AccountLink className="relative flex items-center justify-center w-8 h-8"/>
        <CartCount isHome={isHome} openCart={openCart}/>
      </div>
    </header>
  );
}
