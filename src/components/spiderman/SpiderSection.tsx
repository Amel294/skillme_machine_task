import spider from "../../assets/spider/spider.png";

const SpiderSection = () => {
  return (
    <section className="text-white py-16 px-5 md:px-20">
      {/* Text Section */}
      <div className="space-y-4 mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">Lorem Ipsum</h1>
        <p className="text-lg text-gray-300 md:max-w-1/3 sm:w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>

      {/* Image Section with Orange Dot Overlay */}
      <div className="relative flex justify-center">
        {/* Orange Dots Grid */}
        <div className="absolute -top-18 right-38 w-28 h-14 z-10">
          <div className="grid grid-cols-10 gap-6">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-30"
              ></div>
            ))}
          </div>
        </div>

        {/* Image */}
        <img
          src={spider}
          alt="Hero Image"
          className="rounded-xl shadow-lg w-full max-h-[530px] object-cover z-11"
        />
      </div>
    </section>
  );
};

export default SpiderSection;
