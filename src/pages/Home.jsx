import Carousel from "../components/Carousel";

export default function Home() {
  return(
    <main className="relative">
      <div>
        <Carousel />
        <div className="absolute w-full text-center bottom-8 lg:text-start lg:w-2/5 lg:top-1/3 lg:right-1/2">
          <div className="hidden px-20 space-y-2 lg:px-0 sm:block">
            <p className="text-4xl font-bold lg:text-5xl text-primary">Socially and environmentally progressive outdoor outfit that helps you #BeOutside</p>
            <p className="text-gray-600 ">Take up to 40% off select styles</p>
          </div>
          <button className="px-4 py-2 mt-4 text-white rounded bg-primary">Shop the Sale</button>
        </div>
      </div>
    </main>
  );
}