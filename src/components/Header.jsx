import { useState } from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import DarkScreen from "./DarkScreen";
import { Link } from "react-router-dom";

export default function Header() {
  let [showSideBar, setShowSideBar] = useState(false);

  return (
    <header className="fixed inset-x-0 flex items-center top-0 h-24 md:h-max z-10 bg-white shadow-[0px_0px_0px_1px_#EDF2F7]">
      <div className="flex items-center justify-between w-full h-24 px-4 md:px-0 md--primary-container">
        {!showSideBar || <DarkScreen />}
        <button
          onClick={() => setShowSideBar(!showSideBar)}
          className="md:hidden"
        >
          <span className="text-3xl material-symbols-outlined text-primary">
            {showSideBar ? "close" : "menu"}
          </span>
        </button>
        <div className="font-mono text-3xl font-bold text-primary">
          <span>SHOPAYPAY</span>
        </div>
        <div
          className={`${
            showSideBar ? "flex" : "hidden"
          } fixed top-24 left-0  bottom-0 bg-white  h-full 3xs:right-1/4 xs:right-1/2
            text-2xl md:text-lg text-primary flex-col justify-between
            md:bg-transparent md:static md:flex md:p-0`}
        >
          <ul className="flex flex-col gap-6 p-10 md:flex-row">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">Categories</Link>
            </li>
            <li>
              <Link to="Store">Shop All</Link>
            </li>
          </ul>
          <div className="p-8 h-60 bg-quaternary md:hidden">
            <div className="flex items-center mb-6 text-primary">
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
      </div>
    </header>
  );
}
