import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { SlOptions } from "react-icons/sl";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { VscSave } from "react-icons/vsc";

const PostOptions = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="border-none">
          <Button type="button" className="hover:cursor-pointer">
            <SlOptions size={25} />
          </Button>
        </SelectTrigger>
        <SelectContent className="border border-slate-400">
          <SelectItem className="text-cyan-400" value="update">
            <Button variant={"ghost"} type="button" className="flex gap-3">
              <MdEditSquare /> <span> Update</span>
            </Button>
          </SelectItem>
          <SelectItem className="text-cyan-400" value="delete">
            <Button variant={"ghost"} type="button" className="flex gap-3">
              <MdDelete />
              <span>Delete</span>
            </Button>
          </SelectItem>
          <SelectItem className="text-cyan-400" value="save">
            <Button variant={"ghost"} type="button" className="flex gap-3">
              <VscSave />
              <span>Save</span>
            </Button>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PostOptions;
