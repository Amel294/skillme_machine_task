import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  PuzzlePieceIcon,
  CubeTransparentIcon,
  CameraIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";
import serviceBg from "../../assets/service/service.png";

const services = [
  { name: "Mobile Game Development", icon: DevicePhoneMobileIcon },
  { name: "PC Game Development", icon: ComputerDesktopIcon },
  { name: "PS4 Game Development", icon: PuzzlePieceIcon },
  { name: "AR/VR Solutions", icon: CubeTransparentIcon },
  { name: "AR/VR design", icon: CameraIcon },
  { name: "3D Modelings", icon: CubeIcon },
];

export default function Services() {
  return (
    <section
      className="relative text-white py-16 px-5 md:px-20 bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Centered content */}
      <div className="relative z-10 max-w-screen-xl w-full">
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl font-bold mb-4">
            Lorem Ipsum is simply dummy text of the printing <br /> and
            typesetting industry.
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center px-4 w-full">
          {services.slice(0, 4).map(({ name, icon: Icon }) => (
            <div key={name} className="space-y-3">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto">
                <Icon className="w-6 h-6 text-orange-500" />
              </div>
              <p className="text-white font-medium">{name}</p>
              <div className="text-orange-500 text-lg">→</div>
            </div>
          ))}
          <div className="md:flex gap-8 md:w-full justify-center md:col-span-4">
            {services.slice(4).map(({ name, icon: Icon }) => (
              <div key={name} className="space-y-3 mb-10">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto">
                  <Icon className="w-6 h-6 text-orange-500 " />
                </div>
                <p className="text-white font-medium">{name}</p>
                <div className="text-orange-500 text-lg">→</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
