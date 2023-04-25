import siteMetadata from "../data/siteMetadata";
import headerNavLinks from "../data/headerNavLinks";
import Logo from "../components/Logo";
import Link from "../components/Link";

import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";

import SchoolIcon from "@mui/icons-material/School";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between pt-8 pb-4">
      <div>
        <Link
          href="/"
          className="hover:no-underline"
          aria-label={siteMetadata.headerTitle}
        >
          <div className="flex items-center justify-between">
            <div className="">
              <SchoolIcon className="mr-3" />
            </div>
            {typeof siteMetadata.headerTitle === "string" ? (
              <div
                style={{ marginBottom: "8px" }}
                className="hidden h-6 text-2xl font-semibold sm:block"
              >
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 hover:no-underline"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
