import {EnhancedMenu} from "~/lib/utils";
import {Drawer, Link, Text} from "~/components";
import Logo40 from "~/assets/other/Logo_40.svg"
import Logo40Dark from "~/assets/other/Logo_40_dark.svg"

export function MenuDrawer({
                             isOpen,
                             onClose,
                             menu,
                           }: {
  isOpen: boolean;
  onClose: () => void;
  menu: EnhancedMenu;
}) {
  return (
    <Drawer open={isOpen} onClose={onClose} openFrom="left" heading="Меню">
      <div className="grid">
        <MenuMobileNav menu={menu} onClose={onClose}/>
      </div>
    </Drawer>
  );
}

function MenuMobileNav({
                         menu,
                         onClose,
                       }: {
  menu: EnhancedMenu;
  onClose: () => void;
}) {
  return (
    <nav className="grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8">
      {/* Top level menu items */}
      {(menu?.items || []).map((item) => (
        <span key={item.id} className="block">
          <Link
            to={item.to}
            target={item.target}
            onClick={onClose}
            className={({isActive}) =>
              isActive ? 'pb-1 border-b -mb-px' : 'pb-1'
            }
          >
            <Text as="span" size="copy">
              {item.title}
            </Text>
          </Link>
        </span>
      ))}
      <Link to="/anniversary-40" prefetch="intent" onClick={onClose}>
        <img src={Logo40} alt='store logo' className='h-12 dark:hidden'/>
        <img src={Logo40Dark} alt='store logo dark' className='h-12 hidden dark:block'/>
      </Link>
    </nav>
  );
}
