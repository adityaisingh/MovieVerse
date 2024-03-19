import Link from "next/link";
import MenuItem from "./Menuitem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Darkmode from "./Darkmode";
import SearchBox from "./searchBar";

const Header = () => {
  return (
    <div className="flex justify-between m-2 font-bold text-2xl">
      <div className="flex gap-5 px-2 ">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <SearchBox />
      <div className="flex gap-2 items-center px-2 ">
        <Darkmode />
        <Link href={"/"}>
          <span className="bg-amber-400 text-xl font-bold py-1 px-2 rounded-lg">
            MovieVerse
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
