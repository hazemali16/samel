import Image from "next/image";
import hero_image from "../images/hero.jpg";

const Hero = () => {
  return (
    <div className="relative h-screen flex justify-center items-center hero" id="hero">
      <div className="absolute w-full h-full top-0 left-0">
        <Image className="w-full h-full object-cover" src={hero_image} alt="hero_image" />
      </div>
      <div className="z-20 w-1/2 max-lg:w-full max-lg:px-5 overflow-hidden">
        <h1 className="text-center text-6xl mb-7 text-[var(--main-color)] font-bold max-lg:text-4xl hero-title">
        أهلا وسهلا فيك بمتجرنا
        </h1>
        <p className="text-2xl text-center max-lg:text-xl max-sm:text-base hero-p text-white">
        الخيار المفضل لكل عشاق الصيانة والابتكار! نعرّفك اليوم على الباكج الأكثر طلبًا: مفك صامل ولاصق النانو، يخلي حياتك اليومية أسهل وأمتع.
        </p>
      </div>
    </div>
  );
};

export default Hero;
