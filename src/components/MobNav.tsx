import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center gap-5">
              <FaSearch />
              <h1 className="md:mx-0 mx-36 text-2xl">CivilHub</h1>
            </div>
          </SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col gap-5 mt-10">
          <li className="bg-red-600 py-1 hover:bg-slate-400 hover:text-black">
            <Link to={""}>My Profile</Link>
          </li>
          <li className="bg-red-600 py-1 hover:bg-slate-400 hover:text-black">
            <Link to={""}>My Jobs</Link>
          </li>
          <li className="bg-red-600 py-1 hover:bg-slate-400 hover:text-black">
            <Link to={""}>Messages</Link>
          </li>
          <li>
            <Link to={""}></Link>
          </li>
        </ul>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
