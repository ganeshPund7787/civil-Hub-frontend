import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { IoAdd } from "react-icons/io5";
import { Input } from "../ui/input";

const AddSkills = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <IoAdd
            className="border p-1 border-cyan-500 hover:bg-opacity-30 rounded-full"
            size={40}
          />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Add Skill</DialogTitle>
        <div className="grid gap-4 py-4">
          <div className="">
            <Label htmlFor="name" className="text-right">
              Write your skill name:
            </Label>
            <Input id="name" placeholder="Enter skill name" className="my-4" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button
              className="bg-cyan-500 rounded"
              type="submit"
              variant="ghost"
            >
              Add
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddSkills;
