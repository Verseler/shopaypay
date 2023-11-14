import SocialMediaLinks from "./SocialMediaLinks";

export default function Footer() {
  return (
    <footer className="pt-10 pb-16 text-white border-b-2 border-white bg-primary">
      <div className="grid gap-10 md:grid-cols-3 primary-container">
        <div>
          <div>
            <span className="font-mono text-3xl font-bold">SHOPAYPAY</span>
          </div>
          <p className="my-10 text-xl font-semibold">
            Socially and environmentally progressive outdoor footwear
          </p>
          <SocialMediaLinks />
        </div>

        <div>
          <a className="text-xl font-bold" src="#">
            Help
          </a>
          <ul className="mt-4">
            <li className="py-2 opacity-70">
              <a>Size guide</a>
            </li>
            <li className="py-2 opacity-70">
              <a>Shipping Policy</a>
            </li>
            <li className="py-2 opacity-70">
              <a>Refund Policy</a>
            </li>
            <li className="py-2 opacity-70">
              <a>Wear and Care FAQ</a>
            </li>
          </ul>
        </div>

        <div>
          <a className="text-xl font-bold" src="#">
            About us
          </a>
          <ul className="mt-4">
            <li className="py-2 opacity-70">
              <a>Values</a>
            </li>
            <li className="py-2 opacity-70">
              <a>Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
