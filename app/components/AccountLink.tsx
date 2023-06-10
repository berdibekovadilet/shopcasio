import {useMatches} from "@remix-run/react";
import {Link} from "~/components/Link";
import {IconAccount, IconLogin} from "~/components/Icon";

export function AccountLink({className}: { className?: string }) {
  const [root] = useMatches();
  const isLoggedIn = root.data?.isLoggedIn;
  return isLoggedIn ? (
    <Link to="/account" className={className}>
      <IconAccount/>
    </Link>
  ) : (
    <Link to="/account/login" className={className}>
      <IconLogin/>
    </Link>
  );
}
