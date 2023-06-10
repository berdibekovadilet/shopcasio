import {EnhancedMenu, useIsHomePath} from "~/lib/utils";
import {useDrawer} from "~/components";
import {useCartFetchers} from "~/hooks/useCartFetchers";
import {useEffect} from "react";
import {CartDrawer} from "~/widgets/header/CartDrawer";
import {MenuDrawer} from "~/widgets/header/MenuDrawer";
import {DesktopHeader} from "~/widgets/header/DesktopHeader";
import {MobileHeader} from "~/widgets/header/MobileHeader";


export function Header({title, menu}: { title: string; menu?: EnhancedMenu }) {
  const isHome = useIsHomePath();

  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart,
  } = useDrawer();

  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();

  const addToCartFetchers = useCartFetchers('ADD_TO_CART');

  // toggle cart drawer when adding to cart
  useEffect(() => {
    if (isCartOpen || !addToCartFetchers.length) return;
    openCart();
  }, [addToCartFetchers, isCartOpen, openCart]);

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart}/>
      {menu && (
        <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} menu={menu}/>
      )}
      <DesktopHeader
        isHome={isHome}
        title={title}
        menu={menu}
        openCart={openCart}
      />
      <MobileHeader
        isHome={isHome}
        title={title}
        openCart={openCart}
        openMenu={openMenu}
      />
    </>
  );
}


