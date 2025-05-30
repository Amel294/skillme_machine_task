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
  { name: "AR/VR Design", icon: CameraIcon },
  { name: "3D Modelings", icon: CubeIcon },
];

export default function Services() {
  return (
    <section
      className="relative text-white py-16 md:px-20 bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

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

        <div className="flex flex-wrap justify-center gap-8 px-4">
          {services.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="w-full sm:w-[45%] md:w-[22%] space-y-3 text-center"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto">
                <Icon className="w-6 h-6 text-orange-500" />
              </div>
              <p className="text-white font-medium">{name}</p>
              <div className="text-orange-500 text-lg">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
