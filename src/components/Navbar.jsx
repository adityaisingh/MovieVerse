import Navbaritem from "./Navbaritem";

export default function Navbar() {
  return (
    <div className="flex font-bold text-2xl justify-center items-center gap-8 mt-5 bg-amber-400 p-4 dark:bg-black">
      <Navbaritem title="Trending" param="fetchTrending" />
      <Navbaritem title="Top Movie" param="fetchTopMovie" />
    </div>
  );
}
