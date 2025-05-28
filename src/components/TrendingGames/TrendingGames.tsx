import { FireIcon } from "@heroicons/react/24/solid";
import t1 from "../../assets/trending/t1.png";
import t2 from "../../assets/trending/t2.png";
import t3 from "../../assets/trending/t3.png";
import t4 from "../../assets/trending/t4.png";

const games = [
  {
    id: 1,
    image: t1,
    followers: 40,
  },
  {
    id: 2,
    image: t2,
    followers: 40,
  },
  {
    id: 3,
    image: t3,
    followers: 40,
  },
  {
    id: 4,
    image: t4,
    followers: 40,
  },
];

export default function TrendingGames() {
  return (
    <section className=" text-white py-10 px-5 md:px-20">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <h2 className="text-xl font-semibold">Currently Trending Games</h2>
        <button className="bg-gray-800 hover:bg-gray-700 text-sm px-4 py-2 rounded">
          SEE ALL
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-2">
        {games.map((game) => (
          <div key={game.id} className="text-center space-y-2">
            <img
              src={game.image}
              alt="Game"
              className="rounded-xl w-full aspect-square object-cover"
            />

            <div className="mt-2 flex items-center justify-center gap-2 text-sm mb-2">
              <FireIcon className="w-4 h-4 text-white" />
              <span>{game.followers} Followers</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
