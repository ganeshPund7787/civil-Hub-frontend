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

const AddWorkExperiance = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <IoAdd
            className="border cursor-pointer p-2 border-cyan-500 rounded-full"
            size={40}
          />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle className="text-2xl">
          Add Your Past Experiance{" "}
        </DialogTitle>
        <div className="grid grid-rows-2 md:gap-4 py-3">
          <div className="flex gap-1 md:gap-5 md:h-0 flex-col md:flex-row">
            <div className="">
              <Label htmlFor="name" className="text-right font-semibold">
                jobTitle :
              </Label>
              <Input
                id="name"
                placeholder="Your post name"
                className="col-span-3 my-2 border-2 focus:border-white rounded border-slate-500"
              />
            </div>

            <div className="">
              <Label htmlFor="name" className="text-right font-semibold">
                company :
              </Label>
              <Input
                id="name"
                placeholder="company name"
                className="col-span-3 my-2 border-2 focus:border-white rounded border-slate-500"
              />
            </div>
          </div>

          <div className="flex gap-1 md:gap-5 flex-col md:flex-row">
            <div className="">
              <Label htmlFor="name" className="text-right font-semibold">
                startDate :
              </Label>
              <Input
                id="name"
                type="date"
                className="col-span-3 my-2 border-2 focus:border-white rounded border-slate-500"
              />
            </div>

            <div className="">
              <Label htmlFor="name" className="text-right font-semibold">
                endDate :
              </Label>
              <Input
                id="name"
                type="date"
                className="col-span-3 my-2 border-2 focus:border-white rounded border-slate-500"
              />
            </div>
          </div>

          <div className="flex gap-1 md:gap-5 flex-col md:flex-row">
            <div className="">
              <Label htmlFor="name" className="text-right font-semibold">
                location :
              </Label>
              <Input
                id="name"
                placeholder="Enter company location"
                className="col-span-3 my-2 border-2 focus:border-white rounded border-slate-500"
              />
            </div>
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

export default AddWorkExperiance;
