import siteMetadata from "../data/siteMetadata";
import headerNavLinks from "../data/headerNavLinks";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
import SubscribeModal from "./SubscribeModal";

// causes weird rendering (tailwind doesnt work on it) when page reloads
// import SchoolIcon from "@mui/icons-material/School";

const Navbar = () => {
  return (
    <>
      <NavigationMenu.Root className="pt-8 pb-4">
        <NavigationMenu.List className="flex items-center justify-between">
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild>
              <Link href="/" className="hover:no-underline">
                <svg
                  fill="currentColor"
                  width={"30px"}
                  height={"30px"}
                  className="mr-3 mb-1 inline"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"></path>
                  <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"></path>
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"></path>
                </svg>
                {/* <SchoolIcon className="mr-3 mb-1" /> */}
                <div className="hidden h-6 text-2xl font-semibold sm:inline">
                  {siteMetadata.headerTitle}
                </div>
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <NavigationMenu.Link key={link.title} asChild>
                  <Link
                    href={link.href}
                    className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 hover:no-underline"
                  >
                    {link.title}
                  </Link>
                </NavigationMenu.Link>
              ))}

              <NavigationMenu.Link>
                <SubscribeModal
                  componentClassName="inline"
                  btnText="Subscribe"
                  btnClassName="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 hover:no-underline"
                />
              </NavigationMenu.Link>
            </div>
            <ThemeSwitch />
            <MobileNav />
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>

      {/* <header className="flex items-center justify-between pt-8 pb-4">
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
      </header> */}
    </>
  );
};

export default Navbar;
