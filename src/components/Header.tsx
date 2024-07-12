import React from "react";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { FaSearch } from "react-icons/fa";
import { useAppSelectore } from "@/App/store";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import MobileNav from "./MobNav";

const Header: React.FC = () => {
  const { CurrentCivilUser } = useAppSelectore((state) => state.user);
  console.log(CurrentCivilUser);
  return (
    <>
      <nav className="flex justify-between p-4">
        <div className="flex gap-5 items-center">
          <h1 className="text-sm text-cyan-400 md:text-2xl font-semibold">
            civilHub
          </h1>
          <div className="flex mx-8 gap-5">
            <Link className="active:text-cyan-500" to={"/"}>
              Find Work
            </Link>
            <Link to={"/"}>Saved Jobs</Link>
            <Link to={"/"}>Messages</Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center rounded-[1rem] border border-slate-600 px-2 w-72 ">
            <Input
              type="text"
              placeholder="Search jobs"
              className="border-none"
            />
            <FaSearch className="text-white font-normal" />
          </div>
          <Avatar>
            <Link to={"/user-profile"}>
              <AvatarImage src={CurrentCivilUser.photoUrl} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Link>
          </Avatar>
        </div>
        <div className="">
          <MobileNav />
        </div>
      </nav>
      <hr className="text-slate-600" />
    </>
  );
};

export default Header;
