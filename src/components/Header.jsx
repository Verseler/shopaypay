import { useState } from "react";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Header() {
  let [showSideBar, setShowSideBar] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-10 flex items-center justify-between h-20 px-4 bg-white lg:px-8 xl:px-12">
      {!showSideBar || <div className="fixed inset-x-0 bottom-0 top-20 bg-primary opacity-40" />}
      <button
        onClick={() => setShowSideBar(!showSideBar)}
        className="md:hidden"
      >
        <span className="text-3xl material-symbols-outlined text-primary">
          {showSideBar ? "close" : "menu"}
        </span>
      </button>

      <div className="ml-4 font-mono text-3xl font-bold">
        <span>SHOPAYPAY</span>
      </div>

      <div
        className={`${
          showSideBar ? "flex" : "hidden"
        } fixed top-20 left-0 right-24 bottom-0 bg-white 
          text-2xl text-primary xs:right-1/3  flex-col justify-between
          md:bg-transparent md:static md:flex md:text-lg md:p-0`}
      >
        <ul className="flex flex-col gap-6 p-10 md:flex-row">
          <li className="cursor-pointer">
            <a>Home</a>
          </li>
          <li className="cursor-pointer">
            <a>Categories</a>
          </li>
          <li className="cursor-pointer">
            <a>Shop All</a>
          </li>
        </ul>
        <div className="p-8 h-44 bg-quaternary md:hidden">
          <div className="flex items-center mb-6 cursor-pointer text-primary">
            <span className="mr-2 text-3xl material-symbols-outlined">
              person
            </span>
            <span className="text-base font-bold">Log in</span>
          </div>
          <SocialMediaLinks />
        </div>
      </div>

      <div className="flex w-min text-primary">
        <div className="ml-4">
          <span className="text-2xl material-symbols-outlined">search</span>
        </div>
        <div className="hidden ml-4 md:block">
          <span className="text-2xl material-symbols-outlined ">person</span>
        </div>
        <div className="ml-4">
          <span className="text-2xl material-symbols-outlined ">
            shopping_cart
          </span>
        </div>
      </div>
    </header>
  );
}
