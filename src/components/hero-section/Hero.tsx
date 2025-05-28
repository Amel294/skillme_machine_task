import { useEffect, useState } from "react";
import hero from "../../assets/hero/hero.png";
import Navbar from "../navbar/Navbar";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-black text-white pb-20 relative overflow-hidden">
      <Navbar />

      <div
        className={`absolute top-0 left-64/100 md:hidden transform -translate-x-1/2 w-full lg:flex justify-center hidden ${
          scrolled ? "z-[999]" : "z-[1000]"
        }`}
      >
        <img
          src={hero}
          alt="Game Controller"
          className="w-[500px] sm:w-[600px] md:w-[500px]"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] px-5 md:px-40 pt-30 md:pt-60 flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h4 className="text-orange-500 text-lg font-semibold mb-4">
            3D game Dev
          </h4>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Work that we<br /> produce for our<br /> clients
          </h1>
          <p className="text-gray-400 mb-8 max-w-md mx-auto lg:mx-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
            Get more details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
