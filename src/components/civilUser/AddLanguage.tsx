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
} from "@/components/ui/form";
import useUpdateUser from "@/Hooks/UserHook/useUpdateUser";

const formSchema = z.object({
  language: z.string().trim().min(2, "required"),
});

export type UserLanguageFormData = z.infer<typeof formSchema>;

const AddLanguage = () => {
  const { addLanAndEducation } = useUpdateUser();
  const form = useForm<UserLanguageFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      language: "",
    },
  });

  const onSubmit = (values: UserLanguageFormData) => {
    console.log(values);
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
        <DialogTitle>Add New Language</DialogTitle>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
              <FormField
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Language</FormLabel>
                    <FormMessage className="text-red-600" />
                    <FormControl>
                      <Input
                        placeholder="Enter the language"
                        className="rounded-[5px]"
                        autoFocus
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-cyan-400 mt-7 disabled:cursor-not-allowed shadow-lg hover:text-white text-black w-full rounded-[1em] border"
              >
                Add
              </Button>
            </form>
          </Form>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button
              className="bg-red-500 rounded"
              type="submit"
              variant="ghost"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddLanguage;
