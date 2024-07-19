import { CivilUserType } from "@/types";
import { Button } from "../ui/button";
import { IoAdd } from "react-icons/io5";
import AddProject from "./AddProject";

type Props = {
  user: CivilUserType | any;
};

const ProjectSection = ({ user }: Props) => {
  return (
    <div className="border-2 border-slate-500 rounded md:rounded-[1rem]">
      <div className="flex items-center justify-between p-5">
        <h1 className="text-2xl font-semibold">My Projects </h1>
        <Button>
          <IoAdd
            className="border p-1 border-cyan-500 hover:bg-opacity-30 rounded-full"
            size={40}
          />
        </Button>
      </div>
      <hr className="text-slate-500" />
      <div className="">
        <AddProject />
      </div>
      <hr className="text-slate-500" />
      <div className="">
        {user?.projects?.length > 0 &&
          user?.projects?.map((project: any) => <span>{project}</span>)}
      </div>
    </div>
  );
};

export default ProjectSection;
