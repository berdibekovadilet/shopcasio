import type {LayoutData} from '~/root';
import {Footer, Header} from "~/widgets";


export function Layout({
                         children,
                         layout,
                       }: {
  children: React.ReactNode;
  layout: LayoutData;
}) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header
          title={layout?.shop.name ?? 'Shopcasio'}
          menu={layout?.headerMenu}
        />
        <main role="main" id="mainContent" className="flex-grow">
          {children}
        </main>
      </div>
      <Footer menu={layout?.footerMenu}/>
    </>
  );
}
