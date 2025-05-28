import hero from "../../assets/hero/hero.png";
import Navbar from "../navbar/Navbar";

const Hero = () => {
  return (
    <section className="bg-black text-white pb-20 relative overflow-hidden">
      <Navbar />

      {/* Controller positioned inside Hero and scrolls with content */}
      <div className="absolute top-0 left-64/100 transform -translate-x-1/2 z-1001 w-full flex justify-center">
        <img
          src={hero}
          alt="Game Controller"
          className="w-[500px] sm:w-[600px] md:w-[500px]"
        />
      </div>

      {/* Main content, layered above controller */}
      <div className="relative z-10 max-w-[1400px]  px-40 pt-60 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left text content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h4 className="text-orange-500 text-lg font-semibold mb-4">
            3D game Dev
          </h4>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Work that we<br/> produce for our<br/> clients
          </h1>
          <p className="text-gray-400 mb-8 max-w-md mx-auto lg:mx-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
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
