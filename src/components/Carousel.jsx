import CarouselSampleImg from "../sampleServerData/CarouselSampleImg";

export default function Carousel() {
  

  return (
    <div className="w-full h-screen carousel">
      {CarouselSampleImg.map((sample) => (
        <div key={sample.id} id={`slide${sample.id}`} className="relative w-full carousel-item">
          <picture className="w-full">
          <source media="(max-width: 1024px)" srcSet={`../images/carousel/mobile-${sample.img}.jpg`} />
          <img
            src={`../images/carousel/${sample.img}.png`}
            className="object-cover w-full h-full lg:object-right"
          />
          </picture>
          {/* 
            * first anchor is for prev and the second is for next
            * fixed number of img is 4
            * if the current img number or id is 1 then its prev is 4, if 2 then its prev is 1
            *
            * if the current img id is 1 then its next is 2
            * to know the next img id we just add 1 and if the next img exceed with 4 then it go back
          */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide${sample.id === 1 ? sample.id + 3 : sample.id - 1}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${sample.id === 4 ? 1 : sample.id + 1}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
