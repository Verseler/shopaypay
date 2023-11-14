import { useState } from "react";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Header() {
  let [toggleSideBar, setToggleSideBar] = useState(true);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center h-20 px-4 bg-white lg:px-8 xl:px-12 2xs:justify-between">
      {toggleSideBar || sideBarMenu()}

      <div
        onClick={() => setToggleSideBar(!toggleSideBar)}
        className="md:hidden"
      >
        {toggleSideBar ? (
          <span className="text-3xl material-symbols-outlined text-primary">
            menu
          </span>
        ) : (
          <span className="text-3xl material-symbols-outlined text-primary">
            close
          </span>
        )}
      </div>

      <div className="ml-4">
        <span className="font-mono text-4xl font-bold">
          SHOPAYPAY
        </span>
      </div>

      <ul className="hidden text-xl text-primary md:flex md:gap-6 lg:gap-10 md:w-fit">
        <li className="py-3">
          <a className="cursor-pointer">Home</a>
        </li>
        <li className="py-3">
          <a className="cursor-pointer">Categories</a>
        </li>
        <li className="py-3">
          <a className="cursor-pointer">Shop All</a>
        </li>
      </ul>

      <div className="justify-end hidden w-min 2xs:flex text-primary">
        <div className="hidden ml-4 xs:block ">
          <span className="text-3xl material-symbols-outlined ">
            search
          </span>
        </div>
        <div className="hidden ml-4 md:block">
          <span className="text-3xl material-symbols-outlined ">
            person
          </span>
        </div>
        <div className="ml-4">
          <span className="text-3xl material-symbols-outlined ">
            shopping_cart
          </span>
        </div>
      </div>
    </header>
  );
}

const sideBarMenu = () => {
  return (
    <div className="fixed bottom-0 left-0 flex flex-col justify-between h-full pt-12 bg-white top-20 right-6 xs:right-20 sm:right-1/4 md:hidden">
      <ul className="px-8 mb-auto">
        <li className="py-3 xs:hidden">
          <a className="text-2xl cursor-pointer text-primary">Search</a>
        </li>
        <li className="py-3 2xs:hidden">
          <a className="text-2xl cursor-pointer text-primary">Cart</a>
        </li>

        <li className="py-3">
          <a className="text-2xl cursor-pointer text-primary">Home</a>
        </li>
        <li className="py-3">
          <a className="text-2xl cursor-pointer text-primary">Categories</a>
        </li>
        <li className="py-3">
          <a className="text-2xl cursor-pointer text-primary">Shop All</a>
        </li>
      </ul>

      <div className="h-64 p-8 bg-secondary">
        <div className="flex items-center mb-8 cursor-pointer">
          <span className="mr-3 text-3xl material-symbols-outlined text-primary">
            person
          </span>
          <span className="font-bold text-primary">Log in</span>
        </div>
        <SocialMediaLinks />
      </div>
    </div>
  );
};
