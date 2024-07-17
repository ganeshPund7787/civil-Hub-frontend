import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { IoAdd } from "react-icons/io5";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { nanoid } from "@reduxjs/toolkit";
import useUpdateUser from "@/Hooks/UserHook/useUpdateUser";

const formSchema = z.object({
  id: z.string(),
  degree: z.string().trim().min(2, "required"),
  fieldOfStudy: z.string().trim().min(2, "required"),
  university: z.string().trim().min(2, "required"),
  collegeName: z.string().trim().min(2, "required"),
});

export type UserEducationFormData = z.infer<typeof formSchema>;

const AddEducation = () => {
  const { addLanAndEducation } = useUpdateUser();
  const form = useForm<UserEducationFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: nanoid().toString(),
      degree: "",
      fieldOfStudy: "",
      university: "",
      collegeName: "",
    },
  });

  const onSubmit = (values: UserEducationFormData) => {
    addLanAndEducation(values);
    form.reset();
  };

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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="grid grid-rows-2 md:gap-4 py-3">
              <div className="flex gap-1 md:gap-5 md:h-0 flex-col md:flex-row">
                <FormField
                  name="degree"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Degree Name: </FormLabel>
                      <FormMessage className="text-red-600" />
                      <FormControl>
                        <Input
                          placeholder="Enter a degree name"
                          className="rounded-[5px]"
                          autoFocus
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  name="fieldOfStudy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>fieldOfStudy</FormLabel>
                      <FormMessage className="text-red-600" />
                      <FormControl>
                        <Input
                          placeholder="Enter type of field your study"
                          className="rounded-[5px]"
                          autoFocus
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex gap-1 md:gap-5 flex-col md:flex-row">
                <FormField
                  name="university"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>university</FormLabel>
                      <FormMessage className="text-red-600" />
                      <FormControl>
                        <Input
                          placeholder="Enter name of the univercity"
                          className="rounded-[5px]"
                          autoFocus
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  name="collegeName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>School or College Name</FormLabel>
                      <FormMessage className="text-red-600" />
                      <FormControl>
                        <Input
                          placeholder="Enter school or college name"
                          className="rounded-[5px]"
                          autoFocus
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
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
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEducation;
