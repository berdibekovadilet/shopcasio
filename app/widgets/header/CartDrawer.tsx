import {Await, useMatches} from "@remix-run/react";
import {Cart, CartLoading, Drawer} from "~/components";
import {Suspense} from "react";

export function CartDrawer({isOpen, onClose}: { isOpen: boolean; onClose: () => void }) {
  const [root] = useMatches();

  return (
    <Drawer open={isOpen} onClose={onClose} heading="Cart" openFrom="right">
      <div className="grid">
        <Suspense fallback={<CartLoading/>}>
          <Await resolve={root.data?.cart}>
            {(cart) => <Cart layout="drawer" onClose={onClose} cart={cart}/>}
          </Await>
        </Suspense>
      </div>
    </Drawer>
  );
}
