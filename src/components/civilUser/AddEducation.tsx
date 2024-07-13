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

const AddEducation = () => {
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
          Add Your Education Detail's{" "}
        </DialogTitle>
        <div className="grid grid-rows-2 gap-4 py-4 ">
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="">
              <Label htmlFor="name" className="text-right font-semibold">
                Degree :
              </Label>
              <Input
                id="name"
                placeholder="Degree Name"
                className="col-span-3 my-2 border-2 focus:border-white rounded border-slate-500"
              />
            </div>

            <div className="">
              <Label htmlFor="name" className="text-right font-semibold">
                Field Of Study :
              </Label>
              <Input
                id="name"
                defaultValue={"Civil Engineering"}
                placeholder="type of education"
                className="col-span-3 my-2 border-2 focus:border-white rounded border-slate-500"
              />
            </div>
          </div>

          <div className="flex gap-5 flex-col md:flex-row">
            <div className="">
              <Label htmlFor="name" className="text-right font-semibold">
                University :
              </Label>
              <Input
                id="name"
                placeholder="Enter Your univercity"
                className="col-span-3 my-2 border-2 focus:border-white rounded border-slate-500"
              />
            </div>

            <div className="">
              <Label htmlFor="name" className="text-right font-semibold">
                School Name :
              </Label>
              <Input
                id="name"
                placeholder="Enter school name"
                className="col-span-3 my-2 border-2 focus:border-white rounded border-slate-500"
              />
            </div>
          </div>

          <div className="flex gap-5 flex-col md:flex-row">
            <div className="">
              <Label htmlFor="name" className="text-right font-semibold">
                Duration of the course :
              </Label>
              <Input
                id="name"
                defaultValue={"3 Years"}
                placeholder="Enter duration"
                className="col-span-3 my-2 border-2 focus:border-white rounded border-slate-500"
              />
            </div>

            <div className="">
              <Label htmlFor="name" className="text-right font-semibold">
                Location of the School :
              </Label>
              <Input
                id="name"
                defaultValue={"india"}
                placeholder="Enter location"
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

export default AddEducation;
