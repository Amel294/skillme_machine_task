import p1 from "../../assets/projects/p1.png";
import p2 from "../../assets/projects/p2.png";
import p3 from "../../assets/projects/p3.png";
import p4 from "../../assets/projects/p4.png";
import p5 from "../../assets/projects/p5.png";
import p6 from "../../assets/projects/p6.png";

const images = [p1, p2, p3, p4, p5, p6];
export default function RecentProjects() {
  return (
    <section className=" text-white py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Recent Projects
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-24 gap-6 mb-10">
        {images.slice(0, 3).map((src, index) => (
          <div key={index} className="rounded-xl overflow-hidden col-span-8">
            <img
              src={src}
              alt={`Project ${index + 1}`}
              className="w-full h-56 md:h-96 object-cover"
            />
          </div>
        ))}
        {images.slice(3).map((src, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden col-span-8 ${
              index === 0 ? "md:col-span-6" : "md:col-span-9"
            }`}
          >
            <img
              src={src}
              alt={`Project ${index + 4}`}
              className="w-full h-56 md:h-96 object-cover"
            />
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition">
          SEE ALL
        </button>
      </div>
    </section>
  );
}
